# KOO Design Build — Project Handoff

## What Was Built

A complete 4-page professional website for KOO Design Build, replacing the outdated koodb.com site (which has an expired SSL certificate). The new site is built on Next.js 16 with Tailwind CSS and is ready to deploy to Vercel.

**Design direction:** Minimalist, modern architecture aesthetic. White backgrounds throughout, navy headings, red used sparingly as an accent (CTAs, thin underlines). No gradients, no drop shadows — flat and architectural.

---

## Pages

### Home (`/`)
Hero with company name and tagline, about snippet with credentials stats, services preview cards, and featured projects. The "Start a Project" CTA links to the About page.

### Services (`/services`)
Six service cards in a 2-column grid:
1. Architecture & Design
2. Design-Build
3. Construction Management
4. ICC Plan Review
5. ICC Building Inspections
6. HUD Inspection Services

Followed by a navy credentials bar: ICC Certified | Licensed in AZ & CA | 22+ Projects Completed.

### Projects (`/projects`)
Seven projects organized into two labeled categories:

**Federal & Military**
- Hangar Renovation — Tucson, AZ (U.S. Army Corps of Engineers)
- Marin MRAP Egress Trainer Building — Yuma, AZ (U.S. Dept. of the Navy)

**HUD Inspection & Construction Management** ($1M–$50M range)
- Mortgage-Insured Housing
- Refinanced Apartment Communities
- Nursing Home Facilities
- Senior Housing Development
- Accessible Housing

All project cards have a navy overlay on hover showing the project name, location, and client. Project photos are currently placeholders (`public/images/project-1.jpg` through `project-7.jpg`) — drop in real photos to replace them.

### About (`/about`)
Full company description, a stats strip (Founded 1998 / 25+ Years / AZ & CA), contact info (phone and email only — no address by client request), and a contact form.

---

## Immediate To-Dos

### 1. Real project photos
Drop JPEG/PNG files into `public/images/` named `project-1.jpg` through `project-7.jpg`. They map in order to the projects listed in `lib/data.ts`.

### 2. Wire up email on the contact form
The form on `/about` currently shows a success message client-side but sends nothing. To make it functional:

1. Sign up at [resend.com](https://resend.com) (free tier is sufficient for low volume)
2. Add a `.env.local` file at the project root:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
3. Create `app/api/contact/route.ts` with a POST handler that calls the Resend SDK and sends to `hoonHkoo@kooDB.com`
4. Update `handleSubmit` in `app/about/page.tsx` to POST form data to `/api/contact`

### 3. Deploy to Vercel
1. Push this repository to GitHub
2. Log in to [vercel.com](https://vercel.com) and import the GitHub repo
3. Vercel will auto-detect Next.js — no build configuration needed
4. Set the `RESEND_API_KEY` environment variable in Vercel's project settings (once email is wired up)
5. Point the `koodb.com` domain DNS to Vercel's nameservers in your domain registrar

---

## How to Update Content

Everything is in one file: `lib/data.ts`

- **Services**: Edit the `services` array — each entry has `id`, `title`, and `description`
- **Projects**: Edit the `projects` array — each entry has `title`, `location`, `client`, `year`, `image`, `description`, and `category` (`"federal"` or `"hud"`)

No component changes are needed for text updates.

---

## Key Design Rules (do not break)
- No physical address on the site — phone `(480) 580-4433` and email `hoonHkoo@kooDB.com` only
- Red (`#9B1C1C`) is accent-only — never use it as a large background fill
- All page backgrounds are white — the footer is the only navy-filled element
- Logo in the navbar: `public/logo/logo_full.png`
- Logo in the footer: `public/logo/logo_concise.png` with `brightness-0 invert` CSS filter (renders white on navy)

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

```bash
npm run build   # production build + TypeScript check
npm start       # serve production build locally
```

---

## Contact

**Hoon H. Koo** — hoonHkoo@kooDB.com — (480) 580-4433
