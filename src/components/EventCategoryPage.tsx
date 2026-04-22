import Link from 'next/link';
import Image from 'next/image';
import {
  getEventsByCategory,
  formatEventDateRange,
  EVENT_CATEGORY_SLUGS,
  EVENT_CATEGORY_DESCRIPTIONS,
  type EventCategory,
} from '@/data/events';
import { stringifyJsonLd, toIso8601 } from '@/lib/structured-data';

interface EventCategoryPageProps {
  category: EventCategory;
  title: string;
  eyebrow?: string;
  intro?: string;
}
const EVENT_CUTOFF_MS = Date.parse(new Date().toISOString()) - 1000 * 60 * 60 * 24;

export default function EventCategoryPage({
  category,
  title,
  eyebrow,
  intro,
}: EventCategoryPageProps) {
  const all = getEventsByCategory(category);
  const upcoming = all.filter((e) => new Date(e.endDate).getTime() >= EVENT_CUTOFF_MS);
  const past = all.filter((e) => new Date(e.endDate).getTime() < EVENT_CUTOFF_MS);
  const description = intro ?? EVENT_CATEGORY_DESCRIPTIONS[category];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': upcoming.map((event) => ({
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
    })),
  };

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
            <Link href="/events" className="hover:text-green dark:hover:text-brass transition-colors">
              Events
            </Link>
            <span>/</span>
            <span>{category}</span>
          </div>
          {eyebrow && (
            <div className="inline-block text-[11px] font-semibold uppercase tracking-widest text-green border border-green/30 bg-green/5 px-3 py-1 rounded-full mb-4">
              {eyebrow}
            </div>
          )}
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal dark:text-cream leading-tight mb-3">
            {title}
          </h1>
          <p className="text-lg text-warm-gray dark:text-dark-muted leading-relaxed font-editorial italic">
            {description}
          </p>
          <div className="mt-6">
            <Link
              href="/events"
              className="inline-flex items-center gap-1 text-sm font-semibold text-green hover:text-charcoal transition-colors"
            >
              &larr; Back to all sauna events
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <section>
          <div className="flex items-baseline justify-between mb-5 border-b border-border dark:border-dark-border pb-3">
            <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">Upcoming</h2>
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-dark">
              {upcoming.length} event{upcoming.length === 1 ? '' : 's'}
            </span>
          </div>
          {upcoming.length === 0 ? (
            <p className="text-stone-dark">No upcoming events in this category. Check back soon.</p>
          ) : (
            <ul className="space-y-4">
              {upcoming.map((event) => (
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
          )}
        </section>

        {past.length > 0 && (
          <section>
            <div className="flex items-baseline justify-between mb-5 border-b border-border dark:border-dark-border pb-3">
              <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">Past</h2>
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-dark">
                {past.length} event{past.length === 1 ? '' : 's'}
              </span>
            </div>
            <ul className="space-y-3">
              {past.map((event) => (
                <li key={event.id}>
                  <Link
                    href={`/events/${event.slug}`}
                    className="flex items-start gap-4 px-4 py-3 rounded-lg border border-border dark:border-dark-border bg-ivory/50 dark:bg-dark-surface/50 hover:bg-ivory dark:hover:bg-dark-surface transition-colors group"
                  >
                    <div className="shrink-0 w-28 text-xs font-semibold uppercase tracking-wider text-stone-dark">
                      {formatEventDateRange(event)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-charcoal dark:text-cream group-hover:text-green transition-colors leading-snug">
                        {event.title}
                      </div>
                      <div className="text-xs text-stone-dark dark:text-dark-muted mt-1">
                        {event.venue} &middot; {event.location}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="pt-6 border-t border-border dark:border-dark-border">
          <div className="rounded-xl bg-cream/60 dark:bg-dark-surface/60 p-5 text-sm text-stone-dark dark:text-dark-muted">
            Looking for something else?{' '}
            <Link
              href="/events"
              className="font-semibold text-green hover:text-charcoal transition-colors"
            >
              See all sauna events
            </Link>
            , or jump straight to{' '}
            {(Object.keys(EVENT_CATEGORY_SLUGS) as EventCategory[])
              .filter((c) => c !== category)
              .map((c, i, arr) => (
                <span key={c}>
                  <Link
                    href={`/events/${EVENT_CATEGORY_SLUGS[c]}`}
                    className="font-semibold text-green hover:text-charcoal transition-colors"
                  >
                    {c}
                  </Link>
                  {i < arr.length - 2 ? ', ' : i === arr.length - 2 ? ', or ' : '.'}
                </span>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
