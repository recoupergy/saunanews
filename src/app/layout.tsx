import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeadlineTicker from '@/components/HeadlineTicker';
import StickyNewsletterBar from '@/components/StickyNewsletterBar';
import BackToTop from '@/components/BackToTop';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = 'https://saunanews.com';
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
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
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
    site: '@saunanews',
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <HeadlineTicker />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyNewsletterBar />
        <BackToTop />
      </body>
    </html>
  );
}
