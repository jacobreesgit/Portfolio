import { useCallback, useEffect, useState } from 'react';

// Tailwind default breakpoints in pixels
const SCREEN_SIZES = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

type ScreenSize = keyof typeof SCREEN_SIZES;

// Breakpoint order for comparison helpers (hoisted for performance)
const BREAKPOINT_ORDER: ScreenSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

// Debounce utility function
const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  wait: number,
) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const useMediaQuery = (debounceMs = 100) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('xs');

  const updateScreenSize = useCallback(() => {
    // Use document.documentElement.clientWidth for more reliable responsive breakpoints
    // This matches what CSS media queries use and excludes scrollbars
    const effectiveWidth =
      document.documentElement.clientWidth || window.innerWidth;

    let newSize: ScreenSize;
    if (effectiveWidth >= SCREEN_SIZES['2xl']) {
      newSize = '2xl';
    } else if (effectiveWidth >= SCREEN_SIZES.xl) {
      newSize = 'xl';
    } else if (effectiveWidth >= SCREEN_SIZES.lg) {
      newSize = 'lg';
    } else if (effectiveWidth >= SCREEN_SIZES.md) {
      newSize = 'md';
    } else if (effectiveWidth >= SCREEN_SIZES.sm) {
      newSize = 'sm';
    } else {
      newSize = 'xs';
    }

    setScreenSize(newSize);
  }, []);

  useEffect(() => {
    // Create debounced handler
    const debouncedHandler = debounce(updateScreenSize, debounceMs);

    // Initial check without debounce - use queueMicrotask to avoid cascading
    queueMicrotask(updateScreenSize);

    // Add event listener with debounced handler (passive for better performance)
    window.addEventListener('resize', debouncedHandler, { passive: true });

    // Cleanup
    return () => window.removeEventListener('resize', debouncedHandler);
  }, [debounceMs, updateScreenSize]);

  return {
    screenSize,
    isXs: screenSize === 'xs',
    isSm: screenSize === 'sm',
    isMd: screenSize === 'md',
    isLg: screenSize === 'lg',
    isXl: screenSize === 'xl',
    is2Xl: screenSize === '2xl',
    // Helper methods for comparisons
    isAtLeast: (size: ScreenSize) => {
      const currentIndex = BREAKPOINT_ORDER.indexOf(screenSize);
      const targetIndex = BREAKPOINT_ORDER.indexOf(size);
      return currentIndex >= targetIndex;
    },
    isAtMost: (size: ScreenSize) => {
      const currentIndex = BREAKPOINT_ORDER.indexOf(screenSize);
      const targetIndex = BREAKPOINT_ORDER.indexOf(size);
      return currentIndex <= targetIndex;
    },
  };
};
