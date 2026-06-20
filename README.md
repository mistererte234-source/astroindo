# Astroindo — Landing Page

A fast, self-contained static landing page for **Astroindo** — a digital studio for
precision design & web development. Built on the Stitch design system, rebranded and
enhanced with an **animated logo** (reveal wipe, glow pulse, silhouette shine, and an
orbiting comet), scroll-reveal sections, a scroll-progress bar, and a responsive mobile menu.

## Structure

```
.
├── index.html              # the whole page
├── assets/
│   ├── css/style.css       # animations & components (on top of Tailwind)
│   ├── js/main.js          # scroll reveal, progress bar, mobile menu, starfield
│   └── img/
│       ├── logo.png            # full logo (mark + wordmark, transparent)
│       ├── logo-mark.png       # mark only — used in the nav/footer
│       ├── favicon.png
│       └── apple-touch-icon.png
└── README.md
```

Tailwind is loaded from its CDN and the design tokens live inline in `index.html`,
so there is **no build step** — just static files.

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy to Hostinger

This is a pure static site, so any of these work:

1. **Git pull** into your `public_html` (or a subfolder), then point the domain's
   document root at the folder that contains `index.html`.
2. Or upload the files via the File Manager / FTP.

No server runtime, database, or environment variables are required.

## Customize

- **Brand color** — `--brand-red` in `assets/css/style.css` (currently `#e62118`).
- **Copy & sections** — all in `index.html`.
- **Contact** — the *Inquire* / *Start a Project* buttons point to `mailto:astroindo@gmail.com`.
- **Logo** — replace files in `assets/img/`; the animation targets the real PNG silhouette.
