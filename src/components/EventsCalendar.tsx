import Link from 'next/link';
import { getEventsByCategory, getUpcomingEvents, formatEventDateRange, type EventCategory, type SaunaEvent } from '@/data/events';

interface EventsCalendarProps {
  category?: EventCategory;
  upcomingOnly?: boolean;
  title?: string;
  limit?: number;
  footerLinkHref?: string;
  footerLinkLabel?: string;
}

export default function EventsCalendar({
  category,
  upcomingOnly = false,
  title,
  limit,
  footerLinkHref,
  footerLinkLabel,
}: EventsCalendarProps) {
  const source: SaunaEvent[] = upcomingOnly
    ? getUpcomingEvents(undefined, category)
    : category
      ? getEventsByCategory(category)
      : [];
  const list = limit ? source.slice(0, limit) : source;

  const resolvedTitle =
    title ?? (category ? `${category} Event Calendar` : 'Event Calendar');
  const resolvedFooterHref =
    footerLinkHref ?? (category === 'Aufguss' ? '/events/aufguss' : '/events');
  const resolvedFooterLabel =
    footerLinkLabel ?? (category === 'Aufguss' ? 'See the permanent Aufguss calendar' : 'See all events');

  if (list.length === 0) {
    return null;
  }

  return (
    <div className="my-8 rounded-xl border border-border bg-ivory overflow-hidden not-prose">
      <div className="px-5 py-3 border-b border-border bg-cream/70 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-green">
            {resolvedTitle}
          </span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-dark">
          {list.length} event{list.length === 1 ? '' : 's'}
        </span>
      </div>

      <ul className="divide-y divide-border">
        {list.map((event) => (
          <li key={event.id}>
            <Link
              href={`/events/${event.slug}`}
              className="block px-5 py-4 hover:bg-cream/60 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-28 text-xs font-semibold uppercase tracking-wider text-brass">
                  {formatEventDateRange(event)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-charcoal group-hover:text-green transition-colors leading-snug">
                    {event.title}
                  </div>
                  <div className="text-xs text-stone-dark mt-1">
                    {event.venue} &middot; {event.location}
                  </div>
                </div>
                <svg
                  className="shrink-0 w-4 h-4 text-stone-dark group-hover:text-green transition-colors mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {resolvedFooterHref && (
        <div className="px-5 py-3 border-t border-border bg-cream/40">
          <Link
            href={resolvedFooterHref}
            className="text-xs font-semibold uppercase tracking-widest text-green hover:text-charcoal transition-colors"
          >
            {resolvedFooterLabel} &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
