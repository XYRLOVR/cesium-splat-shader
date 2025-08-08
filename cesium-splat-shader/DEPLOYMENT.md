# GitHub Pages 部署指南

## 📋 部署前检查清单

### 1. 代码准备
- [x] 项目代码完整
- [x] GitHub Actions配置文件已创建 (`.github/workflows/deploy.yml`)
- [x] 独立版本页面已创建 (`Apps/Sandcastle/standalone.html`)
- [x] GitHub Pages专用主页已创建 (`docs/index.html`)

### 2. GitHub仓库设置
- [ ] 代码已推送到GitHub仓库的main分支
- [ ] 在仓库设置中启用GitHub Pages
- [ ] 选择"GitHub Actions"作为部署源

### 3. 配置验证
- [x] Cesium Ion访问令牌已配置
- [x] 天地图API密钥已配置
- [x] CDN资源链接正确

## 🚀 部署步骤

### 步骤1: 推送代码到GitHub
```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### 步骤2: 启用GitHub Pages
1. 进入GitHub仓库页面
2. 点击 "Settings" 选项卡
3. 滚动到 "Pages" 部分
4. 在 "Source" 下拉菜单中选择 "GitHub Actions"
5. 保存设置

### 步骤3: 等待自动部署
- GitHub Actions会自动触发构建和部署流程
- 可以在 "Actions" 选项卡中查看部署进度
- 部署完成后，网站将在 `https://yourusername.github.io/repository-name/` 可用

## 📁 文件说明

### 主要文件
- `index.html` - 本地开发主页
- `docs/index.html` - GitHub Pages专用主页
- `Apps/Sandcastle/standalone.html` - 独立运行版本（使用CDN资源）
- `.github/workflows/deploy.yml` - GitHub Actions自动部署配置

### 功能差异
| 功能 | 本地版本 | GitHub Pages版本 |
|------|----------|------------------|
| 3D地球渲染 | ✅ | ✅ |
| 照片上传 | ✅ | ✅ |
| GPS定位 | ✅ | ✅ |
| 距离测量 | ✅ | ✅ (简化版) |
| 模型漫游 | ✅ | ✅ |
| 3D模型加载 | ✅ | ❌ (需要服务器) |
| 天地图底图 | ✅ | ✅ |

## 🔧 故障排除

### 常见问题

1. **部署失败**
   - 检查GitHub Actions日志
   - 确认package.json中的依赖项正确
   - 验证Node.js版本兼容性

2. **页面无法访问**
   - 确认GitHub Pages已启用
   - 检查仓库是否为公开状态
   - 等待DNS传播（可能需要几分钟）

3. **3D模型不显示**
   - GitHub Pages版本不支持本地3D模型文件
   - 需要将模型文件上传到CDN或使用Cesium Ion

4. **天地图不显示**
   - 检查API密钥是否有效
   - 确认域名已在天地图控制台中配置

## 🌐 访问地址

部署成功后，您可以通过以下地址访问：
- 主页：`https://yourusername.github.io/repository-name/`
- 照片标记系统：`https://yourusername.github.io/repository-name/Apps/Sandcastle/standalone.html`

## 📞 技术支持

如遇到部署问题，请：
1. 检查GitHub Actions构建日志
2. 查看浏览器开发者工具控制台
3. 参考Cesium官方文档
4. 提交GitHub Issue

---

**注意**：GitHub Pages有一些限制，如文件大小限制和带宽限制。对于生产环境，建议使用专业的云服务提供商。