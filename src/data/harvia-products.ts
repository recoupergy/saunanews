export type ProductCategory = 'electric-heater' | 'wood-burning-heater' | 'controller' | 'smart-sensor' | 'combi-heater';
export type ProductPosition = 'entry' | 'mid' | 'premium' | 'commercial' | 'flagship';

export interface ProductQuote {
  quote: string;
  source: string;
  context: string;
  date: string;
  url?: string;
}

export interface ProductSize {
  model: string;
  kw: string;
  roomSize: string;
  stones?: string;
  voltage?: string;
  note?: string;
}

export interface InsiderNote {
  title: string;
  body: string;
}

export interface HarviaProduct {
  slug: string;
  name: string;
  subtitle: string;
  series: string;
  category: ProductCategory;
  position: ProductPosition;
  tagline: string;
  intro: string;
  heroImage: string;
  gallery: string[];
  videoEmbedId?: string;
  specsSummary: Array<{ label: string; value: string }>;
  sizes: ProductSize[];
  keyFeatures: string[];
  quotes: ProductQuote[];
  insiderNotes: InsiderNote[];
  bestFor: string;
  warranty: string;
  madeIn: string;
  launched: string;
  lastMentioned: string;
  lastMentionContext: string;
  relatedProductSlugs: string[];
  harviaUrl: string;
}

export const harviaProducts: HarviaProduct[] = [
  {
    slug: 'cilindro-electric',
    name: 'Harvia Cilindro (Electric)',
    subtitle: 'The cylindrical tower electric heater that made Harvia famous',
    series: 'Cilindro PC series (electric)',
    category: 'electric-heater',
    position: 'flagship',
    tagline: 'A tall column of stones inside a stainless steel lattice. Up to 265 lbs of stone mass, soft löyly that rivals a wood-fired sauna, and the visual signature competitors keep copying.',
    intro:
      'The electric Cilindro is the product that defined modern premium electric sauna heating. The cylindrical tower format holds 180 to 265 pounds of stones in an open stainless lattice, exposing more stone surface to the room than any comparably sized heater. In real use, that translates to steam character much closer to a wood-fired sauna than to a conventional wall heater. The Cilindro has been Harvia\'s flagship residential electric heater for over a decade and is specified across North American residential, high-end specialty, and commercial installations. The PC66E "Half" variant mounts flush against a wall; the PC100 and PC110 scale to 208V three-phase commercial service.',
    heroImage: 'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2023/06/Harvia-Cilindro.jpg',
    gallery: [
      'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2023/06/Harvia-Cilindro.jpg',
      'https://www.datocms-assets.com/41658/1694070415-harvia_cilindroh_e_hpcs_usa_f6_web.jpg',
      'https://www.datocms-assets.com/41658/1618819376-harviacilindropc70-90blacksteeld1.jpeg',
    ],
    specsSummary: [
      { label: 'Power range', value: '6.8 – 10.8 kW' },
      { label: 'Stone capacity', value: '180 – 265 lbs' },
      { label: 'Room size', value: '210 – 670 cu ft' },
      { label: 'Voltage', value: '240V / 208V' },
      { label: 'Mounting', value: 'Floor, freestanding' },
      { label: 'Made in', value: 'Muurame, Finland' },
    ],
    sizes: [
      { model: 'PC66E (Half)', kw: '6.8 kW', roomSize: '210 – 335 cu ft', stones: '~180 lbs', voltage: '240V 1PH', note: 'Wall-flush variant' },
      { model: 'PC70', kw: '6.8 kW', roomSize: '212 – 388 cu ft', stones: '~200 lbs', voltage: '240V 1PH' },
      { model: 'PC90', kw: '9 kW', roomSize: '282 – 494 cu ft', stones: '~200 lbs', voltage: '240V 1PH' },
      { model: 'PC100', kw: '10.5 kW', roomSize: '318 – 635 cu ft', stones: '~265 lbs', voltage: '208 / 240V' },
      { model: 'PC110', kw: '10.8 kW', roomSize: '318 – 670 cu ft', stones: '~265 lbs', voltage: '208 / 240V 3PH', note: 'Commercial three-phase' },
    ],
    keyFeatures: [
      'Open stainless-steel lattice exposes more stones to room air than any comparably sized heater',
      'Pour water on the side for gentle steam; pour directly on top for a hard löyly',
      'Full 304-grade stainless shell',
      'Compatible with Xenio and Fenix WiFi control units',
      'PC66E Half-heater variant mounts flush against a wall',
      'PC110 supports 208V three-phase for commercial service',
      'Made in Finland (Muurame) — Finnish Key Flag product',
    ],
    quotes: [
      {
        quote:
          'Quarter four 2025 was the strongest sales quarter really in the history of the company.',
        source: 'CFO Ari Vesterinen, Q4 2025 earnings call',
        context: 'Full-year 2025 wrap — the electric heater line led by Cilindro, Virta Pro, and Spirit is the largest revenue segment',
        date: '2026-02-12',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvia-q4-2025-sees-revenue-growth-but-stock-dips-93CH-4502032',
      },
      {
        quote:
          'We make clearly more than 200,000 heaters per year and give and take maybe 20,000 sauna cabins.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'Annual Harvia Group unit volume — Cilindro is part of the 200,000+ heater figure',
        date: '2025-11-06',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvias-q3-2025-shows-solid-growth-stock-surges-93CH-4336891',
      },
      {
        quote:
          'We do have actually a factory in Asia. So since 2005, this is actually the 20th anniversary of our factory in Guangzhou.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'The Guangzhou facility produces heating elements and resistors that are assembled into the Cilindro electric family in Muurame',
        date: '2025-11-06',
      },
      {
        quote:
          'Heating equipment was the primary growth driver, growing by 13% and adding EUR 3.4 million to the top line.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'FY 2025 product-category growth call-out',
        date: '2026-02-12',
      },
    ],
    insiderNotes: [
      {
        title: 'Stack the bottom third tight, leave the top two-thirds loose',
        body:
          'Cilindro löyly depends on stone stacking. Tight-pack the bottom third so heat reflects back into the elements. Leave the top two-thirds loose so steam can travel. Tight top stones cut steam output by 30-40%. Harvia\'s install manual calls this out; most DIY installs ignore it and then complain.',
      },
      {
        title: '208V vs 240V on PC100 and PC110',
        body:
          'PC100 and PC110 ship with element sets sized to the service they\'re ordered against. A 240V unit wired to a 208V panel runs at 75% of rated output and never reaches target temperature. Before ordering, confirm your panel: residential is usually 240V single-phase; commercial is frequently 208V three-phase.',
      },
      {
        title: 'Use washed olivine-diabase in 2-4 inch range',
        body:
          'Sparks from a Cilindro almost always trace to wrong stones, not the heater. Harvia specifies washed olivine-diabase in a 2-4 inch size. Garden-center bag stones pack too tight, hide dust in crevices that ignites on exposed elements, and often shatter under thermal cycling. Use the specified stone and wash it before first fire.',
      },
      {
        title: 'Commercial: replace elements at 8,000 hours, not at failure',
        body:
          'Hotel spas running 10+ hours daily see Cilindro element fatigue at about 8,000 hours (roughly 2-3 years at heavy duty). Proactive replacement at that interval avoids the 48-hour downtime that follows mid-service failure. The elements themselves are under $300 a set; the revenue hit from a closed sauna isn\'t.',
      },
    ],
    bestFor:
      'Rooms 318-670 cu ft, glass-front builds where the stone column is part of the design, and commercial sites that need 208V three-phase. Skip for rooms under 210 cu ft — at that size you\'re paying for stone mass you\'ll never use.',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland (heating elements partly from Guangzhou, China since 2005)',
    launched: 'Electric Cilindro in current form: early 2010s, ongoing refresh',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — heating equipment +13% YoY; record quarterly sales',
    relatedProductSlugs: ['cilindro-wood', 'virta-pro', 'spirit', 'xenio-fenix'],
    harviaUrl: 'https://www.harvia.com/en-US/products/HPCE900400M/cilindro-pc90e-90-kw-black-steel',
  },
  {
    slug: 'cilindro-wood',
    name: 'Harvia Cilindro Wood-Burning',
    subtitle: 'The 75th anniversary wood-fired pillar. Launched January 2025.',
    series: 'Cilindro WKPC16 / WKPC20',
    category: 'wood-burning-heater',
    position: 'flagship',
    tagline: 'The Cilindro visual signature, now wood-fired. 265 lbs of stone mass, glass hatch for firelight, unique rear ventilation duct. A genuinely new product, not a refresh.',
    intro:
      'The wood-burning Cilindro is a new product, announced 30 January 2025 as the first highlight of Harvia\'s 75th anniversary year. Development was completed in Q3 2024, and sales started in early 2025 after an October 2024 launch debut. It takes the cylindrical pillar that made the electric Cilindro famous and rebuilds it as a wood-fired heater: 120 kg (~265 lbs) of stones, a stainless steel shell, a cast-iron firebox with a glass hatch showing flame through the column, and a distinctive rear ventilation duct that accelerates room heat-up. Finnish Key Flag product, designed and built in Harvia\'s Muurame factory.',
    heroImage: 'https://www.datocms-assets.com/41658/1727418650-harvia_cilindro16_wkpc16s_f6.jpg',
    gallery: [
      'https://www.datocms-assets.com/41658/1727418650-harvia_cilindro16_wkpc16s_f6.jpg',
      'https://www.datocms-assets.com/41658/1727419505-harvia_cilindro16_wkpc16s_d1.jpg',
      'https://www.datocms-assets.com/41658/1727419706-harvia_cilindro_wkpc16s_wkpc20s_accessories_p3.png',
    ],
    specsSummary: [
      { label: 'Fuel', value: 'Wood-burning' },
      { label: 'Stone capacity', value: '~265 lbs (120 kg)' },
      { label: 'Launched', value: '30 January 2025' },
      { label: 'Construction', value: 'Stainless shell + cast-iron firebox' },
      { label: 'Made in', value: 'Muurame, Finland' },
      { label: 'Certification', value: 'Finnish Key Flag product' },
    ],
    sizes: [
      { model: 'WKPC16S (Cilindro 16)', kw: 'Wood-fired, ~16 kW equivalent', roomSize: 'Medium saunas', stones: '~265 lbs (120 kg)', note: 'Steel shell; US-available' },
      { model: 'WKPC20S (Cilindro 20)', kw: 'Wood-fired, ~20 kW equivalent', roomSize: 'Larger rooms', stones: '~265 lbs+', note: 'Steel shell; larger variant' },
    ],
    keyFeatures: [
      '~265 lbs (120 kg) of stones — generous for strong steam',
      'Cast-iron glass hatch shows flame through the pillar',
      'Unique rear ventilation duct accelerates room heat-up',
      'Stainless outer shell (quiet operation)',
      'Replaceable air control panels in the firebox',
      'Finnish Key Flag — designed and made in Muurame',
      'Accessories: WL200PC protective sheath, WL300PC smoke pipe cover, WP250PC 25-liter water heater',
    ],
    quotes: [
      {
        quote:
          'One highlight of this milestone year is the expansion of the popular Harvia Cilindro series to include wood-burning heaters. The heater features a generous stone capacity for excellent steam production, a unique ventilation duct for fast heating, and a durable stainless-steel shell that ensures quiet operation.',
        source: 'Harvia Plc press release, 75th anniversary announcement',
        context: 'Official product launch statement',
        date: '2025-01-30',
        url: 'https://harviagroup.com/harvia-celebrates-75-years-of-healing-with-heat-4570/',
      },
      {
        quote:
          'The Harvia Cilindro wood-burning pillar heater is a Finnish Key Flag product, designed and manufactured in Harvia\'s heater factory in Muurame, Finland with over 70 years of experience.',
        source: 'harvia.com Cilindro wood-burning product page',
        context: 'Made-in-Finland positioning',
        date: '2025-01-30',
        url: 'https://www.harvia.com/en-US/cilindro-wood-burning-heater/',
      },
      {
        quote:
          'We want to be an active market maker to grow the sauna market and create exciting innovations in sauna solutions, products, accessories, and digital services to deliver great sauna experiences.',
        source: 'CEO Matias Järnefelt, Capital Markets Day 2024',
        context: 'Strategic positioning preceding the wood-burning Cilindro and MyHarvia Sensor launches',
        date: '2024-05-29',
        url: 'https://harviagroup.com/harvia-updates-its-strategy-and-long-term-financial-targets-5798/',
      },
      {
        quote:
          'Harvia headquarters are in Muurame, Finland, adjacent to its largest sauna and sauna component manufacturing facility.',
        source: 'Harvia Q4 2025 press release',
        context: 'On the Muurame facility where the Cilindro wood-burning is produced',
        date: '2026-02-12',
        url: 'https://www.globenewswire.com/news-release/2026/02/12/3236888/0/en/Harvia-Q4-2025-Growth-in-all-sales-regions-continued.html',
      },
    ],
    insiderNotes: [
      {
        title: 'Don\'t confuse the two Cilindros',
        body:
          'Electric PC-series and wood-burning WKPC-series are different products inside the same visual family. Different firebox (none vs cast-iron), different base, different chimney requirements, different shell internals. Retailers sometimes cross-list. Always confirm the model code (PC66E/PC70/PC90/PC100/PC110 = electric; WKPC16/WKPC20 = wood) before ordering.',
      },
      {
        title: 'The rear ventilation duct is the one real innovation',
        body:
          'The rear duct pulls cool room air up the back of the pillar and releases it heated at the top. This accelerates room heat-up by 10-15 minutes vs the Legend 150 in comparable rooms. Harvia didn\'t invent the concept, but they\'re the first to package it inside a stone-tower wood burner.',
      },
      {
        title: 'You need a 6-inch insulated Class A chimney',
        body:
          'Ships with a 115 mm (4.5") Finnish flue collar. North American code requires 6". Every US/Canada install needs a 4.5"-to-6" adapter plus insulated Class A chimney all the way from heater collar to termination above the roof. Budget $2,500-$4,000 for the chimney package. Single-wall pipe on this output is both code violation and fire hazard.',
      },
      {
        title: 'Season the stones before first real session',
        body:
          '120 kg of stone takes real time to relieve internal thermal stress. Harvia recommends two or three "seasoning" burns at moderate fire before heavy use. Skip seasoning and the first few hard sessions will pop and sometimes crack stones. Do seasoning on install day, not on session one.',
      },
    ],
    bestFor:
      'Off-grid cabins, rural residential wood-fired builds, destination commercial properties where the visible flame is part of the guest experience. Lots that are already zoned for wood-burning appliances and owners who know how to source a year of firewood ($200-$400 annually in most US markets) and pay a chimney sweep once a year.',
    warranty: '2 years',
    madeIn: 'Muurame, Finland (Finnish Key Flag product)',
    launched: '30 January 2025 (75th anniversary launch)',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call + press release — Muurame facility commentary',
    relatedProductSlugs: ['cilindro-electric', 'legend', 'pro-36'],
    harviaUrl: 'https://www.harvia.com/en-US/cilindro-wood-burning-heater/',
  },
  {
    slug: 'virta-pro',
    name: 'Harvia Virta Pro',
    subtitle: 'Commercial electric workhorse for hotels, gyms, and spa operators',
    series: 'Virta Pro HL series',
    category: 'electric-heater',
    position: 'commercial',
    tagline: 'Dual-group elements, 200 lbs of stones, stainless construction, 10.5-22 kW. The heater specified when a commercial sauna has to run 10 hours a day for ten years.',
    intro:
      'The Virta Pro is Harvia\'s commercial electric standard. Its defining spec is the dual-group element design: heating elements are split into two independent circuits so a single failure never takes the sauna fully offline. It\'s the heater commercial dealers reach for at 16 to 22 kW for hotel spas, apartment amenities, and gym saunas between 400 and 1,400 cubic feet. Not sold as a residential unit, though residential buyers sometimes specify it for oversized rooms. Needs an external control unit: Xenio CX45 for the HL110-HL160, CX170 or Fenix FX170 for HL200 and HL220.',
    heroImage: 'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2023/03/harvia-virta-pro.jpeg',
    gallery: [
      'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2023/03/harvia-virta-pro.jpeg',
      'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2023/06/Harvia-Virta-Pro-16KW-240v-commercial-or-home-electric-sauna-heater-768x1024.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/06/092624_HA_LM_BK0221-3_WEB-1280x854-1.jpg',
    ],
    specsSummary: [
      { label: 'Power range', value: '10.5 – 22 kW' },
      { label: 'Stone capacity', value: '~200 lbs' },
      { label: 'Room size', value: '354 – 1,410 cu ft' },
      { label: 'Voltage', value: '208 / 240V 3PH' },
      { label: 'Element config', value: 'Dual-group (redundant)' },
      { label: 'Made in', value: 'Muurame, Finland' },
    ],
    sizes: [
      { model: 'HL110', kw: '10.5 kW', roomSize: '229 – 635 cu ft', stones: '~200 lbs', voltage: '208 / 240V 3PH' },
      { model: 'HL135', kw: '13.2 kW', roomSize: '282 – 812 cu ft', stones: '~200 lbs', voltage: '208 / 240V 3PH' },
      { model: 'HL160', kw: '16 kW', roomSize: '354 – 918 cu ft', stones: '~200 lbs', voltage: '208 / 240V 3PH' },
      { model: 'HL200', kw: '20 kW', roomSize: '420 – 1,130 cu ft', stones: '~200 lbs', voltage: '208 / 240V 3PH' },
      { model: 'HL220', kw: '22 kW', roomSize: '460 – 1,410 cu ft', stones: '~200 lbs', voltage: '208 / 240V 3PH' },
    ],
    keyFeatures: [
      'Dual-group heating elements — independent circuits, redundant operation',
      'Elements separated from stones for longer element life',
      'Rated for 4,000+ hours of annual use',
      'Requires external Xenio or Fenix control unit',
      'Full 304-grade stainless construction',
      'Dual 300°F high-limit thermal cutouts for commercial code',
      'US commercial install support through Harvia North America (Anoka, MN)',
    ],
    quotes: [
      {
        quote:
          'Quarter four 2025 was the strongest sales quarter really in the history of the company.',
        source: 'CFO Ari Vesterinen, Q4 2025 earnings call',
        context: 'Record quarterly sales volume — Virta Pro is the anchor commercial SKU inside heating equipment',
        date: '2026-02-12',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvia-q4-2025-sees-revenue-growth-but-stock-dips-93CH-4502032',
      },
      {
        quote:
          'Heating equipment was the primary growth driver, growing by 13% and adding EUR 3.4 million to the top line.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Product-category growth breakdown — commercial electric (Virta Pro) is the high-ASP segment inside heating equipment',
        date: '2026-02-12',
      },
      {
        quote:
          'Harvia is the best choice. You get the best product, best solution for the money you spend.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'On premium positioning in the commercial channel',
        date: '2026-02-12',
      },
      {
        quote:
          'We make clearly more than 200,000 heaters per year and give and take maybe 20,000 sauna cabins.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'Annual Harvia Group unit volume — Virta Pro is a significant share of higher-kW commercial units',
        date: '2025-11-06',
      },
    ],
    insiderNotes: [
      {
        title: 'HL160 is the hospitality sweet spot',
        body:
          'Specifiers default to HL200 for "big" saunas, but HL160 at 16 kW is usually the right call for hotel rooms under 900 cu ft. HL200\'s extra 4 kW adds nothing below 800 cu ft except a 20% operating-cost hit. Measure the room twice before stepping up.',
      },
      {
        title: 'Dual-group elements convert downtime into a maintenance window',
        body:
          'When element group A fails at month 48, swap it on a Tuesday morning with the sauna still running on group B. The sauna never fully goes offline. For a hotel running four sessions an hour, a single day of downtime costs ~$3,000 in lost amenity revenue. Virta Pro\'s element design is specifically built to eliminate that line item.',
      },
      {
        title: 'Match the controller to the kW',
        body:
          'Xenio CX45 handles up to 17 kW — correct for HL110 through HL160. HL200 and HL220 need CX170 or Fenix FX170. Undersizing the controller is the most common Virta Pro install mistake; an underspec\'d panel nuisance-trips within 30 days. Confirm controller amperage against heater nameplate before ordering.',
      },
      {
        title: 'Order the service contract at order time',
        body:
          'Commercial Virta Pro installs that sign a service contract on day one pay less over 10 years than installs that buy service reactively. Element swaps run ~$400 scheduled, ~$800+ emergency. Stone reload every 18-24 months is ~$300 scheduled, plus a sauna day of downtime if the spa didn\'t plan for it. Harvia North America (Anoka, MN) offers this direct.',
      },
    ],
    bestFor:
      'Hotel spas, fitness center saunas, apartment amenity rooms, multi-unit condos, and very large residential builds over 900 cu ft. Operations running 8+ hours a day where element redundancy matters. Anyone with 208V three-phase service on the electrical panel.',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland',
    launched: 'Virta Pro HL series — long-running commercial platform, ongoing refresh cycles',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — record quarterly sales and heating equipment +13%',
    relatedProductSlugs: ['cilindro-electric', 'xenio-fenix', 'pro-36'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/electric-sauna-heater/virta-electric-heaters/',
  },
  {
    slug: 'spirit',
    name: 'Harvia Spirit',
    subtitle: 'Wall-mount residential heater with 110 lbs of stone and WiFi',
    series: 'Spirit SP series',
    category: 'electric-heater',
    position: 'mid',
    tagline: 'Sculptural curved rock basket, UL 875 certified, WiFi-ready through MyHarvia. The heater specialty dealers recommend most for 6x6 and 6x8 rooms.',
    intro:
      'The Spirit is Harvia\'s residential sweet spot. A sculptural wall-mount form with a 110-pound stone capacity, two independent safety sensors, and standard WiFi through the MyHarvia app. It shows up in most 6x6 and 6x8 residential saunas sold through US specialty dealers. Designed and manufactured in Finland and certified to UL 875 for US and Canadian installations. Three models: SP60 (6 kW), SP80 (8 kW), SP90 (9 kW), all on standard 240V single-phase.',
    heroImage: 'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2024/01/Harvia-Spirit_Sauna_Heater-6kW-SP60E-Closeup.jpg',
    gallery: [
      'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2024/01/Harvia-Spirit_Sauna_Heater-6kW-SP60E-Closeup.jpg',
      'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2024/01/Harvia-Spirit_Sauna_Heater-6kW-SP60E-Airflow_Cutaway.jpg',
      'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2024/01/Harvia-Spirit_Safety_Railing-HSP3M.jpg',
    ],
    specsSummary: [
      { label: 'Power range', value: '6, 8, 9 kW' },
      { label: 'Stone capacity', value: '~110 lbs' },
      { label: 'Room size', value: '170 – 460 cu ft' },
      { label: 'Max temperature', value: '194°F' },
      { label: 'Voltage', value: '240V 1PH' },
      { label: 'Certification', value: 'UL 875 (US + Canada)' },
    ],
    sizes: [
      { model: 'SP60', kw: '6 kW', roomSize: '170 – 300 cu ft', stones: '~110 lbs', voltage: '240V 1PH' },
      { model: 'SP80', kw: '8 kW', roomSize: '212 – 388 cu ft', stones: '~110 lbs', voltage: '240V 1PH' },
      { model: 'SP90', kw: '9 kW', roomSize: '282 – 459 cu ft', stones: '~110 lbs', voltage: '240V 1PH' },
    ],
    keyFeatures: [
      'Two separate safety sensors — one on the heater, one on the sauna room',
      'Integrated safety interlock prevents startup if objects are placed on top',
      'WiFi-ready, controlled through MyHarvia app',
      'Runs on standard US 240V single-phase residential service',
      'Heating elements shared with Harvia\'s commercial lineup',
      'Curved rock basket — visible stones from every angle',
      'UL 875 certified for US and Canada',
    ],
    quotes: [
      {
        quote:
          'The Harvia Spirit sauna heater, inspired by the earth\'s natural materials, brings you closer to nature while enjoying the healing power of sauna heat.',
        source: 'harvia.com Spirit product page',
        context: 'Official consumer-facing product description',
        date: '2025-02-15',
        url: 'https://www.harvia.com/en-US/harvia-spirit-electric-heater/',
      },
      {
        quote:
          'The gently curved body of the heater is designed to use rounded stones, seamlessly fusing the beauty of nature with an elegant handmade design.',
        source: 'harvia.com Spirit product page',
        context: 'Design positioning',
        date: '2025-02-15',
      },
      {
        quote:
          'We carried out significant well-planned campaigns, for example, during Black Friday weekend that resulted in excellent sales volumes with healthy gross margins.',
        source: 'Harvia Q4 2025 press release',
        context: 'Retail-channel campaign activity — Spirit is one of the heaters Harvia and its US dealer network push during these promotion windows',
        date: '2026-02-12',
        url: 'https://www.globenewswire.com/news-release/2026/02/12/3236888/0/en/Harvia-Q4-2025-Growth-in-all-sales-regions-continued.html',
      },
      {
        quote:
          'Harvia is the best choice. You get the best product, best solution for the money you spend.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Mid-market value positioning — the segment Spirit anchors in Harvia\'s residential lineup',
        date: '2026-02-12',
      },
    ],
    insiderNotes: [
      {
        title: 'Spirit beats Cilindro for most US residential builds',
        body:
          'For rooms under 300 cu ft, Spirit is usually the right call. Wall-mount saves 3-4 sq ft of bench space, 110 lbs of stone is plenty for residential sessions, price is ~30-40% lower than Cilindro, and WiFi comes standard. Step up to Cilindro only if the room is over 450 cu ft or the customer specifically wants the visible stone column.',
      },
      {
        title: 'Mount the room-side safety sensor 6-12 inches below the ceiling',
        body:
          'On the wall opposite the heater. Half the dealer-installed Spirits get this wrong and trigger nuisance high-limit trips at normal session temperature. If your Spirit trips during normal use, look at sensor placement before calling service.',
      },
      {
        title: 'Round up a size if the room has glass',
        body:
          'Harvia\'s room-size charts assume tight construction and minimal glass. US residential builds almost always have more glass and less insulation than spec. If the chart says SP60, specify SP80. Running cost difference is negligible; performance delta when you need it is meaningful.',
      },
      {
        title: 'Use the HSP3M safety railing in kid-accessible households',
        body:
          'The HSP3M safety railing is a wire cage that keeps hands off the stones without blocking airflow. Harvia includes it on some package deals; it\'s usually a $120-$180 add-on otherwise. Cheap insurance if the sauna is in a multi-generational household.',
      },
    ],
    bestFor:
      'Rooms 170-460 cubic feet, standard 240V single-phase residential service, homeowners who want WiFi control out of the box, specialty dealers looking for a reliable mid-range recommendation. The default Harvia for a 6x8 backyard sauna kit.',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland (UL 875 certified for US and Canada)',
    launched: 'Spirit series ~2020; WiFi standard from 2023',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 press release — Black Friday campaign volume',
    relatedProductSlugs: ['vega', 'cilindro-electric', 'xenio-fenix'],
    harviaUrl: 'https://www.harvia.com/en-US/harvia-spirit-electric-heater/',
  },
  {
    slug: 'vega',
    name: 'Harvia Vega',
    subtitle: 'Entry-level workhorse — the heater Harvia ships in real volume',
    series: 'Vega BC series',
    category: 'electric-heater',
    position: 'entry',
    tagline: 'Symmetric stainless, UL-listed, compact. The default heater inside most Almost Heaven barrel saunas and high-volume specialty-dealer kit builds.',
    intro:
      'The Vega is the product nobody writes magazine features about and Harvia sells at the highest volume in the lineup. A compact, wall-mounted, symmetric stainless heater for small-to-mid residential saunas between 70 and 510 cubic feet. Vega ships inside most Almost Heaven barrel sauna kits, Costco-channel packages, and specialty-dealer entry-level builds. Two variants: BC (built-in controls) for plug-and-play installs, and BCE (external controls) for pairing with a Xenio or Fenix panel. Runs on standard US 240V single-phase.',
    heroImage: 'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2023/06/Harvia-Sirius_Vega_d1-1011x1536.jpg',
    gallery: [
      'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2023/06/Harvia-Sirius_Vega_d1-1011x1536.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/06/Almost-Heaven_1232marg.jpg',
    ],
    specsSummary: [
      { label: 'Power range', value: '4.5, 6, 8, 9 kW' },
      { label: 'Stone capacity', value: '~29 – 45 lbs' },
      { label: 'Room size', value: '70 – 510 cu ft' },
      { label: 'Voltage', value: '240V 1PH' },
      { label: 'Mounting', value: 'Wall-mount, low position' },
      { label: 'Variants', value: 'BC (built-in) / BCE (external)' },
    ],
    sizes: [
      { model: 'BC45', kw: '4.5 kW', roomSize: '70 – 160 cu ft', stones: '~29 lbs', voltage: '240V 1PH', note: 'Built-in controls' },
      { model: 'BC60', kw: '6 kW', roomSize: '170 – 300 cu ft', stones: '~29 lbs', voltage: '240V 1PH', note: 'Built-in controls' },
      { model: 'BC80', kw: '8 kW', roomSize: '212 – 388 cu ft', stones: '~45 lbs', voltage: '240V 1PH', note: 'Built-in controls' },
      { model: 'BC90', kw: '9 kW', roomSize: '282 – 459 cu ft', stones: '~45 lbs', voltage: '240V 1PH', note: 'Built-in controls' },
      { model: 'BCE (45/60/80/90)', kw: '4.5 / 6 / 8 / 9 kW', roomSize: 'Same as BC', voltage: '240V 1PH', note: 'External Xenio/Fenix required' },
    ],
    keyFeatures: [
      'Built-in controls (BC) or external controls (BCE) variant',
      'Low wall-mount position — steam reaches bottom benches',
      'Symmetric design — switches mount on either side',
      'Stainless steel outer shell',
      'UL listed for US installations',
      'Default heater inside most Almost Heaven barrel sauna kits',
    ],
    quotes: [
      {
        quote:
          'Almost Heaven is the brand which you could consider as kind of like the IKEA of the saunas.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Almost Heaven positioning — Vega is the heater inside the majority of Almost Heaven barrel kits',
        date: '2026-02-12',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvia-q4-2025-sees-revenue-growth-but-stock-dips-93CH-4502032',
      },
      {
        quote:
          'They are made in America, in the heartlands of America in West Virginia.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'On Almost Heaven sauna assembly — barrel sauna kits containing Vega heaters are assembled and shipped from the West Virginia facility',
        date: '2026-02-12',
      },
      {
        quote:
          'We bought land around our West Virginia factory in the United States, and we have started to develop the site. We are investing in our [West Virginia] site in particular in anticipation of driving a significant and ambitious growth strategy in the region.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'US expansion — the West Virginia site is where Almost Heaven kits with Vega ship from',
        date: '2025-11-06',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvias-q3-2025-shows-solid-growth-stock-surges-93CH-4336891',
      },
      {
        quote:
          'There is a great opportunity for more than 10 million saunas to be built or purchased in the United States.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'On the US addressable market — entry-level Vega/Almost Heaven kits are Harvia\'s volume play into this opportunity',
        date: '2026-02-12',
      },
      {
        quote:
          'We make clearly more than 200,000 heaters per year and give and take maybe 20,000 sauna cabins.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'Vega and its siblings are the highest unit-count share inside that 200,000 heater figure',
        date: '2025-11-06',
      },
    ],
    insiderNotes: [
      {
        title: 'BC for plug-and-play; BCE only if you already own the panel',
        body:
          'Built-in controls (BC) is the default. External controls (BCE) is only worth the extra cost if you\'re adding a Xenio or Fenix panel for WiFi or remote start. Buying BCE plus a $250-$400 controller for a basic install is a wasted upgrade if the user will always press the physical button.',
      },
      {
        title: 'Stone quality matters 3x more on small heaters',
        body:
          'Vega\'s 29-45 lb stone capacity is small, so each stone has to work harder. Use washed olivine-diabase in 2-4 inch size. Landscape bag rocks pack too tight, kill airflow, and can trip the high-limit cutout. Budget $40-$60 for a proper stone pack instead of $15 bag rocks.',
      },
      {
        title: 'Skip the BC45 — specify BC60 minimum',
        body:
          'The 4.5 kW BC45 is spec\'d for 70-160 cu ft. In real US residential builds with typical glass and door heat loss, performance runs 20-25% below nameplate. Size to BC60 instead. The extra 1.5 kW of capacity costs $40 more and eliminates the common "room won\'t get to 180°F" complaint.',
      },
      {
        title: 'Costco buyers: read the model card',
        body:
          'Almost Heaven kits sold through Costco bundle Vega as the default heater. Some seasonal SKUs spec the BC60; others spec the BC80. The difference is a Saturday afternoon of sauna comfort for a 6-person barrel. Confirm the model number on the product card before checkout.',
      },
    ],
    bestFor:
      'Barrel saunas up to 8 feet, entry-level residential kits under 400 cu ft, OEM integrations where price dominates spec. The default heater inside Almost Heaven packages sold through Costco, Almostheaven.com, and specialty dealers.',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland (ships in Almost Heaven kits from Renick, WV)',
    launched: 'Long-running platform, continuously refreshed',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — Almost Heaven "IKEA of saunas" + 10M US sauna opportunity',
    relatedProductSlugs: ['spirit', 'forte', 'cilindro-electric'],
    harviaUrl: 'https://www.harvia.com/en-US/products/HCB800400S/vega-bc80-80-kw-steel',
  },
  {
    slug: 'forte',
    name: 'Harvia Forte',
    subtitle: 'Ever-Ready heat-storing: ready when you walk in',
    series: 'Forte AF series',
    category: 'electric-heater',
    position: 'premium',
    tagline: 'A heat-storing inner chamber keeps the stones continuously warm. Outer lid and casing stay cool to the touch. In ECO mode the sauna is session-ready all day.',
    intro:
      'The Forte answers a specific problem: conventional electric heaters take 30-45 minutes to reach session temperature from cold, which kills spontaneous use. Forte keeps the stones warm continuously inside a sealed inner chamber, with the outer lid and casing at safe-to-touch temperatures. ECO mode holds stones at low idle for a fraction of typical running cost; bumping to session temperature then takes under 15 minutes instead of 45. Built-in digital controls with MyHarvia WiFi standard. Four US models: AFB4 (4 kW), AF45 (4.4 kW), AF65 (6.5 kW), AF90 (9 kW), all on 240V single-phase.',
    heroImage: 'https://www.datocms-assets.com/41658/1695109067-harvia_ventura_forte_steel_us_web.jpg',
    gallery: [
      'https://www.datocms-assets.com/41658/1695109067-harvia_ventura_forte_steel_us_web.jpg',
    ],
    specsSummary: [
      { label: 'Power range', value: '4.0 – 9.0 kW' },
      { label: 'Format', value: 'Heat-storing (Ever-Ready)' },
      { label: 'Room size', value: '142 – 459 cu ft' },
      { label: 'ECO mode', value: 'Yes (low-idle)' },
      { label: 'Safety', value: 'Auto-off if lid open' },
      { label: 'Voltage', value: '240V 1PH' },
    ],
    sizes: [
      { model: 'AFB4', kw: '4 kW', roomSize: '142 – 247 cu ft', stones: '~99 lbs', voltage: '240V 1PH' },
      { model: 'AF45', kw: '4.4 kW', roomSize: '170 – 247 cu ft', stones: '~99 lbs', voltage: '240V 1PH' },
      { model: 'AF65', kw: '6.5 kW', roomSize: '212 – 388 cu ft', stones: '~132 lbs', voltage: '240V 1PH' },
      { model: 'AF90', kw: '9 kW', roomSize: '282 – 459 cu ft', stones: '~132 lbs', voltage: '240V 1PH' },
    ],
    keyFeatures: [
      'Heat-storing inner chamber keeps stones warm continuously',
      'ECO mode holds low-idle temperature without switching off',
      'Outer lid and casing stay at safe-to-touch temperatures',
      'Auto-off if the cover is left open',
      'Keypad lock on the control panel',
      'Built-in digital controls + MyHarvia WiFi',
    ],
    quotes: [
      {
        quote:
          'The Harvia Forte Ever-Ready heater is ready for sauna at a moment\'s notice and is designed to be safe, energy efficient and easy to use whenever you want to sauna.',
        source: 'harvia.com Forte product page',
        context: 'Consumer-facing positioning',
        date: '2024-03-15',
        url: 'https://www.harvia.com/en-US/sauna-heaters/electric-sauna-heater/forte-electric-heaters/',
      },
      {
        quote:
          'The new ECO mode saves electricity, as it allows you to adjust the heater\'s temperature to a very low setting without turning off the heater.',
        source: 'harvia.com Forte product page',
        context: 'ECO mode positioning',
        date: '2024-03-15',
      },
      {
        quote:
          'Sauna is becoming much more of a volume category.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Forte sits in the daily-use premium segment driving the volume shift in North American residential sauna adoption',
        date: '2026-02-12',
      },
      {
        quote:
          'Harvia is the best choice. You get the best product, best solution for the money you spend.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'On value positioning — Forte is Harvia\'s price-premium residential electric, sold on the convenience vs running-cost trade',
        date: '2026-02-12',
      },
    ],
    insiderNotes: [
      {
        title: 'ECO math: daily users win, occasional users lose',
        body:
          'Cold start from room temperature pulls ~5 kWh. ECO idle pulls 0.4-0.7 kWh per hour. At 24 hours of idle plus 15 minutes of warmup, daily users come out ahead vs starting from cold each session. For users taking 1-2 sessions per week, keeping Forte in ECO all week costs ~2x vs cold-starting twice. Run Forte in ECO only if you\'re going to use it at least 4 times a week.',
      },
      {
        title: 'Lid auto-off is the commercial-install feature that matters',
        body:
          'Guests leaving towels on top of heaters is the most common commercial sauna failure. Forte literally won\'t run with the cover open. Residential users take this for granted; commercial ops teams treat it as a liability-prevention tool. If you\'re specifying for a fitness center or boutique gym with limited staff supervision, Forte\'s lid sensor is why you pay the premium.',
      },
      {
        title: 'Pair with Fenix FX45 for multi-user households',
        body:
          'Forte\'s built-in controls are fine for a single-user household. Multiple users on different schedules should add a Fenix FX45 panel (or the legacy Xenio CX45) for MyHarvia app control. Queued sessions then start from the 15-minute ECO warmup window rather than a 45-minute cold start. That\'s the combination that justifies the Forte premium for a busy household.',
      },
      {
        title: 'Size to AF65, not AF45, for almost any real US residential build',
        body:
          'The 4.4 kW AF45 is nameplate-rated for 170-247 cu ft. Real US residential rooms with glass lose heat faster than spec. AF65 costs $100-$150 more and covers the gap plus some extra room. For a 6x7 or 6x8 build, AF65 is the right call.',
      },
    ],
    bestFor:
      'Households running 4+ sauna sessions a week. Owners who want spontaneous use without 45 minutes of pre-heat. Rooms 170-459 cu ft on standard 240V service. Commercial installs with limited staff supervision where lid auto-off liability protection is meaningful.',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland',
    launched: 'Forte Ever-Ready line launched 2023; US AF series refreshed 2024',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — volume-category and value-positioning commentary',
    relatedProductSlugs: ['cilindro-electric', 'spirit', 'xenio-fenix'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/electric-sauna-heater/forte-electric-heaters/',
  },
  {
    slug: 'legend',
    name: 'Harvia Legend',
    subtitle: 'Wood-burning flagship — the commercial wood-fired standard',
    series: 'Legend 150 / 240 / 240SL',
    category: 'wood-burning-heater',
    position: 'flagship',
    tagline: 'Cast-iron glass door, thick stone cradle, clean burn. The Legend is what US dealers spec when the customer asks for "the real thing."',
    intro:
      'The Legend is Harvia\'s flagship wood-burning line. Legend 150 (WK150LD) is the residential-to-small-commercial unit for rooms up to 460 cubic feet and ships through Almost Heaven as a complete kit (WK150LD + WL100 flue + WHP1500 water heater). The 240 and 240SL scale to larger commercial installs; the SL variant adds an external wood feed so the fire is tended from outside the sauna room. Legend replaced Harvia\'s older wood-burning catalog in the late 2010s and has become the default for serious wood-fired residential and destination-commercial builds.',
    heroImage: 'https://almostheaven.com/cdn/shop/files/Harvia_Legend_WK150LD_WL100_WHP1500_p1.png',
    gallery: [
      'https://almostheaven.com/cdn/shop/files/Harvia_Legend_WK150LD_WL100_WHP1500_p1.png',
      'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2022/12/harvia-legend-150-WK150LD-1200x1200.jpeg',
      'https://b1572463.smushcdn.com/1572463/wp-content/uploads/2022/12/Harvia-Legend-Water-Tank-800x800.jpeg',
      'https://www.datocms-assets.com/41658/1693910481-harvia_legend_outdoorsauna_shl3410_f7.jpg',
    ],
    specsSummary: [
      { label: 'Fuel', value: 'Wood-burning' },
      { label: 'Output (150)', value: '~16 kW equivalent' },
      { label: 'Output (240)', value: '~21 kW equivalent' },
      { label: 'Room size', value: '210 – 850 cu ft' },
      { label: 'Stones (150)', value: '~265 lbs' },
      { label: 'Stones (240)', value: '~450 lbs' },
    ],
    sizes: [
      { model: 'Legend 150 (WK150LD)', kw: '~16 kW equivalent', roomSize: '210 – 460 cu ft', stones: '~265 lbs', note: 'Residential / small commercial' },
      { model: 'Legend 240 (WK200LD)', kw: '~21 kW equivalent', roomSize: '350 – 850 cu ft', stones: '~450 lbs', note: 'Commercial; fire tended in hot room' },
      { model: 'Legend 240SL', kw: '~21 kW equivalent', roomSize: '350 – 850 cu ft', stones: '~450 lbs', note: 'External wood-feed door' },
    ],
    keyFeatures: [
      'Cast-iron glass door — firelight visible through the front',
      'Modern grate structure for cleaner, more efficient burning',
      'Adjustable legs handle uneven floors',
      'Top or rear flue connection options',
      '115 mm (4.5") native flue collar — 6" adapter required for North American code',
      'Optional pipe-mounted water heater (WHP1500) for changing-room water',
      'SL variant: external wood-feed door keeps firewood and ash out of the hot room',
    ],
    quotes: [
      {
        quote:
          'Modern grate structure in the fire chamber results in cleaner and more efficient burning. Cast-iron glass door that lets warm firelight glow through.',
        source: 'harvia.com Legend product page',
        context: 'Official product positioning',
        date: '2024-10-01',
        url: 'https://www.harvia.com/en-US/sauna-heaters/sauna-wood-burning-heater/legend-wood-burning-heaters/',
      },
      {
        quote:
          'They are made in America, in the heartlands of America in West Virginia.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Almost Heaven offers the Legend 150 Kit as a US-assembled wood-fired sauna package. The Legend is built in Finland and the full sauna kit ships from Renick, WV',
        date: '2026-02-12',
      },
      {
        quote:
          'We have been continuing our systematic investments in increasing capacity to produce more products.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Muurame factory capacity — the Legend line is produced alongside Harvia\'s wood-burning catalog here',
        date: '2026-02-12',
      },
      {
        quote:
          'Sauna is becoming much more of a volume category.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Wood-fired residential demand context — Almost Heaven Legend 150 kits are part of the volume-category trend',
        date: '2026-02-12',
      },
    ],
    insiderNotes: [
      {
        title: 'The 240SL external feed isn\'t a convenience — it\'s commercial safety',
        body:
          'Tending a wood fire inside a 180°F room full of wet guests is a liability event waiting to happen. Every commercial wood-fired spec should land on SL or equivalent external-feed. Residential builds that care about ash management also benefit. The cost difference between 240 and 240SL (~$400-$600) is nothing next to a single insurance claim.',
      },
      {
        title: 'The 4.5"-to-6" flue adapter is mandatory in North America',
        body:
          'Legend ships with a 115 mm (4.5") flue collar sized for European code. North American code requires 6" minimum. Every US/Canada install needs Harvia adapter HSK6A plus insulated Class A chimney from collar to termination above roofline. Budget $2,000-$3,500 for the chimney package. Using 6" pipe directly on the 4.5" collar creates back pressure and smokes into the room.',
      },
      {
        title: 'Wood-fired elements need better stones than electric',
        body:
          'Legend\'s fire chamber runs up to 1,200°F in the grate zone. Cheap stones crack under that thermal shock and shatter. Specify dense olivine or peridotite in Harvia\'s listed size. Budget bag rocks from a big-box store fail within months, clog airflow, and cut steam output roughly in half.',
      },
      {
        title: 'The Harvia 50 at White Mountain Sauna Haus is the M-series, not Legend',
        body:
          'Harvia\'s 20/36/50 wood-burning ("M-series" in older catalogs) is distinct from the Legend. The <a href="/article/white-mountain-sauna-haus-north-conway-apres-ski">Harvia 50 at White Mountain Sauna Haus</a> is the largest M-series unit, aimed at very large commercial rooms. Legend 240 competes in the same category. Trade-offs: Legend has more stone mass (~450 lbs vs M-series smaller capacity); M-series has the larger firebox volume. Operators tend to prefer Legend for consistent steam recovery; M-series for faster room heat-up.',
      },
    ],
    bestFor:
      'Off-grid and wood-fired residential builds, destination commercial saunas, rural cabins with wood on-property, Almost Heaven Legend 150 kit buyers in the US. SL variant for every commercial wood-fired spec.',
    warranty: '2 years',
    madeIn: 'Muurame, Finland (sold in the US via Almost Heaven kits shipping from Renick, WV)',
    launched: 'Legend line launched mid-2010s; 240SL external-feed variant added later',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — Muurame capacity + West Virginia distribution',
    relatedProductSlugs: ['cilindro-wood', 'pro-36', 'cilindro-electric'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/sauna-wood-burning-heater/legend-wood-burning-heaters/',
  },
  {
    slug: 'pro-36',
    name: 'Harvia Pro 20 / Pro 36',
    subtitle: 'Commercial wood-burning stoves for large public saunas',
    series: 'Pro 20 / Pro 36 (WK-series)',
    category: 'wood-burning-heater',
    position: 'commercial',
    tagline: '31 kW of wood-fired output for rooms up to 1,270 cu ft. The Finnish commercial wood-burning standard for destination builds.',
    intro:
      'Pro 20 (WK200) and Pro 36 (WK360) are the commercial-scale wood-burning stoves Harvia builds for public saunas, resorts, and large communal installations. Pro 36 is the headline unit: 31 kW equivalent output, rooms up to 1,270 cubic feet, 132 lbs of stones stacked in three tiers, and a fire chamber that accepts firewood up to 15.3 inches long. These heaters end up in Nordic bathhouses, ski-town communal saunas, and destination wellness properties. The minimum ceiling spec is 81 inches — scaled for commercial rooms, not residential.',
    heroImage: 'https://harviagroup.com/wp-content/uploads/2025/06/092624_HA_LM_BK0221-3_WEB-1280x854-1.jpg',
    gallery: [
      'https://harviagroup.com/wp-content/uploads/2025/06/092624_HA_LM_BK0221-3_WEB-1280x854-1.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/05/Harvia_ranta_03-1024x684-1.jpg',
    ],
    specsSummary: [
      { label: 'Fuel', value: 'Wood-burning' },
      { label: 'Output (Pro 36)', value: '~31 kW equivalent' },
      { label: 'Room size', value: '494 – 1,270 cu ft' },
      { label: 'Stone capacity', value: '~132 lbs' },
      { label: 'Firewood length', value: 'Up to 15.3" (390 mm)' },
      { label: 'Min ceiling', value: '81" (2,060 mm)' },
    ],
    sizes: [
      { model: 'Pro 20 (WK200)', kw: '~20 kW equivalent', roomSize: '283 – 700 cu ft', stones: '~88 lbs' },
      { model: 'Pro 36 (WK360)', kw: '~31 kW equivalent', roomSize: '494 – 1,270 cu ft', stones: '~132 lbs' },
    ],
    keyFeatures: [
      'Designed, engineered, and made in Finland',
      'Floor-mounted with adjustable legs',
      'Black steel frame, commercial-grade construction',
      'Fire chamber accepts firewood up to 15.3 inches',
      'Pro 36: 132 lbs of stones in three stacked tiers',
      'Insulated Class A flue required for commercial BTU output',
      'Minimum 81" ceiling clears typical commercial sauna rooms',
    ],
    quotes: [
      {
        quote:
          'We have been continuing our systematic investments in increasing capacity to produce more products.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Muurame factory capacity — Pro 20/36 is produced alongside Harvia\'s wood-burning line',
        date: '2026-02-12',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvia-q4-2025-sees-revenue-growth-but-stock-dips-93CH-4502032',
      },
      {
        quote:
          'Expanding the factory in US. This US expansion still will continue beginning of this year.',
        source: 'CFO Ari Vesterinen, Q4 2025 earnings call',
        context: 'On Harvia\'s 2026 US capital expenditure — commercial wood-burning units including Pro 36 are distributed through the Anoka, MN and Renick, WV network',
        date: '2026-02-12',
      },
      {
        quote:
          'We carried out significant well-planned campaigns, for example, during Black Friday weekend that resulted in excellent sales volumes with healthy gross margins.',
        source: 'Harvia Q4 2025 press release',
        context: 'Commercial wood-burning gets less promotional activity than residential, but destination-builder buying cycles overlap with the Q4 campaign window',
        date: '2026-02-12',
        url: 'https://www.globenewswire.com/news-release/2026/02/12/3236888/0/en/Harvia-Q4-2025-Growth-in-all-sales-regions-continued.html',
      },
    ],
    insiderNotes: [
      {
        title: '81-inch ceiling minimum is a hard spec, not a guideline',
        body:
          'Pro 36\'s 81-inch ceiling requirement comes from flue clearance and radiant heat distribution. In rooms with 78-inch ceilings you get hot spots at head height and insufficient steam at bench height. Spec Pro 20 (or Legend 240SL) instead if the ceiling can\'t clear 81 inches.',
      },
      {
        title: 'Pro 36 vs Legend 240SL: pick on operator experience',
        body:
          'Both compete in the 700-1,200 cu ft range. Pro 36 has the larger fire chamber — fast heat-up, shorter recovery between sessions — but smaller stone capacity (132 lbs vs 450 lbs). Legend 240SL has the external wood-feed door that commercial operators prefer for safety. If the operator wants fast room turnaround, Pro 36 wins. If the operator values safety and consistent steam recovery across a long service day, Legend 240SL.',
      },
      {
        title: 'Insulated Class A chimney is not optional',
        body:
          'At 31 kW output, flue gas temperatures run 600-800°F during active burning. Single-wall pipe is not rated for that. Every commercial Pro 36 install requires full insulated Class A from heater collar to termination above the roof. Budget $2,500-$4,500 for the chimney package alone. Single-wall pipe on this output is code violation and fire hazard.',
      },
      {
        title: 'Stone reload interval: every 18-24 months in heavy use',
        body:
          'Pro 36 stones in commercial rooms running 12+ hours a day need full reload at 18-24 months. Elements below stone are fine — the reason is thermal cycling breaks the stones themselves. Budget the reload into operations schedule or the room loses steam output gradually without the operator noticing.',
      },
    ],
    bestFor:
      'Commercial and destination wood-fired saunas, ski-town communal bathhouses, Nordic-inspired resort installs, large private cabin builds where the operator wants the Finnish commercial experience. Rooms 500+ cu ft with 81+ inch ceilings.',
    warranty: '2 years',
    madeIn: 'Muurame, Finland',
    launched: 'Long-running Pro series; current Pro 36 (WK360) is the current generation',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call + press release — Muurame capacity, US distribution expansion',
    relatedProductSlugs: ['legend', 'cilindro-wood', 'virta-pro'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/sauna-wood-burning-heater/',
  },
  {
    slug: 'xenio-fenix',
    name: 'Harvia Xenio & Fenix',
    subtitle: 'Smart-control platform: Xenio installed base, Fenix 2025 flagship',
    series: 'Xenio CX / Fenix FX',
    category: 'controller',
    position: 'flagship',
    tagline: 'Xenio has shipped with nearly every Harvia heater since 2018. Fenix launched Q3 2025 with a 4.3" full touchscreen, WiFi, over-the-air updates, and backward-compatible wiring.',
    intro:
      'Harvia runs two generations of control platform. Xenio is the large installed base — it ships with most Harvia heaters sold since ~2018. Fenix is the 2025 flagship: 4.3-inch full touchscreen, MyHarvia WiFi app control, over-the-air firmware updates, and critically, backward-compatible wiring so Xenio owners upgrade without rewiring the heater. The MyHarvia app is the unifying interface across both — temperature, humidity, lighting, ventilation, week timers, multi-sauna control for commercial operators, and the new MyHarvia Smart Sauna Sensor that retrofits any existing sauna. Fenix sales started Q3 2025. CEO Järnefelt flagged "really great performance" in Q4.',
    heroImage: 'https://almostheaven.com/cdn/shop/files/Harvia_Fenix_WifiControlUnit_FX30-U1-U3-XC_FX45-U1-U3-XC_f6.jpg',
    gallery: [
      'https://almostheaven.com/cdn/shop/files/Harvia_Fenix_WifiControlUnit_FX30-U1-U3-XC_FX45-U1-U3-XC_f6.jpg',
      'https://www.datocms-assets.com/41658/1748948894-harvia_fenix_smoke_f1.jpg',
      'https://www.datocms-assets.com/41658/1748949128-harvia_fenix_fx001xw_f2.jpg',
      'https://www.datocms-assets.com/41658/1748949420-harvia_fenix_wificontrolunit_fx1104xc_fx1704xc_f8.jpg',
      'https://www.datocms-assets.com/41658/1755255327-harvia_myharvia_yogi_celsius_f1.jpg',
    ],
    specsSummary: [
      { label: 'Fenix screen', value: '4.3" full touchscreen' },
      { label: 'Connectivity', value: 'WiFi + OTA updates' },
      { label: 'App', value: 'MyHarvia (iOS + Android)' },
      { label: 'Compatibility', value: 'Backward-compatible with Xenio wiring' },
      { label: 'Max single-heater power', value: 'Up to 17 kW' },
      { label: 'Presets', value: 'Mild, Cozy, Hot + custom' },
    ],
    sizes: [
      { model: 'Xenio CX30', kw: 'Up to 9 kW', roomSize: '-', note: 'Legacy compact digital' },
      { model: 'Xenio CX45', kw: 'Up to 17 kW', roomSize: '-', note: 'Digital for Cilindro / Club / Virta Pro' },
      { model: 'Xenio CX170 WiFi', kw: 'Up to 17 kW', roomSize: '-', note: 'WiFi-enabled Xenio' },
      { model: 'Fenix FX30', kw: 'Up to 9 kW', roomSize: '-', note: '2025 entry smart control' },
      { model: 'Fenix FX45', kw: 'Up to 17 kW', roomSize: '-', note: '2025 mid smart control (Cilindro / Virta Pro)' },
      { model: 'Fenix FX170', kw: 'Up to 17 kW', roomSize: '-', note: '2025 flagship smart control' },
      { model: 'Fenix FX110C Combi', kw: 'Up to 11 kW', roomSize: '-', note: 'Combi sauna+steam control' },
    ],
    keyFeatures: [
      '4.3-inch full touchscreen on Fenix, with Mild / Cozy / Hot preset scenes',
      'WiFi standard on Fenix and Xenio WiFi models',
      'Over-the-air firmware updates via MyHarvia (Fenix)',
      'Backward-compatible wiring — Fenix drops in where Xenio used to be',
      'Multi-sauna support in MyHarvia for commercial operators',
      'Week timer, power-outage memory, temperature calibration',
      'Humidity and ventilation control when paired with Combi heaters',
    ],
    quotes: [
      {
        quote:
          'We\'ve introduced innovations, such as the Harvia Fenix control panel... sales started in third quarter, and it\'s shown really great performance during quarter four.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Fenix launch performance highlight',
        date: '2026-02-12',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvia-q4-2025-sees-revenue-growth-but-stock-dips-93CH-4502032',
      },
      {
        quote:
          'Exciting 4.3-inch full touchscreen product. It\'s very easy to use with, for example, ready-made presets like mild, cozy, and hot.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'Fenix launch announcement — English-language investor materials sometimes transliterate "Fenix" as "Phoenix"',
        date: '2025-11-06',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvias-q3-2025-shows-solid-growth-stock-surges-93CH-4336891',
      },
      {
        quote:
          'It\'s backwards compatible with huge seller Harvia Xenio control panel.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'Upgrade path for the large Xenio installed base',
        date: '2025-11-06',
      },
      {
        quote:
          'The most advanced sauna app there. It very nicely aligns the user experience with Harvia Phoenix [Fenix].',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'MyHarvia app positioning',
        date: '2025-11-06',
      },
      {
        quote:
          'Harvia could be a brand like Google is for internet search. Harvia, global leader of sauna.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'On category leadership — Fenix + MyHarvia is the technology vector behind the brand ambition',
        date: '2026-02-12',
      },
    ],
    insiderNotes: [
      {
        title: 'Confirm Xenio vintage before promising backward compatibility',
        body:
          'Fenix is backward-compatible with Xenio wiring for 95% of installs. Caveat: very early Xenio units (pre-2020) used a 4-pin connector that Fenix does not match directly. Harvia sells a pin adapter (FX-XN-ADT, ~$40). Before telling a customer "plug-and-play upgrade," read the Xenio model label on their existing panel.',
      },
      {
        title: 'iOS leads Android by 1-2 releases on MyHarvia features',
        body:
          'MyHarvia runs on both platforms. iOS is typically 1-2 releases ahead on new features. Commercial operators running multi-sauna fleets should standardize on iOS or plan around the feature gap. Harvia has been narrowing the gap but late 2025 Android still lagged on scene-memory and multi-sauna group control.',
      },
      {
        title: 'Fenix / Phoenix — same product, two spellings',
        body:
          'Official product name is "Fenix" (Finnish/Latin). Some US investor transcripts translate as "Phoenix." Same unit. If you\'re searching harvia.com, use Fenix. If you\'re reading call transcripts, expect either.',
      },
      {
        title: 'OTA updates change the commercial maintenance equation',
        body:
          'Fenix over-the-air firmware is a small-sounding feature with big implications. A facility running 8 Fenix panels can ship firmware to all 8 overnight — no truck rolls. Harvia is using OTA to push bug fixes and new features including eventual ThermaSol steam integration. This is why Fenix moves from "nice controller" to "operationally necessary" for commercial specs.',
      },
      {
        title: 'FX45 is the new Forte pairing, not FX170',
        body:
          'Fenix FX45 handles up to 17 kW and is the right match for Forte, Cilindro, and Virta Pro through HL160. FX170 adds multi-zone commercial features that residential Forte buyers don\'t need. Save $200-$300 by matching FX45 to a residential Forte, Cilindro, or mid-range install.',
      },
    ],
    bestFor:
      'Any Harvia heater install from 2020 onward. Xenio owners ready to upgrade without rewiring. Commercial operators who want OTA firmware updates and remote control. Households where multi-user scheduling justifies a WiFi panel.',
    warranty: '2 years',
    madeIn: 'Harvia Group (Austria — Sentiotec collaboration — and Finland)',
    launched: 'Xenio ~2018; Fenix sales started Q3 2025',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — Fenix "really great performance" launch highlight',
    relatedProductSlugs: ['myharvia-sensor', 'cilindro-electric', 'virta-pro'],
    harviaUrl: 'https://www.harvia.com/en-US/harvia-fenix-intelligent-sauna-control/',
  },
  {
    slug: 'myharvia-sensor',
    name: 'MyHarvia Smart Sauna Sensor',
    subtitle: 'A retrofit smart sensor that turns any sauna — even wood-burning — into a connected sauna',
    series: 'MyHarvia Smart Sensor',
    category: 'smart-sensor',
    position: 'premium',
    tagline: 'A wireless sensor reading temperature and humidity in any sauna and pushing to the MyHarvia app. Works on electric, wood-burning, and saunas with no electricity at all.',
    intro:
      'The MyHarvia Smart Sauna Sensor is the 2025 category expansion Harvia called "a completely new category never seen in the sauna market before" on the Q4 2025 earnings call. Unlike Xenio or Fenix, this is not a control panel — it\'s a wireless monitoring sensor. It reads temperature and humidity in any sauna room and transmits to the MyHarvia app. Because it doesn\'t control a heater, it works inside sauna rooms with no electrical service at all, including traditional wood-fired saunas. For commercial operators, it adds data without rewiring. For residential wood-fired sauna owners, it adds smart-sauna functionality that was previously impossible.',
    heroImage: 'https://www.datocms-assets.com/41658/1755255327-harvia_myharvia_yogi_celsius_f1.jpg',
    gallery: [
      'https://www.datocms-assets.com/41658/1755255327-harvia_myharvia_yogi_celsius_f1.jpg',
      'https://www.datocms-assets.com/41658/1748948894-harvia_fenix_smoke_f1.jpg',
    ],
    specsSummary: [
      { label: 'Type', value: 'Wireless monitoring sensor' },
      { label: 'Works with', value: 'Any sauna (electric, wood, no power)' },
      { label: 'Measures', value: 'Temperature + humidity' },
      { label: 'App', value: 'MyHarvia (iOS + Android)' },
      { label: 'Control', value: 'Read-only (not a controller)' },
      { label: 'Launched', value: 'Q4 2025' },
    ],
    sizes: [
      { model: 'MyHarvia Smart Sauna Sensor', kw: '-', roomSize: 'Any sauna', note: 'Wireless, battery-powered monitoring sensor' },
    ],
    keyFeatures: [
      'Wireless — no heater connection required',
      'Reads temperature and humidity in any sauna environment',
      'Works in wood-burning saunas and saunas with no electricity',
      'Pushes data to the MyHarvia app',
      'Retrofit — no wiring changes',
      'Extends smart-sauna functionality to 100% of the sauna market',
    ],
    quotes: [
      {
        quote:
          'MyHarvia Smart Sauna Sensor, which is a completely new category never seen in the sauna market before.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Launch framing for the sensor',
        date: '2026-02-12',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvia-q4-2025-sees-revenue-growth-but-stock-dips-93CH-4502032',
      },
      {
        quote:
          'It works in any sauna, so it really turns any sauna into a smart sauna, whether it\'s a wood-burning sauna without electricity.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Category-expansion logic — addresses the ~40-50% of the global sauna market that is wood-fired or unpowered',
        date: '2026-02-12',
      },
      {
        quote:
          'In the fourth quarter, we introduced MyHarvia Smart Sauna Sensor, a unique product that can turn any sauna into a smart sauna, which is a great example of our market-leading innovation and an exciting step in our digital journey.',
        source: 'Harvia Q4 2025 press release',
        context: 'Official launch positioning in the press release',
        date: '2026-02-12',
        url: 'https://www.globenewswire.com/news-release/2026/02/12/3236888/0/en/Harvia-Q4-2025-Growth-in-all-sales-regions-continued.html',
      },
      {
        quote:
          'We want to be an active market maker to grow the sauna market and create exciting innovations in sauna solutions, products, accessories, and digital services to deliver great sauna experiences.',
        source: 'CEO Matias Järnefelt, Capital Markets Day 2024',
        context: 'Strategic framing that preceded the Sensor launch — digital services is the bet',
        date: '2024-05-29',
      },
    ],
    insiderNotes: [
      {
        title: 'It monitors — it does not control',
        body:
          'The MyHarvia Sensor is a thermometer and hygrometer, not a switch. It will not start your wood-burning sauna remotely. What it does: lets you check bench temperature from the house before walking out to light the fire, and logs temperature and humidity over time. Think "sauna dashboard," not "sauna remote."',
      },
      {
        title: 'Commercial use case: data for wood-fired operators',
        body:
          'For destination properties, ski-town bathhouses, and resort wood-fired rooms, the Sensor adds operational data that wasn\'t previously captureable — actual bench temperature vs setpoint, humidity curve through a session, time-to-heat from cold start. This is the first Harvia product that brings data telemetry to the wood-fired commercial category.',
      },
      {
        title: 'Why this matters strategically',
        body:
          'Harvia\'s controller platform historically only attached to Harvia electric heaters. The Sensor is the first Harvia smart product that works across the entire sauna market — including the ~40-50% of the global market that is wood-fired. Q4 2025 earnings call called this out as a distinct category expansion, not a feature release.',
      },
      {
        title: 'Pair with Fenix for complete coverage',
        body:
          'If you already own a Fenix-controlled electric sauna, adding a MyHarvia Sensor extends the app\'s data to any second wood-fired or outdoor sauna on the property. Both show up in the same MyHarvia dashboard. This is the setup destination cabins with a primary electric indoor sauna and a secondary wood-fired outdoor sauna are landing on.',
      },
    ],
    bestFor:
      'Wood-fired sauna owners who want smart-sauna data. Commercial operators of wood-fired rooms who need operational monitoring. Existing Harvia Fenix/Xenio owners adding a second sauna. Anyone retrofitting smart functionality onto a non-Harvia sauna.',
    warranty: '2 years',
    madeIn: 'Harvia Group (Finland and Austria)',
    launched: 'Q4 2025',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call + press release — "completely new category"',
    relatedProductSlugs: ['xenio-fenix', 'cilindro-wood', 'legend'],
    harviaUrl: 'https://www.harvia.com/en-US/myharvia/',
  },
  {
    slug: 'harvia-50-wood',
    name: 'Harvia 50 (Wood-Burning)',
    subtitle: 'The 50 kW commercial wood-fired stove behind America\'s most serious public saunas',
    series: 'Harvia 50 (M3SL)',
    category: 'wood-burning-heater',
    position: 'commercial',
    tagline: 'Harvia\'s largest wood-fired stove. 110 lbs of stone capacity, stainless steel casing, side-fed firebox, and the output to run 630 cubic feet of sauna room with real löyly. Spec\'d into commercial bathhouses from New Hampshire to British Columbia.',
    intro:
      'The Harvia 50 is Harvia\'s largest wood-fired heater and the specification of record for serious commercial wood-fired sauna installations in North America. With rated output sized for rooms up to 630 cubic feet and over 110 pounds of stone mass, the 50 is engineered for heavy-duty public use: ski town bathhouses, destination saunas, commercial wellness facilities, and the kind of operators that run multiple sessions per day without letting the room cool down. Built in Harvia\'s Muurame factory, the 50 carries the full "Made in Finland" supply chain and fits into Harvia\'s proprietary chimney and smoke channel ecosystem.',
    heroImage: 'https://harviagroup.com/wp-content/uploads/2025/06/2024_06_25_oh_harvia_details_0169-1280x854.jpg',
    gallery: [
      'https://harviagroup.com/wp-content/uploads/2025/06/2024_06_25_oh_harvia_details_0169-1280x854.jpg',
    ],
    specsSummary: [
      { label: 'Output', value: 'Up to 50 kW rated' },
      { label: 'Stone capacity', value: '110+ lbs' },
      { label: 'Room size', value: 'Up to ~630 cu ft' },
      { label: 'Fuel', value: 'Wood-burning' },
      { label: 'Construction', value: 'Stainless steel casing' },
      { label: 'Made in', value: 'Muurame, Finland' },
    ],
    sizes: [
      { model: 'Harvia 50', kw: '~50 kW', roomSize: 'Up to ~630 cu ft', stones: '110+ lbs', note: 'Side-fed firebox, stainless exterior, chimney connections' },
    ],
    keyFeatures: [
      'Largest wood-fired heater in the Harvia portfolio',
      'Commercial-duty fire path and stone mass for multi-session operation',
      'Stainless steel casing with robust thermal cycle tolerance',
      'Compatible with Harvia WHP pipe and chimney systems',
      'Load-from-outside firebox configuration available',
      'Spec\'d in high-use bathhouses and commercial wellness installations across North America',
    ],
    quotes: [
      {
        quote:
          'The heater is a Harvia 50, the Finnish manufacturer\'s largest wood-burning stove. That is not a token piece of equipment. The Harvia 50 is built for commercial-scale rooms and carries a serious stone load, which is why the loyly at White Mountain Sauna Haus hits different than a hotel steam room running a small wall-mounted electric unit.',
        source: 'SaunaNews, April 2026',
        context: 'White Mountain Sauna Haus (North Conway, NH) commercial install',
        date: '2026-04-16',
        url: '/article/white-mountain-sauna-haus-north-conway-apres-ski',
      },
    ],
    insiderNotes: [
      {
        title: 'This is the Finnish commercial benchmark',
        body:
          'When a North American commercial bathhouse operator tells you their room "runs a Harvia 50," that is shorthand for maximum real wood-fired output in a single stove. Larger rooms use two Harvia 50s in parallel. Anything smaller than a 50 will struggle in a public sauna doing 20-plus bathers per session with frequent door opens.',
      },
      {
        title: 'Chimney draft is the make-or-break variable',
        body:
          'The Harvia 50 needs a chimney system matched to its output. Harvia specifies proprietary WHP pipe lengths and smoke channel geometries. Installers who try to substitute generic Class A chimney often end up with a stove that won\'t draft, smokes when the door opens, or never reaches full operating temperature. Use Harvia\'s kit; don\'t cheap out.',
      },
      {
        title: 'Stone selection for commercial use',
        body:
          'Commercial wood-fired rooms cycle stones much harder than residential. At a 50\'s output, use washed olivine-diabase in 2 to 4 inch size (Harvia spec) and plan for full stone replacement every 12 to 18 months in heavy commercial use. Under-sized or garden-store stones shatter and pack down, cutting steam output dramatically by year two.',
      },
    ],
    bestFor:
      'Commercial wood-fired saunas, ski-town bathhouses, destination saunas, multi-session public facilities, rooms 350 to 630 cubic feet running real wood-fired löyly. Not for residential one-off builds; the 20 or 36 series is more appropriate for home use.',
    warranty: '2 years commercial',
    madeIn: 'Muurame, Finland',
    launched: 'Long-standing product, current M3SL generation',
    lastMentioned: '2026-04-16',
    lastMentionContext: 'White Mountain Sauna Haus (North Conway, NH) commercial bathhouse install',
    relatedProductSlugs: ['cilindro-wood', 'legend', 'virta-pro'],
    harviaUrl: 'https://www.harvia.com/en-US/products/WK50/harvia-50',
  },
  {
    slug: 'frosty-cold-tub',
    name: 'Harvia Frosty Cold Tub',
    subtitle: 'The oval cold plunge Harvia launched in 2023 for hot-cold alternation at home',
    series: 'Frosty',
    category: 'electric-heater',
    position: 'premium',
    tagline: 'Oval-shaped cold tub for residential hot-cold therapy. High-quality materials, insulated cover, skin-comfortable finish. Harvia\'s entry into the cold plunge category as consumer demand accelerated.',
    intro:
      'Harvia Frosty is the oval-shaped residential cold tub Harvia launched in 2023 as consumer demand for cold-exposure therapy grew. The tub is made of high-quality materials that are safe to use, feel comfortable on the skin, and are easy to maintain. Every Frosty ships with an insulated cover that both maintains the target cold temperature energy-efficiently and improves safety by keeping children out of the ice-cold water. Frosty is positioned as the partner product to a Harvia sauna for full hot-cold backyard wellness setups. It reflects Harvia\'s stated strategy to leverage the same water and electrical technology expertise from Kirami into cold plunge products, and the growing interest in contrast therapy documented in research on improved immunity, stress reduction, sleep quality, recovery, pain relief, and brown fat activation.',
    heroImage: 'https://harviagroup.com/wp-content/uploads/2025/05/Kiuas_Kuva1-780x439.jpg',
    gallery: [
      'https://harviagroup.com/wp-content/uploads/2025/05/Kiuas_Kuva1-780x439.jpg',
    ],
    specsSummary: [
      { label: 'Category', value: 'Cold tub / cold plunge' },
      { label: 'Shape', value: 'Oval' },
      { label: 'Cooling', value: 'Electric chiller' },
      { label: 'Cover', value: 'Insulated, included' },
      { label: 'Launched', value: '2023' },
      { label: 'Parent group', value: 'Harvia Plc' },
    ],
    sizes: [
      { model: 'Frosty Oval', kw: 'n/a (chiller-based)', roomSize: 'Single-user immersion', note: 'Insulated cover included for energy efficiency and child safety' },
    ],
    keyFeatures: [
      'Oval tub shape for efficient single-user immersion',
      'Electric cooling to maintain programmable cold plunge temperature (typical 40 to 50 degrees Fahrenheit)',
      'Insulated cover included (energy efficiency + child safety)',
      'Skin-comfortable, easy-to-maintain materials',
      'Designed for residential hot-cold alternation alongside a sauna',
      'Reflects Harvia R&D collaboration between Kirami (hot tub water technology) and Harvia core electrical engineering',
    ],
    quotes: [
      {
        quote:
          'Harvia launched the oval shaped Harvia Frosty cold tub for households.',
        source: 'Harvia Plc 2023 Annual Report',
        context: 'Product innovation highlight of the year',
        date: '2024-03-15',
      },
      {
        quote:
          'Regularly exposing the body to cold water for short periods of time brings several health benefits such as improved immunity, stress reduction, improved sleep quality, speedy recovery from sports, pain relief and activation of brown fat.',
        source: 'Harvia Plc 2023 Annual Report',
        context: 'Rationale for expansion into cold tub category',
        date: '2024-03-15',
      },
    ],
    insiderNotes: [
      {
        title: 'Made possible by the Kirami water technology',
        body:
          'Harvia\'s ability to launch a credible cold tub in 2023 was directly enabled by the 2021 Kirami acquisition. Kirami\'s still-water hot tub expertise (water chemistry, sanitation, tub construction, insulation) transferred straight into the cold tub program, cutting what would otherwise have been a multi-year development timeline.',
      },
      {
        title: 'Pair with a Harvia sauna for the full regimen',
        body:
          'Frosty is not a standalone product. It is designed as the cold plunge companion to a Harvia electric or wood-fired sauna, enabling the sauna-and-plunge alternation that consumers increasingly want for recovery and wellness. Harvia dealers typically quote Frosty alongside sauna installs rather than as a solo item.',
      },
      {
        title: 'Regulatory context',
        body:
          'Residential cold tubs are less regulated than pools or spas in most US jurisdictions, but some local codes treat any outdoor water feature above a certain volume or depth as pool-equivalent. Before installing, check local permitting; Harvia\'s US dealer network handles this for builder installs but DIY buyers should confirm before the unit arrives.',
      },
    ],
    bestFor:
      'Residential hot-cold therapy, recovery-focused home wellness setups, anyone already running a Harvia sauna and looking for the matching cold plunge, consumers entering cold exposure therapy who want a brand-name product with support rather than a DIY stock tank.',
    warranty: 'Per Harvia dealer territory',
    madeIn: 'Harvia Group (Finland/Estonia supply chain via Kirami)',
    launched: '2023',
    lastMentioned: '2024-03-15',
    lastMentionContext: 'Harvia 2023 Annual Report product innovation highlight',
    relatedProductSlugs: ['cilindro-wood', 'cilindro-electric', 'spirit'],
    harviaUrl: 'https://www.harvia.com/en/',
  },
  {
    slug: 'eos-structure',
    name: 'EOS Structure',
    subtitle: 'The matte-black rod-structure design heater from EOS Driedorf',
    series: 'EOS Structure',
    category: 'electric-heater',
    position: 'premium',
    tagline: 'A true design statement. Elegant matte black from top to bottom with a distinctive vertical rod structure that becomes the sauna\'s architectural centerpiece. Made in Driedorf, Germany.',
    intro:
      'EOS Structure is the design-forward premium electric sauna heater EOS Group launched in 2023 as part of its luxury electric range. The product is built around a distinctive rod structure, rendered in elegant matte black top to bottom, that turns the heater into an architectural element rather than a hidden appliance. It targets the high-end commercial and premium residential segment where the sauna itself is designed as a visual space, not just a functional room. EOS, a Harvia Group company since 2020, makes Structure in its Driedorf, Germany factory, the same line that produces the EOS S-line, Kusatek gas-fired heaters, and Spatronic electronic control units. EOS Structure is typically specified for Aufguss-capable commercial rooms, hotel spas, and premium residential installations where EOS Emo Touch 3 controls the heater.',
    heroImage: 'https://harviagroup.com/wp-content/uploads/2025/06/EOS_1232marg.jpg',
    gallery: [
      'https://harviagroup.com/wp-content/uploads/2025/06/EOS_1232marg.jpg',
    ],
    specsSummary: [
      { label: 'Brand', value: 'EOS (Harvia Group)' },
      { label: 'Category', value: 'Premium design electric heater' },
      { label: 'Finish', value: 'Matte black, top to bottom' },
      { label: 'Design element', value: 'Distinctive rod structure' },
      { label: 'Made in', value: 'Driedorf, Germany' },
      { label: 'Launched', value: '2023' },
    ],
    sizes: [
      { model: 'EOS Structure', kw: 'Range per configuration', roomSize: 'Premium residential and commercial', note: 'Matte black rod structure design; architectural heater for high-design spaces' },
    ],
    keyFeatures: [
      'Distinctive vertical rod structure as defining design element',
      'Elegant matte black finish, top to bottom',
      'Made in Germany at EOS Driedorf',
      'Targets premium residential and high-end commercial installations',
      'Compatible with EOS Emo Touch 3 control systems',
      'Part of the EOS premium portfolio alongside S-line and Kusatek gas-fired',
    ],
    quotes: [
      {
        quote:
          'With its unique shape, the EOS Structure sauna heater is a true design statement. Elegant matte black from top to bottom, this extraordinary heater has a distinctive rod structure which forms its characteristic design element.',
        source: 'Harvia Plc 2023 Annual Report',
        context: 'Product launch highlight in the EOS premium range',
        date: '2024-03-15',
      },
    ],
    insiderNotes: [
      {
        title: 'Positioned for architectural spec',
        body:
          'EOS Structure is not a volume product; it is architectural spec. Interior designers and spa architects select it for its visual contribution to the sauna room, not its heating performance differentiation. If performance is your primary criterion, the EOS S-line or a Harvia Cilindro will likely be the better value.',
      },
      {
        title: 'Pair with EOS Emo Touch 3 for design continuity',
        body:
          'The matte-black Structure is typically paired with the EOS Emo Touch 3 touch-screen control for visual and functional continuity. Running an EOS Structure on an entry-level button controller defeats the design intent.',
      },
      {
        title: 'Availability in North America',
        body:
          'EOS Structure is more widely available in Central European and premium global commercial channels than in the North American residential market. US availability is primarily through Harvia\'s commercial channel and high-end spa specification, not volume online channels.',
      },
    ],
    bestFor:
      'Architectural premium installations, high-design residential saunas where the heater is meant to be a visible centerpiece, luxury spa projects, commercial projects that want a Made-in-Germany design heater.',
    warranty: 'EOS standard terms',
    madeIn: 'Driedorf, Germany',
    launched: '2023',
    lastMentioned: '2024-03-15',
    lastMentionContext: 'Harvia 2023 Annual Report EOS product novelty',
    relatedProductSlugs: ['cilindro-electric', 'virta-pro', 'xenio-fenix'],
    harviaUrl: 'https://www.eos-sauna.com/en/',
  },
  {
    slug: 'harvia-sopo-cabin',
    name: 'Harvia Söpö Sauna Cabins',
    subtitle: 'The Japan-focused precision sauna cabin line launched in 2023',
    series: 'Söpö',
    category: 'electric-heater',
    position: 'mid',
    tagline: 'Precision-crafted sauna cabins designed for easy assembly and maximum comfort. Available in three sizes. Developed alongside Harvia\'s Japanese market expansion and the Harvia Japan Ltd joint venture with Bergman Ltd.',
    intro:
      'Harvia Söpö is the prefabricated sauna cabin range Harvia launched in 2023, developed alongside the company\'s expanded push into the Japanese market and the Harvia Japan Ltd joint venture with Bergman Ltd. The cabins are built with innovative design for easy assembly and high-quality materials, crafted with precision and designed for maximum comfort. Three sizes are available to cover different residential and light commercial footprints. Söpö was introduced as part of a broader Japan-specific product portfolio that also included new electric heaters designed and certified to Japanese electrical specifications, and the establishment of 24-plus showrooms across Japan by year-end 2023. The name Söpö means "cute" in Finnish, reflecting the cabin\'s targeted aesthetic for Japanese and Asian-Pacific consumers, especially young and female sauna bathers driving the sauna boom in Tokyo, Osaka, Fukuoka, and other major Japanese cities.',
    heroImage: 'https://harviagroup.com/wp-content/uploads/2025/05/Kiuas_Kuva1-780x439.jpg',
    gallery: [
      'https://harviagroup.com/wp-content/uploads/2025/05/Kiuas_Kuva1-780x439.jpg',
    ],
    specsSummary: [
      { label: 'Category', value: 'Prefabricated sauna cabin' },
      { label: 'Design', value: 'Precision-crafted, easy assembly' },
      { label: 'Sizes', value: '3 sizes available' },
      { label: 'Target market', value: 'Japan (primary); APAC' },
      { label: 'Launch', value: '2023' },
      { label: 'Parent group', value: 'Harvia Plc' },
    ],
    sizes: [
      { model: 'Söpö S', kw: 'Heater-dependent', roomSize: 'Compact residential', note: 'Smallest size in the range' },
      { model: 'Söpö M', kw: 'Heater-dependent', roomSize: 'Standard residential', note: 'Mid-range size' },
      { model: 'Söpö L', kw: 'Heater-dependent', roomSize: 'Larger residential or light commercial', note: 'Largest size in the range' },
    ],
    keyFeatures: [
      'Innovative design for easy assembly',
      'High-quality materials, precision-crafted for maximum comfort',
      'Three sizes cover residential and light commercial needs',
      'Developed in coordination with Japanese market expansion',
      'Part of a broader Harvia Japan product portfolio (heaters, cabins, solutions)',
      'Compatible with Harvia Japanese-specification heaters',
    ],
    quotes: [
      {
        quote:
          'With an innovative design for easy assembly and using high-quality materials, the Söpö sauna cabins are crafted with precision and designed for the utmost comfort, and they are available in three sizes.',
        source: 'Harvia Plc 2023 Annual Report',
        context: 'Söpö launch as part of Harvia Japan portfolio',
        date: '2024-03-15',
      },
      {
        quote:
          'In Japan, Harvia launched Söpö saunas. In addition, the company has applied for new certificates for both certain electric heaters and complete sauna solutions in Japan.',
        source: 'Harvia Plc 2023 Annual Report',
        context: 'Japan product and certification expansion',
        date: '2024-03-15',
      },
    ],
    insiderNotes: [
      {
        title: 'Designed for the Japan sauna boom',
        body:
          'Söpö targets the emerging Japanese sauna culture, specifically the young urban and female-skewed bathers driving new sauna construction in Japanese cities. The cabin aesthetics, size ranges, and assembly process were tuned for Japanese residential and boutique commercial installations, not the Northern European default.',
      },
      {
        title: 'Part of the Bergman JV distribution push',
        body:
          'Harvia Japan Ltd was established in August 2023 as a joint venture with Bergman Ltd, the same Japanese distributor behind Thermory\'s Japan push. Söpö rolled out through Harvia Japan\'s expanding showroom network (over 24 showrooms by year-end 2023) and via the B2B dealer channel. This is not (yet) a North American product.',
      },
      {
        title: 'Harvia Japan now fully operational',
        body:
          'Harvia Japan Ltd became fully operational in the first half of 2024. By Q3 2025 APAC & MEA posted 36.4% revenue growth, with Japan called out as a strategically significant market. Expect more Japan-tuned products, including additional cabin options and specifications, in the 2025 to 2026 launch cycle.',
      },
    ],
    bestFor:
      'Japanese residential and light commercial sauna installations, Asia-Pacific markets with similar spatial constraints and aesthetic preferences, buyers who want a precision-crafted and easy-to-assemble prefab cabin in a smaller-scale format. Not currently a North American mass-market product.',
    warranty: 'Per Harvia Japan terms',
    madeIn: 'Harvia Group (Finland/Romania supply chain)',
    launched: '2023',
    lastMentioned: '2024-03-15',
    lastMentionContext: 'Harvia 2023 Annual Report Japan launch',
    relatedProductSlugs: ['cilindro-electric', 'spirit', 'xenio-fenix'],
    harviaUrl: 'https://www.harvia.com/ja-JP/',
  },
];

export function getProduct(slug: string): HarviaProduct | undefined {
  return harviaProducts.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return harviaProducts.map((p) => p.slug);
}
