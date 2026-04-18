import harviaProductsJson from '@/content/harvia-products.json';
import { harviaMediaBank } from './harvia-mediabank';
import { validateHarviaProducts } from './content-validation';

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

validateHarviaProducts(harviaProductsJson);

export const harviaProducts: HarviaProduct[] = harviaProductsJson;

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
