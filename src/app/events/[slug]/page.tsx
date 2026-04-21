import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { events, getEventBySlug, formatEventDateRange } from '@/data/events';

export const dynamicParams = false;

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: 'Event Not Found' };
  const canonicalUrl = `https://www.saunanews.com/events/${event.slug}`;
  return {
    title: `${event.title} — SaunaNews`,
    description: event.summary,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: event.title,
      description: event.summary,
      type: 'article',
      url: canonicalUrl,
      images: [{ url: event.image, width: 1200, height: 675, alt: event.imageCaption }],
      siteName: 'SaunaNews',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sauna_news',
      title: event.title,
      description: event.summary,
      images: [event.image],
    },
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const related = events
    .filter((e) => e.category === event.category && e.id !== event.id)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 3);

  const eventUrl = `https://www.saunanews.com/events/${event.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.summary,
    startDate: event.startDate,
    endDate: event.endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.venue,
      address: event.location,
    },
    image: [event.image],
    url: eventUrl,
    organizer: {
      '@type': 'Organization',
      name: event.venue,
      url: event.officialUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <header className="bg-cream dark:bg-dark-bg border-b border-border dark:border-dark-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
            <div className="flex items-center gap-2 text-sm text-stone-dark dark:text-dark-muted mb-6">
              <Link href="/" className="hover:text-green dark:hover:text-brass transition-colors">Home</Link>
              <span>/</span>
              <Link href="/events" className="hover:text-green dark:hover:text-brass transition-colors">Events</Link>
              <span>/</span>
              {event.category === 'Aufguss' ? (
                <>
                  <Link href="/events/aufguss" className="hover:text-green dark:hover:text-brass transition-colors">
                    Aufguss
                  </Link>
                  <span>/</span>
                </>
              ) : null}
              <span className="truncate">{event.title}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-green border border-green/30 bg-green/5 px-3 py-1 rounded-full">
                {event.category} Event
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-brass">
                {formatEventDateRange(event)}
              </span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal dark:text-cream leading-tight mb-4">
              {event.title}
            </h1>

            <p className="text-xl text-warm-gray dark:text-dark-muted leading-relaxed font-editorial italic mb-6">
              {event.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-border dark:border-dark-border text-sm">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-stone-dark mb-1">
                  Venue
                </div>
                <div className="text-charcoal dark:text-cream font-medium">{event.venue}</div>
                <div className="text-stone-dark dark:text-dark-muted">{event.location}</div>
                {event.venueUrl && (
                  <a
                    href={event.venueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-xs text-green hover:text-charcoal transition-colors"
                  >
                    Venue website &rarr;
                  </a>
                )}
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-stone-dark mb-1">
                  Official event page
                </div>
                <a
                  href={event.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green hover:text-charcoal transition-colors font-medium break-all"
                >
                  {event.officialUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-ivory dark:bg-dark-surface border-b border-border dark:border-dark-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={event.image}
                alt={event.imageCaption}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                priority
                className="object-cover"
              />
            </div>
            <p className="text-xs text-stone-dark dark:text-dark-muted mt-3 text-center italic">
              {event.imageCaption}
            </p>
          </div>
        </div>

        <div className="bg-surface dark:bg-dark-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div
              className="prose-editorial"
              dangerouslySetInnerHTML={{ __html: event.body }}
            />

            <div className="mt-10 p-5 rounded-xl border border-border bg-cream/50">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-stone-dark mb-2">
                Attend or follow along
              </div>
              <a
                href={event.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-green hover:text-charcoal transition-colors"
              >
                Go to the official event page
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-border dark:border-dark-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-dark dark:text-dark-muted mb-3 block">
                Topics
              </span>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-ivory dark:bg-dark-surface text-sm text-stone-dark dark:text-dark-muted rounded-full border border-border dark:border-dark-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-cream dark:bg-dark-bg border-t border-border dark:border-dark-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-editorial text-2xl font-bold text-charcoal dark:text-cream mb-6 border-b border-border dark:border-dark-border pb-3">
              More {event.category} Events
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/events/${r.slug}`}
                    className="block h-full border border-border dark:border-dark-border rounded-xl overflow-hidden bg-ivory dark:bg-dark-surface hover:shadow-md transition-shadow group"
                  >
                    <div className="relative aspect-[16/9] bg-stone/20">
                      <Image
                        src={r.image}
                        alt={r.imageCaption}
                        fill
                        sizes="(max-width: 640px) 100vw, 320px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-brass mb-1">
                        {formatEventDateRange(r)}
                      </div>
                      <div className="font-semibold text-charcoal dark:text-cream group-hover:text-green transition-colors leading-snug">
                        {r.title}
                      </div>
                      <div className="text-xs text-stone-dark dark:text-dark-muted mt-1">
                        {r.venue}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
