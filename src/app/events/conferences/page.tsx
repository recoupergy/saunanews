import type { Metadata } from 'next';
import EventCategoryPage from '@/components/EventCategoryPage';

export const metadata: Metadata = {
  title: 'Sauna Industry Conferences 2026 — SaunaNews',
  description:
    'Sauna industry conferences, research summits, and global cultural observances. World Sauna Forum, International Sauna Congress, World Sauna Day and more, tracked by SaunaNews.',
  alternates: { canonical: 'https://www.saunanews.com/events/conferences' },
};

export default function ConferencesPage() {
  return (
    <EventCategoryPage
      category="Conference"
      title="Sauna Industry Conferences"
      eyebrow="Permanent calendar"
      intro="Global sauna conferences and summits, from the World Sauna Forum in Jyvaskyla to the International Sauna Congress and the annual World Sauna Day observance."
    />
  );
}
