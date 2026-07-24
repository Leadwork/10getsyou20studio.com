# 10GetsYou20 Studio — Landing Page (Multi-Variant)

Config-driven landing page for the **10GetsYou20 brand family**. One Next.js codebase, one Vercel deployment, five custom domains — each rendering its own brand identity based on the incoming hostname.

- **Main brand:** https://10getsyou20.com
- **Variants served from this codebase:**
  - `10getsyou20studio.com` — 10GetsYou20 Studio
  - `10getsyou20media.com` — 10GetsYou20 Media
  - `10getsyou20videos.com` — 10GetsYou20 Videos
  - `10getsyou20clips.com` — 10GetsYou20 Clips
  - `10getsyou20reels.com` — 10GetsYou20 Reels

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui primitives
- Lucide icons
- Deployed on Vercel — one project, five domains attached

## How the multi-variant works

The request `Host` header decides which brand renders. The design system, sections, animations, footer, nav, team, FAQ, and pricing are all shared — only the surface elements that make each domain feel like its own division of the parent brand vary.

**Per-domain variation:**
- Site name, logo suffix, browser `<title>`, meta description
- Hero eyebrow, headline, sub-headline, CTA labels, trust line
- Services grid (4–8 cards, tailored to the domain's angle)
- A subtle accent-hue shift on the shared design tokens
- JSON-LD structured-data site name

**Everything else** (layout, colors, animations, Team, FAQ, Pricing, About, Contact, Footer) stays byte-identical across variants — the parent-brand family they belong to.

## Architecture

```
config/
  types.ts         Shared SiteConfig type
  studio.ts        10GetsYou20 Studio variant
  media.ts         10GetsYou20 Media variant
  videos.ts        10GetsYou20 Videos variant
  clips.ts         10GetsYou20 Clips variant
  reels.ts         10GetsYou20 Reels variant
  index.ts         Registry + resolveConfigForHost()

lib/
  site.ts          getSiteConfig() reads Next.js request headers
                   and returns the matching SiteConfig
  utils.ts         cn() helper

app/
  layout.tsx       generateMetadata() reads config, sets:
                     - <title>, description, OG, JSON-LD
                     - --accent-hue CSS var on <html>
                     - data-variant="studio|media|…" on <html>
  page.tsx         Reads config, passes it into variant-aware sections
  privacy/, terms/ Legal pages (shared, brand-aware footer)
  sitemap.ts       Per-domain sitemap
  robots.ts        Per-domain robots
  globals.css      Design tokens; --accent-hue drives brand-violet
```

## Adding a new variant

1. Create `config/newvariant.ts` matching the `SiteConfig` type
2. Register it in `config/index.ts` and add its `id` to the `SiteVariantId` union in `config/types.ts`
3. Attach the domain to the Vercel project
4. Done. No deploy config, no rebuild.

## Local development

```bash
npm install
npm run dev
```

The dev server sees `localhost` as the host and falls back to the Studio config. To preview another variant locally, set `NEXT_PUBLIC_SITE_VARIANT`:

```bash
NEXT_PUBLIC_SITE_VARIANT=media npm run dev
NEXT_PUBLIC_SITE_VARIANT=reels npm run dev
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — run built app
- `npm run lint` — lint

## Deployment (Vercel)

1. Push the repo to GitHub (done)
2. Import into Vercel as a single project
3. Attach the five custom domains to the project — Vercel handles TLS
4. **No environment variables required** for production. The variant is resolved per-request from the incoming `Host` header.

Optional: set `NEXT_PUBLIC_SITE_VARIANT` on preview deploys so preview URLs default to a chosen brand.

## Why this design

Each domain exists to support cold email deliverability for outreach sent from that domain. When a prospect (or a mailbox provider's reputation checker) visits the domain, it needs to resolve to a page that reads as a legitimate media production business.

Each variant reads clearly as a division of the 10GetsYou20 parent brand — same producers, same Calendly, same parent-brand link — but with its own hero angle and slight accent identity. That way five sibling sites read as a brand family rather than a template farm.

The trust-page guardrails are intentional:

- No testimonials
- No client logos (real or fake)
- No popups
- No countdown timers
- No fake scarcity
- No fake statistics
- No exaggerated claims

The goal is a real, understated media-production website.
