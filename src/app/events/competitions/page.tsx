import type { Metadata } from 'next';
import EventCategoryPage from '@/components/EventCategoryPage';

export const metadata: Metadata = {
  title: 'Sauna Competition Calendar — SaunaNews',
  description:
    'Traditional sauna competitions and non-Aufguss contest events from around the world, tracked in SaunaNews\'s permanent events calendar.',
  alternates: { canonical: 'https://www.saunanews.com/events/competitions' },
};

export default function CompetitionsPage() {
  return (
    <EventCategoryPage
      category="Competition"
      title="Sauna Competition Calendar"
      eyebrow="Permanent calendar"
      intro="Non-Aufguss sauna competitions from around the world, maintained by SaunaNews."
    />
  );
}
