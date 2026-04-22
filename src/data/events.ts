export type EventCategory =
  | 'Aufguss'
  | 'Conference'
  | 'Trade Show'
  | 'Investor'
  | 'Product Launch'
  | 'Industry'
  | 'Competition';

export type EventOrganization =
  | 'Harvia'
  | 'Saunum'
  | 'Masco'
  | 'Kohler'
  | 'Aufguss World Masters'
  | 'British Sauna Society'
  | 'Sauna from Finland'
  | 'International Sauna Association';

export interface SaunaEvent {
  id: string;
  slug: string;
  title: string;
  category: EventCategory;
  startDate: string;
  endDate: string;
  location: string;
  venue: string;
  venueUrl?: string;
  officialUrl: string;
  image: string;
  imageCaption: string;
  summary: string;
  body: string;
  tags: string[];
  organizations?: EventOrganization[];
}

export const events: SaunaEvent[] = [
  {
    id: 'uk-aufguss-2026',
    slug: 'uk-aufguss-championships-2026-galgorm',
    title: '2026 UK Aufguss Championships',
    category: 'Aufguss',
    startDate: '2026-04-20',
    endDate: '2026-04-22',
    location: 'Ballymena, Northern Ireland',
    venue: 'Galgorm Resort',
    venueUrl: 'https://www.galgorm.com/',
    officialUrl: 'https://www.britishsaunasociety.org.uk/uk-aufguss-championships',
    image: 'https://images.squarespace-cdn.com/content/v1/63774ebed526324f79361869/1765379703752-9E4EVO1ZMFC45XBJVAN4/Aufguss+Uk+Championships.jpg?format=1500w',
    imageCaption: 'The UK Aufguss Championships. Photo: British Sauna Society.',
    summary: 'The British Sauna Society brings the UK Aufguss Championships to Galgorm Resort. Competitors debut the Modern Classic category domestically for the first time, alongside the theatrical Show Aufguss format.',
    body: `<p>The 2026 UK Aufguss Championships run April 20 to 22 at Galgorm Resort in Ballymena, Northern Ireland. The British Sauna Society is the governing body. The host property has run its Celtic Sauna Infusion ritual for nine years and is the defending champion's home facility.</p>

<p>This is the third year of the UK Championships and the first year the event splits into two categories on the domestic stage. Show Aufguss keeps the costumes, lighting, narratives, and music integration. Modern Classic strips those out and judges on pure thermal mechanics: towel choreography, heat distribution, essential oil pacing.</p>

<h2>Who to Watch</h2>

<p>Zak Moore, Galgorm's 20-year-old Sauna Master, is defending his 2025 title in front of a home crowd. He won last year at ARC in Canary Wharf with a routine built around a Dublin pub owner and a leprechaun, and trained for it at Farris Bad in Norway under Lasse Eriksen, vice president of the Aufguss World Masters.</p>

<h2>What It Qualifies For</h2>

<p>The UK Championships feeds into the Aufguss World Masters playoffs in the Netherlands in August and the World Finals at Satama Sauna Resort in Germany in September. Top finishers typically advance to one or both. The Modern Classic Cup Finals at Farris Bad in Norway in October are the global equivalent for the traditional-technique side.</p>

<div class="callout">
<strong>Event details:</strong> April 20 to 22, 2026. Galgorm Resort, Ballymena, Northern Ireland. Hosted by the British Sauna Society. Two competition categories (Show and Modern Classic).
</div>

<p>For the business case around why resorts and urban bathhouses are investing in Aufguss programming at all, see our <a href="/article/business-of-aufguss-us-operator-playbook">unit-economics analysis of the category</a>.</p>`,
    tags: ['Aufguss', 'UK', 'Galgorm', 'British Sauna Society', 'Zak Moore'],
    organizations: ['British Sauna Society', 'Aufguss World Masters'],
  },
  {
    id: 'aufguss-usa-2026',
    slug: 'aufguss-usa-nationals-2026-bathhouse-nyc',
    title: '2026 Aufguss USA Nationals',
    category: 'Aufguss',
    startDate: '2026-05-19',
    endDate: '2026-05-21',
    location: 'New York, NY',
    venue: 'Bathhouse (Brooklyn and Flatiron)',
    venueUrl: 'https://bathhouse.nyc/',
    officialUrl: 'https://aufgussusa.com/',
    image: 'https://static.wixstatic.com/media/660c96_a1dbd1db85f24ed4b0dde83b52e16ed2~mv2.png/v1/fill/w_1168,h_1168,fp_0.50_0.50,q_95,enc_avif,quality_auto/660c96_a1dbd1db85f24ed4b0dde83b52e16ed2~mv2.png',
    imageCaption: 'Aufguss USA announced expanded qualification into the World Championships for the 2026 Nationals. Image: Aufguss USA.',
    summary: 'Aufguss USA Nationals return to Bathhouse in New York with expanded qualification paths into the Aufguss World Championships. The clearest signal yet that the ritual has a US practitioner pipeline.',
    body: `<p>The 2026 Aufguss USA Nationals run May 19 to 21 across Bathhouse's Brooklyn and Flatiron locations in New York. This is the first year US Nationals have expanded qualification into the Aufguss World Championships, which means strong US finishers can advance directly to the global playoff rounds rather than going through a European qualifier.</p>

<h2>Why Bathhouse</h2>

<p>Bathhouse is one of the largest social sauna operators in North America, with two New York venues currently pacing toward a $120 million run rate. The company has signaled plans to expand to roughly eight more US locations, which positions it as the primary domestic platform for the ritual. Hosting Nationals two years in a row pulls the global competitive circuit directly into the US social-sauna scene.</p>

<h2>What the Field Looks Like</h2>

<p>This is also the first clean public test of US practitioner depth. If the field is strong, the supply-side constraint on the category is loosening faster than skeptics expected. If it is thin, the US still depends on European-trained Sauna Masters and the training pipeline remains the bottleneck. Operators watching should pay attention to who shows up, not just who wins.</p>

<div class="callout">
<strong>Event details:</strong> May 19 to 21, 2026. Bathhouse Brooklyn and Flatiron, New York. Expanded qualification into the Aufguss World Championships playoffs and finals.
</div>

<p>For the broader commercial context on why US operators are investing in Aufguss in the first place, see our <a href="/article/business-of-aufguss-us-operator-playbook">analysis of the business of Aufguss</a>.</p>`,
    tags: ['Aufguss', 'USA', 'Bathhouse', 'New York', 'Brooklyn', 'Flatiron'],
    organizations: ['Aufguss World Masters'],
  },
  {
    id: 'aufguss-wm-playoffs-2026',
    slug: 'aufguss-wm-playoffs-2026-thermen-bussloo',
    title: '2026 Aufguss WM Playoffs',
    category: 'Aufguss',
    startDate: '2026-08-27',
    endDate: '2026-08-30',
    location: 'Bussloo, Netherlands',
    venue: 'Thermen Bussloo',
    venueUrl: 'https://www.thermenbussloo.nl/',
    officialUrl: 'https://www.aufguss-wm.com/',
    image: 'https://www.thermenbussloo.nl/assets/Bussloo/Baden-TBU/Thermen_Bussloo_baden_zoutwater_model_2_1000__FocusFillWyIwLjAwIiwiMC4wMCIsMjAwMCwxMDAwXQ_jpg.webp',
    imageCaption: 'Thermen Bussloo, one of the largest thermal resort complexes in continental Europe. Photo: Thermen Bussloo.',
    summary: 'The global playoff round of the Aufguss World Masters, hosted at one of the premier Dutch thermal resorts. Top national runners-up fight for World Finals slots.',
    body: `<p>The 2026 Aufguss World Masters Playoffs run August 27 to 30 at Thermen Bussloo in the Netherlands. This is the "second chance" qualification round for national-championship runners-up who did not advance directly to the World Finals. Top finishers across Show Aufguss and Modern Classic categories earn slots at the Worlds in Germany in September.</p>

<h2>Why Thermen Bussloo</h2>

<p>Thermen Bussloo is one of the largest thermal resort complexes in continental Europe, with multiple performance saunas configured for ritual programming. The venue has hosted elite Aufguss events before. Using the Netherlands as the playoff site also geographically centers the round for Central European competitors, who account for the bulk of the global field.</p>

<h2>Format</h2>

<p>Competitors present meticulously choreographed 15-minute performances inside a dedicated event sauna, judged by an international jury stationed inside the room alongside bathers. Scoring matrices grade professionalism, heat distribution, towel technique, fragrance dosing, and (for Show category) narrative and theatrical elements.</p>

<div class="callout">
<strong>Event details:</strong> August 27 to 30, 2026. Thermen Bussloo, Netherlands. Aufguss WM Playoffs round. Feeds into the World Finals at Satama Sauna Resort in September.
</div>`,
    tags: ['Aufguss', 'Netherlands', 'Thermen Bussloo', 'World Masters'],
    organizations: ['Aufguss World Masters'],
  },
  {
    id: 'aufguss-wm-finals-2026',
    slug: 'aufguss-wm-finals-2026-satama-sauna-resort',
    title: '2026 Aufguss WM Finals (Show)',
    category: 'Aufguss',
    startDate: '2026-09-13',
    endDate: '2026-09-20',
    location: 'Germany',
    venue: 'Satama Sauna Resort',
    venueUrl: 'https://www.satama-sauna-resort.com/',
    officialUrl: 'https://www.aufguss-wm.com/',
    image: 'https://aufguss-wm.com/wp-content/uploads/2022/03/2018-7f0b2435.jpeg',
    imageCaption: 'A performance at the Aufguss World Championships. Photo: Aufguss WM.',
    summary: 'The pinnacle global event for theatrical, narrative-driven Show Aufguss. World champions are crowned across individual and team categories over a six-to-seven-day run.',
    body: `<p>The 2026 Aufguss WM Finals run September 13 to 20 at Satama Sauna Resort in Germany. This is the global championship for Show Aufguss, the theatrical category that combines costuming, music, lighting, and narrative with the technical ritual mechanics. The 2025 edition in Verona drew finalists from 18 countries and a combined audience of more than 30,000 over six days.</p>

<h2>Categories</h2>

<p>Singles and team formats both crown champions. Singles performances run up to 15 minutes; team performances up to 15 minutes as coordinated group choreography. Maximum achievable scores are 75 points for singles and 90 for teams, across professionalism, heat distribution, towel technique, fragrance dosing, and theatrical implementation.</p>

<h2>Sponsorship and Brand Context</h2>

<p>The 2025 Worlds in Verona was title-sponsored by Harvia Group, with the event sauna powered by an EOS heater, the German premium brand Harvia has owned since 2020. That sponsorship is a <a href="/article/aufguss-world-championships-2025-verona-harvia-eos-sponsor">deliberate brand-positioning play</a> for the European commercial heater market and is expected to continue at the 2026 edition.</p>

<div class="callout">
<strong>Event details:</strong> September 13 to 20, 2026. Satama Sauna Resort, Germany. Aufguss WM Finals (Show category). Singles and team competitions.
</div>`,
    tags: ['Aufguss', 'Germany', 'Satama Sauna Resort', 'World Masters', 'World Championships'],
    organizations: ['Aufguss World Masters', 'Harvia'],
  },
  {
    id: 'modern-classic-cup-2026',
    slug: 'modern-classic-cup-finals-2026-farris-bad',
    title: '2026 Modern Classic Cup Finals',
    category: 'Aufguss',
    startDate: '2026-10-01',
    endDate: '2026-10-04',
    location: 'Larvik, Norway',
    venue: 'Farris Bad',
    venueUrl: 'https://www.farrisbad.no/',
    officialUrl: 'https://www.aufguss-wm.com/',
    image: 'https://static.thatsup.website/364/61913/responsive-images/Taket_Tine-%2B-Julia___media_library_original_2429_1619.jpg?v=1750164053',
    imageCaption: 'The rooftop terrace at Farris Bad in Larvik, Norway. Photo: Farris Bad.',
    summary: 'The global championship for traditional-technique Aufguss, devoid of costumes and theatrics. Farris Bad hosts the final round where practitioners are judged strictly on music, scent, and towel mechanics.',
    body: `<p>The 2026 Modern Classic Cup Finals run October 1 to 4 at Farris Bad in Larvik, Norway. This is the global championship for the traditional-technique Aufguss format, which the governing body established to honor the ritual's therapeutic roots while Show Aufguss continues to innovate in the entertainment space.</p>

<h2>What Makes Modern Classic Different</h2>

<p>Modern Classic strips out costumes, lighting rigs, elaborate props, and theatrical narratives. Competitors rely solely on music, essential oils, and classic waving techniques to craft a transformative experience for the bathers in the room. The judging matrix removes the "Theme, Implementation & Show Elements" category entirely and weights the remaining pillars (professionalism, heat distribution, towel mechanics, fragrance dosing) more heavily.</p>

<h2>Why Farris Bad</h2>

<p>Farris Bad is one of Norway's premier wellness resorts and the training base for Lasse Eriksen, vice president of the Aufguss World Masters and mentor to several top global competitors including 2025 UK Champion Zak Moore. Hosting the Modern Classic Finals at Farris Bad is a deliberate choice to anchor the traditional format in Nordic thermal culture.</p>

<div class="callout">
<strong>Event details:</strong> October 1 to 4, 2026. Farris Bad, Larvik, Norway. Modern Classic Cup Finals. Traditional-technique global championship.
</div>`,
    tags: ['Aufguss', 'Norway', 'Farris Bad', 'Modern Classic', 'World Masters'],
    organizations: ['Aufguss World Masters'],
  },
  {
    id: 'world-sauna-day-2026',
    slug: 'world-sauna-day-2026',
    title: 'World Sauna Day 2026',
    category: 'Conference',
    startDate: '2026-04-25',
    endDate: '2026-04-25',
    location: 'Global',
    venue: 'Global observance',
    officialUrl: 'https://saunafromfinland.com/world-sauna-day/',
    image: 'https://images.unsplash.com/photo-1755610146319-1ed7eeec584b?w=1200&q=80',
    imageCaption: 'World Sauna Day is observed globally each April 25. Coordinated by Sauna from Finland.',
    summary: 'Annual global day celebrating sauna culture, coordinated by Sauna from Finland. Observed at facilities in more than 50 countries.',
    body: `<p>World Sauna Day is an annual global observance coordinated by <a href="https://saunafromfinland.com/" rel="noopener noreferrer" target="_blank">Sauna from Finland</a>, the industry association with 250+ member companies. Held every April 25, it recognizes sauna bathing as a culturally significant wellness practice and is marked by events at thermal facilities in more than 50 countries, including the US.</p>

<h2>What Happens on World Sauna Day</h2>

<p>Participating venues host free or discounted sauna sessions, educational programming on traditional Finnish löyly, Aufguss demonstrations, and community events. Many North American bathhouses and urban social-sauna clubs now run themed programming to mark the day, including <a href="/article/bathhouse-120m-revenue-social-sauna">Bathhouse in New York</a> and <a href="/article/wellness-is-coming-for-nightlife-othership-social-sauna">Othership</a>.</p>

<div class="callout">
<strong>Event details:</strong> April 25, 2026. Global. Coordinated by Sauna from Finland. Participation at public sauna facilities worldwide.
</div>

<p>For a deeper look at how the industry has commercialized communal rituals, see our <a href="/article/business-of-aufguss-us-operator-playbook">analysis of the business of Aufguss</a>.</p>`,
    tags: ['World Sauna Day', 'Sauna from Finland', 'Global', 'Culture'],
    organizations: ['Sauna from Finland'],
  },
  {
    id: 'harvia-dividend-q1-2026',
    slug: 'harvia-dividend-first-installment-2026',
    title: 'Harvia Dividend — First Installment',
    category: 'Investor',
    startDate: '2026-04-24',
    endDate: '2026-04-24',
    location: 'Helsinki, Finland',
    venue: 'Harvia Plc (Nasdaq Helsinki: HARVIA)',
    venueUrl: 'https://www.harviagroup.com/investors',
    officialUrl: 'https://www.harviagroup.com/investors',
    image: 'https://harviagroup.com/wp-content/uploads/2025/06/2024_06_19_jr_harvia_0271-1280x853.jpg',
    imageCaption: 'Harvia Group headquarters in Muurame, Finland. Photo: Harvia Group.',
    summary: 'First of two semi-annual dividend installments for Harvia Plc (Nasdaq Helsinki: HARVIA). Payment date per the 2026 Annual General Meeting decision.',
    body: `<p>Harvia Plc, the only publicly traded pure-play sauna manufacturer, pays the first installment of its 2026 dividend on April 24. The second installment typically follows in the fall. Dividend amounts and ex-dates are set at the Annual General Meeting and published in the company's investor materials.</p>

<h2>Why It Matters for the Sauna Industry</h2>

<p>Harvia is the industry's most credible public financial benchmark. Dividend consistency signals confidence in recurring cash flow from the heater and accessories business and the recently consolidated EOS premium commercial segment. For the 2024 fiscal year, Harvia reported EUR 175.2 million in revenue and has guided toward continued margin expansion through 2026.</p>

<p>For SaunaNews subscribers tracking Harvia at the operator and investor level, see the <a href="/harvia">Harvia hub</a> and our coverage of the <a href="/article/aufguss-world-championships-2025-verona-harvia-eos-sponsor">Harvia Group sponsorship of the 2025 Aufguss World Championships</a>.</p>

<div class="callout">
<strong>Event details:</strong> April 24, 2026. Harvia Plc (HARVIA). 2026 dividend first installment. Second installment typically paid in Q4.
</div>`,
    tags: ['Harvia', 'Dividend', 'Investor Relations', 'Nasdaq Helsinki'],
    organizations: ['Harvia'],
  },
  {
    id: 'harvia-q1-2026',
    slug: 'harvia-q1-2026-interim-report',
    title: 'Harvia Q1 2026 Interim Report',
    category: 'Investor',
    startDate: '2026-05-07',
    endDate: '2026-05-07',
    location: 'Helsinki, Finland',
    venue: 'Harvia Plc (Nasdaq Helsinki: HARVIA)',
    venueUrl: 'https://www.harviagroup.com/investors',
    officialUrl: 'https://www.harviagroup.com/investors',
    image: 'https://harviagroup.com/wp-content/uploads/2025/05/Kiuas_Kuva1-780x439.jpg',
    imageCaption: 'Harvia Cilindro electric heater. Photo: Harvia Group.',
    summary: 'Harvia Plc publishes its Q1 2026 interim report. Q1 2025 printed EUR 52 million in revenue and 22.7% year-over-year growth.',
    body: `<p>Harvia Plc publishes its Q1 2026 interim report on May 7. Analysts and industry observers watch Q1 closely because it captures the early-year channel-fill pattern and the ramp of EOS-branded premium commercial product into the European market.</p>

<h2>What to Watch</h2>

<p>Q1 2025 was a standout: EUR 52 million in revenue, +22.7% year-over-year. Harvia management pointed to strong North American demand, continued EOS integration, and Asia-Pacific growth. The 2026 comp is against that high base, so watch for whether Harvia continues to grow double-digits off that number or reverts to mid-single-digit organic growth.</p>

<p>Related coverage: <a href="/article/aufguss-world-championships-2025-verona-harvia-eos-sponsor">Harvia Group's EOS sponsorship of Aufguss Worlds</a>, and the Harvia <a href="/harvia">Harvia hub on SaunaNews</a>.</p>

<div class="callout">
<strong>Event details:</strong> May 7, 2026. Q1 2026 Interim Report. Harvia Plc (HARVIA). Report typically issued pre-market with a live webcast for analysts.
</div>`,
    tags: ['Harvia', 'Earnings', 'Q1 2026', 'Investor Relations'],
    organizations: ['Harvia'],
  },
  {
    id: 'world-sauna-forum-2026',
    slug: 'world-sauna-forum-2026',
    title: 'World Sauna Forum 2026',
    category: 'Conference',
    startDate: '2026-06-09',
    endDate: '2026-06-11',
    location: 'Jyvaskyla, Finland',
    venue: 'Paviljonki Convention Centre',
    venueUrl: 'https://paviljonki.fi/',
    officialUrl: 'https://worldsaunaforum.com/',
    image: 'https://www.saunafromfinland.com/wp-content/uploads/2025/10/World-Sauna-Forum-2026-logo-square-image-bg.jpg',
    imageCaption: 'World Sauna Forum 2026 brings industry, manufacturing, and wellness research together in Jyvaskyla, Finland.',
    summary: 'The largest global sauna industry conference. Manufacturers, distributors, investors, and researchers gather in Jyvaskyla, Finland for keynotes, panels, and a trade exhibition.',
    body: `<p>The World Sauna Forum runs June 9 to 11, 2026 at Paviljonki Convention Centre in Jyvaskyla, Finland. It is the largest sauna-focused industry conference in the world and the one event where the full commercial stack (manufacturers, distributors, dealers, commercial operators, academics, and investors) gathers in person.</p>

<h2>Why It Matters</h2>

<p>The Forum is the canonical venue where Harvia, Tylo, Finnleo, HUUM, Saunum, Narvi, Auroom, Thermory, and other leading brands present 2026 roadmaps and meet with distributors. Organizers typically host a Sauna Region Week of ancillary programming across Jyvaskyla to coincide.</p>

<p>For SaunaNews readers tracking the Nordic manufacturing stack, related coverage includes <a href="/article/estonia-sauna-manufacturing-powerhouse">our piece on Estonia's manufacturing base</a> and <a href="/article/finnish-lumber-prices-18-month-high">Finnish lumber pricing</a>.</p>

<div class="callout">
<strong>Event details:</strong> June 9 to 11, 2026. Paviljonki, Jyvaskyla, Finland. Industry conference and trade exhibition. Hosted in conjunction with Sauna Region Week.
</div>`,
    tags: ['World Sauna Forum', 'Jyvaskyla', 'Finland', 'Conference', 'Industry'],
    organizations: ['Sauna from Finland'],
  },
  {
    id: 'harvia-h1-2026',
    slug: 'harvia-h1-2026-half-year-report',
    title: 'Harvia H1 2026 Half-Year Report',
    category: 'Investor',
    startDate: '2026-08-06',
    endDate: '2026-08-06',
    location: 'Helsinki, Finland',
    venue: 'Harvia Plc (Nasdaq Helsinki: HARVIA)',
    venueUrl: 'https://www.harviagroup.com/investors',
    officialUrl: 'https://www.harviagroup.com/investors',
    image: 'https://harviagroup.com/wp-content/uploads/2025/06/EOS_1232marg.jpg',
    imageCaption: 'An EOS commercial heater from the Harvia Group portfolio. Photo: Harvia Group.',
    summary: 'Harvia Plc publishes its H1 2026 half-year report. First look at margin trajectory for the full year.',
    body: `<p>Harvia Plc publishes its H1 2026 half-year report on August 6. This report combines Q2 results with the H1 narrative and is typically where the company updates full-year guidance.</p>

<h2>What to Watch</h2>

<p>The H1 report is where seasonal demand patterns (strong Q4, softer Q2) get normalized into an annual picture. Operating margin trajectory, EOS integration progress, and North American growth are the three structural variables SaunaNews will flag in our post-report coverage.</p>

<p>See also: <a href="/harvia">the Harvia hub</a> and Harvia's <a href="/article/aufguss-world-championships-2025-verona-harvia-eos-sponsor">EOS-branded brand-building push</a> that is showing up in operating expense lines.</p>

<div class="callout">
<strong>Event details:</strong> August 6, 2026. Harvia Plc (HARVIA). H1 2026 Half-Year Report. Analyst call with live webcast.
</div>`,
    tags: ['Harvia', 'Earnings', 'H1 2026', 'Investor Relations'],
    organizations: ['Harvia'],
  },
  {
    id: 'intl-sauna-congress-2026',
    slug: 'international-sauna-congress-2026-oslo',
    title: 'XIX International Sauna Congress',
    category: 'Conference',
    startDate: '2026-09-24',
    endDate: '2026-09-26',
    location: 'Oslo, Norway',
    venue: 'Oslo Congress Center',
    officialUrl: 'https://www.isa.sauna.fi/',
    image: 'https://www.saunafromfinland.com/wp-content/uploads/2024/12/International-Sauna-Congress-logo-3.jpg',
    imageCaption: 'The International Sauna Congress is the biennial research and industry summit of the International Sauna Association.',
    summary: 'Biennial congress of the International Sauna Association covering research, standards, public health, and commercial sauna practice. Hosted by the Norwegian Sauna Association in 2026.',
    body: `<p>The XIX International Sauna Congress runs September 24 to 26, 2026 in Oslo, Norway, hosted by the Norwegian Sauna Association on behalf of the International Sauna Association (ISA). The Congress is biennial and is where the scientific, medical, and commercial-standards communities converge on the same agenda.</p>

<h2>What Happens Here</h2>

<p>Peer-reviewed research presentations on cardiovascular, immune, and mental health outcomes of sauna bathing. Standards discussions (including the new EN 18164 European sauna standard). Commercial-operator sessions on programming, safety protocols, and ventilation design. Policy panels on public sauna access and cultural heritage.</p>

<p>Related SaunaNews coverage: <a href="/article/sauna-immune-system-research-laukkanen">Professor Laukkanen's immune research</a>, and <a href="/article/en-18164-europe-first-sauna-standard-nordic-pushback">the EN 18164 standard debate</a>.</p>

<div class="callout">
<strong>Event details:</strong> September 24 to 26, 2026. Oslo, Norway. XIX International Sauna Congress. Biennial ISA gathering.
</div>`,
    tags: ['International Sauna Congress', 'Oslo', 'ISA', 'Conference', 'Research'],
    organizations: ['International Sauna Association'],
  },
  {
    id: 'interbad-2026',
    slug: 'interbad-2026-stuttgart',
    title: 'Interbad 2026',
    category: 'Trade Show',
    startDate: '2026-10-06',
    endDate: '2026-10-08',
    location: 'Stuttgart, Germany',
    venue: 'Messe Stuttgart',
    venueUrl: 'https://www.messe-stuttgart.de/',
    officialUrl: 'https://www.interbad.de/',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    imageCaption: 'Interbad is the largest European trade show for commercial wellness, pool, and sauna infrastructure.',
    summary: 'Biennial European trade show for commercial sauna, pool, and thermal wellness facilities. Major manufacturer showcase at Messe Stuttgart.',
    body: `<p>Interbad 2026 runs October 6 to 8 at Messe Stuttgart in Germany. The show is biennial and serves as the largest European trade exhibition for commercial sauna, pool, thermal wellness, and public bath infrastructure. Most major European manufacturers exhibit (Klafs, Tylo, Harvia/EOS, Saunum, Narvi, and many more), and specifying consultants and hospitality buyers attend in force.</p>

<h2>Why US Operators Should Care</h2>

<p>Interbad is the most efficient single-trip way for a US hospitality operator or developer to survey the full European commercial sauna vendor landscape. Three days, one floor, every major manufacturer, and a concentration of distributors who export to North America.</p>

<p>Related SaunaNews coverage: <a href="/article/bathhouse-120m-revenue-social-sauna">Bathhouse's $120M revenue model</a> and <a href="/article/business-of-aufguss-us-operator-playbook">the unit economics of social sauna programming</a>.</p>

<div class="callout">
<strong>Event details:</strong> October 6 to 8, 2026. Messe Stuttgart, Germany. Biennial European commercial wellness trade show.
</div>`,
    tags: ['Interbad', 'Stuttgart', 'Trade Show', 'Germany', 'Commercial Wellness'],
  },
  {
    id: 'harvia-q3-2026',
    slug: 'harvia-q3-2026-interim-report',
    title: 'Harvia Q3 2026 Interim Report',
    category: 'Investor',
    startDate: '2026-10-29',
    endDate: '2026-10-29',
    location: 'Helsinki, Finland',
    venue: 'Harvia Plc (Nasdaq Helsinki: HARVIA)',
    venueUrl: 'https://www.harviagroup.com/investors',
    officialUrl: 'https://www.harviagroup.com/investors',
    image: 'https://harviagroup.com/wp-content/uploads/2025/06/Almost-Heaven_1232marg.jpg',
    imageCaption: 'Almost Heaven Saunas, acquired by Harvia Group, is a key North American growth vector. Photo: Harvia Group.',
    summary: 'Harvia Plc publishes its Q3 2026 interim report. The last scheduled report before full-year preliminary results in Q1 2027.',
    body: `<p>Harvia Plc publishes its Q3 2026 interim report on October 29. Q3 is seasonally softer for heater sell-in and stronger for commercial/wellness channel shipments, so the report profile is different from Q1.</p>

<h2>What to Watch</h2>

<p>This is the last scheduled quarterly report before Q4 shipments finalize the 2026 full-year picture. Watch for any full-year guidance revision, management commentary on 2027 setup (especially around the continued integration of Almost Heaven Saunas and EOS), and any capital allocation signals ahead of the AGM.</p>

<p>Related: <a href="/harvia">Harvia hub on SaunaNews</a>.</p>

<div class="callout">
<strong>Event details:</strong> October 29, 2026. Harvia Plc (HARVIA). Q3 2026 Interim Report. Analyst call with live webcast.
</div>`,
    tags: ['Harvia', 'Earnings', 'Q3 2026', 'Investor Relations'],
    organizations: ['Harvia'],
  },
  {
    id: 'mondex-teno-kalla-2026',
    slug: 'mondex-teno-kalla-2026-release',
    title: 'Mondex Teno and Kalla Updated Models',
    category: 'Product Launch',
    startDate: '2026-05-01',
    endDate: '2026-05-01',
    location: 'Finland',
    venue: 'Mondex Group',
    venueUrl: 'https://www.mondexgroup.fi/',
    officialUrl: 'https://www.mondexgroup.fi/',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    imageCaption: 'Mondex releases updated Teno and Kalla heater models. Photo: stock.',
    summary: 'Finnish heater maker Mondex ships refreshed Teno and Kalla models with updated controllers and efficiency improvements.',
    body: `<p>Finnish heater manufacturer Mondex releases refreshed versions of its Teno and Kalla heaters on May 1, 2026. The update targets controller hardware, efficiency improvements, and connectivity, and lands alongside narrower Narvi revisions.</p>

<p>See our earlier reporting on the <a href="/article/mondex-narvi-heater-updates-2026">Mondex and Narvi 2026 heater roadmap</a> for context on where these models sit in the Nordic premium tier.</p>

<div class="callout">
<strong>Event details:</strong> May 1, 2026. Mondex Group (Finland). Updated Teno and Kalla heater models.
</div>`,
    tags: ['Mondex', 'Teno', 'Kalla', 'Heater', 'Finland', 'Product Launch'],
  },
  {
    id: 'homecraft-tke2-2-wifi-2026',
    slug: 'homecraft-tke2-2-wifi-controller-2026',
    title: 'Homecraft TKE2-2 WiFi Sauna Controller',
    category: 'Product Launch',
    startDate: '2026-04-01',
    endDate: '2026-04-01',
    location: 'Surrey, BC, Canada',
    venue: 'Homecraft Saunas',
    venueUrl: 'https://homecraftsaunas.com/',
    officialUrl: 'https://homecraftsaunas.com/',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    imageCaption: 'Homecraft Saunas ships the TKE2-2 WiFi sauna controller.',
    summary: 'Canadian heater maker Homecraft ships a WiFi-connected controller for residential and light-commercial saunas.',
    body: `<p>Homecraft Saunas, Canada's oldest heater manufacturer, ships the TKE2-2 WiFi sauna controller in April 2026. The controller targets residential and light-commercial installations and brings app-based scheduling and diagnostics to the Homecraft heater line.</p>

<p>See our <a href="/article/homecraft-wifi-sauna-controller-launch">launch coverage</a> for the full product brief.</p>

<div class="callout">
<strong>Event details:</strong> Shipping in April 2026. Homecraft Saunas (Surrey, BC, Canada). TKE2-2 WiFi sauna controller.
</div>`,
    tags: ['Homecraft', 'Controller', 'WiFi', 'Canada', 'Product Launch'],
  },
  {
    id: 'huum-core-us-2026',
    slug: 'huum-core-us-launch-2026',
    title: 'HUUM Core US Launch',
    category: 'Product Launch',
    startDate: '2026-03-15',
    endDate: '2026-03-15',
    location: 'USA',
    venue: 'HUUM',
    venueUrl: 'https://huumsauna.com/',
    officialUrl: 'https://huumsauna.com/',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    imageCaption: 'The HUUM Core, a bench-embedded wood heater, launches in the US market in March 2026.',
    summary: 'HUUM launches the Core, the only electric heater that disappears into the sauna bench, in the US market.',
    body: `<p>Estonian heater maker HUUM launches the Core in the US market in March 2026. The Core is a bench-embedded heater that sits flush under the lowest bench rather than in a traditional corner stove configuration. See our <a href="/article/huum-core-us-launch-bench-embedded-wood-heater">launch coverage</a> for the design and install brief.</p>

<div class="callout">
<strong>Event details:</strong> March 15, 2026 US launch. HUUM (Estonia). Core bench-embedded heater.
</div>`,
    tags: ['HUUM', 'Core', 'Heater', 'Estonia', 'US Launch', 'Product Launch'],
  },
];

export function getEventsByCategory(category: EventCategory): SaunaEvent[] {
  return events
    .filter((e) => e.category === category)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

export function getEventsByOrganization(organization: EventOrganization): SaunaEvent[] {
  return events
    .filter((e) => e.organizations?.includes(organization))
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

export function getEventBySlug(slug: string): SaunaEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export interface UpcomingEventsFilter {
  category?: EventCategory;
  organization?: EventOrganization;
  excludeSlug?: string;
}

export function getUpcomingEvents(count?: number, filter?: EventCategory | UpcomingEventsFilter): SaunaEvent[] {
  const now = new Date();
  const cutoff = new Date(now.getTime() - 1000 * 60 * 60 * 24);
  const normalized: UpcomingEventsFilter =
    typeof filter === 'string' ? { category: filter } : filter ?? {};
  const filtered = events
    .filter((e) => new Date(e.endDate) >= cutoff)
    .filter((e) => (normalized.category ? e.category === normalized.category : true))
    .filter((e) => (normalized.organization ? e.organizations?.includes(normalized.organization) : true))
    .filter((e) => (normalized.excludeSlug ? e.slug !== normalized.excludeSlug : true))
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  return count ? filtered.slice(0, count) : filtered;
}

export const EVENT_CATEGORY_SLUGS: Record<EventCategory, string> = {
  Aufguss: 'aufguss',
  Conference: 'conferences',
  'Trade Show': 'trade-shows',
  Investor: 'investor',
  'Product Launch': 'product-launches',
  Industry: 'industry',
  Competition: 'competitions',
};

export const EVENT_CATEGORY_BY_SLUG: Record<string, EventCategory> = Object.fromEntries(
  (Object.entries(EVENT_CATEGORY_SLUGS) as [EventCategory, string][]).map(([category, slug]) => [
    slug,
    category,
  ])
);

export const EVENT_CATEGORY_DESCRIPTIONS: Record<EventCategory, string> = {
  Aufguss:
    'Global and regional Aufguss ritual championships, from the UK Nationals at Galgorm to the World Masters circuit.',
  Conference:
    'Industry conferences: World Sauna Forum, the International Sauna Congress, and the annual World Sauna Day observance.',
  'Trade Show':
    'Commercial wellness trade exhibitions where manufacturers, specifiers, and operators convene.',
  Investor:
    'Investor calendar for public sauna-industry companies. Currently tracking Harvia Plc (Nasdaq Helsinki: HARVIA) with Saunum, Masco, and Kohler additions planned.',
  'Product Launch':
    'Major heater, control, and accessory launches from the manufacturers SaunaNews covers.',
  Industry: 'Other industry gatherings and meetings.',
  Competition: 'Non-Aufguss sauna competitions, where they exist.',
};

export function formatEventDateRange(event: SaunaEvent): string {
  const start = new Date(event.startDate + 'T12:00:00Z');
  const end = new Date(event.endDate + 'T12:00:00Z');
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', timeZone: 'UTC' };
  const yearOpts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' };
  const sameMonth =
    start.getUTCMonth() === end.getUTCMonth() && start.getUTCFullYear() === end.getUTCFullYear();
  const sameDay =
    start.getUTCFullYear() === end.getUTCFullYear() &&
    start.getUTCMonth() === end.getUTCMonth() &&
    start.getUTCDate() === end.getUTCDate();
  if (sameDay) return new Intl.DateTimeFormat('en-US', yearOpts).format(start);
  if (sameMonth) {
    return `${new Intl.DateTimeFormat('en-US', opts).format(start)}–${end.getUTCDate()}, ${start.getUTCFullYear()}`;
  }
  return `${new Intl.DateTimeFormat('en-US', opts).format(start)} – ${new Intl.DateTimeFormat('en-US', yearOpts).format(end)}`;
}
