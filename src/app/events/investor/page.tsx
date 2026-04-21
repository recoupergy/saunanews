import type { Metadata } from 'next';
import EventCategoryPage from '@/components/EventCategoryPage';

export const metadata: Metadata = {
  title: 'Sauna Industry Investor Calendar — SaunaNews',
  description:
    'Investor relations calendar for public sauna-industry companies. Harvia Plc (Nasdaq Helsinki: HARVIA) quarterly reports, dividend dates, and more.',
  alternates: { canonical: 'https://www.saunanews.com/events/investor' },
};

export default function InvestorEventsPage() {
  return (
    <EventCategoryPage
      category="Investor"
      title="Sauna Investor Calendar"
      eyebrow="Permanent calendar"
      intro="Earnings reports, dividend dates, and annual meetings for the public companies SaunaNews covers. Harvia Plc is the only pure-play publicly traded sauna company; related diversified-industrials coverage of Masco and Kohler will be added as IR calendars are confirmed."
    />
  );
}
