'use client';

import Image from 'next/image';
import { useState } from 'react';
import PlaceholderImage, { variantForCategory, PlaceholderVariant } from './PlaceholderImage';

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
  const [error, setError] = useState(false);

  // Use real image if URL exists and hasn't errored
  if (src && !error) {
    return (
      <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ aspectRatio }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          onError={() => setError(true)}
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
