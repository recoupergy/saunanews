import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
