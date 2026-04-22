import { BASE_URL } from '@/lib/feeds';

export const dynamic = 'force-static';

export function GET() {
  const body = `# SaunaNews\n\n> Daily reporting, launches, market shifts, and analysis on the sauna industry.\n\n## Feeds\n- RSS: ${BASE_URL}/rss.xml\n- Atom: ${BASE_URL}/atom.xml\n- JSON Feed: ${BASE_URL}/feed.json\n- News Sitemap: ${BASE_URL}/news-sitemap.xml\n- Full Sitemap: ${BASE_URL}/sitemap.xml\n\n## Key Sections\n- Latest news: ${BASE_URL}/news\n- Categories: ${BASE_URL}/category\n- Authors: ${BASE_URL}/author\n- Events: ${BASE_URL}/events\n\n## Crawling Guidance\n- Canonical article URLs are in the format: ${BASE_URL}/article/{slug}\n- Use sitemap and feeds for freshness detection.\n- Respect robots.txt and cache headers.\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
