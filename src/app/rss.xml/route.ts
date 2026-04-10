import { articles } from '@/data/articles';

export const dynamic = 'force-static';

const BASE_URL = 'https://saunanews.com';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const items = sorted
    .map((article) => {
      const url = `${BASE_URL}/article/${article.slug}`;
      const pubDate = new Date(article.publishDate).toUTCString();
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.dek)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(article.author.name)}</author>
      <category>${escapeXml(article.category)}</category>
      ${article.featuredImage ? `<enclosure url="${article.featuredImage}" type="image/jpeg" length="0" />` : ''}
    </item>`;
    })
    .join('\n');

  const lastBuildDate = new Date(sorted[0]?.publishDate ?? Date.now()).toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>SaunaNews</title>
    <link>${BASE_URL}</link>
    <description>Daily reporting, launches, market shifts, and analysis for the people building, selling, designing, and following the sauna world.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE_URL}/logo.png</url>
      <title>SaunaNews</title>
      <link>${BASE_URL}</link>
      <width>600</width>
      <height>60</height>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
