# Personal Portfolio (Eleventy + Tailwind)

Static portfolio scaffold built with **Eleventy** for layout/partials plus **Tailwind CSS** for styling. Everything compiles down to plain HTML/CSS/JS so you can host it on any static provider.

## Features
- Home, Resume, and Contact pages with shared header/footer partials.
- Reusable `layouts/base.njk`, `includes/header.html`, and `footer.html`.
- Tailwind tooling (`npm run build:css`) produces `/src/assets/styles.css` that Eleventy copies to `_site/assets`.
- Placeholder avatar plus social links and copyright footer you can edit later.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Generate the Tailwind stylesheet (required before the first Eleventy build):
   ```bash
   npm run build:css
   ```
3. Build the static site:
   ```bash
   npm run build
   ```
4. Preview locally with live reload (automatically rebuilds Eleventy after Tailwind runs):
   ```bash
   npm run dev
   ```

The output lives in `_site/` and is ready to host anywhere that serves static files.
