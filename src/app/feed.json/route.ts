import {
  BASE_URL,
  FEED_DESCRIPTION,
  FEED_TITLE,
  getFeedArticles,
} from '@/lib/feeds';

export const dynamic = 'force-static';

export function GET() {
  const feedArticles = getFeedArticles(200);

  const json = {
    version: 'https://jsonfeed.org/version/1.1',
    title: FEED_TITLE,
    home_page_url: BASE_URL,
    feed_url: `${BASE_URL}/feed.json`,
    description: FEED_DESCRIPTION,
    language: 'en-US',
    icon: `${BASE_URL}/favicon.png`,
    favicon: `${BASE_URL}/favicon.png`,
    authors: [{ name: 'SaunaNews', url: BASE_URL }],
    items: feedArticles.map(({ article, headline, url, contentHtml, contentText, modifiedDate }) => ({
      id: url,
      url,
      title: headline,
      summary: article.dek,
      content_html: contentHtml,
      content_text: contentText,
      date_published: new Date(article.publishDate).toISOString(),
      date_modified: new Date(modifiedDate).toISOString(),
      authors: [{ name: article.author.name }],
      tags: [article.category, ...article.tags],
      image: article.featuredImage || undefined,
      language: 'en-US',
    })),
  };

  return Response.json(json, {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
