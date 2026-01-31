/**
 * Shared animation configuration for consistent motion across the app
 */

export const THEME_TRANSITION = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1] as const,
} as const;

export const PAGE_TRANSITION = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as const,
} as const;
