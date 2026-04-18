import type { MediaBankAsset } from './harvia-products';

export interface ProductMediaBank {
  images: MediaBankAsset[];
  videos: MediaBankAsset[];
  documents: MediaBankAsset[];
}

export const harviaMediaBank: Record<string, ProductMediaBank> = {
  "cilindro-wood": {
    "images": [
      {
        "id": "7918",
        "src": "/images/harvia-mediabank/cilindro-wood/7918.jpg",
        "title": "sauna M Dawn (Left) Cilindro 16",
        "type": "product-image"
      },
      {
        "id": "5170",
        "src": "/images/harvia-mediabank/cilindro-wood/5170.jpg",
        "title": "Harvia Cilindro water heater",
        "type": "product-image"
      },
      {
        "id": "4932",
        "src": "/images/harvia-mediabank/cilindro-wood/4932.jpg",
        "title": "Harvia Cilindro smoke pipe guard",
        "type": "product-image"
      },
      {
        "id": "4931",
        "src": "/images/harvia-mediabank/cilindro-wood/4931.jpg",
        "title": "Harvia Cilindro smoke pipe guard",
        "type": "product-image"
      },
      {
        "id": "4930",
        "src": "/images/harvia-mediabank/cilindro-wood/4930.jpg",
        "title": "Harvia Cilindro protective sheath",
        "type": "product-image"
      },
      {
        "id": "4928",
        "src": "/images/harvia-mediabank/cilindro-wood/4928.jpg",
        "title": "Harvia Cilindro water heater",
        "type": "product-image"
      },
      {
        "id": "4927",
        "src": "/images/harvia-mediabank/cilindro-wood/4927.jpg",
        "title": "Harvia Cilindro water heater",
        "type": "product-image"
      },
      {
        "id": "4925",
        "src": "/images/harvia-mediabank/cilindro-wood/4925.jpg",
        "title": "Harvia Cilindro 16 Steel",
        "type": "product-image"
      },
      {
        "id": "4924",
        "src": "/images/harvia-mediabank/cilindro-wood/4924.jpg",
        "title": "Harvia Cilindro 20 Steel",
        "type": "product-image"
      },
      {
        "id": "4547",
        "src": "/images/harvia-mediabank/cilindro-wood/4547.jpg",
        "title": "Harvia Cilindro element tunnel",
        "type": "product-image"
      },
      {
        "id": "1982",
        "src": "/images/harvia-mediabank/cilindro-wood/1982.jpg",
        "title": "Harvia Cilindro, Black Steel protective sheath",
        "type": "product-image"
      },
      {
        "id": "1981",
        "src": "/images/harvia-mediabank/cilindro-wood/1981.jpg",
        "title": "Harvia Cilindro, Black Steel protective sheath",
        "type": "product-image"
      },
      {
        "id": "1980",
        "src": "/images/harvia-mediabank/cilindro-wood/1980.jpg",
        "title": "Harvia Cilindro, Black Steel protective sheath",
        "type": "product-image"
      },
      {
        "id": "1979",
        "src": "/images/harvia-mediabank/cilindro-wood/1979.jpg",
        "title": "Harvia Cilindro, Black Steel protective sheath",
        "type": "product-image"
      },
      {
        "id": "1978",
        "src": "/images/harvia-mediabank/cilindro-wood/1978.jpg",
        "title": "Harvia Cilindro, Black Steel protective sheath",
        "type": "product-image"
      },
      {
        "id": "622",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=622&b=512&g=0",
        "title": "Harvia Legend WP250LD dimensions",
        "type": "technical-image"
      }
    ],
    "videos": [
      {
        "id": "5336",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5336/viewmode=previewview",
        "title": "How-to stack stones into a pillar model wood-burning heater ENG",
        "type": "video",
        "ext": "mp4",
        "poster": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=5336&b=1024&g=0"
      }
    ],
    "documents": [
      {
        "id": "5515",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5515/viewmode=previewview",
        "title": "Cilindro water heater WP250PC Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English, Finnish, German, Swedish"
      },
      {
        "id": "5203",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5203/viewmode=previewview",
        "title": "Cilindro Chimney cover WL300PC",
        "type": "manual",
        "ext": "pdf",
        "language": "Bulgarian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Hungarian, Italian, Latvian, Lithuenian, Norwegian, Polish, Portuguese, Russian, Slovak, Slovenian, Spanish, Swedish"
      },
      {
        "id": "5080",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5080/viewmode=previewview",
        "title": "Cilindro Protective Sheath WL200PC",
        "type": "manual",
        "ext": "pdf",
        "language": "Bulgarian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Hungarian, Italian, Latvian, Lithuenian, Norwegian, Polish, Portuguese, Russian, Slovak, Slovenian, Spanish, Swedish"
      },
      {
        "id": "5017",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5017/viewmode=previewview",
        "title": "Cilindro 20 Steel Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "Czech, Dutch, English, Estonian, Finnish, French, German, Latvian, Lithuenian, Polish, Russian, Swedish"
      },
      {
        "id": "4876",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/4876/viewmode=previewview",
        "title": "Cilindro 16 Steel Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "Czech, Dutch, English, Estonian, Finnish, French, German, Latvian, Lithuenian, Polish, Russian, Swedish"
      }
    ]
  },
  "cilindro-electric": {
    "images": [
      {
        "id": "7373",
        "src": "/images/harvia-mediabank/cilindro-electric/7373.jpg",
        "title": "Harvia Cilindro Black Steel 110E",
        "type": "product-image"
      },
      {
        "id": "7372",
        "src": "/images/harvia-mediabank/cilindro-electric/7372.jpg",
        "title": "Harvia Cilindro Black Steel 110XE",
        "type": "product-image"
      },
      {
        "id": "6849",
        "src": "/images/harvia-mediabank/cilindro-electric/6849.jpg",
        "title": "Harvia Cilindro Corner XE Steel",
        "type": "product-image"
      },
      {
        "id": "6290",
        "src": "/images/harvia-mediabank/cilindro-electric/6290.jpg",
        "title": "Harvia Cilindro HPC100 heating element wires",
        "type": "product-image"
      },
      {
        "id": "6289",
        "src": "/images/harvia-mediabank/cilindro-electric/6289.jpg",
        "title": "Harvia Cilindro PC110XE electronic set",
        "type": "product-image"
      },
      {
        "id": "6278",
        "src": "/images/harvia-mediabank/cilindro-electric/6278.jpg",
        "title": "Harvia Cilindro H/F wall bracket",
        "type": "product-image"
      },
      {
        "id": "6177",
        "src": "/images/harvia-mediabank/cilindro-electric/6177.jpg",
        "title": "Harvia Cilindro corner E Black Steel",
        "type": "product-image"
      },
      {
        "id": "5795",
        "src": "/images/harvia-mediabank/cilindro-electric/5795.jpg",
        "title": "Harvia Cilindro corner E Steel",
        "type": "product-image"
      },
      {
        "id": "5598",
        "src": "/images/harvia-mediabank/cilindro-electric/5598.jpg",
        "title": "Harvia Electric upgrade kit Cilindro EE to XE",
        "type": "product-image"
      },
      {
        "id": "4930",
        "src": "/images/harvia-mediabank/cilindro-electric/4930.jpg",
        "title": "Harvia Cilindro protective sheath",
        "type": "product-image"
      },
      {
        "id": "4462",
        "src": "/images/harvia-mediabank/cilindro-electric/4462.jpg",
        "title": "Harvia Cilindro power unit",
        "type": "product-image"
      },
      {
        "id": "4442",
        "src": "/images/harvia-mediabank/cilindro-electric/4442.jpg",
        "title": "Harvia Cilindro XE power unit",
        "type": "product-image"
      },
      {
        "id": "4328",
        "src": "/images/harvia-mediabank/cilindro-electric/4328.jpg",
        "title": "Harvia Cilindro heating element support plate",
        "type": "product-image"
      },
      {
        "id": "4313",
        "src": "/images/harvia-mediabank/cilindro-electric/4313.jpg",
        "title": "Harvia Cilindro wall bracket",
        "type": "product-image"
      },
      {
        "id": "4312",
        "src": "/images/harvia-mediabank/cilindro-electric/4312.jpg",
        "title": "Harvia Cilindro upper triangle support",
        "type": "product-image"
      },
      {
        "id": "81",
        "src": "/images/harvia-mediabank/cilindro-electric/81.jpg",
        "title": "Harvia CilindroPro 100E-135E electrical connections with control unit",
        "type": "technical-image"
      },
      {
        "id": "80",
        "src": "/images/harvia-mediabank/cilindro-electric/80.jpg",
        "title": "Harvia CilindroPro 100E-135E electrical connections",
        "type": "technical-image"
      },
      {
        "id": "79",
        "src": "/images/harvia-mediabank/cilindro-electric/79.jpg",
        "title": "Harvia CilindroPro 100E-135E spare parts",
        "type": "technical-image"
      },
      {
        "id": "78",
        "src": "/images/harvia-mediabank/cilindro-electric/78.jpg",
        "title": "Harvia CilindroPro 100E-135E sensor installation",
        "type": "technical-image"
      },
      {
        "id": "77",
        "src": "/images/harvia-mediabank/cilindro-electric/77.jpg",
        "title": "Harvia CilindroPro 100E-135E safety distances",
        "type": "technical-image"
      },
      {
        "id": "72",
        "src": "/images/harvia-mediabank/cilindro-electric/72.jpg",
        "title": "Harvia_Cilindro_PC110XE_electric",
        "type": "technical-image"
      },
      {
        "id": "71",
        "src": "/images/harvia-mediabank/cilindro-electric/71.jpg",
        "title": "Harvia Cilindro PC110XE panel installation",
        "type": "technical-image"
      },
      {
        "id": "70",
        "src": "/images/harvia-mediabank/cilindro-electric/70.jpg",
        "title": "Harvia Cilindro PC110XE sensor installation",
        "type": "technical-image"
      }
    ],
    "videos": [
      {
        "id": "5097",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5097/viewmode=previewview",
        "title": "Harvia - Stacking sauna stones into a pillar-model electric heater ENG",
        "type": "video",
        "ext": "mp4",
        "poster": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=5097&b=1024&g=0"
      }
    ],
    "documents": [
      {
        "id": "6657",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6657/viewmode=previewview",
        "title": "Cilindro Corner XE Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English, Estonian, Finnish, French, German, Latvian, Lithuenian, Russian, Swedish"
      },
      {
        "id": "5840",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5840/viewmode=previewview",
        "title": "Cilindro Corner HPCCE704, HPCCE904 Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "Czech, Dutch, English, Estonian, Finnish, French, German, Italian, Latvian, Lithuenian, Polish, Russian, Slovenian, Spanish, Swedish"
      },
      {
        "id": "5080",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5080/viewmode=previewview",
        "title": "Cilindro Protective Sheath WL200PC",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "4603",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/4603/viewmode=previewview",
        "title": "HPC30 Cilindro fast heating tunnel",
        "type": "manual",
        "ext": "pdf",
        "language": "English, German"
      },
      {
        "id": "1400",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/1400/viewmode=previewview",
        "title": "Harvia HPC11 Instructions for installation and use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "141",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/141/viewmode=previewview",
        "title": "Harvia Cilindro Black Steel, EN",
        "type": "brochure",
        "ext": "pdf"
      },
      {
        "id": "136",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/136/viewmode=previewview",
        "title": "Harvia Cilindro Black Steel XE, EN",
        "type": "brochure",
        "ext": "pdf"
      }
    ]
  },
  "pro-36": {
    "images": [
      {
        "id": "2348",
        "src": "/images/harvia-mediabank/pro-36/2348.jpg",
        "title": "Harvia protective sheath HPP11",
        "type": "product-image"
      },
      {
        "id": "1598",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1598&b=512&g=0",
        "title": "Harvia Protective Sheath Legend WL200",
        "type": "product-image"
      },
      {
        "id": "1594",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1594&b=512&g=0",
        "title": "Harvia Protective Bedding WL100",
        "type": "product-image"
      },
      {
        "id": "1588",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1588&b=512&g=0",
        "title": "Harvia Protective Bedding WL110",
        "type": "product-image"
      },
      {
        "id": "3901",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=3901&b=512&g=0",
        "title": "Harvia Pro 20 Duo, Harvia Pro 36 Duo",
        "type": "product-image"
      },
      {
        "id": "1620",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1620&b=512&g=0",
        "title": "Harvia Pro 20 SL Boiler Woodburning Stove",
        "type": "product-image"
      },
      {
        "id": "1619",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1619&b=512&g=0",
        "title": "Harvia Pro 20 SL Woodburning Stove",
        "type": "product-image"
      },
      {
        "id": "1618",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1618&b=512&g=0",
        "title": "Harvia Pro 20 Duo, Harvia Pro 36 Duo",
        "type": "product-image"
      },
      {
        "id": "1501",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1501&b=512&g=0",
        "title": "Harvia Pro 20 LS",
        "type": "product-image"
      },
      {
        "id": "1500",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1500&b=512&g=0",
        "title": "Harvia Pro 20",
        "type": "product-image"
      },
      {
        "id": "1497",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1497&b=512&g=0",
        "title": "Harvia Pro 20 RS",
        "type": "product-image"
      },
      {
        "id": "1496",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1496&b=512&g=0",
        "title": "Harvia Pro 20 ES",
        "type": "product-image"
      },
      {
        "id": "1499",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1499&b=512&g=0",
        "title": "Harvia Pro 36",
        "type": "product-image"
      },
      {
        "id": "1596",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1596&b=512&g=0",
        "title": "Harvia Protective Sheath WL850",
        "type": "product-image"
      },
      {
        "id": "1590",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1590&b=512&g=0",
        "title": "Harvia Protective Sheath WL800",
        "type": "product-image"
      }
    ],
    "videos": [],
    "documents": [
      {
        "id": "4922",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/4922/viewmode=previewview",
        "title": "Pro 20 Duo, Pro 20 SL, Pro 36 Duo Wood Burning Heater Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "4618",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/4618/viewmode=previewview",
        "title": "Harvia Pro20/Pro26/Pro36/Linear22/Linear28 Wood burning Heater Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "4672",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/4672/viewmode=previewview",
        "title": "Harvia Pro 20 RS/LS Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "3237",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3237/viewmode=previewview",
        "title": "Harvia Pro 20 GreenFlame kit info",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "6655",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6655/viewmode=previewview",
        "title": "Kirami by Harvia product catalogue",
        "type": "brochure",
        "ext": "pdf"
      },
      {
        "id": "244",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/244/viewmode=previewview",
        "title": "Harvia Products for Steam Room, EN",
        "type": "brochure",
        "ext": "pdf"
      },
      {
        "id": "5295",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5295/viewmode=previewview",
        "title": "Harvia protective box for sauna control unit",
        "type": "data-sheet",
        "ext": "pdf"
      }
    ]
  },
  "harvia-sopo-cabin": {
    "images": [
      {
        "id": "8530",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8530&b=512&g=0",
        "title": "Harvia Kaski 240 View Canopy",
        "type": "product-image"
      },
      {
        "id": "8529",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8529&b=512&g=0",
        "title": "Harvia Kaski 240 View Canopy",
        "type": "product-image"
      },
      {
        "id": "8527",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8527&b=512&g=0",
        "title": "Harvia Kaski 220 View",
        "type": "product-image"
      },
      {
        "id": "8526",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8526&b=512&g=0",
        "title": "Harvia Kaski 220 View",
        "type": "product-image"
      },
      {
        "id": "8522",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8522&b=512&g=0",
        "title": "Harvia Kaski 180 View",
        "type": "product-image"
      },
      {
        "id": "8520",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8520&b=512&g=0",
        "title": "Harvia Kaski 180 View",
        "type": "product-image"
      },
      {
        "id": "8518",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8518&b=512&g=0",
        "title": "Harvia 240 Kaski Panorama Canopy",
        "type": "product-image"
      },
      {
        "id": "8517",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8517&b=512&g=0",
        "title": "Harvia 240 Kaski Panorama Canopy",
        "type": "product-image"
      },
      {
        "id": "8513",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8513&b=512&g=0",
        "title": "Harvia Kaski 220 Panorama",
        "type": "product-image"
      },
      {
        "id": "8512",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8512&b=512&g=0",
        "title": "Harvia Kaski 220 Panorama",
        "type": "product-image"
      },
      {
        "id": "8509",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8509&b=512&g=0",
        "title": "Harvia Kaski 180 Panorama",
        "type": "product-image"
      },
      {
        "id": "8508",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8508&b=512&g=0",
        "title": "Harvia Kaski 180 Panorama",
        "type": "product-image"
      },
      {
        "id": "7811",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=7811&b=512&g=0",
        "title": "Harvia Utu Medium full glass",
        "type": "product-image"
      },
      {
        "id": "4492",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=4492&b=512&g=0",
        "title": "Harvia Utu sauna cabin",
        "type": "product-image"
      },
      {
        "id": "4491",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=4491&b=512&g=0",
        "title": "Harvia Utu sauna cabin",
        "type": "product-image"
      },
      {
        "id": "8655",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8655&b=512&g=0",
        "title": "Harvia Utu Medium full glass floor plan",
        "type": "technical-image"
      },
      {
        "id": "8654",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8654&b=512&g=0",
        "title": "Harvia Utu Medium floor plan",
        "type": "technical-image"
      },
      {
        "id": "8653",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8653&b=512&g=0",
        "title": "Harvia Utu Small floor plan",
        "type": "technical-image"
      },
      {
        "id": "8652",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8652&b=512&g=0",
        "title": "Harvia Utu Mini floor plan",
        "type": "technical-image"
      },
      {
        "id": "4682",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=4682&b=512&g=0",
        "title": "Harvia Utu US layout",
        "type": "technical-image"
      },
      {
        "id": "8640",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8640&b=512&g=0",
        "title": "Harvia Kaski 240 Panorama Canopy floor plan",
        "type": "technical-image"
      },
      {
        "id": "8639",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8639&b=512&g=0",
        "title": "Harvia Kaski 240 View Canopy floor plan",
        "type": "technical-image"
      },
      {
        "id": "8638",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=8638&b=512&g=0",
        "title": "Harvia Kaski 220 Panorama floor plan",
        "type": "technical-image"
      }
    ],
    "videos": [],
    "documents": [
      {
        "id": "7462",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/7462/viewmode=previewview",
        "title": "Harvia UTU Medium Vision sauna manual",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "5044",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5044/viewmode=previewview",
        "title": "Harvia Kaski 240 View Canopy / Kuusi 240 View Canopy assembly instructions",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "5043",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5043/viewmode=previewview",
        "title": "Harvia Kaski 240 Panorama Canopy / Kuusi 240 Panorama Canopy assembly instructions",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "5042",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5042/viewmode=previewview",
        "title": "Harvia Kaski 220 Panorama / Kuusi 220 Panorama assembly instructions",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "5041",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5041/viewmode=previewview",
        "title": "Harvia Kaski 220 View / Kuusi 220 View assembly instructions",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "5557",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5557/viewmode=previewview",
        "title": "Harvia LED-Set Kaski 220-240 / Kuusi 220-240",
        "type": "data-sheet",
        "ext": "pdf"
      },
      {
        "id": "5556",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5556/viewmode=previewview",
        "title": "Harvia LED-Set Kaski 180 / Kuusi 180",
        "type": "data-sheet",
        "ext": "pdf"
      },
      {
        "id": "4987",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/4987/viewmode=previewview",
        "title": "Harvia Kaski Panorama / View sauna cabin",
        "type": "data-sheet",
        "ext": "pdf"
      }
    ]
  },
  "virta-pro": {
    "images": [
      {
        "id": "8167",
        "src": "/images/harvia-mediabank/virta-pro/8167.jpg",
        "title": "Harvia Virta Wall and Virta Wall Combi safety railing",
        "type": "product-image"
      },
      {
        "id": "7237",
        "src": "/images/harvia-mediabank/virta-pro/7237.jpg",
        "title": "Sauna M Misty (Left), Harvia Virta Combi",
        "type": "product-image"
      },
      {
        "id": "6794",
        "src": "/images/harvia-mediabank/virta-pro/6794.jpg",
        "title": "Harvia Virta Wall and Virta Wall Combi safety railing",
        "type": "product-image"
      },
      {
        "id": "6793",
        "src": "/images/harvia-mediabank/virta-pro/6793.jpg",
        "title": "Harvia Virta Floor and Virta Floor Combi safety railing",
        "type": "product-image"
      },
      {
        "id": "6792",
        "src": "/images/harvia-mediabank/virta-pro/6792.jpg",
        "title": "Harvia Virta Wall and Virta Wall Combi safety railing",
        "type": "product-image"
      },
      {
        "id": "6791",
        "src": "/images/harvia-mediabank/virta-pro/6791.jpg",
        "title": "Harvia Virta Floor and Virta Floor Combi safety railing",
        "type": "product-image"
      },
      {
        "id": "6282",
        "src": "/images/harvia-mediabank/virta-pro/6282.jpg",
        "title": "Harvia Virta Combi water tank",
        "type": "product-image"
      },
      {
        "id": "6281",
        "src": "/images/harvia-mediabank/virta-pro/6281.jpg",
        "title": "Harvia Virta Combi water tank",
        "type": "product-image"
      },
      {
        "id": "5927",
        "src": "/images/harvia-mediabank/virta-pro/5927.jpg",
        "title": "Harvia Virta Wall Combi",
        "type": "product-image"
      },
      {
        "id": "5815",
        "src": "/images/harvia-mediabank/virta-pro/5815.jpg",
        "title": "Harvia Virta Wall",
        "type": "product-image"
      },
      {
        "id": "4148",
        "src": "/images/harvia-mediabank/virta-pro/4148.jpg",
        "title": "Harvia Virta Pro safety railing",
        "type": "product-image"
      },
      {
        "id": "4147",
        "src": "/images/harvia-mediabank/virta-pro/4147.jpg",
        "title": "Harvia Virta Pro safety railing L",
        "type": "product-image"
      },
      {
        "id": "4146",
        "src": "/images/harvia-mediabank/virta-pro/4146.jpg",
        "title": "Harvia Virta Pro safety railing S",
        "type": "product-image"
      },
      {
        "id": "4145",
        "src": "/images/harvia-mediabank/virta-pro/4145.jpg",
        "title": "Harvia Virta Pro safety railing M",
        "type": "product-image"
      },
      {
        "id": "3755",
        "src": "/images/harvia-mediabank/virta-pro/3755.jpg",
        "title": "Harvia Virta embedding flange",
        "type": "product-image"
      },
      {
        "id": "592",
        "src": "/images/harvia-mediabank/virta-pro/592.jpg",
        "title": "Harvia Virta Pro HL135, HL160, HL220 sensor installation",
        "type": "technical-image"
      },
      {
        "id": "591",
        "src": "/images/harvia-mediabank/virta-pro/591.jpg",
        "title": "Harvia Virta Pro HL135, HL160, HL220 safety distances",
        "type": "technical-image"
      },
      {
        "id": "590",
        "src": "/images/harvia-mediabank/virta-pro/590.jpg",
        "title": "Harvia Virta Pro HL135, HL160, HL220 electrical connections",
        "type": "technical-image"
      },
      {
        "id": "588",
        "src": "/images/harvia-mediabank/virta-pro/588.jpg",
        "title": "Harvia Virta Pro 135SA, 160SA, HL220SA electrical connections",
        "type": "technical-image"
      },
      {
        "id": "587",
        "src": "/images/harvia-mediabank/virta-pro/587.jpg",
        "title": "Harvia Virta Pro 135SA, 160SA, HL220SA sensor installation",
        "type": "technical-image"
      },
      {
        "id": "586",
        "src": "/images/harvia-mediabank/virta-pro/586.jpg",
        "title": "Harvia Virta Pro 135SA, 160SA, HL220SA safety distances",
        "type": "technical-image"
      },
      {
        "id": "585",
        "src": "/images/harvia-mediabank/virta-pro/585.jpg",
        "title": "Harvia Virta HL70, HL90, HL110 electrical connections",
        "type": "technical-image"
      },
      {
        "id": "583",
        "src": "/images/harvia-mediabank/virta-pro/583.jpg",
        "title": "Harvia Virta HL70, HL90, HL110 sensor installation",
        "type": "technical-image"
      }
    ],
    "videos": [],
    "documents": [
      {
        "id": "6549",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6549/viewmode=previewview",
        "title": "Virta Wall Combi Instructions for Installation and Use web",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "6272",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6272/viewmode=previewview",
        "title": "Harvia Virta Wall 45E, Virta Wall 60E, Virta Wall 75E, Virta Wall 90E",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "5799",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5799/viewmode=previewview",
        "title": "Harvia Virta safety railing HL70-HL110 Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "5186",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5186/viewmode=previewview",
        "title": "Harvia Virta heater railing assembly instructions",
        "type": "manual",
        "ext": "pdf",
        "language": "English, German"
      },
      {
        "id": "3516",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3516/viewmode=previewview",
        "title": "Harvia Virta HL1M Embedding Flange",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "6603",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6603/viewmode=previewview",
        "title": "Harvia Virta wall combi",
        "type": "data-sheet",
        "ext": "pdf"
      },
      {
        "id": "6602",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6602/viewmode=previewview",
        "title": "Harvia Virta wall",
        "type": "data-sheet",
        "ext": "pdf"
      }
    ]
  },
  "spirit": {
    "images": [
      {
        "id": "8476",
        "src": "/images/harvia-mediabank/spirit/8476.jpg",
        "title": "Harvia Spirit E",
        "type": "product-image"
      },
      {
        "id": "7288",
        "src": "/images/harvia-mediabank/spirit/7288.jpg",
        "title": "sauna M Dawn (Right), Spirit 9kW",
        "type": "product-image"
      },
      {
        "id": "6668",
        "src": "/images/harvia-mediabank/spirit/6668.jpg",
        "title": "Harvia Spirit FC WiFi",
        "type": "product-image"
      },
      {
        "id": "4120",
        "src": "/images/harvia-mediabank/spirit/4120.jpg",
        "title": "Harvia Spirit USA",
        "type": "product-image"
      },
      {
        "id": "3497",
        "src": "/images/harvia-mediabank/spirit/3497.jpg",
        "title": "Harvia Spirit safety railing",
        "type": "product-image"
      },
      {
        "id": "3495",
        "src": "/images/harvia-mediabank/spirit/3495.jpg",
        "title": "Harvia Spirit embedding flange",
        "type": "product-image"
      },
      {
        "id": "3417",
        "src": "/images/harvia-mediabank/spirit/3417.jpg",
        "title": "Harvia Spirit",
        "type": "product-image"
      },
      {
        "id": "3407",
        "src": "/images/harvia-mediabank/spirit/3407.jpg",
        "title": "Harvia Spirit XW",
        "type": "product-image"
      },
      {
        "id": "3406",
        "src": "/images/harvia-mediabank/spirit/3406.jpg",
        "title": "Harvia Spirit E",
        "type": "product-image"
      },
      {
        "id": "3496",
        "src": "/images/harvia-mediabank/spirit/3496.jpg",
        "title": "Harvia Spirit",
        "type": "technical-image"
      }
    ],
    "videos": [],
    "documents": [
      {
        "id": "8428",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/8428/viewmode=previewview",
        "title": "Spirit E Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "7204",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/7204/viewmode=previewview",
        "title": "Harvia Spirit SP60FC / SP90FC Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "4223",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/4223/viewmode=previewview",
        "title": "Harvia Spirit NA Owner\\'s/Operator\\'s Manual",
        "type": "manual",
        "ext": "pdf",
        "language": "English, French"
      },
      {
        "id": "3521",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3521/viewmode=previewview",
        "title": "Harvia Spirit HSP1 Embedding Flange Instructions for Installation",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "3453",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3453/viewmode=previewview",
        "title": "Harvia Spirit Electric Heater Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "3457",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3457/viewmode=previewview",
        "title": "Harvia Spirit EN",
        "type": "brochure",
        "ext": "pdf"
      }
    ]
  },
  "forte": {
    "images": [
      {
        "id": "6297",
        "src": "/images/harvia-mediabank/forte/6297.jpg",
        "title": "Harvia Forte heating element 1451W/240V",
        "type": "product-image"
      },
      {
        "id": "4308",
        "src": "/images/harvia-mediabank/forte/4308.jpg",
        "title": "Harvia Forte thermocouple temperature sensror",
        "type": "product-image"
      },
      {
        "id": "1279",
        "src": "/images/harvia-mediabank/forte/1279.jpg",
        "title": "Harvia Forte",
        "type": "product-image"
      },
      {
        "id": "1277",
        "src": "/images/harvia-mediabank/forte/1277.jpg",
        "title": "Harvia Forte",
        "type": "product-image"
      },
      {
        "id": "1190",
        "src": "/images/harvia-mediabank/forte/1190.jpg",
        "title": "Harvia Forte, black",
        "type": "product-image"
      },
      {
        "id": "1186",
        "src": "/images/harvia-mediabank/forte/1186.jpg",
        "title": "Harvia Forte, black",
        "type": "product-image"
      },
      {
        "id": "1184",
        "src": "/images/harvia-mediabank/forte/1184.jpg",
        "title": "Harvia Forte, steel",
        "type": "product-image"
      },
      {
        "id": "781",
        "src": "/images/harvia-mediabank/forte/781.jpg",
        "title": "Harvia Forte overheating limiter switch",
        "type": "product-image"
      },
      {
        "id": "774",
        "src": "/images/harvia-mediabank/forte/774.jpg",
        "title": "Harvia control panel Forte",
        "type": "product-image"
      },
      {
        "id": "773",
        "src": "/images/harvia-mediabank/forte/773.jpg",
        "title": "Harvia Forte gasket for lid",
        "type": "product-image"
      },
      {
        "id": "748",
        "src": "/images/harvia-mediabank/forte/748.jpg",
        "title": "Harvia Forte lid rubber seal",
        "type": "product-image"
      },
      {
        "id": "728",
        "src": "/images/harvia-mediabank/forte/728.jpg",
        "title": "Harvia Forte power electronic",
        "type": "product-image"
      },
      {
        "id": "725",
        "src": "/images/harvia-mediabank/forte/725.jpg",
        "title": "Harvia Forte power unit set",
        "type": "product-image"
      },
      {
        "id": "724",
        "src": "/images/harvia-mediabank/forte/724.jpg",
        "title": "Harvia control panel Forte",
        "type": "product-image"
      },
      {
        "id": "694",
        "src": "/images/harvia-mediabank/forte/694.jpg",
        "title": "Harvia repair set for Forte hinges",
        "type": "product-image"
      },
      {
        "id": "522",
        "src": "/images/harvia-mediabank/forte/522.jpg",
        "title": "Harvia Forte safety distances",
        "type": "technical-image"
      },
      {
        "id": "521",
        "src": "/images/harvia-mediabank/forte/521.jpg",
        "title": "Harvia Forte control panel installation",
        "type": "technical-image"
      },
      {
        "id": "520",
        "src": "/images/harvia-mediabank/forte/520.jpg",
        "title": "Harvia Forte electrical connections",
        "type": "technical-image"
      }
    ],
    "videos": [],
    "documents": [
      {
        "id": "3928",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3928/viewmode=previewview",
        "title": "Harvia Forte quick guide",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "3810",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3810/viewmode=previewview",
        "title": "Harvia Forte Owner\\'s/Operator\\'s Manual",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "824",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/824/viewmode=previewview",
        "title": "Harvia Forte AF4, AF6, AF9 Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "318",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/318/viewmode=previewview",
        "title": "Harvia Forte Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "3230",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3230/viewmode=previewview",
        "title": "Harvia Forte heaters",
        "type": "brochure",
        "ext": "pdf"
      }
    ]
  },
  "legend": {
    "images": [
      {
        "id": "7250",
        "src": "/images/harvia-mediabank/legend/7250.jpg",
        "title": "Sauna M Misty (Right), Legend 240",
        "type": "product-image"
      },
      {
        "id": "7061",
        "src": "/images/harvia-mediabank/legend/7061.jpg",
        "title": "Kirami FinVision sauna M Misty (Left), Legend 240 GreenFlame",
        "type": "product-image"
      },
      {
        "id": "7060",
        "src": "/images/harvia-mediabank/legend/7060.jpg",
        "title": "Kirami FinVision sauna M Misty (Right), Legend 240 GreenFlame",
        "type": "product-image"
      },
      {
        "id": "7046",
        "src": "/images/harvia-mediabank/legend/7046.jpg",
        "title": "Kirami FinVision sauna M Misty (Left), Legend 240",
        "type": "product-image"
      },
      {
        "id": "6856",
        "src": "/images/harvia-mediabank/legend/6856.jpg",
        "title": "Harvia Legend 240 Black Duo",
        "type": "product-image"
      },
      {
        "id": "6832",
        "src": "/images/harvia-mediabank/legend/6832.jpg",
        "title": "Harvia Legend 300 Black Duo",
        "type": "product-image"
      },
      {
        "id": "6669",
        "src": "/images/harvia-mediabank/legend/6669.jpg",
        "title": "Harvia Legend FC WiFi",
        "type": "product-image"
      },
      {
        "id": "5910",
        "src": "/images/harvia-mediabank/legend/5910.jpg",
        "title": "Harvia Legend outdoor sauna",
        "type": "product-image"
      },
      {
        "id": "5852",
        "src": "/images/harvia-mediabank/legend/5852.jpg",
        "title": "Harvia Legend outdoor sauna",
        "type": "product-image"
      },
      {
        "id": "5850",
        "src": "/images/harvia-mediabank/legend/5850.jpg",
        "title": "Harvia Legend changing room",
        "type": "product-image"
      },
      {
        "id": "5605",
        "src": "/images/harvia-mediabank/legend/5605.jpg",
        "title": "Harvia Legend glass door handle",
        "type": "product-image"
      },
      {
        "id": "4472",
        "src": "/images/harvia-mediabank/legend/4472.jpg",
        "title": "Harvia Legend additional mounts",
        "type": "product-image"
      },
      {
        "id": "4295",
        "src": "/images/harvia-mediabank/legend/4295.jpg",
        "title": "Harvia Legend 240 stove body",
        "type": "product-image"
      },
      {
        "id": "4294",
        "src": "/images/harvia-mediabank/legend/4294.jpg",
        "title": "Harvia Legend 150 stove body",
        "type": "product-image"
      },
      {
        "id": "4293",
        "src": "/images/harvia-mediabank/legend/4293.jpg",
        "title": "Harvia Legend GreenFlame door handle",
        "type": "product-image"
      },
      {
        "id": "4617",
        "src": "/images/harvia-mediabank/legend/4617.jpg",
        "title": "Harvia Legend Smoke Pipe Installation Dimensions",
        "type": "technical-image"
      },
      {
        "id": "622",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=622&b=512&g=0",
        "title": "Harvia Legend WP250LD dimensions",
        "type": "technical-image"
      },
      {
        "id": "555",
        "src": "/images/harvia-mediabank/legend/555.jpg",
        "title": "Harvia Legend PO11, PO165 electrical connections",
        "type": "technical-image"
      },
      {
        "id": "554",
        "src": "/images/harvia-mediabank/legend/554.jpg",
        "title": "Harvia Legend PO11, PO165 sensor installation",
        "type": "technical-image"
      },
      {
        "id": "553",
        "src": "/images/harvia-mediabank/legend/553.jpg",
        "title": "Harvia Legend PO11, PO165 spare parts",
        "type": "technical-image"
      },
      {
        "id": "552",
        "src": "/images/harvia-mediabank/legend/552.jpg",
        "title": "Harvia Legend PO11, PO165 safety distances",
        "type": "technical-image"
      },
      {
        "id": "506",
        "src": "/images/harvia-mediabank/legend/506.jpg",
        "title": "Harvia Legend Protection Supplies",
        "type": "technical-image"
      },
      {
        "id": "504",
        "src": "/images/harvia-mediabank/legend/504.jpg",
        "title": "Harvia Legend options",
        "type": "technical-image"
      }
    ],
    "videos": [],
    "documents": [
      {
        "id": "7673",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/7673/viewmode=previewview",
        "title": "Legend sauna ladle SASPO101",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "7667",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/7667/viewmode=previewview",
        "title": "Legend Bucket Instruction for Assembly and Care",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "7203",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/7203/viewmode=previewview",
        "title": "Harvia Legend PO70FC / PO110FC Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "5713",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5713/viewmode=previewview",
        "title": "Harvia Legend changing room",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "4900",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/4900/viewmode=previewview",
        "title": "Harvia Legend 240 GreenFlame Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "3191",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3191/viewmode=previewview",
        "title": "Harvia Legend outdoor sauna",
        "type": "brochure",
        "ext": "pdf"
      },
      {
        "id": "3027",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3027/viewmode=previewview",
        "title": "Harvia Legend XE/E heaters",
        "type": "brochure",
        "ext": "pdf"
      }
    ]
  },
  "xenio-fenix": {
    "images": [
      {
        "id": "7045",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=7045&b=512&g=0",
        "title": "Harvia Xenio control unit",
        "type": "product-image"
      },
      {
        "id": "6464",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=6464&b=512&g=0",
        "title": "Xenio Combi CX110C WiFi IP Black",
        "type": "product-image"
      },
      {
        "id": "6463",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=6463&b=512&g=0",
        "title": "Harvia Xenio IPX5 power unit",
        "type": "product-image"
      },
      {
        "id": "6426",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=6426&b=512&g=0",
        "title": "Harvia Xenio CX110XW WiFi IPX5",
        "type": "product-image"
      },
      {
        "id": "5602",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=5602&b=512&g=0",
        "title": "Harvia ohjauspaneeli Xenio steam WiFi",
        "type": "product-image"
      },
      {
        "id": "5601",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=5601&b=512&g=0",
        "title": "Harvia Xenio steam wifi control panel",
        "type": "product-image"
      },
      {
        "id": "5593",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=5593&b=512&g=0",
        "title": "Harvia Xenio CX45J power unit",
        "type": "product-image"
      },
      {
        "id": "4518",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=4518&b=512&g=0",
        "title": "Harvia Xenio control panel bottom",
        "type": "product-image"
      },
      {
        "id": "4284",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=4284&b=512&g=0",
        "title": "Harvia Control panel Xenio Wifi",
        "type": "product-image"
      },
      {
        "id": "3051",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=3051&b=512&g=0",
        "title": "Harvia Xenio WiFi Control Panel",
        "type": "product-image"
      },
      {
        "id": "2122",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=2122&b=512&g=0",
        "title": "Harvia Xenio WiFi control unit",
        "type": "product-image"
      },
      {
        "id": "2121",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=2121&b=512&g=0",
        "title": "Harvia Xenio Combi WiFi control unit",
        "type": "product-image"
      },
      {
        "id": "1717",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1717&b=512&g=0",
        "title": "Harvia Xenio RGBW DMX Control Panel",
        "type": "product-image"
      },
      {
        "id": "1695",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1695&b=512&g=0",
        "title": "Harvia Xenio WiFi Control Panel",
        "type": "product-image"
      },
      {
        "id": "1432",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=1432&b=512&g=0",
        "title": "Harvia Xenio Combi",
        "type": "product-image"
      },
      {
        "id": "620",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=620&b=512&g=0",
        "title": "Harvia Xenio control panel installation",
        "type": "technical-image"
      },
      {
        "id": "619",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=619&b=512&g=0",
        "title": "Harvia Xenio CX110 sensor installation",
        "type": "technical-image"
      },
      {
        "id": "618",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=618&b=512&g=0",
        "title": "Harvia Xenio CX110",
        "type": "technical-image"
      },
      {
        "id": "617",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=617&b=512&g=0",
        "title": "Harvia Xenio CX110 spare parts",
        "type": "technical-image"
      },
      {
        "id": "3371",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=3371&b=512&g=0",
        "title": "Harvia Fenix sauna cabin floor plan",
        "type": "technical-image"
      }
    ],
    "videos": [],
    "documents": [
      {
        "id": "6233",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6233/viewmode=previewview",
        "title": "Harvia Fenix combi / Xenio combi US/NA Instruction for installation and use",
        "type": "manual",
        "ext": "pdf",
        "language": "English, French"
      },
      {
        "id": "6232",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6232/viewmode=previewview",
        "title": "Harvia Fenix / Xenio US/NA Instruction for installation and use",
        "type": "manual",
        "ext": "pdf",
        "language": "English, French"
      },
      {
        "id": "6231",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6231/viewmode=previewview",
        "title": "Harvia Fenix / Xenio Instruction for installation and use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "4702",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/4702/viewmode=previewview",
        "title": "Harvia Xenio CX110/CX110XW Control Unit Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "3907",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3907/viewmode=previewview",
        "title": "WXZRH-309XE Xenio Control Panel Instructions for Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "235",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/235/viewmode=previewview",
        "title": "Harvia Xenio, EN",
        "type": "brochure",
        "ext": "pdf"
      },
      {
        "id": "6544",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6544/viewmode=previewview",
        "title": "Harvia Fenix overview",
        "type": "data-sheet",
        "ext": "pdf"
      },
      {
        "id": "6527",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6527/viewmode=previewview",
        "title": "Harvia Fenix 170 datasheet",
        "type": "data-sheet",
        "ext": "pdf"
      },
      {
        "id": "6526",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/6526/viewmode=previewview",
        "title": "Harvia Fenix 110C datasheet",
        "type": "data-sheet",
        "ext": "pdf"
      }
    ]
  },
  "myharvia-sensor": {
    "images": [
      {
        "id": "7290",
        "src": "/images/harvia-mediabank/myharvia-sensor/7290.jpg",
        "title": "Harvia MyHarvia Control Upgrade card",
        "type": "product-image"
      },
      {
        "id": "1988",
        "src": "/images/harvia-mediabank/myharvia-sensor/1988.jpg",
        "title": "Harvia MyHarvia mobile application",
        "type": "product-image"
      }
    ],
    "videos": [
      {
        "id": "5086",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5086/viewmode=previewview",
        "title": "Harvia - Adding a device to the MyHarvia mobile app ENG",
        "type": "video",
        "ext": "mp4",
        "poster": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=5086&b=1024&g=0"
      },
      {
        "id": "5079",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5079/viewmode=previewview",
        "title": "Harvia - MyHarvia basics US edition",
        "type": "video",
        "ext": "mp4",
        "poster": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=5079&b=1024&g=0"
      },
      {
        "id": "5078",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/5078/viewmode=previewview",
        "title": "Harvia - MyHarvia basics ENG",
        "type": "video",
        "ext": "mp4",
        "poster": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=5078&b=1024&g=0"
      }
    ],
    "documents": [
      {
        "id": "7412",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/7412/viewmode=previewview",
        "title": "MyHarvia Smart Sauna Sensor Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "2133",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/2133/viewmode=previewview",
        "title": "Harvia MyHarvia and remote control, EN",
        "type": "brochure",
        "ext": "pdf"
      }
    ]
  },
  "frosty-cold-tub": {
    "images": [
      {
        "id": "4602",
        "src": "/images/harvia-mediabank/frosty-cold-tub/4602.jpg",
        "title": "Harvia Frosty cold plunge",
        "type": "product-image"
      },
      {
        "id": "4579",
        "src": "/images/harvia-mediabank/frosty-cold-tub/4579.jpg",
        "title": "Harvia Frosty cold plunge",
        "type": "product-image"
      }
    ],
    "videos": [],
    "documents": [
      {
        "id": "3968",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/3968/viewmode=previewview",
        "title": "Harvia Frosty user manual",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      }
    ]
  },
  "vega": {
    "images": [
      {
        "id": "6288",
        "src": "/images/harvia-mediabank/vega/6288.jpg",
        "title": "Harvia Vega heating element 2000W/230V",
        "type": "product-image"
      },
      {
        "id": "4314",
        "src": "/images/harvia-mediabank/vega/4314.jpg",
        "title": "Harvia Vega wallmounting plate",
        "type": "product-image"
      },
      {
        "id": "4311",
        "src": "/images/harvia-mediabank/vega/4311.jpg",
        "title": "Harvia Vega timer knob",
        "type": "product-image"
      },
      {
        "id": "436",
        "src": "/images/harvia-mediabank/vega/436.jpg",
        "title": "Harvia Vega Compact BC23E, BC35E",
        "type": "product-image"
      },
      {
        "id": "435",
        "src": "/images/harvia-mediabank/vega/435.jpg",
        "title": "Harvia Vega Compact BC23, BC35",
        "type": "product-image"
      },
      {
        "id": "434",
        "src": "/images/harvia-mediabank/vega/434.jpg",
        "title": "Harvia Vega BC45, BC60, BC80, BC90",
        "type": "product-image"
      },
      {
        "id": "433",
        "src": "/images/harvia-mediabank/vega/433.jpg",
        "title": "Harvia Vega BC45E, BC60E, BC80E, BC90E",
        "type": "product-image"
      },
      {
        "id": "576",
        "src": "/images/harvia-mediabank/vega/576.jpg",
        "title": "Harvia Vega BC23, BC35, BC23E, BC35E electrical connections",
        "type": "technical-image"
      },
      {
        "id": "574",
        "src": "/images/harvia-mediabank/vega/574.jpg",
        "title": "Harvia Vega BC23, BC35, BC23E, BC35E spare parts",
        "type": "technical-image"
      },
      {
        "id": "573",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=573&b=512&g=0",
        "title": "Harvia Vega BC23, BC35, BC23E, BC35E safety distances",
        "type": "technical-image"
      },
      {
        "id": "571",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=571&b=512&g=0",
        "title": "Harvia Vega safety distances",
        "type": "technical-image"
      },
      {
        "id": "570",
        "src": "https://mediabank.harvia.com/ext/T/?v=%7B506ffea7-e574-4c3d-8ccb-fbafce360b70%7D&c=48&i=570&b=512&g=0",
        "title": "Harvia Vega electrical connections",
        "type": "technical-image"
      }
    ],
    "videos": [],
    "documents": [
      {
        "id": "941",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/941/viewmode=previewview",
        "title": "Harvia Vega Lux Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "281",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/281/viewmode=previewview",
        "title": "Harvia Vega Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      },
      {
        "id": "280",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/280/viewmode=previewview",
        "title": "Harvia Vega Compact Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      }
    ]
  },
  "harvia-50-wood": {
    "images": [
      {
        "id": "1622",
        "src": "/images/harvia-mediabank/harvia-50-wood/1622.jpg",
        "title": "Harvia 50 SL Woodburning Stove",
        "type": "product-image"
      },
      {
        "id": "1621",
        "src": "/images/harvia-mediabank/harvia-50-wood/1621.jpg",
        "title": "Harvia 50 Woodburning Stove",
        "type": "product-image"
      },
      {
        "id": "490",
        "src": "/images/harvia-mediabank/harvia-50-wood/490.jpg",
        "title": "Harvia 50 safety distances",
        "type": "technical-image"
      },
      {
        "id": "489",
        "src": "/images/harvia-mediabank/harvia-50-wood/489.jpg",
        "title": "Harvia 50 spare parts",
        "type": "technical-image"
      }
    ],
    "videos": [],
    "documents": [
      {
        "id": "487",
        "src": "https://mediabank.harvia.com/ext/catalog/Harvia/r/487/viewmode=previewview",
        "title": "Harvia 50 Instructions for Installation and Use",
        "type": "manual",
        "ext": "pdf",
        "language": "English"
      }
    ]
  }
};
