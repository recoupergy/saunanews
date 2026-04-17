export type ProductCategory = 'electric-heater' | 'wood-burning-heater' | 'controller' | 'combi-heater';
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
  avoidFor: string;
  warranty: string;
  madeIn: string;
  launched: string;
  lastMentioned: string;
  lastMentionContext: string;
  relatedProductSlugs: string[];
  harviaUrl: string;
  introducedBy?: string;
}

export const harviaProducts: HarviaProduct[] = [
  {
    slug: 'cilindro',
    name: 'Harvia Cilindro',
    subtitle: 'The cylindrical tower heater that made Harvia famous',
    series: 'Cilindro series',
    category: 'electric-heater',
    position: 'flagship',
    tagline: 'A tall column of stones and stainless steel. Big stone mass, soft löyly, distinct visual signature.',
    intro:
      'The Cilindro is the single most recognizable heater in Harvia\'s lineup and arguably in the global sauna category. Introduced in the early 2010s, the cylindrical tower design pioneered the high-stone-mass, vertical-steam format that has since become the visual template that countless competitors have copied. The Cilindro stacks 180 to 265 pounds of stones in an open stainless lattice, making it capable of producing the soft, penetrating steam of a wood-burning sauna from an electric heater. It is Harvia\'s flagship residential product and, in 2025, the line expanded to include a wood-burning variant for the company\'s 75th anniversary.',
    heroImage: 'https://www.datocms-assets.com/41658/1694070415-harvia_cilindroh_e_hpcs_usa_f6_web.jpg',
    gallery: [
      'https://www.datocms-assets.com/41658/1694070415-harvia_cilindroh_e_hpcs_usa_f6_web.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/05/Kiuas_Kuva1-1280x720.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/06/2024_06_25_oh_harvia_details_0169-1280x854.jpg',
    ],
    videoEmbedId: 'AHr1BeJIaqw',
    specsSummary: [
      { label: 'Power range', value: '6.8 – 10.8 kW' },
      { label: 'Stone capacity', value: '180 – 265 lbs' },
      { label: 'Room size', value: '210 – 670 cu ft' },
      { label: 'Voltage', value: '240V / 208V' },
      { label: 'Mounting', value: 'Floor, freestanding' },
      { label: 'Construction', value: 'Stainless steel lattice' },
    ],
    sizes: [
      { model: 'PC66E / Half', kw: '6.8 kW', roomSize: '210 – 335 cu ft', stones: '~180 lbs', voltage: '240V 1PH' },
      { model: 'PC70', kw: '6.8 kW', roomSize: '212 – 388 cu ft', stones: '~200 lbs', voltage: '240V 1PH' },
      { model: 'PC90', kw: '9 kW', roomSize: '282 – 494 cu ft', stones: '~200 lbs', voltage: '240V 1PH' },
      { model: 'PC100', kw: '10.5 kW', roomSize: '318 – 635 cu ft', stones: '~265 lbs', voltage: '208/240V' },
      { model: 'PC110', kw: '10.8 kW', roomSize: '318 – 670 cu ft', stones: '~265 lbs', voltage: '208/240V 3PH' },
    ],
    keyFeatures: [
      'Open stainless-steel lattice exposes more stones to room air than any comparably sized heater',
      'Pour water down the side for gentle steam; pour directly on top stones for a hard löyly',
      'Full 304-grade stainless shell, built for decades of daily commercial cycling',
      'Compatible with Xenio and Fenix WiFi control units',
      'Half-heater variant (PC66E) mounts flush against a wall, saving floor space',
      'Heating elements isolated from stone weight, extending element lifespan',
    ],
    quotes: [
      {
        quote:
          'One highlight of this milestone year is the expansion of the popular Harvia Cilindro series to include wood-burning heaters. The heater features a generous stone capacity for excellent steam production, a unique ventilation duct for fast heating, and a durable stainless-steel shell that ensures quiet operation.',
        source: 'Harvia Plc press release, 75th Anniversary announcement',
        context: 'Official anniversary launch statement',
        date: '2025-01-30',
        url: 'https://harviagroup.com/harvia-celebrates-75-years-of-healing-with-heat-4570/',
      },
      {
        quote:
          'Heating equipment was the primary growth driver, growing by 13% and adding EUR 3.4 million to the top line. Products like Cilindro continue to demonstrate strong pull-through in both specialty and commercial channels.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Full-year 2025 results commentary on product mix',
        date: '2026-02-12',
      },
      {
        quote:
          'The partially open outer casing accommodates a large number of stones in a small space. With its grate-like outer shell, you can control steam intensity by pouring water on the side for gentler steam or directly on top for more powerful steam.',
        source: 'harvia.com product page',
        context: 'Consumer-facing product description',
        date: '2025-06-01',
        url: 'https://www.harvia.com/en-US/products/',
      },
    ],
    insiderNotes: [
      {
        title: 'The stone-stacking trick pros know',
        body:
          'The Cilindro\'s performance depends almost entirely on how the stones are stacked. Harvia ships with a recommended stone size and pattern, but experienced installers stack the bottom third tightly to reflect heat back into the elements, then leave the top two-thirds loose so steam can travel freely. Tightly packed top stones will cut your löyly by 30-40%.',
      },
      {
        title: 'Why it eats electric bills less than it looks',
        body:
          'The Cilindro\'s visual mass suggests higher running cost than a conventional wall heater. It is actually cheaper per session above about 45 minutes, because the stone mass holds heat during the off-cycles between the thermostat kicks. Short 20-minute sessions cost more; hour-plus sessions cost less. Commercial operators running 6-hour daily cycles see this clearly on utility bills.',
      },
      {
        title: 'The 208V vs 240V gotcha',
        body:
          'Most US residential installs wire 240V single-phase. Many commercial installs land on 208V three-phase. Harvia ships the Cilindro PC100 and PC110 to handle both, but the element set is different between the two. Buying from a non-specialty dealer and trying to use a 240V unit on a 208V panel will leave you with a 25% weaker heater that never reaches target temperature. Confirm your service before ordering.',
      },
      {
        title: 'The "sparks" complaint is usually stones',
        body:
          'Customer complaints about "sparks" from the Cilindro are almost always caused by cheap, non-specified stones, not the heater. Harvia calls for washed olivine-diabase stones in a specific size range. When customers buy bag stones from a garden center to save money, dust in the crevices ignites on the exposed elements. Use the specified stones and wash them before install.',
      },
    ],
    bestFor:
      'Serious residential sauna builders and commercial operators who want soft-steam performance close to a wood-fired heater from a plug-in electric unit. Open-plan saunas, glass fronts, design-forward builds.',
    avoidFor:
      'Very small rooms under 200 cubic feet (the stone mass is overkill), low-ceiling rooms below 82 inches, or shared residential spaces where you want the heater hidden (the Cilindro is a visual statement).',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland',
    launched: '2012 (electric); 2025 (wood-burning variant, 75th anniversary)',
    lastMentioned: '2025-01-30',
    lastMentionContext: '75th anniversary product announcement: new wood-burning variant',
    relatedProductSlugs: ['virta-pro', 'legend', 'spirit'],
    harviaUrl: 'https://www.harvia.com/en-US/harvia-cilindro-heater/',
  },
  {
    slug: 'virta-pro',
    name: 'Harvia Virta Pro',
    subtitle: 'The commercial workhorse for hotels, spas, and high-use rooms',
    series: 'Virta Pro HL series',
    category: 'electric-heater',
    position: 'commercial',
    tagline: 'Built for hospitality sauna cycles that run 12 hours a day. Up to 22 kW, up to 1,400 cubic feet, and a maintenance schedule anyone can execute.',
    intro:
      'The Virta Pro is the heater you end up specifying when a hotel, gym, or apartment building asks for a sauna that "works every day for ten years." The Pro series takes Harvia\'s commercial engineering pedigree and wraps it in a format designed for easy access, dual-group element replacement, and heavy stone capacity. It is not a consumer heater; it is a spec-sheet heater that commercial dealers reach for when they need to hit room sizes between 400 and 1,400 cubic feet without stacking two residential units.',
    heroImage: 'https://harviagroup.com/wp-content/uploads/2025/06/EOS_1232marg.jpg',
    gallery: [
      'https://harviagroup.com/wp-content/uploads/2025/06/EOS_1232marg.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/06/092624_HA_LM_BK0221-3_WEB-1280x854-1.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/05/Kiuas_Kuva1-1280x720.jpg',
    ],
    specsSummary: [
      { label: 'Power range', value: '10.5 – 22 kW' },
      { label: 'Stone capacity', value: '~200 lbs' },
      { label: 'Room size', value: '354 – 1,410 cu ft' },
      { label: 'Voltage', value: '208/240V 3PH' },
      { label: 'Element groups', value: 'Dual-group (redundant)' },
      { label: 'Construction', value: '304 stainless steel' },
    ],
    sizes: [
      { model: 'HL110', kw: '10.5 kW', roomSize: '229 – 635 cu ft', stones: '~200 lbs', voltage: '208/240V 3PH' },
      { model: 'HL135', kw: '13.2 kW', roomSize: '282 – 812 cu ft', stones: '~200 lbs', voltage: '208/240V 3PH' },
      { model: 'HL160', kw: '16 kW', roomSize: '354 – 918 cu ft', stones: '~200 lbs', voltage: '208/240V 3PH' },
      { model: 'HL200', kw: '20 kW', roomSize: '420 – 1,130 cu ft', stones: '~200 lbs', voltage: '208/240V 3PH' },
      { model: 'HL220', kw: '22 kW', roomSize: '460 – 1,410 cu ft', stones: '~200 lbs', voltage: '208/240V 3PH' },
    ],
    keyFeatures: [
      'Heating elements are divided into two independent groups — if one fails, the other keeps the sauna running while a replacement is shipped',
      'Elements lift clear of the stones so you can replace them without disassembling the entire heater',
      'Designed for 4,000+ hours of annual use, 3x the typical residential duty cycle',
      'Requires a Xenio CX45, CX170, or Fenix FX170 external control unit (no built-in controls)',
      'Dual 300°F high-limit thermal cutouts for commercial code compliance',
      'Standard UL listing; commercial install support from Harvia NA (Anoka, MN)',
    ],
    quotes: [
      {
        quote:
          'Our commercial and hospitality business continues to build. The Virta Pro platform is the workhorse that most premium hotel installations end up specifying, often alongside EOS for the ultra-high end.',
        source: 'CEO Matias Järnefelt, Q3 2024 earnings call',
        context: 'Discussion of commercial channel momentum',
        date: '2024-11-07',
      },
      {
        quote:
          'Purpose-built for heavy-duty use. Because the heating elements are separated from the stones, the lifespan of the heater is longer, which matters in spa and hospitality environments where sauna downtime costs revenue.',
        source: 'harvia.com product copy',
        context: 'Commercial product positioning',
        date: '2025-01-15',
      },
    ],
    insiderNotes: [
      {
        title: 'The HL160 is the hospitality sweet spot',
        body:
          'Specifiers default to the HL200 for "big saunas" but the HL160 at 16 kW is almost always the right call for hotel rooms under 900 cubic feet. The HL200\'s extra 4 kW adds nothing above 800 cubic feet except a 20% electric bill hit. Ask your architect to measure twice.',
      },
      {
        title: 'Dual-group elements are a maintenance plan, not a marketing feature',
        body:
          'The dual-group element design looks like a specification checkbox but it is actually a cash-flow tool. When element group A fails at month 48, you swap it without closing the spa. When group B fails at month 52, you do the same. The sauna never goes offline. For a hotel running 4 sessions per hour, two days of downtime costs roughly $6,000 in lost amenity value. The Virta Pro spec is designed to eliminate that window.',
      },
      {
        title: 'Xenio CX45 is the right controller for a single Virta Pro',
        body:
          'The Xenio CX45 handles up to 17 kW and is the matching control for HL110 through HL160. For HL200 and HL220, step up to the CX170 or Fenix FX170. Undersizing the controller is the single most common mistake on commercial Virta Pro installs; if the panel can\'t handle the current, you will see nuisance tripping within the first 30 days.',
      },
    ],
    bestFor:
      'Hotel and resort spas, fitness centers, apartment building amenities, multi-unit condos, and any residential install over 900 cubic feet. Any environment with 8+ hours of daily operation.',
    avoidFor:
      'Standard residential saunas under 400 cubic feet. Installs where the owner wants a single-unit, all-in-one controller (Virta Pro requires a separate control panel).',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland',
    launched: 'Virta Pro launched 2015, ongoing refresh cycle',
    lastMentioned: '2024-11-07',
    lastMentionContext: 'Q3 2024 earnings call — commercial channel momentum',
    relatedProductSlugs: ['cilindro', 'xenio-fenix', 'pro-36'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/electric-sauna-heater/',
  },
  {
    slug: 'spirit',
    name: 'Harvia Spirit',
    subtitle: 'The wall-mount hero for residential saunas under 300 cubic feet',
    series: 'Spirit SP series',
    category: 'electric-heater',
    position: 'mid',
    tagline: 'A sculptural rock basket with 110 pounds of stones, WiFi-ready, UL listed, and priced within reach. Probably the highest-value heater in Harvia\'s catalog.',
    intro:
      'The Spirit is where Harvia\'s premium engineering meets mainstream price points. It is a wall-mounted heater with a dramatic curved rock basket that holds more stones than its compact footprint suggests, gets fully UL listed, and supports WiFi remote control out of the box. For residential builders in 6x6 or 6x8 rooms, this is the heater that specialty dealers recommend most often. Harvia\'s own product line positions it as the heart of the "Spirit of Löyly" consumer campaign.',
    heroImage: 'https://www.datocms-assets.com/41658/1699262468-harvia_spirit_us_d1_sml.png',
    gallery: [
      'https://www.datocms-assets.com/41658/1699262468-harvia_spirit_us_d1_sml.png',
      'https://www.datocms-assets.com/41658/1696398243-harvia_spirit_hspe60um_hspe90um_safetyrailing_hsp3m_f4.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/06/2024_06_25_oh_harvia_details_0169-1280x854.jpg',
    ],
    specsSummary: [
      { label: 'Power range', value: '6, 8, 9 kW' },
      { label: 'Stone capacity', value: '~110 lbs' },
      { label: 'Room size', value: '170 – 460 cu ft' },
      { label: 'Max temperature', value: '194°F' },
      { label: 'Voltage', value: '240V 1PH' },
      { label: 'Mounting', value: 'Wall-mount (floor bracket optional)' },
    ],
    sizes: [
      { model: 'SP60', kw: '6 kW', roomSize: '170 – 300 cu ft', stones: '~110 lbs', voltage: '240V 1PH' },
      { model: 'SP80', kw: '8 kW', roomSize: '212 – 388 cu ft', stones: '~110 lbs', voltage: '240V 1PH' },
      { model: 'SP90', kw: '9 kW', roomSize: '282 – 459 cu ft', stones: '~110 lbs', voltage: '240V 1PH' },
    ],
    keyFeatures: [
      'Dual safety sensors — one on the heater, one on the sauna room — prevent overheat and allow safe remote start',
      'WiFi-ready through Harvia Xenio and Fenix control platforms',
      'Integrated safety interlock prevents startup if objects are placed on top',
      '240V single-phase operation fits standard US residential panels',
      'Same heating elements used across Harvia\'s commercial lineup',
      'Stainless steel outer shell, curved rock basket, visible stones from every angle',
    ],
    quotes: [
      {
        quote:
          'Spirit is our fastest-growing residential heater in the North American specialty channel. The combination of price, build quality, and smart-home readiness has found a very clear customer.',
        source: 'CEO Matias Järnefelt, Q1 2024 earnings call',
        context: 'Discussion of North American dealer channel momentum',
        date: '2024-05-03',
      },
      {
        quote:
          'The integrated safety system is built directly into the heater — no additional safety devices are needed for remote use. It guarantees that the heater cannot be turned on if any items are placed on top of it.',
        source: 'harvia.com Spirit product page',
        context: 'Consumer-facing safety messaging',
        date: '2025-02-15',
      },
    ],
    insiderNotes: [
      {
        title: 'Why Spirit beats Cilindro in most residential builds',
        body:
          'Pros recommend Spirit over Cilindro for the majority of residential sauna builds under 300 cubic feet. Reasons: (1) wall-mount saves 3-4 square feet of bench space; (2) the 110-lb stone capacity is enough for residential sessions; (3) price is roughly 30-40% lower; (4) WiFi is standard. The only reasons to step up to Cilindro for a residential build are room size over 450 cubic feet or you want the visual statement.',
      },
      {
        title: 'Safety sensor placement matters more than anyone tells you',
        body:
          'The Spirit\'s room-side safety sensor must be installed 6-12 inches below the ceiling on the wall opposite the heater. Most installers put it too low and it triggers false high-limit trips when the room actually reaches normal operating temperature. Harvia\'s install manual shows this clearly but half the dealer-installed saunas get it wrong. If your Spirit trips during normal use, check sensor placement before you call for service.',
      },
      {
        title: 'The 6kW vs 8kW decision',
        body:
          'Harvia\'s room-size charts are based on well-insulated, tight-constructed saunas with minimal glass. US residential builds almost always have more glass and less insulation than the spec assumes. Round up, not down. If your chart says SP60 (6 kW), buy the SP80 (8 kW). The energy cost difference is negligible; the performance difference when it counts is substantial.',
      },
    ],
    bestFor:
      'Residential saunas between 170 and 460 cubic feet. Homeowners who want WiFi control out of the box. Tight build-outs where floor space matters. Dealers who want a reliable mid-range recommendation.',
    avoidFor:
      'Rooms over 460 cubic feet (step up to Cilindro or Virta Pro). Installations where you want a large visible stone column (Spirit is a slim wall unit).',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland',
    launched: 'Spirit series launched ~2020, WiFi version added 2023',
    lastMentioned: '2024-05-03',
    lastMentionContext: 'Q1 2024 earnings call — fastest-growing residential heater',
    relatedProductSlugs: ['cilindro', 'vega', 'xenio-fenix'],
    harviaUrl: 'https://www.harvia.com/en-US/harvia-spirit-electric-heater/',
  },
  {
    slug: 'vega',
    name: 'Harvia Vega',
    subtitle: 'The entry-level workhorse that ships in real volume',
    series: 'Vega BC series',
    category: 'electric-heater',
    position: 'entry',
    tagline: 'Small, symmetric, unfussy. The heater Harvia sells into Costco-adjacent channels at price points that make infrared saunas look expensive.',
    intro:
      'The Vega is the product nobody writes magazine features about and Harvia sells at the highest unit volume in the lineup. It is a compact, wall-mounted, symmetric stainless-steel heater for small residential saunas between 70 and 510 cubic feet. Vega is the heater you get inside most Almost Heaven barrel saunas, Costco-channel kits, and budget specialty dealer builds. It is not exciting. It is also not pretending to be. What it is, is reliable, UL listed, and priced so that a complete sauna package including room, heater, stones, and door can land under $3,000.',
    heroImage: 'https://harviagroup.com/wp-content/uploads/2025/06/Almost-Heaven_1232marg.jpg',
    gallery: [
      'https://harviagroup.com/wp-content/uploads/2025/06/Almost-Heaven_1232marg.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/05/Kiuas_Kuva1-1280x720.jpg',
    ],
    specsSummary: [
      { label: 'Power range', value: '4.5, 6, 8, 9 kW' },
      { label: 'Stone capacity', value: '~29 – 45 lbs' },
      { label: 'Room size', value: '70 – 510 cu ft' },
      { label: 'Voltage', value: '240V 1PH' },
      { label: 'Mounting', value: 'Wall-mount, low position' },
      { label: 'Controls', value: 'Built-in (BC) or external (BCE)' },
    ],
    sizes: [
      { model: 'BC45', kw: '4.5 kW', roomSize: '70 – 160 cu ft', stones: '~29 lbs', voltage: '240V 1PH', note: 'Built-in controls' },
      { model: 'BC60', kw: '6 kW', roomSize: '170 – 300 cu ft', stones: '~29 lbs', voltage: '240V 1PH', note: 'Built-in controls' },
      { model: 'BC80', kw: '8 kW', roomSize: '212 – 388 cu ft', stones: '~45 lbs', voltage: '240V 1PH', note: 'Built-in controls' },
      { model: 'BC90', kw: '9 kW', roomSize: '282 – 459 cu ft', stones: '~45 lbs', voltage: '240V 1PH', note: 'Built-in controls' },
      { model: 'BC45E / BC60E / BC80E / BC90E', kw: '4.5 / 6 / 8 / 9 kW', roomSize: 'Same as above', voltage: '240V 1PH', note: 'External controls (Xenio/Fenix required)' },
    ],
    keyFeatures: [
      'Two versions: built-in controls (BC) for plug-and-play installs, or external controls (BCE) for smart-home integration',
      'Low wall-mount position ensures steam reaches bottom benches',
      'Symmetric design means the switches can be mounted on either side',
      'Stainless steel outer shell',
      'UL listed',
      'Designed to integrate into OEM barrel sauna kits including Almost Heaven',
    ],
    quotes: [
      {
        quote:
          'Almost Heaven barrel saunas, now shipping through Costco, specialty dealers, and online channels, continue to carry our entry-level heater volume. Vega and its packaged siblings are a core part of why our North American unit shipments are outpacing the category.',
        source: 'CEO Matias Järnefelt, H1 2024 earnings call',
        context: 'North American unit volume commentary',
        date: '2024-08-02',
      },
    ],
    insiderNotes: [
      {
        title: 'BC vs BCE — pick the right variant',
        body:
          'The built-in control (BC) variant is the default for entry-level installs. The external control (BCE) variant is worth the extra cost only if you are adding a Xenio or Fenix panel for WiFi/remote start. Buying BCE and a separate control panel for a basic install is an $400 upgrade that delivers no benefit if the user will always push the physical button.',
      },
      {
        title: 'Stone loading is critical on small units',
        body:
          'The Vega\'s small stone capacity (29-45 lbs depending on model) means stone quality and loading pattern matter more than on larger heaters. Use washed olivine-diabase stones in the 2-4 inch size range. Do not substitute smaller landscape rocks; they pack too tightly, restrict airflow, and can cause the elements to overheat and trip.',
      },
      {
        title: 'Why the BC45 is usually the wrong choice',
        body:
          'The 4.5 kW BC45 is spec\'d for rooms 70-160 cubic feet, which sounds fine for a one-person sauna. In practice, rooms that small have disproportionate heat loss through any glass or door. Real-world performance is 20-25% below spec. If you are building under 160 cubic feet, budget the BC60 instead and enjoy the extra headroom.',
      },
    ],
    bestFor:
      'Barrel saunas, entry-level residential saunas under 400 cubic feet, OEM kit integrations, and installs where the owner prioritizes price over features. Default Almost Heaven heater.',
    avoidFor:
      'Rooms over 459 cubic feet, installs where the user wants WiFi/app control and is not adding a separate panel, and commercial use (step up to Virta Pro).',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland',
    launched: 'Vega series — long-running platform, continuously updated',
    lastMentioned: '2024-08-02',
    lastMentionContext: 'H1 2024 earnings call — North American unit volume',
    relatedProductSlugs: ['spirit', 'forte', 'cilindro'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/electric-sauna-heater/',
  },
  {
    slug: 'forte',
    name: 'Harvia Forte',
    subtitle: 'Ever-Ready heat-storing electric: ready when you walk in',
    series: 'Forte AF series',
    category: 'electric-heater',
    position: 'premium',
    tagline: 'A heat-storing chamber keeps the stones warm continuously while the exterior stays cool. Closer to a wood-fired feel from an always-on electric.',
    intro:
      'The Forte is Harvia\'s design-led answer to a specific problem: electric heaters take 30-45 minutes to reach sauna temperature from cold, which kills spontaneity. The Forte keeps the stones continuously warm in a sealed inner chamber while the outer lid and casing stay at safe-to-touch temperatures. In ECO mode, you can hold the stones at low idle indefinitely for a fraction of typical running cost, then punch up to session temperature in under 15 minutes. It is priced and positioned for owners who use their sauna daily and do not want to plan their schedule around pre-heat cycles.',
    heroImage: 'https://www.datocms-assets.com/41658/1695109067-harvia_ventura_forte_steel_us_web.jpg',
    gallery: [
      'https://www.datocms-assets.com/41658/1695109067-harvia_ventura_forte_steel_us_web.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/06/Harvia_healingwithheat_257-1280x1707-1.jpg',
    ],
    specsSummary: [
      { label: 'Power range', value: '4.0 – 9.0 kW' },
      { label: 'Format', value: 'Heat-storing (Ever-Ready)' },
      { label: 'Room size', value: '142 – 459 cu ft' },
      { label: 'ECO mode', value: 'Yes (low-idle)' },
      { label: 'Safety', value: 'Auto-off on open lid' },
      { label: 'Controls', value: 'Built-in digital + WiFi' },
    ],
    sizes: [
      { model: 'AFB4', kw: '4 kW', roomSize: '142 – 247 cu ft', stones: '~99 lbs', voltage: '240V 1PH' },
      { model: 'AF45', kw: '4.4 kW', roomSize: '170 – 247 cu ft', stones: '~99 lbs', voltage: '240V 1PH' },
      { model: 'AF65', kw: '6.5 kW', roomSize: '212 – 388 cu ft', stones: '~132 lbs', voltage: '240V 1PH' },
      { model: 'AF90', kw: '9 kW', roomSize: '282 – 459 cu ft', stones: '~132 lbs', voltage: '240V 1PH' },
    ],
    keyFeatures: [
      'Heat-storing inner chamber keeps stones continuously warm',
      'ECO mode allows low-idle operation for always-ready performance',
      'Outer lid and casing remain at safe-to-touch temperatures',
      'Automatic shutoff if the cover is not closed',
      'Keypad lock on control panel',
      'Built-in digital controls with MyHarvia WiFi',
    ],
    quotes: [
      {
        quote:
          'The Harvia Forte Ever-Ready heater is ready for sauna at a moment\'s notice and is designed to be safe, energy efficient and easy to use whenever you want to sauna.',
        source: 'Harvia product launch materials',
        context: 'Consumer-facing launch messaging',
        date: '2024-03-15',
      },
      {
        quote:
          'The new ECO mode saves electricity, as it allows you to adjust the heater\'s temperature to a very low setting without turning off the heater. For daily users this changes the economics of sauna bathing.',
        source: 'harvia.com Forte page',
        context: 'ECO mode positioning',
        date: '2024-03-15',
      },
    ],
    insiderNotes: [
      {
        title: 'The ECO-mode math is non-obvious',
        body:
          'Daily sauna users save money running Forte in ECO mode 24/7 versus starting from cold each session. The math: a 30-minute cold start pulls roughly 5 kWh. ECO idle pulls about 0.4-0.7 kWh per hour. At 24 hours of idle plus 15 minutes of session warmup, you use about 12 kWh. For users taking daily sessions, ECO is cheaper and dramatically more convenient. For users running 1-2 sessions per week, ECO costs more.',
      },
      {
        title: 'Why the lid auto-off matters in commercial installs',
        body:
          'Commercial installers love the Forte because the lid auto-off eliminates the most common commercial failure mode: guests leaving towels or clothing on top of heaters. Forte literally will not run with the cover open. This is a feature residential users take for granted; commercial ops teams consider it a liability-prevention tool.',
      },
      {
        title: 'Pair with a Xenio CX110 for shared residential schedules',
        body:
          'Forte\'s built-in controls are fine for single-user households. If you have a household with multiple users on different schedules, pair the Forte with a Xenio CX110 WiFi remote. The MyHarvia app lets users queue sessions from the road, and Forte\'s ECO mode means queued sessions start with a 15-minute warmup instead of a 45-minute one. This is how Forte earns its premium price.',
      },
    ],
    bestFor:
      'Daily sauna users. Busy households where sauna spontaneity matters. Small to mid-size residential saunas. Commercial installs where liability on lid placement is a concern.',
    avoidFor:
      'Occasional users (1-2 sessions per week) where idle-mode running cost exceeds cold-start cost. Rooms over 459 cubic feet (Forte capacity tops out).',
    warranty: '2 years residential, 1 year commercial',
    madeIn: 'Muurame, Finland',
    launched: 'Forte Ever-Ready line launched 2023; refreshed 2024',
    lastMentioned: '2024-03-15',
    lastMentionContext: 'Harvia product launch page refresh',
    relatedProductSlugs: ['cilindro', 'spirit', 'xenio-fenix'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/electric-sauna-heater/forte-electric-heaters/',
  },
  {
    slug: 'legend',
    name: 'Harvia Legend',
    subtitle: 'Wood-burning flagship for rooms up to 850 cubic feet',
    series: 'Legend 150 / 240 / 240SL',
    category: 'wood-burning-heater',
    position: 'flagship',
    tagline: 'Cast iron glass door, thick stone cradle, clean burn. The wood-fired heater Harvia dealers specify when the customer says "I want the real thing."',
    intro:
      'The Legend is Harvia\'s flagship wood-burning heater line. The 150 is the residential-to-small-commercial unit for rooms up to 460 cubic feet. The 240 and 240SL scale to larger commercial installs with an optional external wood feed (SL variant), which is critical for sauna rooms designed to keep the fire-tending out of the hot room. The Legend is what you get when a customer wants the Finnish wood-fired experience but with modern door design, modern burn efficiency, and modern stone-handling capability. It replaced Harvia\'s older wood-burning lineup in the late 2010s and has become the specified-by-default choice for serious wood-fired residential builds.',
    heroImage: 'https://harviagroup.com/wp-content/uploads/2025/06/Kirami_Harvia_1232marg.jpg',
    gallery: [
      'https://harviagroup.com/wp-content/uploads/2025/06/Kirami_Harvia_1232marg.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/06/092624_HA_LM_BK0221-3_WEB-1280x854-1.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/05/Harvia_ranta_03-1024x684-1.jpg',
    ],
    specsSummary: [
      { label: 'Fuel', value: 'Wood-burning' },
      { label: 'Power (150)', value: '~16 kW equivalent' },
      { label: 'Power (240)', value: '~21 kW equivalent' },
      { label: 'Room size', value: '210 – 850 cu ft' },
      { label: 'Stones (150)', value: '~265 lbs' },
      { label: 'Stones (240)', value: '~450 lbs' },
    ],
    sizes: [
      { model: 'Legend 150', kw: '~16 kW equiv', roomSize: '210 – 460 cu ft', stones: '~265 lbs', note: 'Residential / small commercial' },
      { model: 'Legend 240', kw: '~21 kW equiv', roomSize: '350 – 850 cu ft', stones: '~450 lbs', note: 'Commercial; door in hot room' },
      { model: 'Legend 240SL', kw: '~21 kW equiv', roomSize: '350 – 850 cu ft', stones: '~450 lbs', note: 'External wood feed' },
    ],
    keyFeatures: [
      'Cast-iron glass door lets firelight glow through the front of the heater',
      'Modern grate structure in the fire chamber for cleaner, more efficient burning',
      'Adjustable legs handle uneven floor conditions common in wood-fired builds',
      'Options for top or rear flue connection',
      '4.5" (115mm) native flue; 6" adapter required for North American code',
      'Can be equipped with a pipe-mounted water heater for the changing room',
      'SL variant has an external wood-feed door so firewood and ash stay out of the sauna room',
    ],
    quotes: [
      {
        quote:
          'Wood-burning continues to carry meaningful demand globally. The Legend and our expanded Cilindro wood-burning variant cover the categories where customers want the authentic Finnish experience with modern build quality.',
        source: 'CEO Matias Järnefelt, Q4 2025 earnings call',
        context: 'Discussion of wood-burning product category',
        date: '2026-02-12',
      },
      {
        quote:
          'Modern grate structure in the fire chamber results in cleaner and more efficient burning. Cast-iron glass door that lets warm firelight glow through.',
        source: 'harvia.com Legend product page',
        context: 'Product feature description',
        date: '2024-10-01',
      },
    ],
    insiderNotes: [
      {
        title: 'The SL variant is not a luxury, it\'s a safety feature',
        body:
          'The Legend 240SL\'s external wood-feed door is marketed as a "convenience" feature. In commercial installations, it is actually a safety and operations requirement. Fire-tending inside a 180°F sauna room filled with wet guests is a liability event waiting to happen. Any hotel, gym, or bathhouse install of a wood-burning sauna should specify SL or an equivalent external-feed design. Residential installs that care about ash management also benefit.',
      },
      {
        title: 'The 6" flue adapter is non-negotiable in North America',
        body:
          'The Legend ships with Harvia\'s native 115mm (4.5") flue collar, which matches European code. North American building code requires 6" (152mm) minimum. Every Legend install in the US or Canada requires a 4.5" to 6" adapter, which Harvia sells as part HSK6A. Installers who try to use the native 4.5" collar with a 6" pipe create a back-pressure problem that will cause smoking into the room.',
      },
      {
        title: 'Stone selection matters more than on electric',
        body:
          'The Legend\'s fire chamber runs hotter than an electric element (up to 1200°F in the grate zone). Cheap stones crack under that thermal shock and can shatter. Use dense, high-purity olivine or peridotite stones in the size range Harvia specifies. Budget bags from a big-box store will break within months, clog the airflow path, and reduce steam output by half.',
      },
      {
        title: 'The Harvia 50 family at White Mountain Sauna Haus',
        body:
          'The Harvia 20/36/50 wood-burning series (the "M" series in older catalogs) is distinct from the Legend line. The Harvia 50 referenced in our <a href="/article/white-mountain-sauna-haus-north-conway-apres-ski">White Mountain Sauna Haus coverage</a> is the largest of that series, designed for very large commercial sauna rooms. It is a different product from the Legend 240, though both compete in the large-commercial wood-burning category. Specifiers often compare them.',
      },
    ],
    bestFor:
      'Off-grid and wood-fired residential builds, destination commercial saunas where the wood-fired experience is part of the brand, installs where the owner is committed to wood management and flue maintenance. SL variant for any commercial build.',
    avoidFor:
      'Urban or suburban residential installs where local code restricts wood-burning. Installs in rooms under 210 cubic feet (overkill and venting is difficult). Installs where the owner will not commit to proper stone care and flue cleaning.',
    warranty: '2 years',
    madeIn: 'Muurame, Finland',
    launched: 'Legend line launched mid-2010s; 240SL external-feed variant added later',
    lastMentioned: '2026-02-12',
    lastMentionContext: 'Q4 2025 earnings call — wood-burning category commentary',
    relatedProductSlugs: ['pro-36', 'cilindro', 'virta-pro'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/sauna-wood-burning-heater/legend-wood-burning-heaters/',
  },
  {
    slug: 'pro-36',
    name: 'Harvia Pro 20 / Pro 36',
    subtitle: 'Commercial wood-burning stoves for large public saunas',
    series: 'Pro 20 / Pro 36 (WK-series)',
    category: 'wood-burning-heater',
    position: 'commercial',
    tagline: '31 kW of wood-fired heat for rooms up to 1,270 cubic feet. The Finnish commercial wood-burning standard.',
    intro:
      'The Harvia Pro 20 and Pro 36 are the commercial-scale wood-burning stoves Harvia offers for public saunas, resorts, and large communal installations. The Pro 36 (WK360) is the headline unit, rated at 31 kW equivalent and capable of heating rooms up to 1,270 cubic feet. These are the heaters that end up in Nordic bathhouses, ski-town communal saunas, and destination wellness properties where the sauna is the centerpiece of the experience. The Pro 36\'s visual presence, stone mass, and fire-chamber size are all commercial-grade and not scaled for residential use.',
    heroImage: 'https://harviagroup.com/wp-content/uploads/2025/06/092624_HA_LM_BK0221-3_WEB-1280x854-1.jpg',
    gallery: [
      'https://harviagroup.com/wp-content/uploads/2025/06/092624_HA_LM_BK0221-3_WEB-1280x854-1.jpg',
      'https://harviagroup.com/wp-content/uploads/2025/05/Harvia_ranta_03-1024x684-1.jpg',
    ],
    specsSummary: [
      { label: 'Fuel', value: 'Wood-burning' },
      { label: 'Power (Pro 36)', value: '~31 kW equivalent' },
      { label: 'Room size', value: '494 – 1,270 cu ft' },
      { label: 'Stone capacity', value: '~132 lbs' },
      { label: 'Firewood length', value: 'Up to 15.3" (390mm)' },
      { label: 'Min ceiling', value: '81" (2060mm)' },
    ],
    sizes: [
      { model: 'Pro 20 (WK200)', kw: '~20 kW equiv', roomSize: '283 – 700 cu ft', stones: '~88 lbs' },
      { model: 'Pro 36 (WK360)', kw: '~31 kW equiv', roomSize: '494 – 1,270 cu ft', stones: '~132 lbs' },
    ],
    keyFeatures: [
      'Designed, engineered, and made in Finland',
      'Floor-mounted with adjustable legs',
      'Black steel frame, commercial-grade construction',
      'Large fire chamber accepts firewood up to 15.3 inches',
      'Stone capacity of 132 lbs (Pro 36) in three stacked tiers',
      'Compatible with insulated flue systems to handle commercial BTU output',
      'Minimum room height of 81 inches (clears typical commercial sauna ceilings)',
    ],
    quotes: [
      {
        quote:
          'Commercial wood-burning is a small but growing part of our business, particularly driven by destination wellness installs in North America and the Nordics. The Pro 20 and Pro 36 are the heaters that get specified.',
        source: 'Harvia annual report 2024',
        context: 'Commercial wood-burning category commentary',
        date: '2025-03-14',
      },
    ],
    insiderNotes: [
      {
        title: 'The 81-inch ceiling requirement is a design constraint, not a guideline',
        body:
          'The Pro 36\'s 81-inch minimum ceiling requirement is driven by flue clearance and radiant heat distribution. Builders who try to fit this heater in a room with 78-inch ceilings will create hot spots at head height and insufficient steam distribution at bench height. If the project has lower ceilings, step down to the Pro 20 or the Legend 240SL.',
      },
      {
        title: 'Pro 36 vs Legend 240SL',
        body:
          'The Pro 36 and Legend 240SL are often compared for commercial installs in the 700-1200 cubic foot range. Key differences: (1) Pro 36 has a larger fire chamber but smaller stone capacity (132 lbs vs 450 lbs), so it heats faster but the löyly recovery between water pours is less forgiving; (2) Legend 240SL has the external feed door option which most commercial operators prefer; (3) Pro 36 is slightly less expensive. Spec Pro 36 when fast heat-up matters more than stone mass; spec Legend 240SL when the opposite is true.',
      },
      {
        title: 'Insulated flue is not optional',
        body:
          'At 31 kW of wood-fired output, the Pro 36\'s flue gas temperatures run 600-800°F during active burning. Standard single-wall flue pipe is not rated for this. Every commercial Pro 36 install requires a full insulated Class A chimney from the heater collar to termination above the roof. Budget $2,000-$4,000 for the chimney package alone. Attempting to use single-wall pipe is both a code violation and a fire hazard.',
      },
    ],
    bestFor:
      'Commercial and destination wood-fired saunas, ski-town communal bathhouses, Nordic-inspired resort installations, large private cabin sauna builds where the customer wants the real Finnish commercial experience.',
    avoidFor:
      'Residential installs under 500 cubic feet (massively oversized). Any room with ceilings below 81 inches. Urban installs where wood-burning permits are restricted.',
    warranty: '2 years',
    madeIn: 'Muurame, Finland',
    launched: 'Pro series long-running; current Pro 36 (WK360) is current generation',
    lastMentioned: '2025-03-14',
    lastMentionContext: 'Harvia Annual Report 2024 — commercial wood-burning commentary',
    relatedProductSlugs: ['legend', 'cilindro', 'virta-pro'],
    harviaUrl: 'https://www.harvia.com/en-US/sauna-heaters/sauna-wood-burning-heater/',
  },
  {
    slug: 'xenio-fenix',
    name: 'Harvia Xenio & Fenix',
    subtitle: 'The smart-control platform for every Harvia heater',
    series: 'Xenio CX / Fenix FX',
    category: 'controller',
    position: 'flagship',
    tagline: 'Xenio is the installed base; Fenix is the 2025 smart-control flagship with 4.3-inch touchscreen, WiFi, OTA updates, and backward compatibility.',
    intro:
      'Harvia\'s control platform has two generations in active deployment: Xenio, the mid-range digital control line that has shipped with almost every Harvia heater since 2018; and Fenix, the new flagship smart controller launched in 2025 and highlighted in the Q3 2025 earnings call as "the leading product in this category." Fenix is backward-compatible with existing Xenio wiring, which means a Xenio owner can upgrade the panel without rewiring. The MyHarvia mobile app is the common interface across both, supporting remote start, temperature and humidity control, lighting, ventilation, week-timers, and multi-sauna control for commercial operators.',
    heroImage: 'https://www.datocms-assets.com/41658/1748948894-harvia_fenix_smoke_f1.jpg',
    gallery: [
      'https://www.datocms-assets.com/41658/1748948894-harvia_fenix_smoke_f1.jpg',
      'https://www.datocms-assets.com/41658/1748949128-harvia_fenix_fx001xw_f2.jpg',
      'https://www.datocms-assets.com/41658/1748949420-harvia_fenix_wificontrolunit_fx1104xc_fx1704xc_f8.jpg',
      'https://www.datocms-assets.com/41658/1755255327-harvia_myharvia_yogi_celsius_f1.jpg',
    ],
    specsSummary: [
      { label: 'Fenix screen', value: '4.3" full touchscreen' },
      { label: 'Connectivity', value: 'WiFi, OTA updates' },
      { label: 'App', value: 'MyHarvia (iOS + Android)' },
      { label: 'Compatibility', value: 'Backward compatible with Xenio' },
      { label: 'Max power', value: 'Up to 17 kW (single heater)' },
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
      '4.3-inch full touchscreen on Fenix with preset scenes (Mild, Cozy, Hot)',
      'WiFi connectivity standard on Fenix and WiFi Xenio models',
      'Over-the-air firmware updates via MyHarvia app (Fenix)',
      'Backward-compatible wiring — Fenix replaces Xenio without rewiring',
      'Multi-sauna support in MyHarvia for commercial operators',
      'Week timer, memory function for power outages, temperature calibration',
      'Humidity and ventilation control when paired with Combi heaters',
      'Smart-learning algorithms on Fenix predict heater performance over time',
    ],
    quotes: [
      {
        quote:
          'The Harvia Phoenix is a really exciting 4.3-inch full touchscreen product. It\'s very easy to use with, for example, ready-made presets like mild, cozy, and hot. It is really the leading product in this category.',
        source: 'CEO Matias Järnefelt, Q3 2025 earnings call',
        context: 'Launch highlight during Q3 2025 results discussion (Phoenix is the English-language transliteration; product name is Fenix)',
        date: '2025-11-06',
      },
      {
        quote:
          'The MyHarvia mobile application enables remote control of functions on the control panel, such as temperature and humidity control, lighting and ventilation, temperature calibration, memory function in case of power outages, timed starting and use of the week timer.',
        source: 'harvia.com MyHarvia page',
        context: 'Consumer positioning',
        date: '2025-05-01',
      },
      {
        quote:
          'Fenix is backward compatible with the Xenio installed base. A customer or dealer can upgrade the panel without rewiring the heater. This makes the refresh cycle meaningfully less painful for the large installed base of Xenio units.',
        source: 'Harvia Q3 2025 earnings presentation',
        context: 'Backward-compatibility positioning',
        date: '2025-11-06',
      },
    ],
    insiderNotes: [
      {
        title: 'The backward-compatibility story is real, with one caveat',
        body:
          'Fenix\'s backward-compatibility with Xenio wiring is genuine for 95% of installs. The caveat: very early Xenio units (pre-2020) used a 4-pin connector to the heater that Fenix does not match directly. Harvia sells a pin adapter (part #FX-XN-ADT) for about $40 that bridges the two. Before telling a customer "plug-and-play upgrade," confirm their existing Xenio model number.',
      },
      {
        title: 'MyHarvia on iOS vs Android',
        body:
          'The MyHarvia app runs on both platforms but the iOS version has historically been 1-2 releases ahead of Android on new features. Commercial customers running multi-sauna fleets should standardize on iOS or plan around feature parity gaps. Harvia has been closing this gap, but in late 2025 Android still lagged slightly.',
      },
      {
        title: 'Why "Phoenix" and "Fenix" both appear',
        body:
          'The product name is officially Fenix (Finnish spelling). Some US-facing earnings materials and call transcripts use the English "Phoenix" transliteration. The product is the same. When searching harvia.com, use "Fenix." When reading investor transcripts, expect either spelling.',
      },
      {
        title: 'OTA updates change the maintenance calculus',
        body:
          'Fenix\'s over-the-air firmware update capability is a small-sounding feature with big implications for commercial operators. A sauna facility running 8 Fenix panels can ship firmware updates to all 8 overnight without a service call. Harvia is using this to push bug fixes and new control features (including eventual ThermaSol steam integration) without truck rolls. For commercial specs, this moves Fenix from "nice controller" to "operationally necessary."',
      },
    ],
    bestFor:
      'Any Harvia heater install from 2020 onward. Commercial operators who want remote control and OTA updates. Residential users upgrading from a legacy Xenio panel. Any sauna with ThermaSol integration planned.',
    avoidFor:
      'Installations where the customer explicitly does not want WiFi (rare but occasionally a code or security requirement). Very early Harvia heaters pre-Xenio era (2016 and earlier).',
    warranty: '2 years',
    madeIn: 'Finland and Austria (Sentiotec design collaboration)',
    launched: 'Xenio ~2018; Fenix 2025',
    lastMentioned: '2025-11-06',
    lastMentionContext: 'Q3 2025 earnings call — Fenix highlighted as new flagship control product',
    relatedProductSlugs: ['cilindro', 'virta-pro', 'spirit'],
    harviaUrl: 'https://www.harvia.com/en-US/harvia-fenix-intelligent-sauna-control/',
  },
];

export function getProduct(slug: string): HarviaProduct | undefined {
  return harviaProducts.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return harviaProducts.map((p) => p.slug);
}
