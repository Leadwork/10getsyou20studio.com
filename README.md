# 10GetsYou20 Studio — Landing Page

A modern, minimal landing page for **10GetsYou20 Studio**, the short-form video production arm of the 10GetsYou20 brand. Designed to support cold email deliverability and provide legitimacy when prospects visit the domain.

- **Main brand site:** https://10getsyou20.com
- **This site:** https://10getsyou20studio.com

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui primitives
- Lucide icons
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — run built app
- `npm run lint` — lint

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata, JSON-LD
  page.tsx          Landing page sections
  globals.css       Tailwind + design tokens
  privacy/          Privacy Policy
  terms/            Terms of Service
  sitemap.ts        Sitemap
  robots.ts         Robots
components/
  navbar.tsx        Sticky nav with mobile menu
  hero.tsx          Headline + short-form video mockup
  services.tsx      Services grid
  how-it-works.tsx  3-step timeline
  why-choose-us.tsx Benefits grid
  about.tsx         About section
  faq.tsx           FAQ accordion
  contact-cta.tsx   Contact block
  footer.tsx        Footer
  logo.tsx          Text + mark logo
  ui/               shadcn primitives (button, accordion)
lib/
  utils.ts          cn() helper
public/
  favicon.svg
```

## Deployment

Push to a Git repo and import into Vercel. No environment variables required.

## Notes

The page intentionally avoids testimonials, client logos, statistics, popups, and countdown timers. Copy is measured and does not make exaggerated claims — the goal is trust and legitimacy for cold-email recipients arriving at the domain.
