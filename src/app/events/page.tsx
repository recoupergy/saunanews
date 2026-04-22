import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  events,
  formatEventDateRange,
  EVENT_CATEGORY_SLUGS,
  EVENT_CATEGORY_DESCRIPTIONS,
  type EventCategory,
  type SaunaEvent,
} from '@/data/events';
import { stringifyJsonLd, toIso8601 } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Sauna Industry Events Calendar — SaunaNews',
  description:
    'The sauna industry events calendar: Aufguss championships, industry conferences, trade shows, product launches, and investor relations dates. Maintained by SaunaNews.',
  alternates: { canonical: 'https://www.saunanews.com/events' },
};

const CATEGORY_ORDER: EventCategory[] = [
  'Aufguss',
  'Conference',
  'Trade Show',
  'Investor',
  'Product Launch',
  'Competition',
  'Industry',
];
const EVENT_CUTOFF_MS = Date.parse(new Date().toISOString()) - 1000 * 60 * 60 * 24;

function jsonLdForEvent(event: SaunaEvent) {
  return {
    '@type': 'Event',
    name: event.title,
    startDate: toIso8601(event.startDate),
    endDate: toIso8601(event.endDate),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.location,
      },
    },
    image: [event.image],
    description: event.summary,
    organizer: {
      '@type': 'Organization',
      name: event.organizations?.[0] ?? event.venue,
      url: event.officialUrl,
    },
    url: `https://www.saunanews.com/events/${event.slug}`,
  };
}

export default function EventsIndexPage() {
  const upcoming = events
    .filter((e) => new Date(e.endDate).getTime() >= EVENT_CUTOFF_MS)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  const byCategory: Partial<Record<EventCategory, SaunaEvent[]>> = {};
  upcoming.forEach((e) => {
    const list = byCategory[e.category] ?? [];
    list.push(e);
    byCategory[e.category] = list;
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': upcoming.map(jsonLdForEvent),
  };

  const categoriesWithEvents = CATEGORY_ORDER.filter(
    (c) => (byCategory[c]?.length ?? 0) > 0
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <header className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
          <div className="flex items-center gap-2 text-sm text-stone-dark dark:text-dark-muted mb-6">
            <Link href="/" className="hover:text-green dark:hover:text-brass transition-colors">
              Home
            </Link>
            <span>/</span>
            <span>Events</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal dark:text-cream leading-tight mb-3">
            Sauna Industry Events
          </h1>
          <p className="text-lg text-warm-gray dark:text-dark-muted leading-relaxed font-editorial italic mb-6">
            The global sauna calendar, maintained by SaunaNews. Aufguss championships, industry conferences, trade shows, product launches, and investor-relations dates. Click any event for the SaunaNews briefing and a link to the official event page.
          </p>
          <nav
            aria-label="Event categories"
            className="flex flex-wrap gap-2 pt-5 border-t border-border dark:border-dark-border"
          >
            {CATEGORY_ORDER.map((category) => (
              <Link
                key={category}
                href={`/events/${EVENT_CATEGORY_SLUGS[category]}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border dark:border-dark-border text-xs font-semibold uppercase tracking-widest text-stone-dark dark:text-dark-muted hover:text-charcoal dark:hover:text-cream hover:border-green transition-colors"
              >
                {category}
                <span className="text-[10px] font-medium text-stone-dark/80">
                  {byCategory[category]?.length ?? 0}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {categoriesWithEvents.map((category) => {
          const list = byCategory[category] ?? [];
          const categoryHref = `/events/${EVENT_CATEGORY_SLUGS[category]}`;
          return (
            <section key={category} id={EVENT_CATEGORY_SLUGS[category]}>
              <div className="flex items-baseline justify-between mb-3 border-b border-border dark:border-dark-border pb-3">
                <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">
                  <Link
                    href={categoryHref}
                    className="hover:text-green transition-colors"
                  >
                    {category}
                  </Link>
                </h2>
                <Link
                  href={categoryHref}
                  className="text-xs font-semibold uppercase tracking-widest text-green hover:text-charcoal transition-colors"
                >
                  Full {category.toLowerCase()} calendar &rarr;
                </Link>
              </div>
              <p className="text-sm text-stone-dark dark:text-dark-muted mb-5 max-w-3xl leading-relaxed">
                {EVENT_CATEGORY_DESCRIPTIONS[category]}
              </p>
              <ul className="space-y-4">
                {list.map((event) => (
                  <li key={event.id}>
                    <Link
                      href={`/events/${event.slug}`}
                      className="block group border border-border dark:border-dark-border rounded-xl overflow-hidden bg-ivory dark:bg-dark-surface hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative sm:w-56 h-40 sm:h-auto shrink-0 bg-stone/20">
                          <Image
                            src={event.image}
                            alt={event.imageCaption}
                            fill
                            sizes="(max-width: 640px) 100vw, 224px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 p-5">
                          <div className="text-[11px] font-semibold uppercase tracking-widest text-brass mb-1">
                            {formatEventDateRange(event)}
                          </div>
                          <h3 className="font-editorial text-xl font-bold text-charcoal dark:text-cream group-hover:text-green transition-colors leading-tight mb-2">
                            {event.title}
                          </h3>
                          <div className="text-sm text-stone-dark dark:text-dark-muted mb-2">
                            {event.venue} &middot; {event.location}
                          </div>
                          <p className="text-sm text-warm-gray dark:text-dark-muted leading-relaxed">
                            {event.summary}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
