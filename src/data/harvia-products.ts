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

export type MediaBankAssetType =
  | 'product-image'
  | 'technical-image'
  | 'lifestyle-image'
  | 'video'
  | 'manual'
  | 'brochure'
  | 'data-sheet'
  | 'safety-data-sheet'
  | 'certificate';

export interface MediaBankAsset {
  id: string;
  src: string;
  title: string;
  type: MediaBankAssetType;
  ext?: string;
  language?: string;
  poster?: string;
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
  mediaBank?: {
    images: MediaBankAsset[];
    videos: MediaBankAsset[];
    documents: MediaBankAsset[];
  };
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
    heroImage: '/images/harvia-mediabank/cilindro-electric/7373.jpg',
    gallery: [
      '/images/harvia-mediabank/cilindro-electric/7373.jpg',
      '/images/harvia-mediabank/cilindro-electric/7372.jpg',
      '/images/harvia-mediabank/cilindro-electric/6849.jpg',
      '/images/harvia-mediabank/cilindro-electric/4442.jpg',
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
        title: 'Stack the bottom stones tight, the top stones loose',
        body:
          'Cilindro löyly depends on how the stones are stacked. Tight stacking at the bottom keeps heat close to the elements; looser stacking higher in the column lets steam travel out when water is thrown on. Follow Harvia\'s installation manual for stone placement; a common cause of weak löyly is over-packing the top of the stone cage.',
      },
      {
        title: '208V vs 240V service on PC100 and PC110',
        body:
          'The PC100 and PC110 are ordered with element sets matched to the electrical service they will run on. A 240V-spec heater wired into a 208V panel runs below its rated output and will not reach target temperature efficiently. Confirm whether your installation is 240V single-phase (typical residential) or 208V three-phase (common commercial) before ordering.',
      },
      {
        title: 'Use washed sauna stones in the specified size range',
        body:
          'Harvia specifies washed olivine-diabase stones in a 2-4 inch (5-10 cm) size range for Cilindro. Garden-center decorative rocks pack too tight, hide dust that can ignite on exposed elements, and can crack under the thermal cycling a sauna heater imposes. Use the specified sauna stones and wash them before first firing.',
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
    heroImage: '/images/harvia-mediabank/cilindro-wood/4925.jpg',
    gallery: [
      '/images/harvia-mediabank/cilindro-wood/4925.jpg',
      '/images/harvia-mediabank/cilindro-wood/4924.jpg',
      '/images/harvia-mediabank/cilindro-wood/5170.jpg',
      '/images/harvia-mediabank/cilindro-wood/4932.jpg',
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
        title: 'The rear ventilation duct is the key design feature',
        body:
          'The rear duct channels cool room air up the back of the pillar and releases it heated at the top, which Harvia positions as accelerating room heat-up. This is the main functional differentiator vs a conventional wood-burning Harvia like the Legend 150 in the same output class.',
      },
      {
        title: 'Chimney sizing and installation is critical',
        body:
          'The Cilindro wood-burning ships with Harvia\'s native 115 mm (4.5") flue collar. North American code typically requires 6" minimum insulated Class A chimney. Use Harvia\'s specified flue components and adapters through a qualified installer; skipping certified chimney hardware on a wood-fired heater is both a code violation and a real fire-safety risk.',
      },
      {
        title: 'Season new stones before heavy use',
        body:
          'A large mass of new stones benefits from a gradual introduction to high heat. Harvia\'s installation guidance calls for preliminary moderate burns before full-intensity sessions. Stones that have not been seasoned can pop or crack during the first high-output burns.',
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
    heroImage: '/images/harvia-mediabank/virta-pro/5927.jpg',
    gallery: [
      '/images/harvia-mediabank/virta-pro/5927.jpg',
      '/images/harvia-mediabank/virta-pro/5815.jpg',
      '/images/harvia-mediabank/virta-pro/8167.jpg',
      '/images/harvia-mediabank/virta-pro/7237.jpg',
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
      'Dual-group heating elements — independent circuits',
      'Stainless steel construction',
      'Requires external Xenio or Fenix control unit',
      'Designed for commercial and hospitality sauna use',
      'Made in Harvia\'s Muurame, Finland factory',
    ],
    quotes: [
      {
        quote:
          'Quarter four 2025 was the strongest sales quarter really in the history of the company.',
        source: 'CFO Ari Vesterinen, Q4 2025 earnings call',
        context: 'Record Harvia quarterly sales',
        date: '2026-02-12',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvia-q4-2025-sees-revenue-growth-but-stock-dips-93CH-4502032',
      },
      {
        quote:
          'Heating equipment was the primary growth driver, growing by 13% and adding EUR 3.4 million to the top line.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Heating equipment category includes Virta Pro',
        date: '2026-02-12',
      },
      {
        quote:
          'We make clearly more than 200,000 heaters per year and give and take maybe 20,000 sauna cabins.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'Annual Harvia Group heater volume',
        date: '2025-11-06',
        url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-harvias-q3-2025-shows-solid-growth-stock-surges-93CH-4336891',
      },
    ],
    insiderNotes: [
      {
        title: 'Pick the kW to the room, not to the headline number',
        body:
          'Commercial specifiers sometimes default to the highest kW Virta Pro option. HL160 at 16 kW is typically more than enough for hotel rooms under 900 cubic feet. Stepping up to HL200 or HL220 adds meaningful operating cost without proportional performance gain in rooms that size. Measure the actual room and match the heater accordingly.',
      },
      {
        title: 'Match the external controller to the heater kW',
        body:
          'Virta Pro needs an external control unit. Xenio CX45 is rated up to 17 kW — appropriate for HL110 through HL160. Larger HL200 and HL220 units need CX170 or Fenix FX170. Undersizing the controller relative to the heater nameplate is a common commercial install error; confirm amperage ratings on both the heater and the controller before ordering.',
      },
      {
        title: 'Dual-group element design supports redundant operation',
        body:
          'Virta Pro\'s elements are split into two independent circuits. If one group fails, the heater continues operating on the remaining group rather than going fully offline. For commercial operators running daily amenity saunas, this reduces the operational impact of a mid-service element failure.',
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
    heroImage: '/images/harvia-mediabank/spirit/4120.jpg',
    gallery: [
      '/images/harvia-mediabank/spirit/4120.jpg',
      '/images/harvia-mediabank/spirit/3417.jpg',
      '/images/harvia-mediabank/spirit/8476.jpg',
      '/images/harvia-mediabank/spirit/6668.jpg',
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
    ],
    insiderNotes: [
      {
        title: 'Spirit is sized for typical US residential rooms',
        body:
          'For 6x6 and 6x8 residential saunas (roughly 170 to 300 cubic feet), Spirit is usually the right Harvia option. Wall-mount saves bench-area footprint vs a floor-standing Cilindro, and 110 lbs of stones is sufficient for residential-intensity use. Step up to Cilindro primarily when the room is significantly larger or when the customer specifically wants the visible stone column as a design element.',
      },
      {
        title: 'Follow Harvia\'s sensor-placement guidance',
        body:
          'Spirit uses two safety sensors, one on the heater itself and one mounted in the sauna room. Incorrect placement of the room sensor is a common cause of nuisance high-limit trips at otherwise normal session temperatures. Install per Harvia\'s instructions, and if trips occur during normal operation, verify sensor placement and wiring before assuming a hardware fault.',
      },
      {
        title: 'Round up a size when the room has significant glass',
        body:
          'Harvia\'s room-size spec charts assume tight construction and modest glass area. US residential builds with large glass doors or windows lose heat faster than the nominal spec envelope. If the chart places your room at the boundary between two Spirit sizes (for example, right at SP60\'s upper limit), consider sizing up to SP80.',
      },
      {
        title: 'The HSP3M safety railing is an optional add-on',
        body:
          'Harvia offers an HSP3M wire-frame safety railing that installs over Spirit to prevent contact with stones while allowing airflow. It ships included with some package deals and is available separately otherwise. Worth specifying for saunas in households with children or where the heater is in reach of unfamiliar guests.',
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
    heroImage: '/images/harvia-mediabank/vega/434.jpg',
    gallery: [
      '/images/harvia-mediabank/vega/434.jpg',
      '/images/harvia-mediabank/vega/433.jpg',
      '/images/harvia-mediabank/vega/435.jpg',
      '/images/harvia-mediabank/vega/436.jpg',
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
        title: 'BC for plug-and-play; BCE when pairing with Xenio or Fenix',
        body:
          'Built-in controls (BC) is the default and the right choice for straightforward residential installs where the user will always start the heater from the physical switch. The external-control (BCE) variant is worth the added cost only when pairing with a Harvia Xenio or Fenix control panel for WiFi, remote start, or MyHarvia app functionality.',
      },
      {
        title: 'Stone quality matters more on smaller heaters',
        body:
          'Vega\'s comparatively modest stone capacity means each stone has to do more of the work. Use washed sauna stones in the size range Harvia specifies (typically 2-4 inch / 5-10 cm olivine-diabase). Landscape or decorative rocks can pack too tight, restrict airflow, and trip the high-limit cutout.',
      },
      {
        title: 'Size up when the room has glass or runs cold',
        body:
          'The 4.5 kW BC45 is rated for relatively small rooms. Real US residential saunas with glass doors or less-than-ideal insulation often perform below nameplate. If your room is at the upper edge of BC45\'s range, specify BC60 instead for more consistent target-temperature behavior.',
      },
      {
        title: 'Confirm the bundled heater model on Almost Heaven kits',
        body:
          'Almost Heaven sauna kits bundle a Vega heater as the default on most residential packages, but the specific model (BC60 vs BC80, etc.) varies by kit and season. If the kit size is at the boundary between two Vega variants, confirm the specific bundled model on the product spec sheet before ordering.',
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
    subtitle: 'Heat-storing "Ever-Ready" heater — EU-market only, not sold in North America',
    series: 'Forte AF series',
    category: 'electric-heater',
    position: 'premium',
    tagline: 'Heat-storing inner chamber that keeps the stones continuously warm so the sauna is session-ready on demand. Sold in European markets. Harvia Forte is not available for the North American market; US and Canadian buyers looking for a premium Harvia electric heater should see Cilindro, Virta Pro, or KIP.',
    intro:
      'The Harvia Forte is a heat-storing "Ever-Ready" electric sauna heater designed for European-market residential use. The product concept addresses a specific consumer problem: conventional electric sauna heaters need 30 to 45 minutes to reach session temperature from cold. Forte keeps stones warm continuously inside an insulated inner chamber while the outer casing stays at safe-to-touch temperatures, with an ECO low-idle mode that holds the heater in a ready state at a fraction of typical in-use running cost. Note: Harvia Forte is sold in European markets and is not part of Harvia\'s official North American product range. US and Canadian buyers should look at Harvia KIP, Cilindro, or Virta Pro for Harvia\'s North American electric-heater lineup. Products listed by some North American retailers are typically EU-spec units brought in through grey-market channels without Harvia US distribution support.',
    heroImage: '/images/harvia-mediabank/forte/1279.jpg',
    gallery: [
      '/images/harvia-mediabank/forte/1279.jpg',
      '/images/harvia-mediabank/forte/1184.jpg',
      '/images/harvia-mediabank/forte/1190.jpg',
      '/images/harvia-mediabank/forte/724.jpg',
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
      { model: 'Forte AF series (EU)', kw: '4 – 9 kW range (EU-spec)', roomSize: 'EU market only', voltage: 'EU-spec (400V 3PH or 230V 1PH per variant)', note: 'Specific model lineup varies by EU country; not stocked or distributed by Harvia US' },
    ],
    keyFeatures: [
      'Heat-storing inner chamber keeps stones warm continuously',
      'ECO low-idle mode holds ready-state temperature without full shutoff',
      'Outer casing designed to stay at safe-to-touch temperatures in operation',
      'Built-in digital controls with Harvia app connectivity (EU variants)',
      'EU-spec product — not part of Harvia\'s North American lineup',
    ],
    quotes: [
      {
        quote:
          'The Harvia Forte Ever-Ready heater is ready for sauna at a moment\'s notice and is designed to be safe, energy efficient and easy to use whenever you want to sauna.',
        source: 'harvia.com Forte product page',
        context: 'Harvia marketing copy for the Forte product family (EU market)',
        date: '2024-03-15',
        url: 'https://www.harvia.com/en-US/ideas-and-trends/products/harvia-forte-ever-ready-heater/',
      },
      {
        quote:
          'The new ECO mode saves electricity, as it allows you to adjust the heater\'s temperature to a very low setting without turning off the heater.',
        source: 'harvia.com Forte product page',
        context: 'ECO mode positioning for European residential users',
        date: '2024-03-15',
      },
    ],
    insiderNotes: [
      {
        title: 'Not sold through Harvia US / Almost Heaven',
        body:
          'North American buyers will not find Forte in the Almost Heaven product catalog and it is not stocked by Harvia US. Listings at some independent North American retailers are typically EU-spec units brought in outside of Harvia\'s official US distribution — warranty, UL certification, and support are not equivalent to Harvia-supported US products.',
      },
      {
        title: 'For an "always-ready" US option, the answer is a smart controller + conventional heater',
        body:
          'Harvia\'s US lineup does not include a heat-storing Ever-Ready heater. The closest functional equivalent available in North America is pairing a conventional UL-certified Harvia electric heater (KIP, Cilindro, Virta Pro) with the MyHarvia app and a Fenix or Xenio control unit, then using the smart "ready-by" timer to pre-warm the sauna remotely. The heat-up curve is different than Forte, but the user-facing experience — open the app, tell it when to be ready — is comparable.',
      },
    ],
    bestFor:
      'European market residential sauna users who want a heat-storing heater with continuous ready-state availability and app connectivity. Not available or recommended for North American buyers; US and Canadian households should look at Harvia KIP (the volume wall-mounted heater), Cilindro (pillar flagship), or Virta Pro (commercial-grade residential).',
    warranty: 'Harvia EU standard terms (varies by market)',
    madeIn: 'Harvia Group (EU production)',
    launched: 'Forte "Ever-Ready" product family introduced in the early 2020s for EU markets',
    lastMentioned: '2024-03-15',
    lastMentionContext: 'EU-market heat-storing heater; not stocked by Harvia US',
    relatedProductSlugs: ['kip', 'cilindro-electric', 'virta-pro'],
    harviaUrl: 'https://www.harvia.com/en/sauna-heaters/electric-sauna-heater/forte-electric-heaters/',
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
    heroImage: '/images/harvia-mediabank/legend/6856.jpg',
    gallery: [
      '/images/harvia-mediabank/legend/6856.jpg',
      '/images/harvia-mediabank/legend/6832.jpg',
      '/images/harvia-mediabank/legend/5910.jpg',
      '/images/harvia-mediabank/legend/7061.jpg',
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
    ],
    insiderNotes: [
      {
        title: 'The 240SL external-feed variant matters most for commercial',
        body:
          'The 240SL adds an external wood-feed door so the fire is tended from outside the hot room. For commercial and public-sauna installations this is meaningful both for operator safety and for keeping ash and wood debris out of the bathing area. Residential builds that want cleaner ash management also benefit. Every commercial wood-fired Harvia spec should be evaluated against the SL variant before ordering the standard 240.',
      },
      {
        title: 'Plan the chimney for North American code',
        body:
          'Legend ships with Harvia\'s native flue collar sized for European specification (115 mm / 4.5"). North American installations typically require a 6" minimum insulated Class A chimney run from collar through roof termination. Use Harvia\'s flue components and adapters, and budget the full chimney package separately from the heater itself — skipping certified chimney components on a wood-fired heater is both a code violation and a real fire-safety risk.',
      },
      {
        title: 'Stone selection for wood-fired operation',
        body:
          'Wood-fired heaters cycle stones harder than electric. Use the washed sauna stones Harvia specifies in the installation manual. Landscape or decorative rocks from a big-box store often crack and pack down under the thermal cycling a wood-fired heater imposes, cutting steam output and eventually restricting airflow.',
      },
      {
        title: 'Legend 240 vs the Harvia 50: two different commercial stoves',
        body:
          'Harvia sells both the Legend series and the numbered wood-burning range (Harvia 20, 36, 50). They are distinct products aimed at slightly different commercial use cases. The <a href="/article/white-mountain-sauna-haus-north-conway-apres-ski">Harvia 50 at White Mountain Sauna Haus</a> is the top end of the numbered range. Legend 240 and 240SL compete in the large-commercial category too, with different stone-mass and firebox geometry. Talk to a Harvia commercial dealer about which fits the specific room and usage pattern; do not assume the model numbers are directly comparable.',
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
    heroImage: 'https://www.datocms-assets.com/41658/1699443845-img_1782.jpg',
    gallery: [
      'https://www.datocms-assets.com/41658/1699443845-img_1782.jpg',
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
          'Muurame factory, the world\'s largest heater and sauna component factory: over 150,000 heaters per year.',
        source: 'Harvia Capital Markets Day 2024 presentation',
        context: 'Pro 20 and Pro 36 are produced at Harvia\'s Muurame, Finland factory alongside the rest of the wood-burning heater line',
        date: '2024-05-29',
        url: 'https://harviagroup.com/wp-content/uploads/2024/05/Harvia-CMD_present_EN.pdf',
      },
      {
        quote:
          'In 2023, manufacturing [of wood-burning heaters] was almost fully moved to Muurame.',
        source: 'Harvia Plc 2023 Annual Report',
        context: 'After Harvia\'s 2022 exit from Russia, wood-burning heater production including the commercial Pro series was reshored to Finland',
        date: '2024-03-15',
        url: 'https://harviagroup.com/wp-content/uploads/2024/03/Harvia_Plc_Annual_Report_2023.pdf',
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
        title: 'Confirm your existing Xenio model before assuming plug-and-play upgrade',
        body:
          'Harvia positions Fenix as backward-compatible with the Xenio wiring footprint, which covers the large majority of existing installations and is the upgrade path the CEO specifically highlighted on the Q3 2025 earnings call. For older Xenio units, verify the model label and wiring with a Harvia dealer before ordering Fenix as a straight replacement.',
      },
      {
        title: 'Fenix / Phoenix — same product, two spellings',
        body:
          'The official product name is "Fenix" (Finnish / Latin). Some English-language investor call transcripts transliterate the name as "Phoenix." They refer to the same product. Use "Fenix" when searching harvia.com or Harvia product documentation.',
      },
      {
        title: 'Over-the-air updates are a meaningful commercial feature',
        body:
          'Fenix supports over-the-air firmware updates via the MyHarvia app. For commercial operators running multiple Harvia saunas, that means firmware and feature updates roll out without a service visit. Harvia has indicated continued investment in the MyHarvia platform, so expect the OTA update stream to be the delivery vehicle for future Fenix feature additions.',
      },
      {
        title: 'Match the controller kW rating to the heater',
        body:
          'Different Fenix (and Xenio) variants are rated for different maximum heater kW. Match the control panel to the specific heater nameplate: a mid-range Harvia residential heater pairs with the FX45/CX45 class; larger commercial heaters like Virta Pro HL200 or HL220 require the higher-rated FX170/CX170 class. Confirm against Harvia\'s compatibility chart before ordering.',
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
    heroImage: '/images/harvia-mediabank/myharvia-sensor/1988.jpg',
    gallery: [
      '/images/harvia-mediabank/myharvia-sensor/1988.jpg',
      '/images/harvia-mediabank/myharvia-sensor/7290.jpg',
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
    slug: 'kip',
    name: 'Harvia KIP',
    subtitle: 'The wall-mounted workhorse electric heater Harvia has been building since the 1980s',
    series: 'KIP 45 / KIP 60 / KIP 80 (JH-series, US; HBK-series, EU)',
    category: 'electric-heater',
    position: 'mid',
    tagline: 'Traditional wall-mounted heater. Stainless steel shell, protective stone guard, dual-wall construction that keeps the exterior cool to the touch. Built-in dial controls with 8-hour delay timer and 60-minute auto-shutoff. KIP has been shipped since the 1980s and is the most widely sold wall-mounted electric sauna heater in the world.',
    intro:
      'The Harvia KIP is the wall-mounted electric sauna heater Harvia has been producing since the 1980s. It is the volume category workhorse — the heater that shows up in more North American residential saunas, commercial gym rooms, and barrel sauna kits than any other single electric heater model. The value proposition has not changed in four decades: stainless steel construction, a generous stone cavity for real löyly, dual-wall housing so the outside stays safe to touch, UL certification for the US market, and a simple two-dial control interface (temperature + 8-hour delay timer with 60-minute auto-shutoff). Available in 4.5, 6, and 8 kW configurations on 240VAC single-phase service, with both built-in dial models (JH-series, suffix B or W) and an external-controller version for use with a Harvia Xenio control panel. Almost Heaven Saunas, Harvia\'s US brand, lists KIP as its default wall-mounted heater and sells it with a Limited Lifetime Warranty on manufacturing defects.',
    heroImage: 'https://www.datocms-assets.com/41658/1694090215-harvia_kip_w_steel_usa_f1_web.jpg',
    gallery: [
      'https://www.datocms-assets.com/41658/1694090215-harvia_kip_w_steel_usa_f1_web.jpg',
    ],
    specsSummary: [
      { label: 'Power range', value: '4.5 – 8 kW' },
      { label: 'Stone capacity', value: '~44 lbs' },
      { label: 'Room size', value: '169 – 424 cu ft' },
      { label: 'Voltage (US)', value: '240VAC 1PH, 60 Hz' },
      { label: 'Certification', value: 'UL' },
      { label: 'Made in', value: 'Muurame, Finland' },
    ],
    sizes: [
      { model: 'KIP45B / KIP45W', kw: '4.5 kW', roomSize: '~105 – 212 cu ft (per model)', stones: '~44 lbs', voltage: '240V 1PH', note: '30A double-pole breaker; B = built-in dials, W = external Xenio control' },
      { model: 'KIP60B / KIP60W', kw: '6 kW', roomSize: '169 – 300 cu ft', stones: '44 lbs', voltage: '240V 1PH', note: '30A double-pole breaker; KIP60W2401M is the black-finish variant' },
      { model: 'KIP80B / KIP80W', kw: '8 kW', roomSize: '251 – 424 cu ft', stones: '44.1 lbs', voltage: '240V 1PH', note: '40A double-pole breaker' },
    ],
    keyFeatures: [
      'Stainless steel shell with protective stone guard',
      'Dual-wall construction — exterior stays safe to the touch in operation',
      'Spacious stone cavity for strong steam from water throws',
      'Built-in control: left dial temperature, right dial on/off with 8-hour delay timer',
      'Automatic 60-minute shutoff for safety',
      'UL-certified for US and Canadian installation',
      'W-suffix models remove the built-in dials for use with a Harvia Xenio external control panel',
      'Compatible with Harvia Xenio and (with W-suffix) the newer Fenix control platform',
      'Designed and manufactured in Muurame, Finland',
    ],
    quotes: [
      {
        quote:
          'The KIP heater is a traditional wall-mounted heater... one of our most trusted and loved workhorses dating back to the 80s. It heats up fast and is an excellent choice for sauna bathers who enjoy hot and dry saunas.',
        source: 'harvia.com KIP product collection page',
        context: 'Official Harvia US product marketing copy',
        date: '2026-04-17',
        url: 'https://www.harvia.com/en-US/sauna-heaters/electric-sauna-heater/kip-wall-mounted-heaters/',
      },
      {
        quote:
          'Sauna is becoming much more of a volume category.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'KIP is Harvia\'s volume workhorse electric heater — the category benefit from broader sauna adoption flows through this SKU more than any other',
        date: '2026-02-12',
      },
      {
        quote:
          'The Harvia KIP is a sleek, wall-mounted sauna heater with built-in controls, crafted from stainless steel with a protective stone guard. Spacious stone cavity for maximum heat release. Dual-wall design keeps exterior cool to the touch.',
        source: 'Almost Heaven Saunas product page (Harvia US)',
        context: 'Almost Heaven, Harvia\'s US brand, is the default US retail channel for KIP',
        date: '2026-04-17',
        url: 'https://almostheaven.com/products/kip-dials',
      },
    ],
    insiderNotes: [
      {
        title: 'Built-in dials (B) vs external Xenio (W): pick based on the household',
        body:
          'The B-suffix models (KIP45B, KIP60B, KIP80B) ship with the two-dial built-in control panel on the heater body. Turn it on from inside the sauna, or set the 8-hour delay. The W-suffix models (KIP45W, KIP60W, KIP80W) remove the dials and expect a separate Harvia Xenio or Fenix control panel wired in. For a single-user residential install, B is the simpler option. For multi-user households or app control (MyHarvia via Fenix), specify W plus the controller.',
      },
      {
        title: 'Size to the room, not to the ceiling',
        body:
          'KIP60B covers 169 to 300 cubic feet per Harvia spec. Real US residential rooms with glass doors and single-layer cedar lose heat faster than the nominal spec assumes. For a 6x7 or 6x8 cabin with a glass door, size up to KIP80 instead of KIP60. The $150-$200 price difference buys faster heat-up, faster recovery after a water throw, and headroom if you add infrared tiles or upgrade the glass.',
      },
      {
        title: 'Auto-shutoff timing: 60 minutes is a safety feature, not a limit',
        body:
          'The automatic 60-minute shutoff is required for UL certification and for most US residential code. For a longer session, reset the dial. Heaters that claim unlimited on-time without a certified timer do not pass US insurance inspections. KIP\'s 60-minute cycle is standard across UL-certified residential heaters in the US market.',
      },
      {
        title: 'Stones: washed olivine-diabase, 2-4 inches (5-10 cm)',
        body:
          'Harvia\'s spec calls for stones in the 5-10 cm (2-4 inch) size range. KIP holds ~44 lbs regardless of model. Wash the stones before first fire to remove dust. Garden-center decorative rocks pack too tight and hide dust that can ignite on exposed elements. Stones are not included with the heater itself at Almost Heaven; plan to buy them separately.',
      },
    ],
    bestFor:
      'Residential saunas from small closet builds through mid-sized home cabins (roughly 169 to 424 cu ft). Light commercial use like fitness centers, small boutique gyms, and apartment-complex amenity saunas. Builders who want a proven, UL-certified wall-mounted heater with 40+ years of field data behind it. Not the right spec for large commercial rooms over 425 cu ft (spec Virta Pro or Cilindro instead).',
    warranty: 'Limited Lifetime Warranty on manufacturing defects (Almost Heaven Saunas US retail listing)',
    madeIn: 'Muurame, Finland',
    launched: '1980s (continuous production; multiple generations)',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — referenced in "volume category" commentary on Harvia\'s residential electric line',
    relatedProductSlugs: ['cilindro-electric', 'vega', 'xenio-fenix'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/electric-sauna-heater/kip-wall-mounted-heaters/',
  },
  {
    slug: 'harvia-50-wood',
    name: 'Harvia 50 (Wood-Burning)',
    subtitle: 'The 40 kW commercial wood-fired stove sized for large public saunas',
    series: 'Harvia 50 / WK500',
    category: 'wood-burning-heater',
    position: 'commercial',
    tagline: 'Harvia\'s largest wood-burning stove. 40 kW rated output, 264 lbs of stone capacity, steel construction, black finish. Rated by Harvia for sauna rooms from 706 to 1,766 cubic feet and designated for professional use.',
    intro:
      'The Harvia 50 (model WK500) is the largest wood-burning sauna heater in Harvia\'s current catalog. It is rated at 40 kW output, holds 264.6 lbs of stones in a size range of Ø10-15 cm, and Harvia\'s spec places it in sauna rooms from 706 to 1,766 cubic feet. The stove is designated for professional user groups and is built for commercial and destination-scale wood-fired saunas: large public bathhouses, ski-town communal saunas, resort wellness facilities, and multi-session commercial operations. Floor-mounted, steel construction, black finish. Minimum ceiling clearance is 6.56 ft, and Harvia specifies meaningful safety-distance setbacks from combustible materials (see the spec sheet linked below). Manufactured in Harvia\'s Muurame, Finland factory.',
    heroImage: '/images/harvia-mediabank/harvia-50-wood/1621.jpg',
    gallery: [
      '/images/harvia-mediabank/harvia-50-wood/1621.jpg',
      '/images/harvia-mediabank/harvia-50-wood/1622.jpg',
    ],
    specsSummary: [
      { label: 'Model', value: 'WK500' },
      { label: 'Power output', value: '40 kW' },
      { label: 'Stone capacity', value: '264.6 lbs' },
      { label: 'Room size', value: '706 – 1,766 cu ft' },
      { label: 'Min ceiling height', value: '6.56 ft (2 m)' },
      { label: 'Stone size', value: 'Ø10 – 15 cm' },
      { label: 'Net weight', value: '428.2 lbs' },
      { label: 'Dimensions (HxWxD)', value: '3.44 ft × 20.08 in × 28.35 in' },
      { label: 'Construction', value: 'Steel, black finish' },
      { label: 'User group', value: 'Professional' },
      { label: 'Made in', value: 'Muurame, Finland' },
    ],
    sizes: [
      { model: 'Harvia 50 (WK500)', kw: '40 kW', roomSize: '706 – 1,766 cu ft', stones: '264.6 lbs', note: 'Floor-mounted, black steel, designated for professional use' },
    ],
    keyFeatures: [
      'Largest wood-burning heater in the current Harvia catalog',
      '40 kW rated output for very large commercial sauna rooms',
      '264.6 lbs of stone capacity for strong steam generation and commercial-duty recovery',
      'Floor-mounted steel construction with black finish',
      'Harvia-specified stone size range: Ø10-15 cm',
      'Harvia classifies the 50 as a professional-user product, not residential',
      'Manufactured in Harvia\'s Muurame, Finland factory',
    ],
    quotes: [
      {
        quote:
          'The heater is a Harvia 50, the Finnish manufacturer\'s largest wood-burning stove.',
        source: 'SaunaNews, April 2026',
        context: 'White Mountain Sauna Haus (North Conway, NH) commercial bathhouse install',
        date: '2026-04-16',
        url: '/article/white-mountain-sauna-haus-north-conway-apres-ski',
      },
    ],
    insiderNotes: [
      {
        title: 'This is a professional-grade commercial stove',
        body:
          'Harvia\'s own product classification designates the Harvia 50 as a professional-user product. It is sized and rated for very large sauna rooms (706-1,766 cu ft per Harvia\'s spec sheet) and for commercial use patterns. For residential wood-fired installations, Harvia\'s smaller wood-burning heaters (the 20, 36, Legend 150, or Cilindro wood-burning) are the more appropriate choice.',
      },
      {
        title: 'Follow Harvia\'s safety distances precisely',
        body:
          'The Harvia 50 spec sheet lists specific safety distances from combustible and non-combustible surfaces at the front, sides, back, and ceiling. These distances are larger than for smaller Harvia wood-burning heaters and should be followed exactly. For a 40 kW stove running in a commercial duty cycle, getting safety-distance clearances right is the most important thing the install will get right.',
      },
      {
        title: 'Use Harvia-specified stone sizes for a 40 kW stove',
        body:
          'Harvia specifies Ø10-15 cm stones for the Harvia 50 — larger than what\'s used in smaller Harvia heaters like KIP or Vega. At commercial output, smaller stones can fracture under thermal load and pack down, cutting airflow and steam output. Use the Harvia-specified stone size range and plan for periodic stone replacement under heavy commercial use.',
      },
    ],
    bestFor:
      'Large commercial wood-fired saunas, destination and public bathhouses, ski-town communal rooms, and commercial wellness installations in rooms Harvia\'s own spec places at 706-1,766 cu ft. Not specified by Harvia for residential use; residential wood-fired buyers should look at the Harvia 20, Harvia 36, Legend 150, or Cilindro wood-burning instead.',
    warranty: 'Per Harvia commercial terms',
    madeIn: 'Muurame, Finland',
    launched: 'WK500 is the current generation of Harvia\'s largest wood-burning stove',
    lastMentioned: '2026-04-16',
    lastMentionContext: 'White Mountain Sauna Haus (North Conway, NH) commercial bathhouse install',
    relatedProductSlugs: ['cilindro-wood', 'legend', 'pro-36'],
    harviaUrl: 'https://www.harvia.com/en-US/products/WK500/harvia-50-black',
  },
  {
    slug: 'frosty-cold-tub',
    name: 'Harvia Frosty Cold Tub',
    subtitle: 'The oval cold plunge Harvia launched in 2023 for hot-cold alternation at home',
    series: 'Frosty',
    category: 'electric-heater',
    position: 'premium',
    tagline: 'Oval-shaped residential cold tub. Harvia\'s entry into the cold-plunge category, launched in 2023 and positioned as the companion product to a Harvia sauna.',
    intro:
      'Harvia Frosty is the oval-shaped residential cold tub Harvia launched in 2023, positioned as the cold-plunge companion to a Harvia sauna. Per Harvia\'s 2023 Annual Report, the tub uses materials selected to be safe, comfortable on the skin, and easy to maintain, and every unit ships with an insulated cover that both maintains target temperature and improves safety by keeping children out of the water. Harvia\'s framing in the 2023 report ties the launch to growing consumer interest in hot-cold alternation and cold-exposure therapy.',
    heroImage: '/images/harvia-mediabank/frosty-cold-tub/4602.jpg',
    gallery: [
      '/images/harvia-mediabank/frosty-cold-tub/4602.jpg',
      '/images/harvia-mediabank/frosty-cold-tub/4579.jpg',
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
      'Oval tub shape for single-user immersion',
      'Insulated cover included (per Harvia\'s 2023 Annual Report)',
      'Materials selected for skin comfort and ease of maintenance',
      'Designed as the cold-plunge companion to a Harvia sauna for hot-cold alternation',
      'Launched in 2023 alongside Harvia\'s broader expansion into cold-exposure products',
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
        title: 'Kirami water-tub experience is the R&D adjacency',
        body:
          'Harvia acquired still-water hot tub maker Kirami in 2021. Kirami\'s water-tub construction, water chemistry, and insulation experience sits inside Harvia Group and is the adjacent capability base for products like Frosty. The public record does not detail how directly Kirami engineering fed into Frosty specifically.',
      },
      {
        title: 'Positioned as the cold companion to a Harvia sauna',
        body:
          'Harvia positions Frosty as a companion product for hot-cold alternation alongside a Harvia sauna, not as a standalone cold-plunge product. Dealers typically quote Frosty with the broader sauna install.',
      },
      {
        title: 'Check your local permitting',
        body:
          'Residential cold tubs are treated differently across US and Canadian jurisdictions. Some local codes classify outdoor water features by volume or depth and require permits comparable to pool or spa installations. Confirm local requirements before ordering.',
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
    tagline: 'Matte-black EOS design heater with a distinctive vertical rod structure. Launched in 2023 as part of the EOS premium electric range and made in Driedorf, Germany.',
    intro:
      'EOS Structure is a design-forward premium electric sauna heater that Harvia Group highlighted in its 2023 Annual Report as part of EOS\'s new luxury-electric launches that year. Per Harvia, the heater is "Elegant matte black from top to bottom" with "a distinctive rod structure which forms its characteristic design element." EOS is a Harvia Group company since 2020 and its products, including Structure, are manufactured at the EOS facility in Driedorf, Germany. Positioned for premium residential and commercial applications where sauna heaters are selected for visual contribution as well as performance.',
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
      'Distinctive vertical rod structure as the defining design element',
      'Matte-black finish (per Harvia\'s 2023 Annual Report)',
      'Manufactured at EOS\'s factory in Driedorf, Germany',
      'Part of the EOS premium portfolio within Harvia Group',
      'Launched as part of EOS\'s 2023 luxury-electric lineup',
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
        title: 'This is a design-spec product',
        body:
          'EOS Structure was launched as part of EOS\'s luxury-electric range. It is specified by architects, designers, and spa builders primarily for its visual presence in the sauna room. Buyers focused on raw performance vs aesthetic design should compare against the broader EOS S-line and Harvia Cilindro.',
      },
      {
        title: 'Availability primarily through premium/commercial channels',
        body:
          'EOS Structure distribution is strongest in EOS\'s core European commercial and premium-residential channels. North American availability is through Harvia\'s commercial spec channel rather than volume online retail. Talk to a Harvia or EOS commercial dealer for specific availability and certification in your market.',
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
    tagline: 'Prefabricated sauna cabins available in three sizes. Harvia launched Söpö in 2023 alongside its expanded push into the Japanese sauna market and the Harvia Japan Ltd joint venture with Bergman Ltd.',
    intro:
      'Harvia Söpö is a prefabricated sauna cabin range Harvia launched in 2023. Per the 2023 Annual Report, the cabins are available in three sizes and are "crafted with precision and designed for the utmost comfort," with an innovative design for easy assembly. Söpö was introduced as part of Harvia\'s broader push into the Japanese market, alongside new electric heaters designed to Japanese specifications and the establishment of the Harvia Japan Ltd joint venture with Bergman Ltd. "Söpö" is Finnish for "cute."',
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
        title: 'A Japan-market launch',
        body:
          'Söpö was introduced as part of Harvia\'s Japan push in 2023. Per Harvia\'s 2023 Annual Report, the company also launched new heaters to Japanese electrical specifications and applied for additional Japan-specific certifications that same year. Söpö is not part of Harvia\'s North American consumer range.',
      },
      {
        title: 'Distribution through Harvia Japan / Bergman',
        body:
          'Harvia Japan Ltd was established in August 2023 as a joint venture with Bergman Ltd. Harvia opened showrooms across Japan during 2023 (24 showrooms by year-end per the 2023 Annual Report), and Söpö is distributed through that Japan network and associated dealer channel.',
      },
      {
        title: 'Japan is now a meaningful growth region for Harvia',
        body:
          'Harvia Japan Ltd became fully operational in the first half of 2024. By Q3 2025, APAC & MEA grew 36.4% year-over-year, with Japan called out in Harvia\'s earnings materials as a strategically significant market.',
      },
    ],
    bestFor:
      'Japanese residential and light commercial sauna installations via Harvia Japan\'s showroom and dealer network. Not currently part of Harvia\'s North American product range.',
    warranty: 'Per Harvia Japan terms',
    madeIn: 'Harvia Group (Finland/Romania supply chain)',
    launched: '2023',
    lastMentioned: '2024-03-15',
    lastMentionContext: 'Harvia 2023 Annual Report Japan launch',
    relatedProductSlugs: ['cilindro-electric', 'spirit', 'xenio-fenix'],
    harviaUrl: 'https://www.harvia.com/ja-JP/',
  },
];

import { harviaMediaBank } from './harvia-mediabank';

export function getProduct(slug: string): HarviaProduct | undefined {
  const base = harviaProducts.find((p) => p.slug === slug);
  if (!base) return undefined;
  const mb = harviaMediaBank[slug];
  return mb ? { ...base, mediaBank: mb } : base;
}

export function getAllProductSlugs(): string[] {
  return harviaProducts.map((p) => p.slug);
}

export function getMediaBankForSlug(slug: string) {
  return harviaMediaBank[slug];
}
