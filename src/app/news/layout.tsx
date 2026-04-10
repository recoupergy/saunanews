import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All News',
  description:
    'The complete SaunaNews archive. Search, filter, and explore every article covering sauna manufacturers, products, market trends, and industry news.',
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: 'All News | SaunaNews',
    description:
      'The complete SaunaNews archive. Search, filter, and explore every article covering sauna manufacturers, products, market trends, and industry news.',
    type: 'website',
    url: 'https://www.saunanews.com/news',
    siteName: 'SaunaNews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All News | SaunaNews',
    description:
      'The complete SaunaNews archive. Search, filter, and explore every article covering sauna manufacturers, products, market trends, and industry news.',
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
