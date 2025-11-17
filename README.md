# Ecadoc AI — Next.js Migration

This repo hosts a Next.js 15 App Router rewrite of the Ecadoc AI marketing site. Every legacy HTML page now maps to a typed React route inside `app/` while the original static assets live under `public/`.

## Route mapping

| Legacy file | Next.js route |
|-------------|---------------|
| `index.html` | `/` |
| `contact-us-page.html` | `/contact` |
| `faq-page.html` | `/faq` |
| `gdpr-page.html` | `/gdpr` |
| `privacy-page.html` | `/privacy` |
| `refund-policy-page.html` | `/refund-policy` |
| `terms-conditions-page.html` | `/terms` |
| `{=$bg-gradient-img}.html` | `/bg-gradient-img` |

The untouched source files are archived in `legacy-site/` for reference.

## Styling strategy

- Global look-and-feel: the original Tailwind build lives in `styles/legacy.css` and is imported once from `app/layout.tsx` so all class names keep their exact meaning.
- Targeted tweaks: any new bespoke adjustments use CSS Modules (see `components/theme-toggle.module.css`).
- Fonts, icons, and other static assets were moved to `public/` to leverage Next's static pipeline.

## Shared UI & behavior

- `components/SiteHeader.tsx` and `components/SiteFooter.tsx` consolidate the repeated layout.
- `components/ThemeToggle.tsx` ports the light/dark toggle via `next-themes`.
- `components/AccordionController.tsx` wires up the FAQ accordions without the old imperative script.
- `components/ContactMap.tsx` recreates the Leaflet map via a lazy client hook.

## Running locally

```bash
npm install
npm run dev   # start dev server on http://localhost:3000
npm run lint  # ESLint (Next config)
npm run build # production build
```

## Known limitations / follow-ups

- The original GSAP/Lenis scroll animations are not mounted. If you rely on those motion cues, porting `legacy-site/js/main.js` into modular hooks would be the next step.
- Some legacy template links (e.g., additional "home-page-X" demos on `/bg-gradient-img`) still point to their original filenames because corresponding screens were not part of the provided source.
