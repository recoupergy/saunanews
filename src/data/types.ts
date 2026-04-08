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
  bio: string;
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
  body: string;
  featured: boolean;
  trending: boolean;
}

export interface CategoryInfo {
  name: Category;
  slug: string;
  description: string;
  color: string;
}
