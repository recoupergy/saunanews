import type { Metadata } from 'next';
import EventCategoryPage from '@/components/EventCategoryPage';

export const metadata: Metadata = {
  title: 'Aufguss Event Calendar — SaunaNews',
  description:
    'The permanent Aufguss event calendar from SaunaNews. All championships, qualifiers, and finals on the Aufguss World Masters circuit and beyond.',
  alternates: { canonical: 'https://www.saunanews.com/events/aufguss' },
};

export default function AufgussEventsPage() {
  return (
    <EventCategoryPage
      category="Aufguss"
      title="The Aufguss Event Calendar"
      eyebrow="Permanent calendar"
      intro="Every major stop on the Aufguss World Masters circuit, plus US and UK nationals, maintained by SaunaNews. This page updates as new events are announced."
    />
  );
}
