'use client';

import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

import Noise from '@/components/noise';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import {
  fadeUp,
  heroContainer,
  popIn,
  scaleUp,
  staggerContainerFast,
} from '@/lib/animations';

const stats = [
  { id: 'years', number: '3+', label: 'Years Professional' },
  { id: 'universities', number: '30+', label: 'Universities' },
  { id: 'shops', number: '160+', label: 'Shops' },
];

export default function AboutHero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section className="section-padding relative">
      <Noise />
      <div className="bigger-container">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:gap-16">
          {/* Profile Image */}
          <motion.div
            className="relative h-72 w-72 shrink-0 overflow-hidden rounded-2xl border md:h-80 md:w-80 lg:h-96 lg:w-96"
            initial={initial}
            animate="visible"
            variants={scaleUp}
          >
            <Image
              src="/me.jpeg"
              alt="Jacob Rees"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={initial}
            animate="visible"
            variants={heroContainer}
          >
            <motion.h1
              className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
              variants={fadeUp}
            >
              Jacob Rees
            </motion.h1>
            <motion.p
              className="text-muted-foreground mt-2 text-xl md:text-2xl"
              variants={fadeUp}
            >
              Front-End Developer
            </motion.p>
            <motion.p
              className="text-muted-foreground mt-3 flex items-center justify-center gap-1.5 md:justify-start"
              variants={fadeUp}
            >
              <MapPin className="size-4" />
              Durham, England
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="mt-8 grid grid-cols-3 gap-6 lg:mt-12 lg:gap-8"
              variants={staggerContainerFast}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  className="border-input border-b pb-4"
                  variants={popIn}
                >
                  <div className="text-2xl font-medium md:text-3xl lg:text-4xl">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground mt-1 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
