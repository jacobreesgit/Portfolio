'use client';

import { useTheme } from 'next-themes';
import { useEffect, useSyncExternalStore } from 'react';

import CarouselStandard2 from '@/components/carousel-standard-2';

// Empty subscribe function for useSyncExternalStore
const emptySubscribe = () => () => {};

interface ThemeAwareCarousel2Props {
  feature1: {
    light: { desktop: string; mobile: string };
    dark: { desktop: string; mobile: string };
  };
  feature2: {
    light: { desktop: string; mobile: string };
    dark: { desktop: string; mobile: string };
  };
  alt: [string, string]; // [feature1 alt, feature2 alt]
  buttonLabels: [string, string]; // e.g., ["Grid", "Tree"]
}

export function ThemeAwareCarousel2({
  feature1,
  feature2,
  alt,
  buttonLabels,
}: ThemeAwareCarousel2Props) {
  // Track hydration state using useSyncExternalStore (React 18+ recommended pattern)
  // Returns false during SSR, true after hydration on client
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { theme, resolvedTheme } = useTheme();

  // Preload both theme variants using browser-native <link rel="preload">
  // This keeps images in cache with high priority (better than JavaScript Image objects)
  useEffect(() => {
    const allImages = [
      feature1.light.desktop,
      feature1.light.mobile,
      feature1.dark.desktop,
      feature1.dark.mobile,
      feature2.light.desktop,
      feature2.light.mobile,
      feature2.dark.desktop,
      feature2.dark.mobile,
    ];

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
    // Images stay in browser cache even after links are removed
    return () => {
      preloadLinks.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [
    feature1.light.desktop,
    feature1.light.mobile,
    feature1.dark.desktop,
    feature1.dark.mobile,
    feature2.light.desktop,
    feature2.light.mobile,
    feature2.dark.desktop,
    feature2.dark.mobile,
  ]);

  // Determine current theme, handling 'system' theme
  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = currentTheme === 'dark';

  // Select desktop version of each feature based on theme
  // No fallback needed - preloading ensures images are ready
  // View Transition handles the smooth animation
  const images = isDark
    ? [feature1.dark.desktop, feature2.dark.desktop]
    : [feature1.light.desktop, feature2.light.desktop];

  // Show light theme images during SSR/initial render to avoid flicker
  if (!mounted) {
    return (
      <CarouselStandard2
        images={[feature1.light.desktop, feature2.light.desktop]}
        alt={alt}
        buttonLabels={buttonLabels}
      />
    );
  }

  // Browser-native preload hints keep images in cache
  // CSS transition handles smooth theme switching
  return (
    <div
      data-theme-aware
      style={{
        transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <CarouselStandard2
        images={images}
        alt={alt}
        buttonLabels={buttonLabels}
      />
    </div>
  );
}
