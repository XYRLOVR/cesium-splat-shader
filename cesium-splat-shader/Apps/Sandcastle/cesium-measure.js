(function () {
  function CesiumMeasure(options) {
    if (!options || !options.viewer) {
      throw new Error('viewer is required.');
    }
    this.viewer = options.viewer;
    this.scene = this.viewer.scene;
    this.handler = null;
    this.measureEntities = [];
    this.activeShapePoints = [];
    this.activeShape = undefined;
    this.floatingPoint = undefined;
    this.measureType = undefined;
  }

  CesiumMeasure.prototype.initEvents = function (type) {
    this.clear();
    this.measureType = type;
    this.handler = new Cesium.ScreenSpaceEventHandler(this.scene.canvas);
    var _this = this;

    this.handler.setInputAction(function (event) {
      var earthPosition = _this.viewer.camera.pickEllipsoid(event.position, _this.scene.globe.ellipsoid);
      if (earthPosition) {
        if (_this.activeShapePoints.length === 0) {
          _this.floatingPoint = _this.createPoint(earthPosition);
          _this.activeShapePoints.push(earthPosition);
          var dynamicPositions = new Cesium.CallbackProperty(function () {
            return _this.activeShapePoints;
          }, false);
          if (_this.measureType === 'polyline') {
            _this.activeShape = _this.createPolyline(dynamicPositions);
          }
        }
        _this.activeShapePoints.push(earthPosition);
        _this.createPoint(earthPosition);
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    this.handler.setInputAction(function (event) {
      if (_this.floatingPoint) {
        var newPosition = _this.viewer.camera.pickEllipsoid(event.endPosition, _this.scene.globe.ellipsoid);
        if (newPosition) {
          _this.floatingPoint.position.setValue(newPosition);
          _this.activeShapePoints.pop();
          _this.activeShapePoints.push(newPosition);



        }
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    this.handler.setInputAction(function (event) {
      _this.terminateMeasure();
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
  };

  CesiumMeasure.prototype.measurePolyline = function () {
    this.initEvents('polyline');
  };

  CesiumMeasure.prototype.createPoint = function (position) {
    var point = this.viewer.entities.add({
      position: position,
      point: {
        pixelSize: 8,
        color: Cesium.Color.RED,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
      }
    });
    this.measureEntities.push(point);
    return point;
  };

  CesiumMeasure.prototype.createPolyline = function (positions) {
    var polyline = this.viewer.entities.add({
      polyline: {
        positions: positions,
        material: Cesium.Color.RED,
        width: 3,
        clampToGround: true
      }
    });
    this.measureEntities.push(polyline);
    return polyline;
  };

  CesiumMeasure.prototype.createLabel = function (position, text) {
    var label = this.viewer.entities.add({
      position: position,
      label: {
        text: text,
        font: '20px sans-serif',
        fillColor: Cesium.Color.YELLOW,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM
      }
    });
    this.measureEntities.push(label);
    return label;
  };

  CesiumMeasure.prototype.getDistance = function (points) {
    var distance = 0;
    for (var i = 0; i < points.length - 1; i++) {
      distance += Cesium.Cartesian3.distance(points[i], points[i + 1]);
    }
    return distance.toFixed(2);
  };

  CesiumMeasure.prototype.terminateMeasure = function () {
    this.viewer.entities.remove(this.floatingPoint);
    this.floatingPoint = undefined;

    if (this.measureType === 'polyline' && this.activeShapePoints.length > 1) {
      var lastPoint = this.activeShapePoints[this.activeShapePoints.length - 1];
      var totalDistance = this.getDistance(this.activeShapePoints);
      this.createLabel(lastPoint, '总长: ' + totalDistance + ' m');
    }

    // Clear the active shape and points after measurement is terminated
    this.viewer.entities.remove(this.activeShape);
    this.activeShape = undefined;
    this.activeShapePoints = [];
    if (this.handler) {
      this.handler.destroy();
      this.handler = null;
    }

  };

  CesiumMeasure.prototype.clear = function () {
    for (var i = 0; i < this.measureEntities.length; i++) {
      this.viewer.entities.remove(this.measureEntities[i]);
    }
    this.measureEntities = [];
    this.activeShapePoints = [];
    this.activeShape = undefined;
    this.floatingPoint = undefined;
  };

  window.CesiumMeasure = CesiumMeasure;
})();