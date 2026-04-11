# kareemdev

Personal developer blog and portfolio. Built with Next.js 16, Tailwind CSS v4, and MDX.

**Live at [kareemdev.co](https://kareemdev.co)**

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Content**: MDX with gray-matter frontmatter
- **Syntax Highlighting**: Shiki (github-dark theme)
- **Fonts**: Geist + Geist Mono
- **Deploy**: Vercel (auto-deploys on push to main)

## Local Development

```bash
pnpm install
pnpm dev
```

## Adding Content

**Blog posts**: Add `.mdx` files to `content/blog/`

```yaml
---
title: "Post Title"
date: "2025-01-01"
description: "Short description for cards and meta tags."
tags: ["tag1", "tag2"]
---
```

**Projects**: Add `.mdx` files to `content/projects/`

```yaml
---
name: "Project Name"
description: "One-liner description."
tech: ["Tech1", "Tech2"]
url: "https://example.com"
featured: true
---
```

**Images**: Drop into `public/blog/` or `public/projects/`, reference with `![alt](/blog/image.png)`
