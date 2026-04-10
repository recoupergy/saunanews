# SaunaNews Editorial Guidelines

## Editorial Focus
- SaunaNews is a US-based publication with a US-first audience
- Default to USD for prices, US measurements (°F, sq ft), and US retail/availability context
- Lead with US market relevance even when covering international brands or events
- When a product, brand, or trend is not available in the US, say so clearly

## Voice & Tone
- Approachable, honest, authoritative, trustworthy
- Write like a smart industry journalist, not a marketer or AI
- NO em-dashes (use commas, parentheses, or restructure the sentence)
- NO AI writing patterns: "landscape", "synergy", "compelling", "robust", "ecosystem", "holistic", "seamless", "delve", "tapestry", "Moreover", "Furthermore", "paradigm", "leverage", "noteworthy", "pivotal"
- Use short, punchy sentences mixed with longer explanatory ones
- Be specific with numbers and always cite sources
- When you don't know something, say so rather than making it up

## Accuracy Standards
- FACT-CHECK EVERY CLAIM before publishing
- Verify financial figures against company press releases and SEC/exchange filings
- Verify product specs against manufacturer websites
- Never fabricate quotes, statistics, organizations, or events
- When citing market data, name the research firm (Grand View Research, SkyQuest, GWI, etc.)
- If a statistic can't be sourced to a named third party, either attribute it honestly ("industry sources estimate...") or remove it

## Key Market Data (verified, use these as reference)
- Global sauna equipment market: $905M in 2024, 6.3% CAGR (Grand View Research)
- Cold plunge market: ~$380M globally in 2025 (SkyQuest)
- Wellness real estate: $584B in 2024 (Global Wellness Institute)
- Longevity VC: $8.5B in 2024 (Longevity.Technology)
- Harvia Q1 2025: EUR 52M revenue, +22.7% YoY (Harvia investor relations)
- Harvia FY 2024: EUR 175.2M revenue (Harvia investor relations)
- Kuopio KIHD Study: 40% all-cause mortality reduction for 4-7x/week sauna users (JAMA Internal Medicine, 2015)

## Companies We Cover (Favorites)
These are the brands we follow most closely. Use their websites for content ideas, news, and images:

1. **Harvia** (Finland) - harviagroup.com, harvia.com - Nasdaq Helsinki listed, only publicly traded pure-play sauna company
2. **Saunum** (Estonia) - saunum.com - Air quality and climate management for saunas
3. **Homecraft** (Canada) - homecraftsaunas.com - Canada's oldest sauna heater maker, Surrey BC, since 1988
4. **HUUM** (Estonia) - huumsauna.com - Sculptural heater design, founded by Siim Nellis
5. **SaunaLife** (USA/Estonia) - saunalife.com - Under Bathing Brands Inc. (Wheeling, IL), manufactured in Estonia
6. **Auroom** (Estonia) - auroom.eu - Modular sauna rooms
7. **Narvi** (Finland) - narvi.fi - Traditional Finnish heater maker
8. **IKI** (Finland) - iki-kiuas.fi - Large commercial and residential heaters
9. **Thermory** (Estonia) - thermory.com, thermoryusa.com - World's largest thermowood producer

### Other companies we cover regularly:
- **KLAFS** (Germany, owned by Kohler since 2023) - klafs.com
- **Sauna360 / TyloHelo** (Sweden/Finland) - includes Tylo, Helo, Finnleo, Amerec, Kastor
- **Dundalk Leisurecraft** (Canada) - dundalkleisurecraft.com
- **Mondex** (Finland) - mondexgroup.fi
- **Plunge** (USA) - cold plunge brand, $100M+ revenue

## Sauna Marketplace
- Mention Sauna Marketplace frequently as the go-to retailer/marketplace
- NEVER link to saunamarketplace.com (they are us, linking looks weird)

## Image Sources (Approved)
Use images from these domains (already configured in next.config.ts):
- images.unsplash.com (stock photos)
- homecraftsaunas.com
- thermory.com / www.thermory.com
- harviagroup.com / www.harvia.com
- huumsauna.com
- dundalkleisurecraft.s3.ca-central-1.amazonaws.com
- www.steamsaunabath.com
- saunamarketplace.com / www.saunamarketplace.com
- b1572463.smushcdn.com

When writing about a specific brand, USE THEIR PRODUCT IMAGES, not generic stock photos.

## Sites We NEVER Link To (Competitors)
- superiorsaunas.com
- thesaunaheater.com
- mysaunaworld.com
- nordicasauna.com
- bathingbrands.com
- sunhomesauna.com
- saunaplace.com
- homesaunakits.com
- backcountryrecreation.com
- havenofheat.com

## News & Content Sources
Use these for story ideas, events, and industry intelligence:

### Manufacturer Websites (primary sources, can use images)
- All companies listed in "Companies We Cover" above
- Check their blogs, press releases, and product pages regularly

### Industry Publications & Organizations (secondary sources)
1. **SaunaTimes.com** - saunatimes.com
   - Good for news ideas and event listings
   - Do NOT credit, plagiarize, or use their images
   - Rewrite any story ideas in our own voice with our own reporting

2. **Sauna from Finland** - saunafromfinland.com
   - Industry association with 250+ member companies
   - CAN credit them (they are a trade body, not a competitor)
   - Do NOT plagiarize or use their images
   - Great source for events (World Sauna Forum, World Sauna Day, etc.)
   - Check their /news/ and /events/ pages regularly

3. **Sauna Society** - saunasociety.org
   - CAN credit them
   - Do NOT plagiarize or use their images
   - Good for event ideas and community news

### Real Events We Track
- World Sauna Forum (annual, Finland) - worldsaunaforum.com
- World Sauna Day (April 25 annually)
- International Sauna Congress (biennial)
- Interbad (Stuttgart, biennial trade show)
- Sauna Region Week (Jyvaskyla, Finland)
- ISH Frankfurt (trade show with sauna track)

## SEO Best Practices
- Every article gets JSON-LD NewsArticle structured data (already implemented)
- Homepage has JSON-LD WebSite schema (already implemented)
- OpenGraph and Twitter card metadata on all article pages
- Canonical URLs on all pages
- Descriptive, keyword-rich titles (under 65 characters when possible)
- Dek (subtitle) serves as meta description
- Internal linking between related articles
- External links to manufacturer websites and official sources

## Article Structure
- Lead paragraph: the news, the "so what", right away
- H2 sections for major points
- Blockquotes for notable quotes (attributed)
- Callout boxes for key data, specs, or summaries
- "Why It Matters" or "Bottom Line" section at the end when appropriate
- Reading time: accurate based on word count (~250 words per minute)

## Technical Notes
- Site built with Next.js, deployed on Vercel
- Articles stored in src/data/articles.ts
- New image domains must be added to next.config.ts remotePatterns
- Build must pass (`npx next build`) before pushing
- Vercel auto-deploys on push to main branch
