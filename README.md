# KOO Design Build — Website

Professional website for [KOO Design Build](http://koodb.com), a design-construction firm founded in 1998 serving U.S. Federal government, local municipalities, and commercial clients.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4**
- **Google Fonts: Inter**
- **Vercel** (deployment)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about snippet, services teaser, featured projects |
| `/services` | Full services grid with ICC credentials bar |
| `/projects` | Projects split by Federal/Military and HUD categories |
| `/about` | Company story, stats, contact info, and contact form |

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
koo-design-build/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page
│   ├── services/page.tsx   # Services page
│   ├── projects/page.tsx   # Projects page
│   └── about/page.tsx      # About page
├── components/
│   ├── Navbar.tsx          # Sticky responsive navigation
│   ├── Footer.tsx          # Navy footer with logo and contact info
│   ├── Logo.tsx            # SVG logo (legacy, kept for reference)
│   └── ServiceIcon.tsx     # SVG icon set for services
├── lib/
│   └── data.ts             # All site content (services + projects)
├── public/
│   ├── logo/               # Logo PNGs
│   └── images/             # Project photos (project-1.jpg … project-7.jpg)
└── app/globals.css         # Tailwind theme (navy, red, black color vars)
```

## Updating Content

All text content lives in `lib/data.ts`. Edit the `services` and `projects` arrays there — no component changes required.

To add a project, append an entry to the `projects` array with the appropriate `category`:
- `"federal"` — appears under Federal & Military
- `"hud"` — appears under HUD Inspection & Construction Management

## Adding Project Photos

Drop images into `public/images/` named `project-1.jpg` through `project-7.jpg`. They map directly to the `image` field in each project entry in `lib/data.ts`.

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). Connect the GitHub repository to a Vercel project and it will deploy automatically on every push to `main`.

## Contact Form

The contact form on `/about` is currently UI-only (no email is sent). To enable real email delivery, integrate [Resend](https://resend.com):

1. Create a free Resend account and obtain an API key
2. Add `RESEND_API_KEY=your_key` to a `.env.local` file
3. Create `app/api/contact/route.ts` to handle POST requests and send via the Resend SDK
4. Update the form's `handleSubmit` in `app/about/page.tsx` to POST to `/api/contact`
