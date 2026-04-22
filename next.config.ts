import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];


const feedDiscoveryHeader = {
  key: 'Link',
  value:
    '<https://www.saunanews.com/rss.xml>; rel="alternate"; type="application/rss+xml", ' +
    '<https://www.saunanews.com/atom.xml>; rel="alternate"; type="application/atom+xml", ' +
    '<https://www.saunanews.com/feed.json>; rel="alternate"; type="application/feed+json", ' +
    '<https://www.saunanews.com/llms.txt>; rel="alternate"; type="text/plain"',
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/article/saunalife-modular-backyard-sauna-two-hour-assembly',
        destination: '/',
        permanent: true,
      },
      {
        source: '/article/daily-brief-april-7-2026',
        destination: '/',
        permanent: true,
      },
      {
        source: '/article/tylo-sense-series-redesign-whisper-quiet',
        destination: '/',
        permanent: true,
      },
      {
        source: '/article/kohler-klafs-sauna-acquisition',
        destination: '/article/estonia-sauna-manufacturing-powerhouse',
        permanent: true,
      },
      {
        source: '/article/finland-lumber-prices-18-month-high',
        destination: '/article/finnish-lumber-prices-18-month-high',
        permanent: true,
      },
      {
        source: '/harvia/products/cilindro',
        destination: '/harvia/products/cilindro-electric',
        permanent: true,
      },
      {
        source: '/article/bathhouse-brooklyn-120m-revenue-social-sauna',
        destination: '/article/bathhouse-120m-revenue-social-sauna',
        permanent: true,
      },
      {
        source: '/article/galgorm-aufguss-unit-economics-30-seat-sauna',
        destination: '/article/business-of-aufguss-us-operator-playbook',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [...securityHeaders, feedDiscoveryHeader],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'b1572463.smushcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'saunamarketplace.com',
      },
      {
        protocol: 'https',
        hostname: 'www.saunamarketplace.com',
      },
      {
        protocol: 'https',
        hostname: 'www.steamsaunabath.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thermory.com',
      },
      {
        protocol: 'https',
        hostname: 'thermory.com',
      },
      {
        protocol: 'https',
        hostname: 'huumsauna.com',
      },
      {
        protocol: 'https',
        hostname: 'huum.ee',
      },
      {
        protocol: 'https',
        hostname: 'www.harvia.com',
      },
      {
        protocol: 'https',
        hostname: 'harviagroup.com',
      },
      {
        protocol: 'https',
        hostname: 'dundalkleisurecraft.s3.ca-central-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'homecraftsaunas.com',
      },
      {
        protocol: 'https',
        hostname: 'saunologia.b-cdn.net',
      },

      {
        protocol: 'https',
        hostname: 'saunafromfinland.com',
      },
      {
        protocol: 'https',
        hostname: 'www.saunafromfinland.com',
      },
      {
        protocol: 'https',
        hostname: 'us.saunum.com',
      },
      {
        protocol: 'https',
        hostname: 'prosaunas.com',
      },
      {
        protocol: 'https',
        hostname: 'www.prosaunas.com',
      },
      {
        protocol: 'https',
        hostname: 'www.saunahouse.com',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'thermoryusa.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'image.mux.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },

      {
        protocol: 'https',
        hostname: 'almostheaven.com',
      },
      {
        protocol: 'https',
        hostname: 'mediabank.harvia.com',
      },
      {
        protocol: 'https',
        hostname: 'www.cpsc.gov',
      },
      {
        protocol: 'https',
        hostname: 'www.thermenbussloo.nl',
      },
      {
        protocol: 'https',
        hostname: 'aufguss-wm.com',
      },
      {
        protocol: 'https',
        hostname: 'static.thatsup.website',
      },
      {
        protocol: 'https',
        hostname: 'lunawood.com',
      },
      {
        protocol: 'https',
        hostname: 'us.lunawood.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'worldspa.com',
      },
    ],
  },
};

export default nextConfig;
