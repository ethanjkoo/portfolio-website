@AGENTS.md

# KOO Design Build — Claude Context

## Project Overview
Professional website for KOO Design Build (koodb.com), a design-construction firm founded in 1998. Built with Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript. Deployed to Vercel.

## Key Constraints
- **No physical address** anywhere on the site — phone and email only
- **Red is an accent only** — never used for large background fills, only CTAs, thin lines, active nav indicator
- **No dark hero sections** — all page backgrounds are white; navy is for text/headings and the footer only
- **Contact form is UI-only** — shows a success state on submit, does not send email (Resend integration is pending)

## Color System (defined in `app/globals.css`)
- `navy` → `#1B2A4A` — headings, nav links, footer background
- `#9B1C1C` — red accent, CTAs, underline accents (used inline, not as a Tailwind custom name)
- `#0A0A0A` — body text
- `#FFFFFF` — all page backgrounds

## File Map
- `app/page.tsx` — Home (hero, about snippet, services teaser, featured projects)
- `app/services/page.tsx` — Services grid + credentials bar
- `app/projects/page.tsx` — Projects split into Federal/Military and HUD categories
- `app/about/page.tsx` — Company story, stats strip, phone/email, contact form
- `app/layout.tsx` — Root layout with Navbar + Footer
- `components/Navbar.tsx` — Sticky nav, responsive logo, mobile hamburger
- `components/Footer.tsx` — Navy footer, logo_concise.png (inverted white), nav links, contact info
- `components/Logo.tsx` — Legacy SVG logo (no longer used in nav/footer; kept for reference)
- `components/ServiceIcon.tsx` — SVG icon map keyed by service id
- `lib/data.ts` — Single source of truth for all services[] and projects[] content

## Content Updates
All site content lives in `lib/data.ts`. To add/edit services or projects, edit the typed arrays there — no other files need to change.

Projects have a `category` field: `"federal"` or `"hud"`. The projects page groups them automatically.

## Logo Files
- `public/logo/logo_full.png` — used in Navbar (dark background safe)
- `public/logo/logo_concise.png` — used in Footer with `brightness-0 invert` CSS filter to render white on navy

## Pending Work
- Wire up Resend for real email sending from the About page contact form
- Swap placeholder images in `public/images/project-1.jpg` through `project-7.jpg` with real project photos
- Verify `koodb.com` domain and point DNS to Vercel after deployment
