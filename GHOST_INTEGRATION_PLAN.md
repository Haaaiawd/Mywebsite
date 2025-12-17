# Ghost 博客接入方案：Headless 模式 vs 原生主题

为了将 Ghost 博客的风格与你现在的 Next.js 项目（"Quiet Luxury" 风格）完美统一，有两种主要路径。

鉴于你已经在 Next.js 中投入了大量设计（SmoothScroll, Custom Typography, Tailwind config），**我强烈建议选择方案 A (Headless)**。

## 方案 A：Headless Ghost (强烈推荐)
**核心逻辑**：Ghost 只负责写文章（后台），Next.js 负责展示文章（前台）。

### 为什么选这个？
1.  **完美统一**：文章页面直接运行在你的 Next.js 项目中，自动继承你的 `globals.css`、Navbar、Custom Cursor 和 Smooth Scroll。你不需要写两套 CSS。
2.  **无缝体验**：用户从 "Work" 点击到 "Blog" 是单页应用 (SPA) 跳转，没有白屏加载，非常高级。
3.  **组件复用**：你可以直接用你的 `<Typography />` 和 `<FadeIn />` 组件来渲染博客内容。

### 怎么做？
1.  在 Ghost 后台 (Integrations) 获取 **Content API Key** 和 **API URL**。
2.  在 Next.js 安装 `@tryghost/content-api`。
3.  修改 `src/app/blog/page.tsx` 来获取并展示文章列表。
4.  新建 `src/app/blog/[slug]/page.tsx` 来展示具体文章内容。
5.  (可选) 将 `blogs.codingis.click` 重定向到 `codingis.click`，或者仅保留作为后台地址。

---

## 方案 B：Ghost 原生主题 (定制开发)
**核心逻辑**：保留 `blogs.codingis.click` 作为独立的前端，但修改它的 HTML/CSS 模板以"模仿"主站。

### 为什么选这个？
1.  你需要彻底分离的部署环境。
2.  你想利用 Ghost 原生的会员/订阅功能前端（虽然 Next.js 也可以接，但原生更省事）。

### 痛点
1.  **割裂感**：必须手动将 `globals.css` 里的变量复制到 Ghost 主题中。
2.  **维护困难**：每次改主站设计，都要去改 Ghost 主题代码。
3.  **技术栈不同**：你需要写 Handlebars (`.hbs`) 模板，而不是 React 组件。你的 `SmoothScroll` 和 React 动画无法直接复用。

## 建议
**让我们采用方案 A**。
这最符合你的 INTJ 精益求精的性格：**单一事实来源 (Single Source of Truth)**。所有的样式和组件都在这一个 Next.js 仓库里维护。

### 下一步行动
如果你同意**方案 A**，我需要你提供：
1.  Ghost 后台的 URL。
2.  Ghost Integration 的 Content API Key。

同时，我可以先为你安装 SDK 并搭建基础架构。

是否开始方案 A 的基础搭建？
