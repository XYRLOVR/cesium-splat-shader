#!/bin/bash

echo "🚀 开始部署Cesium项目到GitHub Pages..."

# 检查是否在git仓库中
if [ ! -d ".git" ]; then
    echo "❌ 错误: 当前目录不是git仓库"
    echo "请先运行: git init"
    exit 1
fi

# 构建项目
echo "📦 构建项目..."
npm run build

# 创建部署目录
echo "📁 准备部署文件..."
rm -rf dist
mkdir -p dist

# 复制必要文件
cp -r Build dist/
cp -r Apps dist/
cp -r Source dist/
cp deploy-index.html dist/index.html
cp favicon.ico dist/ 2>/dev/null || echo "⚠️  favicon.ico not found, skipping..."

# 复制ThirdParty目录（如果存在）
if [ -d "ThirdParty" ]; then
    cp -r ThirdParty dist/
fi

echo "✅ 部署文件准备完成!"
echo ""
echo "📋 接下来的步骤:"
echo "1. 将项目推送到GitHub仓库"
echo "2. 在GitHub仓库设置中启用GitHub Pages"
echo "3. GitHub Actions会自动构建和部署"
echo ""
echo "🌐 部署完成后访问: https://yourusername.github.io/repository-name/"