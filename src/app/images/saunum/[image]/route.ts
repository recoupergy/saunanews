import { SAUNUM_IMAGES_BASE64 } from '@/data/saunum-images';

export const runtime = 'nodejs';

const DEFAULT_HEADERS = {
  'Cache-Control': 'public, max-age=31536000, s-maxage=31536000, immutable',
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ image: string }> }
) {
  const { image } = await context.params;
  const imageBase64 = SAUNUM_IMAGES_BASE64[image];

  if (!imageBase64) {
    return new Response('Not Found', { status: 404 });
  }

  const imageBuffer = Buffer.from(imageBase64, 'base64');

  return new Response(imageBuffer, {
    headers: {
      ...DEFAULT_HEADERS,
      'Content-Type': 'image/jpeg',
    },
  });
}
