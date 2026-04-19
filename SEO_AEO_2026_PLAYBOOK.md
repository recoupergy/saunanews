# SEO + AEO Best Practices for 2026 (SaunaNews)

This playbook focuses on **classic SEO** plus **Answer Engine Optimization (AEO)** for AI-assisted search experiences.

## 1) Build every article for entities, not just keywords

- Define the primary entities in each story (company, person, product line, country, regulation, study).
- Keep names, dates, tickers, and product model numbers consistent across headlines, body copy, image alt text, and metadata.
- Add a compact “Key facts” section near the top of long stories with concrete, machine-readable facts (date, organization, figure, source).

Why this matters for AEO: answer engines extract concise fact blocks and entity relationships more reliably than prose-only narratives.

## 2) Strengthen E-E-A-T signals on every high-value page

- Add visible bylines with role context (editor, analyst, reporter) and a linked author page.
- Add a short methodology/source note for data-heavy stories (financials, tariffs, standards, safety recalls).
- Use clear publish + last-updated timestamps.
- For YMYL-adjacent health content, clearly separate evidence-supported claims from anecdotal claims.

## 3) Upgrade structured data coverage and quality

Use valid JSON-LD and test regularly. Prioritize:

- `NewsArticle`/`Article` for reporting pages.
- `Organization` + `WebSite` + `BreadcrumbList` sitewide.
- `Person` on author pages with `sameAs` links when appropriate.
- `Product` where pages are truly product-specific and meet eligibility rules.
- `FAQPage` only where FAQs are genuinely user-facing and policy-compliant.

Implementation notes:

- Keep schema values synchronized with visible page text.
- Use absolute URLs and stable IDs where possible.
- Validate with Rich Results Test and Schema Markup Validator before release.

## 4) Design content for citation by AI answers

- Put the direct answer in the first 1–2 paragraphs for query-led pages so answer engines can lift it without guessing.
- Use scannable subheads phrased as user questions (for example: “What changed in April 2026?”).
- Include short evidence blocks:
  - **What we know**
  - **What changed**
  - **What’s still unknown**
- Prefer explicit numbers, dates, and units (for example: “€172.3 million revenue in Q1 2026” instead of “revenue rose”).
- Add outbound links to primary sources (filings, regulator docs, company releases, standards bodies) near the specific claim they support.

Mini-template for query-led pages:

1. **Direct answer (1–2 short paragraphs)**
2. **What we know** (confirmed facts + sources)
3. **What changed** (new information vs prior update)
4. **What’s still unknown** (open questions, expected update timing)

## 5) Create reusable answer blocks (AEO format)

For recurring topics (earnings, acquisitions, standards updates), use a predictable section template:

1. **One-sentence summary**
2. **Key numbers**
3. **Timeline**
4. **Why it matters**
5. **Sources**

This increases retrieval quality for both search snippets and LLM answer synthesis.

## 6) Control what can and cannot be summarized

- Use robots/meta controls intentionally for sensitive sections.
- If needed, wrap specific sections with `data-nosnippet` for Bing surfaces.
- Avoid overblocking: if you block too aggressively, you may reduce eligibility for citation/referrals.

## 7) Refresh strategy for “living” topics

For pages that change frequently (tariffs, product availability, standards timelines):

- Maintain one canonical evergreen URL.
- Append update notes with dates rather than republishing near-duplicates.
- Surface a “Last updated” timestamp near the top.
- Re-submit updated URLs in sitemap/Search Console workflows.

## 8) Improve internal linking with topic hubs

Build clear hubs and link clusters, for example:

- Sauna heater standards & regulation hub
- Public-company earnings hub (Harvia, peers)
- Health research hub with evidence levels

Each new article should link:

- Up to a hub page
- Sideways to at least 2 related stories
- Down to cited primary-source pages

## 9) Optimize media for multimodal retrieval

- Use descriptive file names (not just IDs) for hero images where feasible.
- Write specific alt text with entities and context.
- Add captions for key charts/photos with factual takeaways.
- Ensure fast LCP image delivery and dimension hints.

## 10) Protect crawl efficiency and index quality

- Keep sitemap clean (indexable canonicals only).
- Eliminate thin tag/archive pages that add little unique value.
- Watch crawl logs for bot behavior shifts and server strain.
- Ensure canonical tags and internal linking agree on preferred URLs.

## 11) Track AEO outcomes with new KPIs

In addition to clicks/impressions/rankings, track:

- Referral sessions from AI assistants/search experiences.
- Citation frequency of your domain in AI answers (sampled manually + tools).
- Crawl-to-referral ratios by bot family.
- % of top stories with valid structured data and fresh timestamps.
- Time-to-update for developing stories.

## 12) 90-day implementation roadmap

### Days 1–30
- Audit templates for metadata/schema/timestamps.
- Standardize article intro + key-facts block.
- Create source-note component for data-heavy stories.

### Days 31–60
- Launch 2–3 hub pages and retrofit internal links.
- Add author profile pages and person schema.
- Ship monitoring dashboard for schema errors + AI referrals.

### Days 61–90
- Run controlled tests on answer-block formatting.
- Expand evergreen “explainer” content for high-intent queries.
- Tune snippet controls (`nosnippet`, `max-snippet`, `data-nosnippet`) where needed.

---

## Quick checklist for every new article

- [ ] Primary entity/entities defined clearly in title + lede
- [ ] One-sentence answer in opening section
- [ ] Key facts block includes date + source
- [ ] Structured data valid and matches visible content
- [ ] Author/byline and timestamps present
- [ ] At least 3 internal links (hub + related stories)
- [ ] Primary-source links included
- [ ] Images have descriptive alt text + captions
