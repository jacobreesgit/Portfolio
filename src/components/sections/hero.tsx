'use client';

import { ChevronRight, Download } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

import Noise from '@/components/noise';
import { Button } from '@/components/ui/button';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import Link from 'next/link';

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(2px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 25,
        mass: 1,
        duration: 0.6,
      },
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: 'blur(3px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 20,
        delay: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="section-padding relative flex flex-col items-center bg-[url(/images/gradient.webp)] bg-cover bg-center bg-no-repeat dark:bg-[url(/images/gradient-dark.webp)]">
      <motion.div
        variants={overlayVariants}
        initial={prefersReducedMotion ? 'visible' : 'hidden'}
        animate="visible"
        className="from-background/30 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent"
      />
      <Noise />
      <motion.div
        className="z-1 container"
        variants={containerVariants}
        initial={prefersReducedMotion ? 'visible' : 'hidden'}
        animate="visible"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.h1
              variants={itemVariants}
              className="text-3xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
            >
              Jacob Rees
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mt-2 text-xl font-medium md:text-2xl"
            >
              Front-End Developer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground my-4 text-sm md:my-6 md:text-lg"
            >
              Front-End Developer with full-stack experience and a strong
              background in UI &amp; UX design, specialising in creating
              intuitive, feature-rich applications that prioritise the user
              experience.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="rounded-full !pl-5.5 before:rounded-full"
                asChild
              >
                <Link href="/projects">
                  View Projects
                  <div className="bg-background/15 border-background/10 grid size-5.5 place-items-center rounded-full border">
                    <ChevronRight className="size-4" />
                  </div>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                asChild
              >
                <Link href="/cv.pdf" target="_blank">
                  <Download className="mr-2 size-4" />
                  Download CV
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative aspect-square w-64 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl md:w-80 lg:w-96">
              <Image
                src="/me.jpeg"
                alt="Jacob Rees"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
