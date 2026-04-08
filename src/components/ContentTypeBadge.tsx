import { ContentType } from '@/data/types';

const typeStyles: Record<ContentType, string> = {
  Breaking: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  'Daily Brief': 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Analysis: 'bg-green/10 text-green dark:bg-green/20 dark:text-green-light',
  Interview: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  'Product Launch': 'bg-brass/10 text-brass dark:bg-brass/20 dark:text-copper',
  'Manufacturer Profile': 'bg-slate/10 text-slate dark:bg-slate/20 dark:text-stone',
  'Market Watch': 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'Weekly Roundup': 'bg-stone/30 text-warm-gray dark:bg-stone/10 dark:text-stone',
};

interface ContentTypeBadgeProps {
  type: ContentType;
  size?: 'sm' | 'md';
}

export default function ContentTypeBadge({ type, size = 'md' }: ContentTypeBadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-0.5 text-xs';

  return (
    <span className={`inline-block rounded font-medium uppercase tracking-wider ${sizeClasses} ${typeStyles[type]}`}>
      {type}
    </span>
  );
}
