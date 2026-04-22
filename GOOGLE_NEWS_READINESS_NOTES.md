# Google News Readiness Notes (SaunaNews)

This document maps current site implementation to key Google News requirements and recommends the next highest-impact improvements.

## Current strengths

- About page exists with clear mission and organization schema (`NewsMediaOrganization`).
- News sitemap endpoint exists (`/news-sitemap.xml`) and is listed in `robots.txt`.
- Article pages include visible bylines, publication dates, and `NewsArticle` structured data.
- `robots.ts` explicitly allows crawling by `Googlebot-News`.

## Top gaps to close first

1. **Publish an editorial policy page and link it sitewide.**
   - Add a dedicated page for standards: sourcing, fact-checking, corrections policy, conflicts of interest, AI usage/disclosure, and sponsored-content handling.
   - Replace footer placeholder links (`#`) with real policy URLs.

2. **Strengthen author identity verification signals.**
   - Add author social/profile links (LinkedIn, professional site) to author pages and article author boxes.
   - Include `sameAs` in author `Person` schema and optionally `image` and `alumniOf`/`knowsAbout` where appropriate.

3. **Upgrade contact transparency for entity trust.**
   - Add city/country at minimum, ideally full editorial office mailing address.
   - Add editorial phone and separate newsroom inbox.
   - Mark contact points in Organization schema (`contactPoint`).

4. **Constrain news sitemap to fresh articles only.**
   - Google News sitemap should only include items from roughly the last 48–72 hours.
   - Current implementation includes all historical articles; filter by `publishDate` window.

5. **Clarify ad/sponsor labeling and policy.**
   - Keep `Sponsor` label, but add a visible ad/sponsored-content disclosure page and link from sponsor modules.
   - If affiliate links are introduced, add explicit in-article disclosures.

## Technical enhancements

- Add `dateModified` support from real edit history (not equal to publish date unless unchanged).
- Ensure headlines in UI and metadata remain aligned and under ~110 chars for news cards.
- Add automated validation for required article fields (`author`, `publishDate`, `headline`, canonical URL).
- Track Core Web Vitals budgets for article templates (especially LCP on mobile).

## Operational workflow recommendations

- Define a corrections SL A (e.g., same day for factual errors) and publish correction notes directly in articles.
- Establish a review checklist before publish:
  - byline + author page link,
  - primary source citations,
  - publish date visible,
  - schema valid,
  - headline/title parity,
  - at least one original reporting element.
- Set cadence target by section (e.g., 1–3/day for core news, 2–3/week for features).

## Suggested implementation order (2–3 week sprint)

1. Week 1: policy pages + footer/header links + contact upgrades.
2. Week 1: author profile upgrades (`sameAs`, bios with credentials).
3. Week 2: news sitemap 72-hour filter + validation tests.
4. Week 2: ad disclosure framework + sponsor component linkouts.
5. Week 3: CWV tuning for article template and image loading.

