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
    heroImage: 'https://www.datocms-assets.com/41658/1694070415-harvia_cilindroh_e_hpcs_usa_f6_web.jpg',
    gallery: [
      'https://www.datocms-assets.com/41658/1694070415-harvia_cilindroh_e_hpcs_usa_f6_web.jpg',
      'https://www.datocms-assets.com/41658/1618819376-harviacilindropc70-90blacksteeld1.jpeg',
      'https://www.datocms-assets.com/41658/1620188522-veikkahannikainenauroravillagecilindro-1.jpg',
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
      'Full 304-grade stainless shell, designed for daily commercial cycling',
      'Compatible with Xenio and Fenix WiFi control units',
      'PC66E Half-heater variant mounts flush against a wall',
      'PC110 supports 208V three-phase for commercial service',
      'Made in Finland (Muurame) — Finnish Key Flag product',
    ],
    quotes: [
      {
        quote:
          'Heating equipment was the primary growth driver, growing by 13% and adding EUR 3.4 million to the top line.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Discussion of FY 2025 product-category growth — the electric heater line (anchored by Cilindro, Virta Pro, Spirit) is Harvia\'s largest revenue segment',
        date: '2026-02-12',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvia-q4-2025-sees-revenue-growth-but-stock-dips-93CH-4502032',
      },
      {
        quote:
          'We make clearly more than 200,000 heaters per year and give and take maybe 20,000 sauna cabins.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'Annual Harvia Group unit volume disclosure — the Cilindro family is part of that 200,000+ heater figure',
        date: '2025-11-06',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvias-q3-2025-shows-solid-growth-stock-surges-93CH-4336891',
      },
      {
        quote:
          'We do have actually a factory in Asia. So since 2005, this is actually the 20th anniversary of our factory in Guangzhou.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'On the Guangzhou facility that produces heating elements and resistors for the electric lineup including Cilindro, with final assembly in Muurame',
        date: '2025-11-06',
      },
    ],
    insiderNotes: [
      {
        title: 'How you stack the stones changes everything',
        body:
          'Cilindro performance depends on how the stones are stacked. Tight-pack the bottom third to reflect heat back into the elements, then leave the top two-thirds loose so steam can travel. Tightly packing the top stones cuts löyly by 30-40%. Harvia\'s install manual shows this; most DIY installs get it wrong and then complain the heater "doesn\'t steam right."',
      },
      {
        title: 'The 208V vs 240V gotcha on PC100 and PC110',
        body:
          'US residential installs almost always wire 240V single-phase. Commercial installs frequently land on 208V three-phase. Harvia ships the PC100 and PC110 with element sets sized for the service they\'re ordered against. A 240V unit wired to a 208V panel runs at about 75% of rated output and never reaches target temperature. Specialty dealers know to ask what service is on the panel before quoting.',
      },
      {
        title: 'Use the specified olivine-diabase stones',
        body:
          'Customer complaints about "sparks" from Cilindro are almost always caused by non-spec stones, not the heater. Harvia specifies washed olivine-diabase stones in a specific size range. Garden-center bag stones have crevices full of dust that ignite on exposed elements. Use the specified stones and wash them on install.',
      },
      {
        title: 'Commercial cycling: replace elements at hour 8,000, not when they fail',
        body:
          'Commercial Cilindro installs in hotel spas running 10+ hours per day see element fatigue at around 8,000 operating hours (roughly 2-3 years at heavy duty). Proactive replacement at that interval prevents the 48-hour downtime that happens when an element fails mid-service. The elements themselves are inexpensive; the labor window is the cost.',
      },
    ],
    bestFor:
      'Serious residential and commercial installs that want soft-steam performance close to wood-fired from an electric. Glass-front design-forward builds. Commercial rooms 318-670 cu ft where the Half variant wall-mount or 208V 3-phase service are relevant.',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland (element production partially from Guangzhou, China factory since 2005)',
    launched: 'Electric Cilindro in current form: early 2010s, ongoing refresh',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — heating equipment growth commentary',
    relatedProductSlugs: ['cilindro-wood', 'virta-pro', 'spirit', 'xenio-fenix'],
    harviaUrl: 'https://www.harvia.com/en-US/harvia-cilindro-heater/',
  },
  {
    slug: 'cilindro-wood',
    name: 'Harvia Cilindro Wood-Burning',
    subtitle: 'The 75th anniversary wood-fired pillar. Launched 2025.',
    series: 'Cilindro WKPC16 / WKPC20',
    category: 'wood-burning-heater',
    position: 'flagship',
    tagline: 'The Cilindro visual signature, now wood-fired. Big stone mass, glass hatch for firelight, unique rear ventilation duct. A genuinely new product, not a refresh.',
    intro:
      'The wood-burning Cilindro is a new product, introduced 30 January 2025 as the first highlight of Harvia\'s 75th anniversary year. It takes the cylindrical pillar format that made the electric Cilindro famous and rebuilds it as a wood-fired heater: roughly 265 pounds of stones (120 kg), a stainless steel shell, a cast-iron firebox with a glass hatch so flame is visible through the column, and a distinctive rear ventilation duct that accelerates room heat-up. It is a Finnish Key Flag product, designed and built in Harvia\'s Muurame factory. Accessories available in the US include the WL200PC protective sheath, the WL300PC smoke pipe cover, and the WP250PC 25-liter pipe-mounted water heater.',
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
      { label: 'Construction', value: 'Stainless steel shell, cast-iron firebox' },
      { label: 'Made in', value: 'Muurame, Finland' },
      { label: 'Certification', value: 'Finnish Key Flag product' },
    ],
    sizes: [
      { model: 'WKPC16S (Cilindro 16)', kw: 'Wood-fired, ~16 kW equivalent output', roomSize: 'Medium-sized saunas', stones: '~265 lbs (120 kg)', note: 'Steel shell; US-available' },
      { model: 'WKPC20S (Cilindro 20)', kw: 'Wood-fired, ~20 kW equivalent output', roomSize: 'Larger rooms', stones: '~265 lbs+', note: 'Steel shell; larger variant' },
    ],
    keyFeatures: [
      '~265 lbs (120 kg) of stones — generous capacity for strong steam',
      'Cast-iron glass hatch shows flame through the pillar',
      'Unique rear ventilation duct accelerates room heat-up',
      'Stainless steel outer shell (ensures quiet operation)',
      'Replaceable air control panels in the firebox',
      'Finnish Key Flag product — designed and made in Muurame',
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
          'We have been continuing our systematic investments in increasing capacity to produce more products.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'On Finnish factory capacity investments — the Muurame site is where the wood-burning Cilindro is produced',
        date: '2026-02-12',
      },
    ],
    insiderNotes: [
      {
        title: 'How it\'s different from the electric Cilindro',
        body:
          'Same visual format, completely different product. The wood-burning variant has a cast-iron firebox, glass hatch, rear ventilation duct, and chimney connection. It is NOT interchangeable with the electric PC-series — the shell, base, and internal structure are purpose-built for a burning fire. Retailers sometimes cross-list them; confirm model number (WKPC16/WKPC20 vs PC66E/PC70/PC90/PC100/PC110) before ordering.',
      },
      {
        title: 'Why the rear ventilation duct matters',
        body:
          'The rear ventilation duct is the one mechanical innovation specific to this product. It pulls cool room air up the back of the heater and releases it as heated air at the top, accelerating room heat-up in a way conventional Harvia wood burners don\'t. In comparable rooms, the Cilindro wood-burning reaches bench temperature 10-15 minutes faster than the Legend 150.',
      },
      {
        title: 'You still need a 6" Class A chimney',
        body:
          'Like all Harvia wood-burners, the Cilindro wood-burning ships with a Finnish flue collar that does not directly match North American building code. Every US/Canada install needs a 115mm-to-6" adapter and a full insulated Class A chimney from the heater to termination above the roof. Budget $2,500-$4,000 for the chimney package in addition to the heater.',
      },
      {
        title: 'The 120 kg stone load is more than it sounds',
        body:
          '120 kg (~265 lbs) is a substantial stone mass that takes real time to settle after a first fire. Harvia recommends two or three "seasoning" burns before heavy use to let the stones relieve internal stress. Skipping seasoning often produces pops and cracks in the first few sessions. Do it on install, not later.',
      },
    ],
    bestFor:
      'Off-grid cabin builds, wood-fired residential sauna rooms wanting modern design, destination commercial builds where visible flame inside the heater is part of the brand experience. Builders committed to wood sourcing and flue maintenance.',
    warranty: '2 years',
    madeIn: 'Muurame, Finland (Finnish Key Flag product)',
    launched: '30 January 2025 (75th anniversary launch)',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — continued capacity investment commentary',
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
    tagline: 'Dual-group elements, heavy stone cradle, stainless construction. The heater specified when a commercial sauna has to run 10 hours a day for ten years.',
    intro:
      'The Virta Pro is Harvia\'s commercial electric standard. Its defining spec is the dual-group element design: the heating elements are divided into two independent circuits so a single failure never takes the sauna fully offline. It is the heater commercial dealers reach for when they need 16 to 22 kW of output for a hotel spa, apartment amenity, or gym sauna between 400 and 1,400 cubic feet. The Virta Pro is not sold as a residential unit (though residential buyers sometimes specify it for oversized rooms). It needs an external control unit — Xenio CX45 for the HL110-HL160, stepping up to CX170 or Fenix FX170 for HL200 and HL220.',
    heroImage: 'https://harviagroup.com/wp-content/uploads/2025/06/EOS_1232marg.jpg',
    gallery: [
      'https://harviagroup.com/wp-content/uploads/2025/06/EOS_1232marg.jpg',
      'https://www.datocms-assets.com/41658/1619081499-alpencamping-nenzing-13.jpg',
      'https://www.datocms-assets.com/41658/1619775356-harviastgeorgef1.jpg',
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
      'Built for heavy-duty commercial cycling (4,000+ hours annual)',
      'Requires external Xenio or Fenix control unit',
      'Full 304-grade stainless construction',
      'Dual 300°F high-limit thermal cutouts for commercial code',
      'US commercial installation support through Harvia North America (Anoka, MN)',
    ],
    quotes: [
      {
        quote:
          'We make clearly more than 200,000 heaters per year and give and take maybe 20,000 sauna cabins.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'Harvia Group annual unit production volumes — includes the Virta Pro commercial line',
        date: '2025-11-06',
      },
      {
        quote:
          'Heating equipment was the primary growth driver, growing by 13% and adding EUR 3.4 million to the top line.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Harvia\'s electric heater category — the Virta Pro is the commercial anchor',
        date: '2026-02-12',
      },
      {
        quote:
          'We have been continuing our systematic investments in increasing capacity to produce more products.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Muurame factory capacity expansion — commercial heater production scaling',
        date: '2026-02-12',
      },
    ],
    insiderNotes: [
      {
        title: 'HL160 is the hospitality sweet spot',
        body:
          'Specifiers default to HL200 for "big" saunas but the HL160 at 16 kW is the right call for hotel rooms under 900 cubic feet. HL200\'s extra 4 kW adds nothing below 800 cubic feet except a 20% operating-cost hit. Measure twice before quoting.',
      },
      {
        title: 'Dual-group elements are a cash-flow tool',
        body:
          'The dual-group design looks like a spec checkbox but it is really about avoiding downtime. When element group A fails at month 48, swap it without closing the spa. When group B fails at month 52, do the same. The sauna never goes fully offline. For a hotel running four sessions per hour, two days of downtime is roughly $6,000 in lost amenity value — the Virta Pro spec is designed to eliminate that window.',
      },
      {
        title: 'Match the controller to the model',
        body:
          'Xenio CX45 handles up to 17 kW and is correct for HL110-HL160. For HL200 and HL220 you need CX170 or Fenix FX170. Undersizing the controller is the single most common Virta Pro install mistake; an underspec\'d panel nuisance-trips within 30 days. Confirm controller amperage rating against heater nameplate before ordering.',
      },
      {
        title: 'Order a service contract when you order the heater',
        body:
          'Commercial Virta Pro installs that sign a service contract at order time see meaningfully lower lifetime cost than installs that buy reactively. Element swaps, thermostat calibration, and stone reloads are cheap on a schedule and expensive when the sauna is down. Harvia North America (Anoka, MN) offers this directly; specialty dealer networks often bundle it.',
      },
    ],
    bestFor:
      'Hotel and resort spas, fitness centers, apartment amenity saunas, multi-unit condos, and residential installs over 900 cu ft. Any environment with 8+ hours of daily operation where element redundancy matters.',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland',
    launched: 'Virta Pro HL series — long-running commercial platform with refresh cycles',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — heating equipment growth and capacity investment commentary',
    relatedProductSlugs: ['cilindro-electric', 'xenio-fenix', 'pro-36'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/electric-sauna-heater/virta-pro-electric-heaters/',
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
      'The Spirit is Harvia\'s residential sweet spot. It combines a sculptural wall-mount form with a generous 110-pound stone capacity, two independent safety sensors, and standard WiFi through the MyHarvia app. It\'s the heater that shows up in most 6x6 and 6x8 residential saunas sold through US specialty dealers. It is designed and manufactured in Finland and certified to UL 875 for US and Canadian installations. The three models — SP60 (6 kW), SP80 (8 kW), and SP90 (9 kW) — run on standard 240V single-phase residential service.',
    heroImage: 'https://www.datocms-assets.com/41658/1699262468-harvia_spirit_us_d1_sml.png',
    gallery: [
      'https://www.datocms-assets.com/41658/1699262468-harvia_spirit_us_d1_sml.png',
      'https://www.datocms-assets.com/41658/1696398243-harvia_spirit_hspe60um_hspe90um_safetyrailing_hsp3m_f4.jpg',
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
      'WiFi-ready standard, controlled through MyHarvia app',
      '240V single-phase operation on standard US residential service',
      'Same heating elements used across Harvia\'s commercial lineup',
      'Curved rock basket — visible stones from every angle',
      'UL 875 certified for US and Canada (Electric dry-bath sauna heaters)',
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
          'Over 70% of what we sell in the US is made in America.',
        source: 'Harvia management commentary, Q1 2025 earnings context',
        context: 'On US production mix — Spirit is Finnish-made but ships to US through the Harvia North America distribution network based in Anoka, MN',
        date: '2025-05-07',
      },
      {
        quote:
          'Designed and manufactured in Finland [to meet] Electric dry-bath sauna heaters UL 875 for USA and Canadian requirements.',
        source: 'harvia.com Spirit product page',
        context: 'US/Canada certification disclosure',
        date: '2025-02-15',
      },
    ],
    insiderNotes: [
      {
        title: 'Why Spirit beats Cilindro for most US residential builds',
        body:
          'For residential saunas under 300 cu ft, Spirit is usually the right spec. Wall-mount saves 3-4 sq ft of bench space, the 110 lb stone capacity is plenty for residential sessions, price is roughly 30-40% lower than Cilindro, and WiFi is standard. Step up to Cilindro only if the room is over 450 cu ft or you want the visual statement.',
      },
      {
        title: 'Room-side safety sensor placement is the #1 install error',
        body:
          'The Spirit\'s room-side safety sensor has to be mounted 6-12 inches below the ceiling on the wall opposite the heater. Half the dealer-installed saunas get this wrong — sensors too low trigger nuisance high-limit trips. If your Spirit trips during normal use, check sensor placement before calling service.',
      },
      {
        title: 'Round up on sizing — always',
        body:
          'Harvia\'s room-size charts assume tight construction and minimal glass. US residential builds almost always have more glass and less insulation than spec. Round up. If the chart says SP60, specify SP80. Operating cost difference is negligible; performance gap when it counts is meaningful.',
      },
    ],
    bestFor:
      'Residential saunas 170-460 cubic feet. US homeowners wanting WiFi control out of the box. Tight build-outs where floor space matters. Specialty dealers who want a reliable mid-range recommendation on standard 240V service.',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland (UL 875 certified for US and Canada)',
    launched: 'Spirit series ~2020; WiFi standard from 2023',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — heating equipment category growth',
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
      'The Vega is the product nobody writes magazine features about and Harvia sells at the highest volume in the lineup. It is a compact, wall-mounted, symmetric stainless heater for small-to-mid residential saunas between 70 and 510 cubic feet. Vega ships inside most Almost Heaven barrel sauna kits, Costco-channel packages, and specialty-dealer entry-level builds. Two variants ship: BC (built-in controls) for plug-and-play installs, and BCE (external controls) for installations pairing with a Xenio or Fenix panel. Vega runs on standard US 240V single-phase.',
    heroImage: 'https://harviagroup.com/wp-content/uploads/2025/06/Almost-Heaven_1232marg.jpg',
    gallery: [
      'https://harviagroup.com/wp-content/uploads/2025/06/Almost-Heaven_1232marg.jpg',
    ],
    specsSummary: [
      { label: 'Power range', value: '4.5, 6, 8, 9 kW' },
      { label: 'Stone capacity', value: '~29 – 45 lbs' },
      { label: 'Room size', value: '70 – 510 cu ft' },
      { label: 'Voltage', value: '240V 1PH' },
      { label: 'Mounting', value: 'Wall-mount, low position' },
      { label: 'Variants', value: 'BC (built-in controls) / BCE (external)' },
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
      'Low wall-mount position ensures steam reaches bottom benches',
      'Symmetric design — switches can be mounted on either side',
      'Stainless steel outer shell',
      'UL listed for US installations',
      'Default heater inside Almost Heaven barrel sauna kits',
    ],
    quotes: [
      {
        quote:
          'Almost Heaven is the brand which you could consider as kind of like the IKEA of the saunas.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Almost Heaven positioning — Vega is the heater inside the majority of Almost Heaven barrel sauna kits',
        date: '2026-02-12',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvia-q4-2025-sees-revenue-growth-but-stock-dips-93CH-4502032',
      },
      {
        quote:
          'They are made in America, in the heartlands of America in West Virginia.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'On Almost Heaven sauna production — barrel sauna assembly is in Renick, WV; Vega heaters are Finnish-made but ship from the West Virginia facility as part of complete kits',
        date: '2026-02-12',
      },
      {
        quote:
          'We bought land around our West Virginia factory in the United States, and we have started to develop the site... We are investing in our [West Virginia] site in particular in anticipation of driving a significant and ambitious growth strategy in the region.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'US expansion — the West Virginia site is where Almost Heaven kits (containing Vega heaters) are assembled and shipped',
        date: '2025-11-06',
      },
      {
        quote:
          'We make clearly more than 200,000 heaters per year.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'Annual Harvia Group heater volume — Vega and its siblings make up the highest unit share of that total',
        date: '2025-11-06',
      },
    ],
    insiderNotes: [
      {
        title: 'BC vs BCE — pick correctly or waste money',
        body:
          'Built-in controls (BC) is the default for entry-level installs. External controls (BCE) is only worth the extra cost if you\'re adding a Xenio or Fenix panel for WiFi or remote start. Buying BCE plus a controller for a basic install is a $400+ upgrade that delivers zero benefit if the user will always press the physical button.',
      },
      {
        title: 'Stone quality matters disproportionately on small heaters',
        body:
          'The Vega\'s small stone capacity (29-45 lbs) means stone quality and loading pattern matter more than on larger units. Use washed olivine-diabase in the 2-4 inch size range. Smaller landscape rocks pack too tightly, restrict airflow, and can cause elements to overheat and trip.',
      },
      {
        title: 'Skip the BC45 — go BC60 minimum',
        body:
          'The 4.5 kW BC45 is spec\'d for 70-160 cu ft rooms. In real-world US residential builds with typical glass and door loss, performance runs 20-25% below nameplate. Budget the BC60 and enjoy the headroom.',
      },
    ],
    bestFor:
      'Barrel saunas, entry-level residential saunas under 400 cu ft, OEM kit integrations, and installs where price beats features. Default heater inside Almost Heaven packages sold through Costco, Almostheaven.com, and specialty dealers.',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland (ships with Almost Heaven kits from Renick, WV)',
    launched: 'Long-running platform, continuously updated',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — Almost Heaven "IKEA of saunas" commentary',
    relatedProductSlugs: ['spirit', 'forte', 'cilindro-electric'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/electric-sauna-heater/vega-electric-heaters/',
  },
  {
    slug: 'forte',
    name: 'Harvia Forte',
    subtitle: 'Ever-Ready heat-storing: ready when you walk in',
    series: 'Forte AF series',
    category: 'electric-heater',
    position: 'premium',
    tagline: 'Heat-storing inner chamber keeps stones continuously warm; outer lid and casing stay cool to the touch. In ECO mode the sauna is session-ready all day.',
    intro:
      'The Forte is Harvia\'s answer to a specific problem: conventional electric heaters take 30-45 minutes to reach session temperature from cold, which kills spontaneous use. The Forte keeps the stones warm continuously inside a sealed inner chamber while the outer lid and casing stay at safe-to-touch temperatures. ECO mode holds the stones at a low idle for a fraction of typical running cost; bumping to session temperature then takes under 15 minutes instead of 45. Built-in digital controls with MyHarvia WiFi standard. Four US models: AFB4 (4 kW), AF45 (4.4 kW), AF65 (6.5 kW), AF90 (9 kW), all on 240V single-phase.',
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
      'ECO mode holds low-idle temperature without turning off',
      'Outer lid and casing stay at safe-to-touch temperatures',
      'Automatic shutoff if the cover is left open',
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
          'Heating equipment was the primary growth driver, growing by 13% and adding EUR 3.4 million to the top line.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Harvia electric heater growth — Forte sits in the category\'s premium residential segment',
        date: '2026-02-12',
      },
    ],
    insiderNotes: [
      {
        title: 'The ECO-mode math is non-obvious',
        body:
          'Daily sauna users save money running Forte in ECO mode 24/7 versus starting from cold each session. Cold start pulls ~5 kWh; ECO idle pulls ~0.4-0.7 kWh/hr. 24 hours of idle plus a 15-minute warmup is ~12 kWh total. Daily users come out ahead. For 1-2 sessions per week, ECO costs more than cold starts — stick with standard mode.',
      },
      {
        title: 'Lid auto-off is a commercial liability feature',
        body:
          'The Forte\'s lid auto-off is the reason some commercial installers specify it over cheaper options. Guests leaving towels on top of heaters is the most common commercial failure mode; Forte literally will not run with the cover open. Residential users take this for granted; commercial ops teams treat it as a liability-prevention tool.',
      },
      {
        title: 'Pair with a Fenix FX110 for multi-user households',
        body:
          'Forte\'s built-in controls are fine for single-user households. For households with multiple users on different schedules, pair the Forte with a Fenix FX110 (or Xenio CX110 on the legacy side). MyHarvia then lets users queue sessions from the road, with the ECO mode meaning queued sessions start from a 15-minute warmup rather than 45.',
      },
    ],
    bestFor:
      'Daily sauna users. Busy households where spontaneity matters. Small-to-mid residential saunas 142-459 cu ft. Commercial installs where lid-on-heater liability is a concern.',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland',
    launched: 'Forte Ever-Ready line launched 2023; US AF series refreshed 2024',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — heating equipment growth',
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
      'The Legend is Harvia\'s flagship wood-burning line. Legend 150 is the residential-to-small-commercial unit for rooms up to 460 cubic feet. The 240 and 240SL scale to larger commercial installs; the SL variant adds an external wood feed so the fire is tended from outside the sauna room. The Legend replaced Harvia\'s older wood-burning catalog in the late 2010s and has become the default specification for serious wood-fired residential and destination-commercial builds. Cast-iron glass door, modern grate for cleaner burn, adjustable legs, top or rear flue connection.',
    heroImage: 'https://www.datocms-assets.com/41658/1678871916-harvialegend_wk200ld_f5_rajattu_kesko.jpg',
    gallery: [
      'https://www.datocms-assets.com/41658/1678871916-harvialegend_wk200ld_f5_rajattu_kesko.jpg',
      'https://www.datocms-assets.com/41658/1693910481-harvia_legend_outdoorsauna_shl3410_f7.jpg',
      'https://www.datocms-assets.com/41658/1695126125-legend_sopusointuja.jpg',
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
      { model: 'Legend 150', kw: '~16 kW equivalent', roomSize: '210 – 460 cu ft', stones: '~265 lbs', note: 'Residential / small commercial' },
      { model: 'Legend 240', kw: '~21 kW equivalent', roomSize: '350 – 850 cu ft', stones: '~450 lbs', note: 'Commercial; fire tended in hot room' },
      { model: 'Legend 240SL', kw: '~21 kW equivalent', roomSize: '350 – 850 cu ft', stones: '~450 lbs', note: 'External wood-feed door' },
    ],
    keyFeatures: [
      'Cast-iron glass door — firelight visible through the front',
      'Modern grate structure for cleaner, more efficient burning',
      'Adjustable legs handle uneven floors',
      'Top or rear flue connection options',
      '115 mm (4.5") native flue collar — requires 6" adapter for North American code',
      'Optional pipe-mounted water heater for a changing-room water supply',
      'SL variant: external wood-feed door keeps firewood and ash out of the hot room',
    ],
    quotes: [
      {
        quote:
          'Modern grate structure in the fire chamber results in cleaner and more efficient burning. Cast-iron glass door that lets warm firelight glow through.',
        source: 'harvia.com Legend product page',
        context: 'Official consumer positioning for the Legend wood-burning line',
        date: '2024-10-01',
        url: 'https://www.harvia.com/en-US/sauna-heaters/sauna-wood-burning-heater/legend-wood-burning-heaters/',
      },
      {
        quote:
          'We have been continuing our systematic investments in increasing capacity to produce more products.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Muurame factory capacity investments — the Legend line is built here alongside the rest of the Harvia wood-burning catalog',
        date: '2026-02-12',
      },
      {
        quote:
          'They are made in America, in the heartlands of America in West Virginia.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Almost Heaven offers the Legend 150 Kit as part of its US-assembled wood-fired sauna packages. The Legend itself is made in Finland; the full sauna kit ships from the West Virginia facility',
        date: '2026-02-12',
      },
    ],
    insiderNotes: [
      {
        title: 'The 240SL isn\'t a convenience feature — it\'s a safety feature',
        body:
          'The Legend 240SL\'s external wood-feed door is marketed as "convenience." For commercial installs it\'s effectively a safety requirement. Tending a fire inside a 180°F room full of wet guests is a liability event waiting to happen. Any hotel, gym, or bathhouse wood-fired sauna should specify SL or equivalent. Serious residential builds that care about ash management benefit too.',
      },
      {
        title: 'The 6" flue adapter is non-negotiable in North America',
        body:
          'The Legend ships with a 115 mm (4.5") flue collar sized for European code. North American building code requires 6" minimum. Every US/Canada Legend install needs a 4.5"-to-6" adapter (Harvia part HSK6A) plus a full insulated Class A chimney from collar to termination above the roof. Trying to use 6" pipe direct on the 4.5" collar creates a back-pressure problem and smokes into the room.',
      },
      {
        title: 'Stone quality matters more on wood-fired than electric',
        body:
          'The Legend\'s fire chamber runs hotter than an electric element — up to 1,200°F in the grate zone. Cheap stones crack under thermal shock and shatter. Use dense olivine or peridotite stones in the Harvia-specified size range. Budget bag stones from a big-box store fail within months, clog airflow, and cut steam output in half.',
      },
      {
        title: 'The "Harvia 50" at White Mountain Sauna Haus is a different series',
        body:
          'Harvia\'s 20/36/50 wood-burning ("M-series" in older catalogs) is distinct from Legend. The <a href="/article/white-mountain-sauna-haus-north-conway-apres-ski">Harvia 50 referenced at White Mountain Sauna Haus</a> is the largest M-series unit, aimed at very large commercial rooms. Legend 240 competes in the same large-commercial category. Specifiers compare the two: Legend has stone mass advantage (~450 lbs vs M-series smaller capacity); M-series has firebox volume advantage.',
      },
    ],
    bestFor:
      'Off-grid and wood-fired residential builds, destination commercial saunas where wood-fired is part of the brand, builds where the owner is committed to wood management and flue maintenance. SL variant for any commercial wood-fired spec.',
    warranty: '2 years',
    madeIn: 'Muurame, Finland',
    launched: 'Legend line launched mid-2010s; 240SL external-feed variant added later',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — factory capacity investment + Almost Heaven West Virginia kit distribution',
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
      'The Harvia Pro 20 and Pro 36 are the commercial-scale wood-burning stoves Harvia builds for public saunas, resorts, and large communal installations. Pro 36 (WK360) is the headline unit: 31 kW equivalent output, rooms up to 1,270 cubic feet, 132 lbs of stones stacked in three tiers, and a fire chamber that accepts firewood up to 15.3 inches long. These are the heaters that end up in Nordic bathhouses, ski-town communal saunas, and destination wellness properties. The minimum ceiling spec is 81 inches — scaled for commercial rooms, not residential.',
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
      'Compatible with insulated Class A flue systems for commercial BTU output',
      'Minimum 81" ceiling clears typical commercial sauna rooms',
    ],
    quotes: [
      {
        quote:
          'We have been continuing our systematic investments in increasing capacity to produce more products.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Muurame factory capacity investment — Pro 20/36 is produced alongside the rest of Harvia\'s wood-burning line',
        date: '2026-02-12',
      },
      {
        quote:
          'Expanding the factory in US. This US expansion still will continue beginning of this year.',
        source: 'CFO Ari Vesterinen, Q4 2025 earnings call',
        context: 'On Harvia\'s US capital expenditure — commercial wood-burning units including Pro 36 are distributed through the Anoka, MN and Renick, WV network',
        date: '2026-02-12',
      },
    ],
    insiderNotes: [
      {
        title: 'The 81-inch ceiling minimum is not a guideline',
        body:
          'Pro 36\'s 81-inch ceiling requirement comes from flue clearance and radiant distribution. Builders who try to fit it in a 78-inch-ceiling room create hot spots at head height and insufficient steam at bench height. Lower ceiling rooms should step down to Pro 20 or spec Legend 240SL.',
      },
      {
        title: 'Pro 36 vs Legend 240SL for commercial spec',
        body:
          'These get compared for commercial builds in the 700-1,200 cu ft range. Pro 36 has the larger fire chamber and faster heat-up but smaller stone capacity (132 vs 450 lbs) so löyly recovery between water pours is less forgiving. Legend 240SL has the external wood-feed door most commercial operators prefer. Legend 240SL tends to win specs where operator experience matters; Pro 36 wins where fast heat-up time is the priority.',
      },
      {
        title: 'Insulated Class A chimney is not optional',
        body:
          'At 31 kW of wood-fired output, Pro 36 flue gas temperatures run 600-800°F during active burning. Single-wall flue is not rated for that. Every commercial Pro 36 install needs full insulated Class A chimney from heater collar to termination above the roof. Budget $2,500-$4,500 for the chimney package alone. Single-wall pipe is a code violation and a fire hazard.',
      },
    ],
    bestFor:
      'Commercial and destination wood-fired saunas, ski-town communal bathhouses, Nordic-inspired resort installations, large private cabin sauna builds where the operator wants the real Finnish commercial experience.',
    warranty: '2 years',
    madeIn: 'Muurame, Finland',
    launched: 'Long-running Pro series; current Pro 36 (WK360) is current generation',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — Finnish factory capacity expansion',
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
      'Harvia operates two generations of control platform. Xenio is the large installed base — it has shipped with most Harvia heaters sold since ~2018. Fenix is the 2025 flagship: 4.3-inch full touchscreen, MyHarvia WiFi app control, over-the-air firmware updates, and critically, backward-compatible wiring so Xenio owners can upgrade without rewiring the heater. The MyHarvia app is the unifying interface, supporting temperature, humidity, lighting, ventilation, week timers, multi-sauna control for commercial operators, and the new MyHarvia Smart Sauna Sensor that retrofits any existing sauna. Fenix sales began in Q3 2025 and were explicitly called out by CEO Järnefelt as "really great performance" in Q4.',
    heroImage: 'https://www.datocms-assets.com/41658/1748948894-harvia_fenix_smoke_f1.jpg',
    gallery: [
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
        context: 'Fenix launch announcement — some investor materials translate "Fenix" (Finnish/Latin) as "Phoenix" in English',
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
    ],
    insiderNotes: [
      {
        title: 'The backward-compatibility story has one caveat',
        body:
          'Fenix is backward-compatible with Xenio wiring for 95% of installs. Caveat: very early Xenio units (pre-2020) used a 4-pin connector that Fenix does not match directly. Harvia sells a pin adapter (FX-XN-ADT, ~$40) that bridges the two. Confirm the existing Xenio model number before quoting a "plug-and-play upgrade."',
      },
      {
        title: 'iOS and Android parity gap',
        body:
          'MyHarvia runs on both iOS and Android, but the iOS version is typically 1-2 releases ahead on new features. Commercial multi-sauna operators should standardize on iOS or plan around parity gaps. Harvia has been closing the gap but late 2025 still showed differences.',
      },
      {
        title: 'Why Phoenix and Fenix both show up in writing',
        body:
          'Product is officially "Fenix" (Finnish/Latin). Some US-facing earnings transcripts use "Phoenix" as an English transliteration. Same product. When searching harvia.com, use Fenix; when reading investor transcripts, expect either.',
      },
      {
        title: 'OTA updates change the commercial maintenance math',
        body:
          'Fenix over-the-air firmware updates are a small-sounding feature with big implications for commercial operators. A facility running 8 Fenix panels can ship firmware updates to all 8 overnight without a truck roll. Harvia is using this to push bug fixes and new features, including eventual ThermaSol steam integration. Moves Fenix from "nice controller" to "operationally necessary" for commercial specs.',
      },
    ],
    bestFor:
      'Any Harvia heater install from 2020 onward. Commercial operators who want remote control and OTA updates. Residential users upgrading from a legacy Xenio panel. Any sauna where ThermaSol steam integration is planned.',
    warranty: '2 years',
    madeIn: 'Harvia Group (Austria — Sentiotec design collaboration — and Finland)',
    launched: 'Xenio ~2018; Fenix 2025 (sales started Q3 2025)',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — Fenix called out as "really great performance" launch',
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
    tagline: 'A wireless sensor that reads temperature and humidity in any sauna and pushes them to the MyHarvia app. Works on electric, wood-burning, and saunas with no electricity at all.',
    intro:
      'The MyHarvia Smart Sauna Sensor is the 2025 category expansion investors called a "new innovation" on the Q4 2025 earnings call. Unlike Xenio or Fenix, this is not a control panel — it\'s a wireless monitoring sensor. It reads temperature and humidity in any sauna room and transmits to the MyHarvia app. Because it doesn\'t control a heater, it works inside sauna rooms that have no electrical service at all — including traditional wood-fired saunas. For commercial operators, it adds data without rewiring. For residential wood-fired sauna owners, it adds smart-sauna functionality that was previously impossible.',
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
      'Retrofit-friendly — no wiring changes',
      'Extends smart-sauna functionality to 100% of the sauna market, not just electric-heater installs',
    ],
    quotes: [
      {
        quote:
          'MyHarvia Smart Sauna Sensor, which I\'ll be talking a bit about in the next slide.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Product launch introduction',
        date: '2026-02-12',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvia-q4-2025-sees-revenue-growth-but-stock-dips-93CH-4502032',
      },
      {
        quote:
          'It works in any sauna, so it really turns any sauna into a smart sauna, whether it\'s a wood-burning sauna without electricity.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'On the category-expansion logic — MyHarvia Sensor addresses the 40-50% of the global sauna market that is wood-fired or unpowered',
        date: '2026-02-12',
      },
    ],
    insiderNotes: [
      {
        title: 'Not a controller — read that twice',
        body:
          'The MyHarvia Sensor monitors. It does not control a heater. Buyers who assume it will start their wood-burning sauna remotely will be disappointed. What it does do is let you check bench temperature from the house before walking out to light the fire, and log session temperature and humidity data over time. Think of it as a sauna thermometer with a smartphone screen.',
      },
      {
        title: 'The commercial use case is data, not control',
        body:
          'For commercial operators running wood-fired saunas (destination properties, ski-town bathhouses, resort wood-fired rooms), the MyHarvia Sensor adds operational data the operator previously had no way to capture: how hot is the sauna actually running, how long does it hold temperature, how does humidity evolve. This is the first product Harvia has shipped that brings data telemetry to the wood-fired commercial category.',
      },
      {
        title: 'Why it matters for the investor story',
        body:
          'Harvia\'s controller platform historically only attached to Harvia electric heaters. The MyHarvia Sensor is the first Harvia smart product that works across the entire sauna market — including the ~40-50% of the global market that is wood-fired. This is a deliberate category expansion flagged in the Q4 2025 call as a growth vector.',
      },
    ],
    bestFor:
      'Owners of wood-fired saunas who want smart-sauna data. Commercial operators running wood-fired rooms who need operational monitoring. Residential Harvia electric owners who already have Fenix/Xenio and want additional data points. Anyone retrofitting smart functionality into a non-Harvia sauna.',
    warranty: '2 years',
    madeIn: 'Harvia Group (Finland and Austria)',
    launched: 'Q4 2025',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — launched as "new innovation" alongside Fenix performance update',
    relatedProductSlugs: ['xenio-fenix', 'cilindro-wood', 'legend'],
    harviaUrl: 'https://www.harvia.com/en/',
  },
];

export function getProduct(slug: string): HarviaProduct | undefined {
  return harviaProducts.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return harviaProducts.map((p) => p.slug);
}
