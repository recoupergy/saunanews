import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

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
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
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
        hostname: 'us.saunum.com',
      },
    ],
  },
};

export default nextConfig;
