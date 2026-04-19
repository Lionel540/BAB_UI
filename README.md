# BAB_UI

BAB_UI is a premium dark design system built with HTML, Tailwind CSS, and vanilla JavaScript. Its visual language is shaped by motorsport precision, carbon-inspired surfaces, hexagonal geometry, and restrained orange interaction accents.

## Project Structure

```text
BAB_UI/
├── docs/
│   └── design-system.md
├── examples/
│   ├── dashboard.html
│   └── hex.html
├── public/
│   └── assets/
│       └── styles.css
├── src/
│   ├── components/
│   │   ├── buttons.html
│   │   ├── cards.html
│   │   ├── hex-grid.html
│   │   └── navbar.html
│   ├── layouts/
│   │   └── shell.html
│   ├── pages/
│   │   ├── dashboard.html
│   │   └── hex-grid.html
│   └── styles/
│       └── input.css
├── package.json
└── tailwind.config.js
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Build the stylesheet:

```bash
npm run build:css
```

3. For local preview only, serve the project on `localhost`:

```bash
npm run preview
```

Then open:

- `http://127.0.0.1:4173/`
- `http://127.0.0.1:4173/examples/dashboard.html`
- `http://127.0.0.1:4173/examples/hex.html`

4. You can still open `examples/dashboard.html` or `examples/hex.html` directly in a browser if needed.

For active styling work, use:

```bash
npm run watch:css
```

The preview server is only a local validation tool. `BAB_UI` remains a reusable HTML/CSS/JS module intended to be integrated into Flask apps or other host applications.

## GitHub Pages

The repository now includes a root `index.html` entry page so the project can be published cleanly on GitHub Pages without changing the reusable module structure.

- Publish from the `main` branch and the repository root.
- The public entry becomes `index.html`.
- The live demo pages remain available under `examples/dashboard.html` and `examples/hex.html`.

## Design Tokens

- Background: `#0F1115`
- Surface: `#1A1D22`
- Accent: `#FF6A00`
- Primary text: `#E5E7EB`
- Secondary text: `#9CA3AF`

The system is intentionally 90% dark and 10% orange. Orange is reserved for actions, active states, and guided emphasis.

## Reusing Components

- Shared visual primitives live in `src/styles/input.css`.
- Markup references for reusable UI pieces live in `src/components/`.
- Page-level compositions live in `src/pages/`.
- The hex grid interaction is embedded in `examples/hex.html` and can be moved into a Flask template as-is.

Buttons, cards, shells, and nav structures are composed from Tailwind utility classes plus BAB_UI custom component classes such as `btn-outline`, `panel-card`, `topbar`, and `hex-cell`.

## Flask Integration

BAB_UI is structured to drop cleanly into a Flask app:

1. Copy `public/assets/styles.css` into your Flask static folder, for example `static/css/styles.css`.
2. Move the HTML patterns from `src/components/`, `src/layouts/`, or `examples/` into Jinja templates.
3. Keep the linked Google Fonts in your base template head, or replace them with your preferred hosted fonts.
4. If you use the interactive hex grid, include its script block or extract it into a static JavaScript file inside `static/js/`.

Example Flask base layout:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
```

The examples are production-oriented reference implementations rather than placeholder mockups, so they can be used directly as a starting point for real Flask views.
