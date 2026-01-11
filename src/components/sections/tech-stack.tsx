'use client';

import { motion } from 'motion/react';

import { Marquee } from '@/components/magicui/marquee';
import Noise from '@/components/noise';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeIn, fadeUp, scrollViewport } from '@/lib/animations';

const technologies = [
  { name: 'Vue.js', color: 'text-emerald-500' },
  { name: 'React', color: 'text-cyan-500' },
  { name: 'Next.js', color: 'text-foreground' },
  { name: 'TypeScript', color: 'text-blue-500' },
  { name: 'JavaScript', color: 'text-yellow-500' },
  { name: 'Node.js', color: 'text-green-500' },
  { name: 'Pinia', color: 'text-yellow-400' },
  { name: 'Tailwind', color: 'text-cyan-400' },
  { name: 'Sass', color: 'text-pink-500' },
  { name: 'Figma', color: 'text-purple-500' },
  { name: 'Docker', color: 'text-blue-400' },
  { name: 'Vercel', color: 'text-foreground' },
];

export default function Logos() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section className="section-padding relative">
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
