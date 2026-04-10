import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-News',
        allow: '/',
      },
    ],
    sitemap: [
      'https://saunanews.com/sitemap.xml',
      'https://saunanews.com/news-sitemap.xml',
      'https://saunanews.com/rss.xml',
    ],
  };
}
