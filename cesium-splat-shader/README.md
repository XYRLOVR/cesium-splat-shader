# Cesium 照片地理标记系统

基于CesiumJS的3D地球可视化与照片地理标记平台，支持照片GPS定位、3D模型展示、测量工具等功能。

## 🌟 主要功能

- **3D地球可视化** - 基于CesiumJS的高性能3D地球渲染
- **照片地理标记** - 上传带GPS信息的照片并在地图上精确定位
- **测量工具** - 支持距离、面积等地理测量功能
- **3D模型漫游** - 自动漫游和场景导航
- **天地图集成** - 使用天地图作为底图数据源
- **Splat Shader渲染** - 支持高质量的3D点云渲染

## 🚀 在线演示

访问 GitHub Pages 部署的在线版本：
[https://yourusername.github.io/cesium-splat-shader/](https://yourusername.github.io/cesium-splat-shader/)

### GitHub Pages 部署步骤

1. **Fork 或克隆此仓库**到您的GitHub账户
2. **推送代码到main分支**
3. **启用GitHub Pages**：
   - 进入仓库设置 (Settings)
   - 滚动到 "Pages" 部分
   - 在 "Source" 下选择 "GitHub Actions"
4. **自动部署**：GitHub Actions会自动构建和部署
5. **访问您的网站**：`https://yourusername.github.io/repository-name/`

### 文件结构说明
- `index.html` - 项目主页
- `docs/index.html` - GitHub Pages专用主页
- `Apps/Sandcastle/standalone.html` - 独立运行版本（适合GitHub Pages）
- `.github/workflows/deploy.yml` - 自动部署配置
# Cesium 照片地理标记系统

基于CesiumJS的3D地球可视化与照片地理标记平台，支持照片GPS定位、3D模型展示、测量工具等功能。

## 🌟 主要功能

- **3D地球可视化** - 基于CesiumJS的高性能3D地球渲染
- **照片地理标记** - 上传带GPS信息的照片并在地图上精确定位
- **测量工具** - 支持距离、面积等地理测量功能
- **3D模型漫游** - 自动漫游和场景导航
- **天地图集成** - 使用天地图作为底图数据源
- **Splat Shader渲染** - 支持高质量的3D点云渲染


## 📦 本地运行

### 环境要求
- Node.js >= 18.18.0
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```

访问 http://localhost:8081 查看应用

### 构建项目
```bash
npm run build
```

## 🛠️ 技术栈

- **CesiumJS 1.125.0** - 3D地球可视化引擎
- **@cesium/engine** - Cesium核心引擎
- **@cesium/widgets** - Cesium UI组件
- **@cesium/wasm-splats** - WebAssembly点云渲染
- **Express.js** - 开发服务器
- **EXIF.js** - 照片元数据解析
- **天地图API** - 中国地图数据服务

## 📁 项目结构

```
cesium-splat-shader/
├── Apps/                    # 应用程序
│   ├── Sandcastle/         # 照片地理标记系统
│   └── HelloWorld.html     # 简单示例
├── Build/                  # 构建输出
├── Source/                 # 源代码
├── packages/               # 工作空间包
│   ├── engine/            # Cesium引擎
│   └── widgets/           # UI组件
├── server.js              # 开发服务器
└── package.json           # 项目配置
```

## 🌍 部署到GitHub Pages

1. Fork或克隆此仓库
2. 在GitHub仓库设置中启用GitHub Pages
3. 推送代码到main分支，GitHub Actions会自动构建和部署
4. 访问 `https://yourusername.github.io/repository-name/`

## 📝 使用说明

### 照片上传
1. 确保照片包含GPS地理位置信息
2. 支持JPG/PNG格式，最大5MB
3. 照片将在12小时后自动删除

### 功能操作
- **测量距离** - 点击测量按钮，在地图上点击两点测量距离
- **模型漫游** - 自动围绕3D模型进行漫游浏览
- **全屏模式** - 支持全屏查看3D场景

## 🔧 配置说明

### Cesium Ion Token
需要在代码中配置您的Cesium Ion访问令牌：
```javascript
Cesium.Ion.defaultAccessToken = 'your-cesium-ion-token';
```

### 天地图API Key
需要配置天地图API密钥：
```javascript
// 在相关代码中替换tk参数
tk=your-tianditu-api-key
```

## 📄 许可证

Apache-2.0 License

## 🤝 贡献

欢迎提交Issue和Pull Request来改进项目！

## 📞 联系方式

如有问题或建议，请通过GitHub Issues联系。