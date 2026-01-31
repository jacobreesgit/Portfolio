'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

import CarouselStandard2 from '@/components/carousel-standard-2';
import { THEME_TRANSITION } from '@/lib/animation-config';

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
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  // Preload both theme variants for instant switching
  // Use primitive dependencies to avoid unnecessary re-runs
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

    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    setMounted(true);
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

  // Animate opacity on theme change without unmounting carousel
  // This preserves the current slide position
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={THEME_TRANSITION}
    >
      <CarouselStandard2
        images={images}
        alt={alt}
        buttonLabels={buttonLabels}
      />
    </motion.div>
  );
}
