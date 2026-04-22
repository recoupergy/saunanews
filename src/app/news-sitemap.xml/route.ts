import { articles } from '@/data/articles';
import { getArticleCanonicalUrl, getArticleHeadline } from '@/data/article-seo';

export const revalidate = 3600;


function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const now = Date.now();
  const freshnessWindowMs = 72 * 60 * 60 * 1000;
  const cutoff = now - freshnessWindowMs;

  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const urls = sorted
    .filter((article) => new Date(article.publishDate).getTime() >= cutoff)
    .map((article) => {
      const pubDate = new Date(article.publishDate).toISOString();
      const headline = getArticleHeadline(article);
      return `  <url>
    <loc>${getArticleCanonicalUrl(article)}</loc>
    <news:news>
      <news:publication>
        <news:name>SaunaNews</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${escapeXml(headline)}</news:title>
    </news:news>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
