const BASE_URL = 'https://www.saunanews.com';

export function stringifyJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export function toAbsoluteUrl(url: string): string {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
}

export function toIso8601(value: string): string {
  const normalized = value.length === 10 ? `${value}T00:00:00Z` : value;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString();
}

function withUnsplashAspect(url: URL, aspectRatio: string): string {
  url.searchParams.set('fit', 'crop');
  url.searchParams.set('crop', 'entropy');
  url.searchParams.set('ar', aspectRatio);
  return url.toString();
}

export function getArticleImageVariants(imageUrl?: string): string[] {
  if (!imageUrl) return [];
  const absolute = toAbsoluteUrl(imageUrl);

  try {
    const parsed = new URL(absolute);
    if (parsed.hostname === 'images.unsplash.com') {
      return [
        withUnsplashAspect(new URL(parsed.toString()), '1:1'),
        withUnsplashAspect(new URL(parsed.toString()), '4:3'),
        withUnsplashAspect(new URL(parsed.toString()), '16:9'),
      ];
    }
  } catch {
    return [absolute, absolute, absolute];
  }

  return [absolute, absolute, absolute];
}
