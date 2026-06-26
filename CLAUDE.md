@AGENTS.md

# KOO Design Build — Claude Context

## Project Overview
Professional website for KOO Design Build (koodb.com), a design-construction firm founded in 1998. Built with Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript. Deployed to Vercel.

## Key Constraints
- **No physical address** anywhere on the site — phone and email only
- **Red is an accent only** — never used for large background fills, only CTAs, thin lines, active nav indicator
- **No dark hero sections** — all page backgrounds are white; navy is for text/headings and the footer only
- **Contact is email/link only** — there is no contact form; the Footer shows email + site link

## Color System (defined as `@theme` tokens in `app/globals.css`)
Use the Tailwind tokens, not inline hex — e.g. `bg-brand-red`, `text-brand-black`.
- `navy` → `#1B2A4A` — headings, nav links, footer background
- `brand-red` → `#9B1C1C` — red accent, CTAs, underline accents, active nav indicator
- `brand-red-dark` → `#7A1515` — CTA hover state only
- `brand-black` → `#0A0A0A` — body text
- `#FFFFFF` — all page backgrounds

## File Map
- `app/page.tsx` — Home (hero with centered logo + CTAs, about snippet, core capabilities)
- `app/projects/page.tsx` — Projects grouped by the three capabilities
- `app/layout.tsx` — Root layout with Navbar + Footer; loads Inter font
- `components/Navbar.tsx` — Sticky nav, responsive logo, mobile hamburger (only client component)
- `components/Footer.tsx` — Navy footer, logo, nav links, email + site link
- `lib/data.ts` — Single source of truth for `capabilities[]` and `projects[]`

There is currently no services page, about page, or contact form.

## Content Updates
All site content lives in `lib/data.ts`. To add/edit capabilities or projects, edit the typed arrays there — no other files need to change.

Each project has a `category` field — one of `"design-build"`, `"modernization"`, or `"assessment"` (matching a capability `id`). The projects page groups projects under their capability automatically.

## Logo Files
- `public/logo/logo_kdb.jpg` — the only logo, used in Navbar, hero, and Footer (via `next/image`). The Footer wraps it in a white box because the JPG has a baked-in white background.

## Pending Work
- Project photos: each project will have ~4 photos (see `project.image`, currently an unused placeholder field — gallery/data model still to be designed). No photos are wired up yet.
- A cleaner/transparent logo asset (PNG or SVG) would shrink the source and remove the Footer white-box workaround.
- Verify `koodb.com` domain and point DNS to Vercel after deployment
