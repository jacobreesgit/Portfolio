'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

import { useLightbox } from './lightbox-provider';

interface ClickableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  showCaption?: boolean;
  showShadow?: boolean;
  lightboxSrc?: string; // Optional high-res version for lightbox (loaded on demand)
}

export function ClickableImage({
  src,
  alt,
  width = 1920,
  height = 1080,
  className,
  loading,
  decoding,
  showCaption = true,
  showShadow = true,
  lightboxSrc,
}: ClickableImageProps) {
  const { openLightbox } = useLightbox();

  return (
    <span className="not-prose block">
      <button
        onClick={() => openLightbox(lightboxSrc || src, alt, showCaption)}
        aria-label={`View larger version of ${alt}`}
        className="group focus:ring-primary relative block w-full cursor-pointer overflow-hidden rounded-xl bg-white focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-black"
        type="button"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          className={cn(
            'w-full rounded-xl',
            showShadow && 'shadow-2xl ring-1 ring-white/10',
            className,
          )}
        />
        {/* Zoom hint overlay */}
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 opacity-0 transition-all group-hover:bg-black/10 group-hover:opacity-100">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-black shadow-lg backdrop-blur-sm">
            Click to enlarge
          </span>
        </div>
      </button>
      {showCaption && alt && (
        <span className="text-foreground mt-4 block text-center text-sm italic">
          {alt}
        </span>
      )}
    </span>
  );
}
