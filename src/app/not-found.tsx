import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-cream dark:bg-dark-bg">
      <div className="max-w-xl text-center">
        <p className="text-brass font-medium tracking-widest uppercase text-sm mb-4">
          Page Not Found
        </p>
        <h1 className="font-editorial text-6xl sm:text-7xl font-bold text-charcoal dark:text-dark-text mb-6">
          404
        </h1>
        <p className="text-lg text-warm-gray dark:text-dark-muted leading-relaxed mb-10">
          The page you are looking for may have been moved, removed, or never
          existed. Try heading back to the homepage or browsing the latest sauna
          industry news.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green text-white text-sm font-medium rounded-lg hover:bg-green-light transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Homepage
          </Link>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border dark:border-dark-border text-charcoal dark:text-dark-text text-sm font-medium rounded-lg hover:bg-ivory dark:hover:bg-dark-surface transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              <path d="M18 14h-8" />
              <path d="M15 18h-5" />
              <path d="M10 6h8v4h-8V6Z" />
            </svg>
            Browse Latest News
          </Link>
        </div>
        <div className="mt-16 pt-8 border-t border-border dark:border-dark-border">
          <p className="font-editorial text-sm text-stone-dark dark:text-dark-muted italic">
            SaunaNews — The Business and Culture of Sauna
          </p>
        </div>
      </div>
    </div>
  );
}
