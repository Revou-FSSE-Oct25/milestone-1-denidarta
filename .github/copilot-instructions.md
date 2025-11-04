<!-- .github/copilot-instructions.md -->
# Copilot instructions for milestone-1-denidarta

This is a small static portfolio project (single-page HTML/CSS). The file layout you should know:

- `index.html` — the single-page markup and entry point (body is currently empty).
- `style.css` — global CSS (currently empty). Keep all site styles here unless a new stylesheet is intentionally added.
- `assets/` — place images and static resources here and reference them with relative paths (e.g. `assets/photo.jpg`).
- `README.md` — contains classroom/assignment metadata (deadline badge).

Primary goals for AI contributors
- Keep changes minimal and local: modify `index.html`, `style.css`, and add assets in `assets/`.
- Use semantic HTML and small, self-contained CSS classes (no global resets unless added to `style.css`).
- Preserve existing file names and relative paths.
- Any id attributes should be meaningful and written in kebab case.

Project-specific patterns and examples
- Single-page structure: add new sections inside `<body>` of `index.html`. Example pattern:

  Add an HTML block (example reference):

  - Place images under `assets/` and reference as `<img src="assets/example.jpg" alt="...">`.
  - Add styles to `style.css` using class names only, e.g. `.portfolio-card { /* styles */ }` and add `class="portfolio-card"` on the element.

Developer workflows (what actually works here)
- No build step: this is plain HTML/CSS. Preview by opening `index.html` in the browser or use VS Code Live Server.
- Git workflow: work on a feature branch (this repo uses branches like `milestone-1`). Push to your branch and open a PR to `main`.

What not to do
- Do not introduce frameworks, bundlers, or package.json files for this milestone unless the repo already contains them — this project is intentionally simple.
- Avoid rewriting large unrelated files. Keep PRs focused and small.

Files to reference when making changes
- `index.html` — add markup and visible content.
- `style.css` — add styles and media queries.
- `assets/` — add images or other assets; keep file names meaningful and lowercase.

If you need more context
- Open `README.md` for the classroom badge and assignment metadata.
- If asked to add interactivity or a build step, request clarification — there's no existing JS or tooling in this repo to integrate with.

If this file should merge with existing `.github/copilot-instructions.md`, preserve any custom sections not overwritten here and keep the concise project-specific items above.

— End of instructions —
