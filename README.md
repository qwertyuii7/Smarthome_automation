# AURA Static Site

This repository is configured for Vercel as a static website. The production site is served directly from the repository root.

Required files:
- `index.html`
- `philosophy.html`
- `security.html`
- `styles.css`
- `app.js`
- `assets/`

The site uses relative paths, so it works on static hosts such as Vercel, Netlify, GitHub Pages, or any normal web server. Use `index.html` as the home page.

## Vercel

`vercel.json` disables framework detection and build/install commands. Future pushes to the connected GitHub repository will deploy the static files automatically through Vercel's Git integration.
