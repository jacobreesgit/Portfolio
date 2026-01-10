import type { Metadata } from 'next';

import { Experience3 } from '@/components/experience3';
import Noise from '@/components/noise';
import AboutHero from '@/components/sections/about-hero';
import MyStory from '@/components/sections/my-story';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Jacob Rees - Front-End Developer with 3+ years experience building platforms for 30+ universities and 160+ retail stores.',
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 mask-t-from-50% mask-t-to-100% mask-b-from-50% mask-b-to-90%">
        <div
          className={cn(
            'absolute size-full rounded-full bg-emerald-500/15 blur-3xl will-change-transform',
            'top-0 left-0 -translate-y-1/3 md:-translate-x-1/3 md:translate-y-0',
          )}
        />
        <div
          className={cn(
            'absolute size-full rounded-full bg-cyan-400/15 blur-3xl will-change-transform',
            'right-0 bottom-0 translate-y-1/3 md:top-0 md:translate-x-1/3 md:-translate-y-0',
          )}
        />
      </div>
      <Noise />
      <div className="relative z-10">
        <AboutHero />
        <MyStory />
        <Experience3 />
      </div>
    </div>
  );
}
