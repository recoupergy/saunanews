import type { Metadata } from 'next';
import EventCategoryPage from '@/components/EventCategoryPage';

export const metadata: Metadata = {
  title: 'Sauna Trade Shows 2026 — SaunaNews',
  description:
    'Commercial sauna, pool, and thermal wellness trade shows. Interbad, ISH Frankfurt, and other European exhibitions where manufacturers, specifiers, and operators convene.',
  alternates: { canonical: 'https://www.saunanews.com/events/trade-shows' },
};

export default function TradeShowsPage() {
  return (
    <EventCategoryPage
      category="Trade Show"
      title="Sauna Trade Shows"
      eyebrow="Permanent calendar"
      intro="The European commercial wellness trade shows that matter for the sauna category. Interbad in Stuttgart and the major biennial exhibitions where specifiers, manufacturers, and operators converge."
    />
  );
}
