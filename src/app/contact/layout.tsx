import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Submit News',
  description:
    'Submit press releases, pitch story tips, ask about sponsorships, or send general feedback to the SaunaNews editorial team.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Submit News | SaunaNews',
    description:
      'Submit press releases, pitch story tips, ask about sponsorships, or send general feedback to the SaunaNews editorial team.',
    type: 'website',
    url: 'https://www.saunanews.com/contact',
    siteName: 'SaunaNews',
  },
  twitter: {
    card: 'summary',
    title: 'Contact & Submit News | SaunaNews',
    description:
      'Submit press releases, pitch story tips, ask about sponsorships, or send general feedback to the SaunaNews editorial team.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
