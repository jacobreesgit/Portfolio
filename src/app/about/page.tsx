import type { Metadata } from 'next';

import Noise from '@/components/noise';
import AboutHero from '@/components/sections/about-hero';
import Experience from '@/components/sections/experience';
import MyStory from '@/components/sections/my-story';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Frontend Engineer with 3+ years experience. Helped build and improve Vepple (1M+ students, 4x engagement) and Pavers (75+ components powering 160+ shops).',
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={cn(
            'absolute h-[60vh] w-full rounded-full bg-emerald-500/15 blur-3xl will-change-transform',
            'top-0 left-0 -translate-y-1/3 md:-translate-x-1/4',
          )}
        />
        {/* Middle blob for tall page */}
        <div
          className={cn(
            'absolute h-[60vh] w-full rounded-full bg-teal-400/10 blur-3xl will-change-transform',
            'top-[35%] left-0 md:-translate-x-1/4',
          )}
        />
        <div
          className={cn(
            'absolute h-[60vh] w-full rounded-full bg-cyan-400/15 blur-3xl will-change-transform',
            'right-0 bottom-0 translate-y-1/2 md:translate-x-1/4',
          )}
        />
      </div>
      <Noise />
      <div className="relative z-10">
        <AboutHero />
        <MyStory />
        <Experience />
      </div>
    </div>
  );
}
