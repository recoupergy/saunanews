import Image from 'next/image';
import PlaceholderImage, { variantForCategory, PlaceholderVariant } from './PlaceholderImage';

function shouldBypassOptimization(src: string): boolean {
  try {
    const hostname = new URL(src).hostname;
    return hostname === 'manuals.plus';
  } catch {
    return false;
  }
}

interface ArticleImageProps {
  src?: string;
  alt: string;
  category: string;
  seed: string;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  variant?: PlaceholderVariant;
}

export default function ArticleImage({
  src,
  alt,
  category,
  seed,
  aspectRatio = '16/10',
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  variant,
}: ArticleImageProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ aspectRatio }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          unoptimized={shouldBypassOptimization(src)}
        />
      </div>
    );
  }

  // Fallback to styled SVG placeholder
  return (
    <PlaceholderImage
      seed={seed}
      variant={variant ?? variantForCategory(category)}
      aspectRatio={aspectRatio}
      className={className}
    />
  );
}
