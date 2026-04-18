# SaunaNews

SaunaNews is a content-first newsroom site built with **Next.js 16 (App Router)**, **React 19**, and **TypeScript**. The project is optimized for publishing and indexing editorial content quickly, with static generation for article pages, XML feeds, and SEO metadata.

## What this repo includes

- Public-facing editorial pages (home, article, category, author, search, newsletter, contact, about).
- A dedicated Harvia intelligence hub and product detail pages.
- Data-backed content model stored in TypeScript (`src/data/*`) rather than a CMS.
- Newsletter subscribe and contact form APIs with graceful fallbacks when third-party services are not configured.
- SEO and syndication endpoints (`/sitemap.xml`, `/news-sitemap.xml`, `/rss.xml`, `robots.txt`).

---

## Tech stack

- **Framework:** Next.js `16.2.2` (App Router)
- **Runtime:** Node.js + React `19.2.4`
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + global CSS in `src/app/globals.css`
- **Data storage/services:**
  - Upstash Redis (`@upstash/redis`) for newsletter subscribers + simple rate limiting
  - AgentMail API for contact form delivery
- **Observability:** Vercel Analytics + Vercel Speed Insights

---

## Project architecture

```text
src/
  app/                  # Routes, layouts, metadata, API route handlers
    api/
      subscribe/        # Newsletter signup endpoint
      subscribers/      # Admin-only subscriber export endpoint
      contact/          # Contact form endpoint
    article/[slug]/     # Static article detail route
    category/[slug]/    # Category archive route
    author/[slug]/      # Author archive route
    harvia/             # Harvia intelligence hub + product routes
    rss.xml/            # RSS feed route
    news-sitemap.xml/   # Google News XML sitemap route
    sitemap.ts          # Site-wide sitemap route
  components/           # UI components (cards, headers, widgets, bars)
  data/                 # Editorial/content source of truth
    articles.ts         # All article objects + query helpers
    authors.ts          # Author profiles
    categories.ts       # Category metadata
    harvia-products.ts  # Harvia product intelligence dataset
    harvia-mediabank.ts # Product media asset definitions
  lib/
    utils.ts            # Formatting + helpers
public/
  images/               # Local article and product imagery
```

### Data flow (no CMS)

1. Editors add or update structured content in `src/data/*.ts`.
2. Route components consume this data at build time.
3. Article pages are generated from slugs (`generateStaticParams`).
4. Feed/sitemap routes emit XML from the same source data.

This keeps editorial updates deterministic and reviewable in git.

---

## Required environment variables

Create a `.env.local` file in repo root.

```bash
# Upstash Redis (newsletter storage)
KV_REST_API_URL=
KV_REST_API_TOKEN=

# Admin auth for subscriber export endpoint
ADMIN_API_KEY=

# Contact form delivery
AGENTMAIL_API_KEY=
```

### Env var behavior

- `KV_REST_API_URL` + `KV_REST_API_TOKEN`
  - Used by `/api/subscribe` and `/api/subscribers`.
  - If missing, newsletter signup still returns success but logs signups server-side instead of persisting.
- `ADMIN_API_KEY`
  - Required for `/api/subscribers` bearer-token auth.
- `AGENTMAIL_API_KEY`
  - Used by `/api/contact`.
  - If missing, contact submissions are logged and return success.

> Important: these graceful fallbacks avoid breaking the UI, but they are not production-ready states.

---

## Local development workflow

### 1) Install dependencies

```bash
npm install
```

### 2) Start dev server

```bash
npm run dev
```

Then open `http://localhost:3000`.

### 3) Lint

```bash
npm run lint
```

### 4) Production build check

```bash
npm run build
```

### 5) Run production server locally (optional)

```bash
npm run start
```

---

## Scripts

`package.json` defines:

- `npm run dev` - start local development server.
- `npm run build` - create production build.
- `npm run start` - serve production build.
- `npm run lint` - run ESLint checks.

---

## Content publishing flow

This project intentionally stores content in code.

### Publish a new article

1. Add a new object in `src/data/articles.ts` with a unique `id` and `slug`.
2. Ensure required fields are filled (`title`, `dek`, `excerpt`, `category`, `contentType`, `publishDate`, `body`, etc.).
3. Add/confirm author entry in `src/data/authors.ts`.
4. Place local images in `public/images/...` (or use an allowed remote domain configured in `next.config.ts`).
5. Add internal links in article body to related `/article/[slug]` pages.
6. Set `featured` / `trending` flags as needed for homepage placement.
7. Run lint + build before opening PR.

### Update categories/authors

- Category labels and slugs: `src/data/categories.ts`
- Author metadata: `src/data/authors.ts`

### Harvia product intelligence updates

- Product records: `src/data/harvia-products.ts`
- Media inventory: `src/data/harvia-mediabank.ts`
- Product pages: `src/app/harvia/products/[slug]/page.tsx`

---

## API endpoints

- `POST /api/subscribe`
  - Validates email, blocks common disposable domains, rate-limits by IP, and writes to Redis if configured.
- `GET /api/subscribers`
  - Requires `Authorization: Bearer <ADMIN_API_KEY>`.
  - Returns subscriber count + metadata.
- `POST /api/contact`
  - Honeypot-protected contact submission route.
  - Sends via AgentMail when configured.

---

## SEO, feeds, and indexing

- `src/app/sitemap.ts` - canonical sitemap entries for static routes, articles, categories, authors, and Harvia product pages.
- `src/app/news-sitemap.xml/route.ts` - Google News sitemap XML built from article records.
- `src/app/rss.xml/route.ts` - RSS feed XML generated from article dataset.
- `src/app/robots.ts` - robots directives.
- `src/app/article/[slug]/page.tsx` - per-article JSON-LD + metadata.

---

## Deployment and pre-release checks

This app is deployed on Vercel.

### Pre-deploy checklist

1. `npm ci` (clean install in CI environment).
2. `npm run lint` passes.
3. `npm run build` passes.
4. Required production env vars are present in Vercel project settings.
5. Smoke-test these routes in Preview deployment:
   - `/`
   - `/news`
   - one `/article/[slug]`
   - `/harvia`
   - `/rss.xml`
   - `/news-sitemap.xml`
   - `/sitemap.xml`
   - `/api/subscribe` (POST)
   - `/api/contact` (POST)

### Post-deploy checks (production)

- Confirm latest article appears on homepage and `/news`.
- Validate RSS and both XML sitemaps return valid XML + `200`.
- Submit test newsletter signup and contact form.
- Verify no server errors in deployment logs.

---

## Operational runbooks

### Newsletter signups are not being saved

Symptoms:
- API returns success, but subscribers missing from `/api/subscribers`.

Checks:
1. Ensure `KV_REST_API_URL` and `KV_REST_API_TOKEN` are set in runtime environment.
2. Inspect server logs for `[Newsletter Signup] ...` fallback messages.
3. Confirm Upstash credentials point to expected database.

### `/api/subscribers` returns `401 Unauthorized`

Checks:
1. Confirm `ADMIN_API_KEY` is set.
2. Send header exactly as `Authorization: Bearer <ADMIN_API_KEY>`.
3. Re-test in curl/Postman with explicit header.

### Contact form submits but no email received

Checks:
1. Ensure `AGENTMAIL_API_KEY` is present.
2. Look for `[Contact Form]` or `[AgentMail Error]` logs.
3. Confirm inbox (`hello@saunanews.com`) is valid at provider side.

### Build fails due to image host/domain

Checks:
1. Add the new remote host to `images.remotePatterns` in `next.config.ts`.
2. Re-run `npm run build`.
3. Commit config change with content update.

---

## Security and platform notes

- Security headers are set globally in `next.config.ts`.
- Redirects for legacy/broken slugs are maintained in `next.config.ts`.
- Newsletter endpoint includes a honeypot field and request rate limiting.
- Contact endpoint includes a honeypot field.

---

## Quick commands

```bash
# install
npm install

# run local
npm run dev

# quality gates
npm run lint
npm run build

# production serve
npm run start
```
