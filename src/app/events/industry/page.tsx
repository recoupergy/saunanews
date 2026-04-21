import type { Metadata } from 'next';
import EventCategoryPage from '@/components/EventCategoryPage';

export const metadata: Metadata = {
  title: 'Sauna Industry Events & Meetings — SaunaNews',
  description:
    'Industry meetings and broader sauna ecosystem gatherings, including association events and community-led forums tracked by SaunaNews.',
  alternates: { canonical: 'https://www.saunanews.com/events/industry' },
};

export default function IndustryPage() {
  return (
    <EventCategoryPage
      category="Industry"
      title="Sauna Industry Events & Meetings"
      eyebrow="Permanent calendar"
      intro="Broader industry gatherings and meetings across the global sauna ecosystem, maintained by SaunaNews."
    />
  );
}
