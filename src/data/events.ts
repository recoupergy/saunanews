export type EventCategory = 'Aufguss' | 'Trade Show' | 'Industry' | 'Competition';

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
    image: 'https://images.unsplash.com/photo-1755610146319-1ed7eeec584b?w=1200&q=80',
    imageCaption: 'A communal sauna around a stone-filled heater. The UK Championships judge both Show and Modern Classic categories.',
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
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    imageCaption: 'A US performance sauna. The 2026 Aufguss USA Nationals are the first with expanded qualification into the World Championships.',
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
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    imageCaption: 'Thermen Bussloo is one of the premier Dutch thermal destinations and hosts the world playoffs in August.',
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
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    imageCaption: 'The Aufguss WM Finals crown the global champion of Show Aufguss. The 2025 Verona edition drew finalists from 18 countries.',
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
    image: 'https://images.unsplash.com/photo-1755610146319-1ed7eeec584b?w=1200&q=80',
    imageCaption: 'Farris Bad, Norway. The Modern Classic Cup strips out costumes and theatrics, judging pure thermal technique.',
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
  },
];

export function getEventsByCategory(category: EventCategory): SaunaEvent[] {
  return events
    .filter((e) => e.category === category)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

export function getEventBySlug(slug: string): SaunaEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(count?: number, category?: EventCategory): SaunaEvent[] {
  const now = new Date();
  const cutoff = new Date(now.getTime() - 1000 * 60 * 60 * 24);
  const filtered = events
    .filter((e) => new Date(e.endDate) >= cutoff)
    .filter((e) => (category ? e.category === category : true))
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  return count ? filtered.slice(0, count) : filtered;
}

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
