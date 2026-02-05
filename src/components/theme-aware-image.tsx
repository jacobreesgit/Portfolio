'use client';

import { useTheme } from 'next-themes';
import { useEffect, useSyncExternalStore } from 'react';

import { ClickableImage } from '@/components/clickable-image';

// Empty subscribe function for useSyncExternalStore
const emptySubscribe = () => () => {};

interface ThemeAwareImageProps {
  light: {
    src: string;
    lightboxSrc?: string;
  };
  dark: {
    src: string;
    lightboxSrc?: string;
  };
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  showCaption?: boolean;
  showShadow?: boolean;
}

export function ThemeAwareImage({
  light,
  dark,
  alt,
  width,
  height,
  className,
  loading,
  decoding,
  showCaption = true,
  showShadow = true,
}: ThemeAwareImageProps) {
  // Track hydration state using useSyncExternalStore (React 18+ recommended pattern)
  // Returns false during SSR, true after hydration on client
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { theme, resolvedTheme } = useTheme();

  // Preload both theme variants using browser-native <link rel="preload">
  useEffect(() => {
    const allImages = [
      light.src,
      light.lightboxSrc,
      dark.src,
      dark.lightboxSrc,
    ].filter(Boolean) as string[];

    // Create <link rel="preload"> tags to hint to browser to keep these in cache
    const preloadLinks = allImages.map((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      // fetchpriority="low" prevents blocking critical resources
      link.fetchPriority = 'low';
      document.head.appendChild(link);
      return link;
    });

    // Cleanup: remove preload hints when component unmounts
    return () => {
      preloadLinks.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [light.src, light.lightboxSrc, dark.src, dark.lightboxSrc]);

  // Determine current theme, handling 'system' theme
  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = currentTheme === 'dark';

  // Select images based on theme
  const currentImages = isDark ? dark : light;

  // Show light theme images during SSR/initial render to avoid flicker
  if (!mounted) {
    return (
      <ClickableImage
        src={light.src}
        lightboxSrc={light.lightboxSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding={decoding}
        showCaption={showCaption}
        showShadow={showShadow}
      />
    );
  }

  return (
    <div
      data-theme-aware
      style={{
        transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <ClickableImage
        src={currentImages.src}
        lightboxSrc={currentImages.lightboxSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding={decoding}
        showCaption={showCaption}
        showShadow={showShadow}
      />
    </div>
  );
}
