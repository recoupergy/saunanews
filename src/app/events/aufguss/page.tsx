import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getEventsByCategory, formatEventDateRange } from '@/data/events';

export const metadata: Metadata = {
  title: 'Aufguss Event Calendar — SaunaNews',
  description:
    'The permanent Aufguss event calendar from SaunaNews. All championships, qualifiers, and finals on the Aufguss World Masters circuit and beyond.',
  alternates: { canonical: 'https://www.saunanews.com/events/aufguss' },
};

export default function AufgussEventsPage() {
  const now = Date.now();
  const cutoff = now - 1000 * 60 * 60 * 24;
  const allAufguss = getEventsByCategory('Aufguss');
  const upcoming = allAufguss.filter((e) => new Date(e.endDate).getTime() >= cutoff);
  const past = allAufguss.filter((e) => new Date(e.endDate).getTime() < cutoff);

  return (
    <>
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
            <span>Aufguss</span>
          </div>
          <div className="inline-block text-[11px] font-semibold uppercase tracking-widest text-green border border-green/30 bg-green/5 px-3 py-1 rounded-full mb-4">
            Permanent calendar
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal dark:text-cream leading-tight mb-3">
            The Aufguss Event Calendar
          </h1>
          <p className="text-lg text-warm-gray dark:text-dark-muted leading-relaxed font-editorial italic">
            Every major stop on the Aufguss World Masters circuit, plus US and UK nationals, maintained by SaunaNews. This page updates as new events are announced.
          </p>
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
            <p className="text-stone-dark">No upcoming events on the circuit. Check back soon.</p>
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
      </div>
    </>
  );
}
