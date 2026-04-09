import Link from 'next/link';

interface LaunchItem {
  date: string;
  title: string;
  brand: string;
  type: 'Product' | 'Event' | 'Report';
  href?: string;
}

const upcomingLaunches: LaunchItem[] = [
  { date: 'Apr 25', title: 'World Sauna Day 2026', brand: 'Global', type: 'Event' },
  { date: 'May 1', title: 'Mondex Teno & Kalla Updated Models', brand: 'Mondex', type: 'Product', href: '/article/mondex-narvi-heater-updates-2026' },
  { date: 'Jun 9-11', title: 'World Sauna Forum 2026', brand: 'Jyvaskyla, Finland', type: 'Event', href: '/article/world-sauna-forum-2026-jyvaskyla' },
  { date: 'Sep 24-26', title: 'XIX Intl Sauna Congress', brand: 'Oslo, Norway', type: 'Event' },
  { date: 'Oct 6-8', title: 'Interbad 2026', brand: 'Stuttgart, Germany', type: 'Event' },
  { date: 'Now', title: 'Homecraft TKE2-2 WiFi Controller', brand: 'Homecraft', type: 'Product', href: '/article/homecraft-wifi-sauna-controller-launch' },
];

const typeColors: Record<string, string> = {
  Product: 'bg-brass/15 text-brass',
  Event: 'bg-green/15 text-green',
  Report: 'bg-slate/10 text-slate dark:text-stone',
};

export default function LaunchCalendar() {
  return (
    <div className="bg-ivory dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-border dark:border-dark-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          <h3 className="text-sm font-bold text-charcoal dark:text-cream">Launch Calendar</h3>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-dark dark:text-dark-muted">
          Upcoming
        </span>
      </div>
      <div className="divide-y divide-border dark:divide-dark-border">
        {upcomingLaunches.map((item, i) => {
          const inner = (
            <>
              <span className="text-xs font-semibold text-stone-dark dark:text-dark-muted w-12 shrink-0 tabular-nums">
                {item.date}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-charcoal dark:text-dark-text group-hover:text-green dark:group-hover:text-brass transition-colors block truncate">
                  {item.title}
                </span>
                <span className="text-xs text-stone-dark dark:text-dark-muted">{item.brand}</span>
              </div>
              <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${typeColors[item.type]}`}>
                {item.type}
              </span>
            </>
          );
          const cls = "flex items-center gap-4 px-5 py-3.5 hover:bg-cream dark:hover:bg-dark-bg/50 transition-colors group";
          return item.href ? (
            <Link key={i} href={item.href} className={cls}>{inner}</Link>
          ) : (
            <div key={i} className={cls}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
