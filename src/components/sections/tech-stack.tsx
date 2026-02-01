'use client';

import { motion } from 'motion/react';

import { Marquee } from '@/components/magicui/marquee';
import Noise from '@/components/noise';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeIn, fadeUp, scrollViewport } from '@/lib/animations';

const technologies = [
  // Frontend Frameworks
  { name: 'React', color: 'text-cyan-500' },
  { name: 'Vue.js', color: 'text-emerald-500' },
  { name: 'Next.js', color: 'text-foreground' },
  { name: 'TypeScript', color: 'text-blue-500' },
  { name: 'Swift', color: 'text-orange-500' },
  { name: 'SwiftUI', color: 'text-blue-400' },
  // Backend & Database
  { name: 'PostgreSQL', color: 'text-blue-600' },
  { name: 'Supabase', color: 'text-emerald-400' },
  { name: 'Firebase', color: 'text-amber-500' },
  { name: 'Prisma', color: 'text-teal-500' },
  { name: 'Deno', color: 'text-foreground' },
  { name: 'NextAuth.js', color: 'text-purple-400' },
  // UI & Styling
  { name: 'Tailwind CSS', color: 'text-cyan-400' },
  { name: 'Framer Motion', color: 'text-pink-500' },
  { name: 'Swiper.js', color: 'text-blue-400' },
  { name: '@dnd-kit', color: 'text-violet-500' },
  { name: 'Bootstrap', color: 'text-purple-500' },
  // State & Data
  { name: 'TanStack Query', color: 'text-red-500' },
  { name: 'Pinia', color: 'text-yellow-400' },
  { name: 'Quasar', color: 'text-cyan-500' },
  // APIs & Services
  { name: 'Mapbox GL', color: 'text-blue-500' },
  { name: 'Algolia', color: 'text-indigo-500' },
  { name: 'Sanity CMS', color: 'text-red-400' },
  { name: 'Sentry', color: 'text-purple-600' },
  { name: 'GTM', color: 'text-blue-400' },
  // Testing
  { name: 'Vitest', color: 'text-yellow-400' },
  { name: 'Playwright', color: 'text-green-400' },
  { name: 'Jest', color: 'text-red-600' },
  // Tools
  { name: 'Figma', color: 'text-purple-500' },
  { name: 'Storybook', color: 'text-pink-500' },
  { name: 'Shopify Liquid', color: 'text-green-500' },
  { name: 'jQuery', color: 'text-blue-500' },
];

export default function Logos() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section className="relative py-10 md:py-12 lg:py-16">
      <Noise />
      <motion.p
        className="text-muted-foreground container text-center text-base"
        initial={initial}
        whileInView="visible"
        viewport={scrollViewport}
        variants={fadeUp}
      >
        Technologies I work with
      </motion.p>

      <motion.div
        initial={initial}
        whileInView="visible"
        viewport={scrollViewport}
        variants={fadeIn}
      >
        <Marquee
          pauseOnHover
          className="mt-8 mask-r-from-60% mask-r-to-100% mask-l-from-60% mask-l-to-100% [--duration:25s] [--gap:3rem]"
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 text-lg font-medium transition-transform duration-200 hover:scale-105"
            >
              <span className={tech.color}>{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
