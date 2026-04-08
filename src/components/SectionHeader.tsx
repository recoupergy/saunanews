import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  href?: string;
  linkText?: string;
  description?: string;
  accentColor?: string;
}

export default function SectionHeader({ title, href, linkText = 'View all', description, accentColor }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-8 pb-4 border-b border-border dark:border-dark-border relative">
      {/* Accent color bar */}
      {accentColor && (
        <div
          className="absolute left-0 top-0 w-12 h-0.5 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
      )}
      <div>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-stone-dark dark:text-dark-muted mt-1">
            {description}
          </p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="text-sm font-medium text-green dark:text-brass hover:text-green-light dark:hover:text-copper transition-colors shrink-0 flex items-center gap-1"
        >
          {linkText}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
