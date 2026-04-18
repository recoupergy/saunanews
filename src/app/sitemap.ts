import type { MetadataRoute } from 'next';
import { getArticleIndex } from '@/data/articles';
import { categories } from '@/data/categories';
import { authors } from '@/data/authors';
import { getHarviaProducts } from '@/data/harvia-products';

const BASE_URL = 'https://www.saunanews.com';
const DEFAULT_BUILD_TIMESTAMP = '2026-01-01T00:00:00.000Z';

function toDate(date: string): Date {
  return new Date(date);
}

function maxDate(dates: Date[]): Date {
  return new Date(Math.max(...dates.map((date) => date.getTime())));
}

function maxDateOrFallback(dates: Date[], fallback: Date): Date {
  return dates.length > 0 ? maxDate(dates) : fallback;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, harviaProducts] = await Promise.all([
    Promise.resolve(getArticleIndex()),
    getHarviaProducts(),
  ]);

  const buildDate = new Date(DEFAULT_BUILD_TIMESTAMP);
  const articleDates = articles.map((article) => toDate(article.publishDate));
  const harviaDates = harviaProducts.map((product) => toDate(product.lastMentioned));
  const latestArticleDate = maxDateOrFallback(articleDates, buildDate);
  const latestHarviaDate = maxDateOrFallback(harviaDates, buildDate);
  const siteFreshnessDate = maxDate([
    latestArticleDate,
    latestHarviaDate,
    buildDate,
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: siteFreshnessDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/news`,
      lastModified: latestArticleDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/newsletter`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/harvia`,
      lastModified: latestHarviaDate,
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
    lastModified: maxDateOrFallback(
      articles
        .filter((article) => article.category === category.name)
        .map((article) => toDate(article.publishDate)),
      buildDate
    ),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  const authorRoutes: MetadataRoute.Sitemap = Object.values(authors).map(
    (author) => ({
      url: `${BASE_URL}/author/${author.slug}`,
      lastModified: maxDateOrFallback(
        articles
          .filter((article) => article.author.slug === author.slug)
          .map((article) => toDate(article.publishDate)),
        buildDate
      ),
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
