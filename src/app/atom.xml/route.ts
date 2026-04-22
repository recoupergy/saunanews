import {
  BASE_URL,
  FEED_DESCRIPTION,
  FEED_TITLE,
  escapeXml,
  getFeedArticles,
  toCdata,
} from '@/lib/feeds';

export const dynamic = 'force-static';

export function GET() {
  const feedArticles = getFeedArticles(200);
  const updated = feedArticles[0]
    ? new Date(feedArticles[0].modifiedDate).toISOString()
    : new Date().toISOString();

  const entries = feedArticles
    .map(({ article, headline, url, contentHtml, modifiedDate }) => `  <entry>
    <id>${url}</id>
    <title>${escapeXml(headline)}</title>
    <link rel="alternate" type="text/html" href="${url}" />
    <published>${new Date(article.publishDate).toISOString()}</published>
    <updated>${new Date(modifiedDate).toISOString()}</updated>
    <author><name>${escapeXml(article.author.name)}</name></author>
    <summary>${escapeXml(article.dek)}</summary>
    <category term="${escapeXml(article.category)}" />
    <content type="html">${toCdata(contentHtml)}</content>
  </entry>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en-US">
  <id>${BASE_URL}/atom.xml</id>
  <title>${FEED_TITLE}</title>
  <subtitle>${escapeXml(FEED_DESCRIPTION)}</subtitle>
  <link rel="self" type="application/atom+xml" href="${BASE_URL}/atom.xml" />
  <link rel="alternate" type="text/html" href="${BASE_URL}" />
  <updated>${updated}</updated>
  <rights>© SaunaNews</rights>
${entries}
</feed>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
