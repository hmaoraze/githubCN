# GitHubCN

> 🌟 优化的 GitHub 中文化浏览器扩展

GitHub 中文化浏览器扩展，基于 Manifest V3 标准构建，为您提供更友好的 GitHub 使用体验。

## ✨ 新特性 (v1.5.0)

- ✅ **Manifest V3 标准** - 符合最新的浏览器扩展规范
- ⚡ **性能优化** - 使用 Map 数据结构提高翻译效率
- 🎯 **防抖机制** - 减少不必要的 DOM 操作，提升性能
- 🔄 **智能重试** - 自动处理翻译失败的情况
- 🌐 **更全面的域名支持** - 支持 github.com 及其子域名
- 🛡️ **错误处理** - 完善的错误捕获和处理机制

## 🚀 安装 && 使用

### 支持的浏览器

| 浏览器 | 使用方式 |
|---|---|
| **Microsoft Edge** | [Edge 应用商店](https://microsoftedge.microsoft.com/addons/detail/githubcn/onlodfoebaobhmlhgcbddjngjbkdbfaj) |
| **Google Chrome** | [Chrome 网上应用店](https://chrome.google.com/webstore) (即将上线) |
| **手动安装** | 下载源代码，在扩展页开启开发者模式，加载已解压的扩展 |

### 手动安装步骤

1. 下载或克隆本项目
2. 打开浏览器扩展管理页面
3. 开启开发者模式
4. 点击"加载已解压的扩展"，选择项目根目录

## 🛠️ 开发

### 项目结构

```
githubCN/
├── src/
│   ├── js/
│   │   ├── content.js      # 主要翻译逻辑
│   │   └── background.js   # 后台服务
│   ├── img/                # 图标文件
│   └── manifest.json       # 扩展配置
├── app.js                  # 构建脚本
└── package.json
```

### 如何补充翻译词条？

翻译词条存储在 `src/js/content.js` 中的 `translationMap` Map 对象中：

```javascript
const translationMap = new Map([
  [`English Text`, `中文翻译`],
  // 添加更多词条...
]);
```

### 贡献翻译

1. Fork 本项目
2. 在 `translationMap` 中添加新的翻译词条
3. 测试您的更改
4. 提交 Pull Request

## 📋 翻译词条格式

- 使用精确的英文原文作为 key
- 提供准确的中文翻译
- 保持简洁明了的翻译风格
- 对于动态内容（如数字、用户名），保留占位符格式

## 🔧 技术特性

- **Manifest V3 兼容** - 支持最新的扩展标准
- **性能优化** - 防抖和节流机制
- **错误恢复** - 自动重试失败的翻译
- **内存管理** - 高效的 Map 数据结构
- **跨域支持** - 支持 GitHub 所有子域名

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个扩展！

## 📞 联系

- GitHub Issues: [提交问题](https://github.com/JQiue/githubCN/issues)
- 项目主页: [GitHubCN](https://github.com/JQiue/githubCN)
