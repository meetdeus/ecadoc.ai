# Ecadoc AI Landing Experience

Ecadoc AI is a marketing site for the blueprint-intelligence platform. The site highlights hero messaging, interactive feature stories, animated tool marquees, legal content, and a contact workflow built on top of the Next.js 15 App Router.

## Tech Stack

- **Next.js 15** with the App Router and TypeScript
- **React client components** for interactive pieces such as the marquee, accordions, sidebar navigation, and theme toggle
- **CSS**: original Tailwind-style utility sheet (`styles/legacy.css`) plus small CSS Modules for new tweaks (e.g., theme toggle, marquee)
- **Leaflet** powers the office map on the contact page

## Project Structure

```
app/
  layout.tsx        # Root metadata, providers, header/footer
  page.tsx          # Landing page
  contact/...       # Contact form + map
  faq/...           # FAQ accordions
  gdpr/, privacy/, refund-policy/, terms/, bg-gradient-img/
components/
  SiteHeader, SiteFooter, ThemeToggle, AccordionController, Marquee, ContactMap, Providers
public/images/      # Optimized marketing assets
styles/legacy.css   # Global design tokens + utility classes
```

### Available Routes

- `/` – primary landing page with hero, capabilities, integrations, pricing teaser, and insight sections
- `/contact` – contact form, office info, and Leaflet map
- `/faq`, `/privacy`, `/gdpr`, `/terms`, `/refund-policy` – supporting content pages
- `/bg-gradient-img` – supporting visual page

## Running Locally

```bash
npm install
npm run dev    # http://localhost:3000 (or the next available port)
npm run lint   # ESLint (Next config)
npm run build  # Production bundle
```

## Notes

- Animations (hero lines, marquees, header reveals, etc.) are implemented with lightweight IntersectionObserver/CSS transitions for instant load performance.
- Additional interactive sections from the design system can be added by dropping their markup into `app/` and wiring them to the shared controllers/components.
