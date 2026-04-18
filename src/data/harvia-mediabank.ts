import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
import type { MediaBankAsset } from './harvia-products';

export interface MediaBankBySlug {
  [slug: string]: {
    images: MediaBankAsset[];
    videos: MediaBankAsset[];
    documents: MediaBankAsset[];
  };
}

function ensureMediaBankAsset(asset: MediaBankAsset): MediaBankAsset {
  if (!asset.id || !asset.src || !asset.title || !asset.type) {
    throw new Error('Invalid media bank asset payload.');
  }
  return asset;
}

export const getHarviaMediaBank = cache(async (): Promise<MediaBankBySlug> => {
  const filePath = path.join(process.cwd(), 'src/content/harvia-mediabank.json');
  const raw = await readFile(filePath, 'utf8');
  const parsed = JSON.parse(raw) as MediaBankBySlug;

  for (const value of Object.values(parsed)) {
    value.images = value.images.map(ensureMediaBankAsset);
    value.videos = value.videos.map(ensureMediaBankAsset);
    value.documents = value.documents.map(ensureMediaBankAsset);
  }

  return parsed;
});
