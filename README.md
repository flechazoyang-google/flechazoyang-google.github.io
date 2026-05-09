# Flechazo Blog 

这是妄司逸的个人博客源码仓库，使用 Hexo 构建，Stellar 主题。
 
访问地址：https://flechazo.icu 
 
## 技术栈 
 
- 静态站点生成器 Hexo v8 
- 主题 Stellar v1.33.1 
- 评论 Giscus 
- 部署 GitHub Pages + Vercel + Cloudflare Pages 
- AI 摘要 TianliGPT 

## 快速开始 
 
 bash 
npm install 
npm run server  # 本地预览 
npm run build   # 构建静态文件 
 
## 目录结构 
 
 source/ 
   _posts/  - 博客文章 
   _data/   - 数据配置文件 
   wiki/    - Wiki 文档 
   changelog/ - 更新日志 
 scripts/ - Hexo 脚本 
 themes/stellar/ - 主题文件 

## 功能特性 
 
- 自动从 Git 提交生成更新日志 
- Wiki 笔记系统 
- AI 自动生成文章摘要 
- Giscus 评论系统 
- 分类与标签组织 
 
## 部署 
 
推送 main 分支自动触发 GitHub Actions 构建并部署到 GitHub Pages。 
 
## 许可 
 
MIT
