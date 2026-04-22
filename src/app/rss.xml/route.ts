import {
  BASE_URL,
  FEED_DESCRIPTION,
  FEED_TITLE,
  escapeXml,
  getFeedArticles,
  getFeedLastBuildDate,
  toCdata,
} from '@/lib/feeds';

export const dynamic = 'force-static';

export function GET() {
  const feedArticles = getFeedArticles(200);
  const items = feedArticles
    .map(({ article, headline, url, contentHtml }) => {
      const pubDate = new Date(article.publishDate).toUTCString();
      return `    <item>
      <title>${escapeXml(headline)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.dek)}</description>
      <content:encoded>${toCdata(contentHtml)}</content:encoded>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>${escapeXml(article.author.name)}</dc:creator>
      <author>${escapeXml(article.author.name)}</author>
      <category>${escapeXml(article.category)}</category>
      <source url="${BASE_URL}/rss.xml">${FEED_TITLE}</source>
      ${article.featuredImage ? `<enclosure url="${article.featuredImage}" type="image/jpeg" length="0" />` : ''}
      <atom:link href="${url}" rel="alternate" type="text/html" />
    </item>`;
    })
    .join('\n');

  const lastBuildDate = getFeedLastBuildDate(feedArticles);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
  <channel>
    <title>${FEED_TITLE}</title>
    <link>${BASE_URL}</link>
    <description>${FEED_DESCRIPTION}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <generator>Next.js</generator>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <ttl>60</ttl>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <atom:link href="${BASE_URL}/atom.xml" rel="alternate" type="application/atom+xml" />
    <atom:link href="${BASE_URL}/feed.json" rel="alternate" type="application/feed+json" />
    <image>
      <url>${BASE_URL}/logo.png</url>
      <title>${FEED_TITLE}</title>
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
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
