import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
import { getHarviaMediaBank } from './harvia-mediabank';

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

function ensureProduct(product: HarviaProduct): HarviaProduct {
  if (!product.slug || !product.name || !product.heroImage) {
    throw new Error(`Invalid Harvia product payload for slug: ${product.slug ?? 'unknown'}`);
  }
  return product;
}

const loadHarviaProducts = cache(async (): Promise<HarviaProduct[]> => {
  const filePath = path.join(process.cwd(), 'src/content/harvia-products.json');
  const raw = await readFile(filePath, 'utf8');
  const parsed = JSON.parse(raw) as HarviaProduct[];
  return parsed.map(ensureProduct);
});

export async function getHarviaProducts(): Promise<HarviaProduct[]> {
  return loadHarviaProducts();
}

export async function getProduct(slug: string): Promise<HarviaProduct | undefined> {
  const [products, mediaBank] = await Promise.all([loadHarviaProducts(), getHarviaMediaBank()]);
  const base = products.find((p) => p.slug === slug);
  if (!base) return undefined;
  const mb = mediaBank[slug];
  return mb ? { ...base, mediaBank: mb } : base;
}

export async function getAllProductSlugs(): Promise<string[]> {
  const products = await loadHarviaProducts();
  return products.map((p) => p.slug);
}

export async function getMediaBankForSlug(slug: string) {
  const mediaBank = await getHarviaMediaBank();
  return mediaBank[slug];
}
