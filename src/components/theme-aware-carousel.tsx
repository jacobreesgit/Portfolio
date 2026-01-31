'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

import CarouselStandard2 from '@/components/carousel-standard-2';
import { THEME_TRANSITION } from '@/lib/animation-config';

interface ThemeAwareCarouselProps {
  lightImages: {
    desktop: string;
    mobile: string;
  };
  darkImages: {
    desktop: string;
    mobile: string;
  };
  alt: [string, string]; // [desktop alt, mobile alt]
  buttonLabels?: [string, string]; // Optional custom labels, defaults to ["Desktop", "Mobile"]
}

export function ThemeAwareCarousel({
  lightImages,
  darkImages,
  alt,
  buttonLabels = ['Desktop', 'Mobile'],
}: ThemeAwareCarouselProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  // Preload both theme variants for instant switching
  // Use primitive dependencies to avoid unnecessary re-runs
  useEffect(() => {
    const allImages = [
      lightImages.desktop,
      lightImages.mobile,
      darkImages.desktop,
      darkImages.mobile,
    ];

    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    setMounted(true);
  }, [
    lightImages.desktop,
    lightImages.mobile,
    darkImages.desktop,
    darkImages.mobile,
  ]);

  // Determine current theme, handling 'system' theme
  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = currentTheme === 'dark';

  // Select images based on theme
  const images = isDark
    ? [darkImages.desktop, darkImages.mobile]
    : [lightImages.desktop, lightImages.mobile];

  // Show light theme images during SSR/initial render to avoid flicker
  if (!mounted) {
    return (
      <CarouselStandard2
        images={[lightImages.desktop, lightImages.mobile]}
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
