# Flechazo Blog 

This is the source repository for my personal blog.
Built with Hexo and the Stellar theme.

## Tech Stack

- **Static Site Generator**: Hexo v8
- **Theme**: Stellar v1.33.1
- **Comments**: Giscus
- **Deployment**: GitHub Pages via GitHub Actions

## Quick Start

` ` `bash
npm install
npm run server  # http://localhost:4000
npm run build
` ` `

## Project Structure

` ` `
source/
  _posts/       - Blog posts
  _data/        - Data files
  wiki/         - Wiki pages
  changelog/    - Changelog page
scripts/
  changelog-gen.js  - Auto-generate changelog
themes/stellar/ - Active theme
` ` `

## Features

- Auto-generated changelog from git history
- Wiki note system
- AI-powered post summaries
- Giscus comment system
- Category and tag organization

## Deployment

Push to main triggers GitHub Actions to build and deploy to GitHub Pages.

## License

MIT
