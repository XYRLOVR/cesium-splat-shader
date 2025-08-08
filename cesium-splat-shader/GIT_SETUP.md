# Git 设置和GitHub部署指南

## 📋 快速开始

### 1. 基本Git配置（首次使用需要）
```bash
git config --global user.name "您的用户名"
git config --global user.email "您的邮箱"
```

### 2. 连接到GitHub仓库
```bash
# 添加远程仓库（替换为您的GitHub仓库地址）
git remote add origin https://github.com/您的用户名/仓库名.git

# 设置主分支
git branch -M main
```

### 3. 推送到GitHub
```bash
# 推送代码
git push -u origin main
```

## 🌐 GitHub Pages 设置

### 在GitHub网站上操作：
1. 进入您的仓库页面
2. 点击 **Settings** 选项卡
3. 滚动到 **Pages** 部分
4. 在 **Source** 下拉菜单中选择 **GitHub Actions**
5. 保存设置

### 自动部署将会：
- ✅ 检测到代码推送
- ✅ 自动构建项目
- ✅ 部署到GitHub Pages
- ✅ 提供访问链接：`https://您的用户名.github.io/仓库名/`

## 📁 项目结构说明

```
cesium-splat-shader/
├── .github/workflows/deploy.yml    # GitHub Actions配置
├── docs/index.html                 # GitHub Pages主页
├── Apps/Sandcastle/standalone.html # 独立运行版本
├── Apps/plydata/                   # 3D模型数据
├── Build/                          # 构建文件
├── Source/                         # 源代码
└── index.html                      # 本地开发主页
```

## 🔧 常用Git命令

```bash
# 查看状态
git status

# 添加文件
git add .

# 提交更改
git commit -m "提交信息"

# 推送到远程
git push

# 拉取最新代码
git pull
```

## ⚠️ 注意事项

1. **首次推送**：需要在GitHub上创建仓库
2. **大文件**：3D模型文件较大，确保网络稳定
3. **API密钥**：天地图和Cesium Ion密钥已配置
4. **访问权限**：确保仓库为公开状态以使用GitHub Pages

## 🚀 部署完成后

访问您的网站：
- 主页：`https://您的用户名.github.io/仓库名/`
- 照片系统：`https://您的用户名.github.io/仓库名/Apps/Sandcastle/standalone.html`