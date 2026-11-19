# 63SATS Cyber Resilience — website

A static, dependency-free site that makes the case for cyber resilience and shows how
63SATS covers it end to end. Plain HTML, CSS and JavaScript modules; no build step.

## Run it locally

The site uses JavaScript modules and root-relative paths (`/assets/...`), so it must be
served over HTTP from this folder. Opening `index.html` directly from disk will not work.

```bash
cd 63sats-resilience
python3 -m http.server 8000
# open http://localhost:8000
```

Any static server works (`npx serve`, VS Code Live Server, nginx).

## Folder structure

```
63sats-resilience/
├── index.html                    Home page (all sections, in order)
├── pages/
│   └── _page-template.html       Copy this to start any new page
├── assets/
│   ├── img/                      Logos and imagery
│   ├── css/
│   │   ├── main.css              Entry point — imports everything in order
│   │   ├── base/                 tokens, reset, typography, layout, utilities
│   │   ├── components/           shared UI: header, mega menu, forms, footer…
│   │   └── sections/             one file per home page section
│   └── js/
│       ├── main.js               Entry point — renders components, starts modules
│       ├── data/
│       │   ├── navigation.js     ★ All menus, footer columns, legal links
│       │   └── site.js           ★ Brand name, phone numbers, email, social
│       ├── components/           header.js, footer.js (render from data)
│       ├── modules/              behaviour: nav-drawer, tabs, section-nav, forms…
│       └── utils/dom.js          small shared helpers
└── README.md
```

## Common edits

| To change…                         | Edit                                             |
|------------------------------------|--------------------------------------------------|
| Menu items, footer                 | `assets/js/data/navigation.js`                   |
| Phone, email, social, brand name   | `assets/js/data/site.js`                         |
| Colours, fonts, spacing            | `assets/css/base/tokens.css`                     |
| A home page section's content      | `index.html` (each section has a banner comment) |
| A home page section's styling      | `assets/css/sections/<section>.css`              |
| Form submission endpoint           | `submitLead()` in `assets/js/modules/lead-form.js` |

## Home page sections

| # | Section            | id               | Purpose                                      |
|---|--------------------|------------------|----------------------------------------------|
| – | Hero               | `overview`       | Headline, primary CTAs, proof points         |
| 1 | Why resilience     | `why-resilience` | The need: stats, security vs resilience      |
| 2 | Lifecycle          | `lifecycle`      | End-to-end coverage across six NIST stages   |
| 3 | Approach           | `approach`       | How an engagement runs, step by step         |
| 4 | Platform           | `capabilities`   | What the platform brings together            |
| 5 | Industries         | `industries`     | Sector risks and regulations (tabs)          |
| 6 | Why 63SATS         | `proof`          | Differentiators, client logos                |
| 7 | Self-check         | `assessment`     | Link to the resilience assessment tool       |
| 8 | Resources          | `resources`      | Articles, whitepapers, case studies          |

## Top-level pages (header menu)

| Page             | File                      | Holds                                            |
|------------------|---------------------------|--------------------------------------------------|
| How it Works     | `pages/how-it-works.html` | The resilience framework, layer by layer         |
| Solutions        | `pages/solutions.html`    | To be built                                      |
| Why 63SATS       | `pages/why-63sats.html`   | One team, outcomes, client and partner logos     |
| Resources & FAQs | `pages/resources.html`    | Video, newsletter sign-up, FAQs                  |
| Contact          | `pages/contact.html`      | "Talk to an Expert" form and incident hotline    |

To add a section: add the markup to `index.html`, create `assets/css/sections/<name>.css`,
import it in `main.css`, and add a link to the section nav in `index.html`.

## Adding a page

1. Copy `pages/_page-template.html` to the path already listed in `navigation.js`
   (for example `pages/services/incident-response.html`).
2. Fill in the title, description and sections.
3. The header and footer appear automatically.

Links in the menus point to planned page paths; they return 404 until each page is created.

## Placeholders to replace before sharing

Search the code for `TODO(` to find every item. The main ones:

- **Outcome metrics** — add verified figures with sources. Unverified values are outlined
  in amber via the `.placeholder` class. Add `class="hide-placeholders"` to `<html>` to
  hide the outlines for a demo.
- **Client logos**, **heritage claims** and **hero proof points** — confirm with 63SATS.
- **Sales phone number and email** in `site.js` and in the contact section of `index.html`.
- **Favicon** — none yet; add one to `assets/img/` and a `<link rel="icon">` in each page head.
- **Service list** in `navigation.js` — validate against the current 63SATS catalogue.
- **Form submission** — `submitLead()` currently logs to the console.

## Conventions

- **CSS:** BEM-style class names (`block__element--modifier`). Components only use
  tokens from `tokens.css`, never raw colour values.
- **JS:** one module per behaviour, each exporting an `init…` function that does nothing
  if its markup is missing. Markup hooks use `data-*` attributes, not styling classes.
- **Accessibility:** semantic landmarks, skip link, keyboard-operable menus and tabs,
  visible focus, `prefers-reduced-motion` respected.
