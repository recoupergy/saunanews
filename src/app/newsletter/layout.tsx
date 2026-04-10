import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subscribe to The SaunaNews Weekly',
  description:
    'Get the most important sauna industry news, product launches, and market intelligence delivered every Thursday. Free. No spam.',
  alternates: {
    canonical: '/newsletter',
  },
  openGraph: {
    title: 'Subscribe to The SaunaNews Weekly',
    description:
      'Get the most important sauna industry news, product launches, and market intelligence delivered every Thursday. Free. No spam.',
    type: 'website',
    url: 'https://saunanews.com/newsletter',
    siteName: 'SaunaNews',
  },
  twitter: {
    card: 'summary',
    title: 'Subscribe to The SaunaNews Weekly',
    description:
      'Get the most important sauna industry news, product launches, and market intelligence delivered every Thursday. Free. No spam.',
  },
};

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
