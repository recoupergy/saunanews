export type ContentType =
  | 'Breaking'
  | 'Daily Brief'
  | 'Analysis'
  | 'Interview'
  | 'Product Launch'
  | 'Manufacturer Profile'
  | 'Market Watch'
  | 'Weekly Roundup';

export type Category =
  | 'Manufacturer News'
  | 'Product Launches'
  | 'Market Intelligence'
  | 'Wellness Trends'
  | 'Hospitality & Spa'
  | 'Tariffs & Logistics'
  | 'Commentary';

export interface Author {
  name: string;
  role: string;
  avatar: string;
  slug: string;
  email?: string;
  bio: string;
  shortBio?: string;
  extendedBio?: string[];
  website?: string;
  linkedin?: string;
  sameAs?: string[];
  image?: string;
  alumniOf?: string;
  knowsAbout?: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  dek: string;
  excerpt: string;
  contentType: ContentType;
  category: Category;
  tags: string[];
  author: Author;
  publishDate: string;
  readingTime: number;
  featuredImage: string;
  imageCaption?: string;
  body?: string;
  bodyPath?: string;
  featured: boolean;
  trending: boolean;
  isEditorsPick?: boolean;
}

export interface CategoryInfo {
  name: Category;
  slug: string;
  description: string;
  color: string;
}
