'use client';

import { useState, useEffect } from 'react';

export default function StickyNewsletterBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPercent =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent >= 0.4);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-charcoal dark:bg-slate border-t border-cream/10 dark:border-dark-border shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          {/* Copy */}
          <p className="hidden sm:block text-sm text-cream/70 shrink-0">
            <span className="font-editorial font-semibold text-cream">SaunaNews Weekly</span>
            <span className="mx-2 text-cream/30">|</span>
            The sauna industry&apos;s most essential briefing, every Thursday.
          </p>
          <p className="sm:hidden text-sm text-cream/70 shrink-0">
            <span className="font-editorial font-semibold text-cream">Get the weekly briefing</span>
          </p>

          {/* Form + dismiss */}
          <div className="flex items-center gap-2 shrink-0">
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-44 sm:w-52 px-3 py-1.5 bg-cream/10 border border-cream/15 rounded text-sm text-cream placeholder-cream/35 focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass"
              />
              <button className="px-4 py-1.5 bg-brass text-charcoal text-sm font-semibold rounded hover:bg-copper transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>

            <button
              onClick={() => setDismissed(true)}
              className="ml-1 p-1 text-cream/30 hover:text-cream/60 transition-colors"
              aria-label="Dismiss newsletter bar"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
