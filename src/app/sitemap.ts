import type { MetadataRoute } from 'next';
import { getArticleIndex } from '@/data/articles';
import { categories } from '@/data/categories';
import { authors } from '@/data/authors';
import { getHarviaProducts } from '@/data/harvia-products';

const BASE_URL = 'https://www.saunanews.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, harviaProducts] = await Promise.all([Promise.resolve(getArticleIndex()), getHarviaProducts()]);
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/newsletter`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/harvia`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  const harviaProductRoutes: MetadataRoute.Sitemap = harviaProducts.map((p) => ({
    url: `${BASE_URL}/harvia/products/${p.slug}`,
    lastModified: new Date(p.lastMentioned),
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/article/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  const authorRoutes: MetadataRoute.Sitemap = Object.values(authors).map(
    (author) => ({
      url: `${BASE_URL}/author/${author.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })
  );

  return [
    ...staticRoutes,
    ...harviaProductRoutes,
    ...articleRoutes,
    ...categoryRoutes,
    ...authorRoutes,
  ];
}
