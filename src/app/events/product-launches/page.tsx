import type { Metadata } from 'next';
import EventCategoryPage from '@/components/EventCategoryPage';

export const metadata: Metadata = {
  title: 'Sauna Product Launches 2026 — SaunaNews',
  description:
    'Upcoming heater, controller, and accessory launches from the sauna manufacturers SaunaNews covers. Harvia, HUUM, Mondex, Homecraft, Thermory and more.',
  alternates: { canonical: 'https://www.saunanews.com/events/product-launches' },
};

export default function ProductLaunchesPage() {
  return (
    <EventCategoryPage
      category="Product Launch"
      title="Sauna Product Launches"
      eyebrow="Permanent calendar"
      intro="New heater, controller, and accessory launches from across the sauna industry. Dates are release dates; confirmed launches are tracked alongside scheduled ones."
    />
  );
}
