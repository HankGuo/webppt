# WebPPT · 单仓库多主题 HTML 演示聚合站

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://webppt.aichi.food/)
[![Repo Size](https://img.shields.io/github/repo-size/HankGuo/webppt)](https://github.com/HankGuo/webppt)
[![Topics](https://img.shields.io/github/topics/HankGuo/webppt?color=blue)](https://github.com/HankGuo/webppt)

> 静态站点 + 零构建 + 同域 path 隔离，把多场 HTML 演示装进一个 GitHub Pages。

🌐 **在线访问**：[webppt.aichi.food](https://webppt.aichi.food/)

---

## 这是什么

WebPPT 是一个**单仓库多主题 HTML 演示聚合站**。每个主题放在自己的子目录里，互不干扰；用户访问 `webppt.aichi.food/<主题名>/` 就能看到对应演示。

**核心约束：零构建、纯文件、GitHub Pages 即可托管。**

适合：

- 🎤 线下/线上分享的 HTML 演示聚合
- 📚 个人 / 团队的演示作品集
- 🛠️ 一类轻工具的展示门户型场景

## 在线主题

| 主题 | 链接 | 定位 |
|---|---|---|
| 聚合落地页 | <https://webppt.aichi.food/> | 主题索引 |
| `ai-weapon` | <https://webppt.aichi.food/ai-weapon/> | 四种轻工具：Markdown / HTML / SVG / GitHub Pages（OPC 社群线下分享） |
| `workbuddy-finance` | <https://webppt.aichi.food/workbuddy-finance/> | WorkBuddy 财务 Meetup：19 页 deck，6 个真实任务从原始到交付 |

## 核心特性

- ✅ **零构建** —— 没有打包步骤，文件就是产品
- ✅ **单仓库多主题** —— 每个主题独立子目录，互不干扰
- ✅ **同域 path 隔离** —— `<域名>/<主题名>/` 直达
- ✅ **GitHub Pages 自托管** —— push 即部署，自定义域 `webppt.aichi.food`
- ✅ **无后端无数据库** —— 纯静态，0 运维
- ✅ **移动友好** —— 每套主题独立适配，桌面手机都能看

## 架构

```
webppt/
├── index.html              ← 聚合落地页（主题索引）
├── CNAME                   ← webppt.aichi.food
├── .nojekyll               ← 关闭 Jekyll，原样服务静态文件
├── .gitignore
├── ai-weapon/              ← 主题 1
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   └── assets/
└── workbuddy-finance/      ← 主题 2
    ├── index.html
    └── assets/
```

**关键设计**：
- 主题之间**完全独立**（各自的 `index.html`、自己的 `assets/`、自己的 JS/CSS）
- **子目录内相对引用**（`./styles.css`、`./assets/`）—— 移动主题目录后依旧有效
- 加新主题：建子目录、放文件、在根 `index.html` 加一张卡，**完事**

## 部署

部署到 GitHub Pages（已有现成 site，**此处只说明原理**）：

1. 仓库 `Settings → Pages` 选择 `Deploy from a branch`，源选 `main` / root
2. `webppt.aichi.food` 是自定义域，DNS 配置 CNAME → `HankGuo.github.io`
3. 根 `CNAME` 文件告诉 GitHub Pages 用哪个自定义域
4. 根 `.nojekyll` 关闭 Jekyll（保持文件名原样、不渲染 markdown 等）

> 详细 DNS / 域名解析步骤见：[GitHub Pages 官方文档](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 添加新主题

1. 在根目录新建子目录（用小写、短横线分隔的名字）
2. 把演示文件全部放进子目录（HTML/CSS/JS/assets/，保持相对引用）
3. 在根 `index.html` 加一张主题卡片
4. 提交、push，GitHub Pages 自动重新部署

## 已知约束

- ⚠️ **GitHub Pages 单仓库大小 1GB、带宽 100GB/月**——足够做个人展示
- ⚠️ **每个主题静态资源**（图片/视频/字体）也算在仓库大小里
- ⚠️ **不适用场景**：需要登录态、需要后端 API、需要实时同步

## 不纳入版本管理

见 `.gitignore`：

- PPTX 源文件
- `.workbuddy/`（本地工作目录）
- `*.bak`、本地备份
- `node_modules`（万一以后加构建）

## Roadmap

- [ ] 主题搜索 / 标签筛选
- [ ] 主题预览图自动截图（CI 跑 Puppeteer）
- [ ] RSS / Atom 订阅（新主题推送）
- [ ] 主题间交叉引用（"相关演示"卡片）

---

## 🧩 Hank 的 AI 工具矩阵

WebPPT 是 Hank 个人 / 小团队工作流中**内容沉淀**这一环。完整矩阵：

| 项目 | 角色 | 状态 |
|---|---|---|
| 🎬 [**video-studio**](https://github.com/HankGuo/video-studio) | AI 视频创作工作流 | v0.2.x · 持续迭代 |
| 🧠 [**agent-matrix**](https://github.com/HankGuo/agent-matrix) | Agent 注册与派单 | v0.x · 内测中 |
| 🤝 [**open-meetup**](https://github.com/HankGuo/open-meetup) | 实时协作与分享 | v0.x · 稳定 |
| 🌐 **webppt**（本仓库） | 内容展示与沉淀 | 在线运行 |

> 公众号「**算力白肉**」会同步更新实战案例与产品决策记录。

---

## 📄 License

本项目以 [MIT License](LICENSE) 开源。

**商业使用完全自由**，保留版权与许可声明即可。如需定制开发、长期支持、API 接入、商务合作，请联系：`superai@agent.qq.com`

---

## 🙏 致谢

- 内容贡献：OPC 社群（ai-weapon 主题）、WorkBuddy 财务小分队（workbuddy-finance 主题）
- 托管：[GitHub Pages](https://pages.github.com/)
- 域：aichi.food（个人域）
