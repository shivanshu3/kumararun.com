# Repository Guidelines

## Project Structure & Module Organization
- `src/` houses the Eleventy input: top-level pages (`index.html`, `resume.html`, `contact.html`), `_includes/` for reusable layouts/partials, and `assets/` for compiled styles and static media.
- `src/assets/styles.css` is generated via Tailwind and copied verbatim to `_site/assets` during the build. `src/assets/images` stores static images such as the placeholder profile SVG.
- `_site/` is Eleventy’s output; never edit it directly and keep it ignored in Git (`_site/` is already listed in `.gitignore`).
- Config files: `.eleventy.js` defines passthrough copy and shortcodes, `tailwind.config.js` targets `src/**/*.{html,md,njk,js}`, and `postcss.config.js` wires Tailwind + Autoprefixer.

## Build, Test, and Development Commands
- `npm run build:css` — compiles Tailwind from `src/styles/styles.css` into `src/assets/styles.css` (minified). Run this after editing styles before building the site.
- `npm run build` — runs `build:css` then Eleventy to produce `_site/` (static HTML/CSS/JS). Inspect `_site/` to confirm output.
- `npm run dev` — builds CSS, then starts Eleventy in watch/serve mode so changes to templates or styles hot-reload in the browser.
- No automated tests are configured. Validate changes by running `npm run build` and inspecting `_site/` before committing.

## Coding Style & Naming Conventions
- Stick with HTML/Nunjucks files for content; keep layout logic in `_includes/layouts/*.njk` and limit inline JavaScript to data/links.
- Tailwind utility classes are used for styling, so prefer descriptive combinations (e.g., `rounded-2xl border border-slate-200 bg-white p-5`) over custom CSS unless necessary.
- Maintain lowercase kebab-case for filenames (e.g., `contact.html`, `base.njk`, `styles.css`). Use semantic sectioning (header, main, footer) within templates.
- Use two spaces for indentation in Markdown/Nunjucks and keep code blocks tidy; run `npm run build:css` after adjusting Tailwind config so the generated CSS stays current.

## Testing Guidelines
- No testing framework is included. Manual regression is achieved through `npm run build` followed by opening `_site/` locally or deploying to a static host.
- If future tests are added, name them to mirror the existing page or component (e.g., `home.test.js` or `contact.test.md`) and document the command in this file.

## Commit & Pull Request Guidelines
- Prefer concise, imperative commit messages (`Add hero section`, `Update contact links`). Group related tweaks into a single commit when possible.
- Pull requests should describe the change’s motivation, link to relevant issues if available, and mention whether the build (`npm run build`) was successful. Include screenshots for visual tweaks if they affect layout or style.

## Security & Configuration Tips
- Never commit `_site/` or generated assets like `src/assets/styles.css`; keep the `.gitignore` entries intact.
- Keep third-party dependencies (Eleventy, Tailwind, PostCSS) up to date via `npm outdated` and `npm install` to benefit from fixes, then rerun `npm run build` to regenerate assets.
