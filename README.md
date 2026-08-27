# WebPPT

单仓库聚合多场 HTML 演示（静态站点）。由 GitHub Pages 托管，同域 path 隔离，零构建、纯文件。

## 在线访问

- 聚合落地页：<https://webppt.aichi.food/>
- 四种轻工具（OPC 分享）：<https://webppt.aichi.food/ai-weapon/>
- 智能财务（WorkBuddy 专场）：<https://webppt.aichi.food/workbuddy-finance/>

## 主题

- `ai-weapon/` — 四种轻工具：Markdown / HTML / SVG / GitHub Pages，个人创作者触达世界的瑞士军刀（OPC 社群线下分享）。
- `workbuddy-finance/` — 智能财务 · WorkBuddy 财务专场 Meetup：19 页 deck，六个真实财务任务从原始文件到交付成果。

## 架构

- 单仓库 + 多子目录 + 同域 path 隔离。
- 每个主题独立目录，内容与引用互不干扰；子目录内相对引用（`styles.css` / `assets/`）在移动后依旧有效。
- 加新主题：新建一个子目录，把该主题的静态文件放进去，再在根落地页 `index.html` 加一张卡即可。

## 部署

- GitHub Pages，自定义域 `webppt.aichi.food`（见根 `CNAME`）。
- 根 `.nojekyll` 关闭 Jekyll，保证静态文件原样服务。
- DNS：把 `webppt.aichi.food` 的 CNAME 记录指向 `HankGuo.github.io`。

## 不纳入版本管理

PPTX 源文件、`.workbuddy/`、本地备份（`*.bak`）、`node_modules` —— 见 `.gitignore`。

## License

CC BY-NC 4.0。代码可自由 fork 改进，请保留署名。
