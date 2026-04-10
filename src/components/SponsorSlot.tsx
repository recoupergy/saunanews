import Link from 'next/link';

interface SponsorSlotProps {
  variant?: 'banner' | 'sidebar' | 'inline';
  label?: string;
}

export default function SponsorSlot({
  variant = 'banner',
  label = 'Sponsor',
}: SponsorSlotProps) {
  if (variant === 'sidebar') {
    return (
      <aside className="border border-border rounded-lg overflow-hidden">
        {/* Label */}
        <div className="px-4 py-2 border-b border-border bg-ivory/50">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-dark/60">
            {label}
          </span>
        </div>

        {/* Content area */}
        <div className="p-6 bg-surface text-center">
          <div className="w-10 h-10 mx-auto mb-4 rounded bg-ivory flex items-center justify-center">
            <svg
              className="w-5 h-5 text-stone-dark/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-charcoal mb-1">
            Your brand here
          </p>
          <p className="text-xs text-stone-dark leading-relaxed mb-4">
            Reach the sauna industry&apos;s most engaged audience.
          </p>
          <Link
            href="/contact"
            className="inline-block text-xs font-medium text-brass hover:text-copper transition-colors"
          >
            Learn more &rarr;
          </Link>
        </div>
      </aside>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="my-8 py-6 border-y border-border">
        <div className="flex items-start gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-dark/50 shrink-0 pt-0.5">
            {label}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-stone-dark">
              <span className="font-medium text-charcoal">
                Your brand here
              </span>
              {' '}&mdash; reach the sauna industry&apos;s most engaged audience.{' '}
              <Link
                href="/contact"
                className="text-brass hover:text-copper transition-colors font-medium"
              >
                Become a sponsor &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default: banner variant
  return (
    <div className="my-12 border border-border rounded-lg overflow-hidden bg-surface">
      {/* Label bar */}
      <div className="px-4 py-1.5 border-b border-border bg-ivory/50 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-stone-dark/60">
          {label}
        </span>
      </div>

      {/* Content */}
      <div className="px-6 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
        <div className="w-12 h-12 shrink-0 rounded-lg bg-ivory flex items-center justify-center">
          <svg
            className="w-6 h-6 text-stone-dark/25"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-charcoal mb-1">
            Your brand here &mdash; reach the sauna industry&apos;s most engaged audience
          </p>
          <Link
            href="/contact"
            className="text-xs font-medium text-brass hover:text-copper transition-colors"
          >
            Become a sponsor &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
