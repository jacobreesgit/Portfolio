'use client';

import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeUp, heroContainer, scaleUp } from '@/lib/animations';

export default function NotFound() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section className="section-padding relative container flex min-h-screen items-center justify-center">
      {/* Large 404 background text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={initial}
        animate="visible"
        variants={scaleUp}
      >
        <span className="text-muted/80 text-[12rem] font-bold select-none sm:text-[16rem] md:text-[25rem] lg:text-[32rem]">
          404
        </span>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center"
        initial={initial}
        animate="visible"
        variants={heroContainer}
      >
        <motion.h1
          className="text-foreground mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
          variants={fadeUp}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-muted-foreground mx-auto mb-6 max-w-md text-sm md:text-base lg:text-lg"
          variants={fadeUp}
        >
          The page you&apos;re looking for doesn&apos;t exist
          <br />
          or has been moved.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button
            asChild
            size="lg"
            className="group !pl-5.5 font-medium"
          >
            <Link href="/">
              Return Home
              <div className="bg-border border-input grid size-5.5 place-items-center rounded-full border">
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.25" />
              </div>
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
