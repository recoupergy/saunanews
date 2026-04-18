import { Article } from '@/data/types';

export type SearchSortOption = 'relevance' | 'latest';

export type SearchResultArticle = Pick<
  Article,
  | 'id'
  | 'title'
  | 'slug'
  | 'dek'
  | 'excerpt'
  | 'contentType'
  | 'category'
  | 'tags'
  | 'author'
  | 'publishDate'
  | 'readingTime'
  | 'featuredImage'
  | 'imageCaption'
  | 'featured'
  | 'trending'
>;
