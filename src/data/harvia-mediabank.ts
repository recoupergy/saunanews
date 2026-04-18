import harviaMediaBankJson from '@/content/harvia-mediabank.json';
import type { MediaBankAsset } from './harvia-products';
import { validateMediaBank } from './content-validation';

export interface ProductMediaBank {
  images: MediaBankAsset[];
  videos: MediaBankAsset[];
  documents: MediaBankAsset[];
}

validateMediaBank(harviaMediaBankJson);

export const harviaMediaBank: Record<string, ProductMediaBank> = harviaMediaBankJson;
