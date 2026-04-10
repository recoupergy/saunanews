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
      'https://www.saunanews.com/sitemap.xml',
      'https://www.saunanews.com/news-sitemap.xml',
      'https://www.saunanews.com/rss.xml',
    ],
  };
}
