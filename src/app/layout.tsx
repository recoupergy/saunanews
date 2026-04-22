import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeadlineTicker from '@/components/HeadlineTicker';
import StickyNewsletterBar from '@/components/StickyNewsletterBar';
import BackToTop from '@/components/BackToTop';
import WebVitalsBudget from '@/components/WebVitalsBudget';
import './globals.css';


const siteUrl = 'https://www.saunanews.com';
const siteTitle = 'SaunaNews — The Business and Culture of Sauna';
const siteDescription =
  'Daily reporting, launches, market shifts, and analysis for the people building, selling, designing, and following the sauna world.';

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: '%s | SaunaNews',
  },
  description: siteDescription,
  keywords: [
    'sauna news',
    'sauna industry',
    'sauna manufacturers',
    'thermal wellness',
    'sauna market',
    'sauna products',
    'sauna heaters',
    'barrel sauna',
    'outdoor sauna',
    'cold plunge',
    'Finnish sauna',
    'infrared sauna',
    'Harvia',
    'HUUM',
    'Thermory',
    'sauna equipment market',
    'wellness trends',
    'sauna business',
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': 'https://www.saunanews.com/rss.xml',
      'application/atom+xml': 'https://www.saunanews.com/atom.xml',
      'application/feed+json': 'https://www.saunanews.com/feed.json',
      'text/plain': 'https://www.saunanews.com/llms.txt',
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    siteName: 'SaunaNews',
    url: siteUrl,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sauna_news',
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <HeadlineTicker />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyNewsletterBar />
        <BackToTop />
        <WebVitalsBudget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
