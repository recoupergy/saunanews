import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { events, formatEventDateRange, type EventCategory } from '@/data/events';

export const metadata: Metadata = {
  title: 'Sauna Industry Events Calendar — SaunaNews',
  description:
    'Global sauna events: Aufguss championships, trade shows, and industry conferences. Up-to-date calendar with dates, venues, and links to official event pages.',
  alternates: { canonical: 'https://www.saunanews.com/events' },
};

const CATEGORY_ORDER: EventCategory[] = ['Aufguss', 'Trade Show', 'Industry', 'Competition'];

export default function EventsIndexPage() {
  const now = Date.now();
  const cutoff = now - 1000 * 60 * 60 * 24;
  const upcoming = events
    .filter((e) => new Date(e.endDate).getTime() >= cutoff)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  const byCategory: Record<string, typeof events> = {};
  upcoming.forEach((e) => {
    byCategory[e.category] = byCategory[e.category] ?? [];
    byCategory[e.category].push(e);
  });

  return (
    <>
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
          <p className="text-lg text-warm-gray dark:text-dark-muted leading-relaxed font-editorial italic">
            The global sauna calendar, maintained by SaunaNews. Aufguss championships, trade shows, and industry conferences. Click any event for the SaunaNews briefing, venue details, and a link to the official event page.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {CATEGORY_ORDER.map((category) => {
          const list = byCategory[category];
          if (!list || list.length === 0) return null;
          const categoryHref =
            category === 'Aufguss' ? '/events/aufguss' : `/events?category=${category.toLowerCase()}`;
          return (
            <section key={category}>
              <div className="flex items-baseline justify-between mb-5 border-b border-border dark:border-dark-border pb-3">
                <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream">
                  {category}
                </h2>
                {category === 'Aufguss' && (
                  <Link
                    href={categoryHref}
                    className="text-xs font-semibold uppercase tracking-widest text-green hover:text-charcoal transition-colors"
                  >
                    Full Aufguss calendar &rarr;
                  </Link>
                )}
              </div>
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
