import { ContentType } from '@/data/types';

const typeStyles: Record<ContentType, string> = {
  Breaking: 'bg-red-50 text-red-700',
  'Daily Brief': 'bg-blue-50 text-blue-700',
  Analysis: 'bg-green/10 text-green',
  Interview: 'bg-purple-50 text-purple-700',
  'Product Launch': 'bg-brass/10 text-brass',
  'Manufacturer Profile': 'bg-slate/10 text-slate',
  'Market Watch': 'bg-amber-50 text-amber-700',
  'Weekly Roundup': 'bg-stone/30 text-warm-gray',
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
