'use client';

import { ChevronRight, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { GitHubCalendar } from 'react-github-calendar';

import Noise from '@/components/noise';
import { Button } from '@/components/ui/button';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeIn, fadeUp, heroContainer, scaleUp } from '@/lib/animations';

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';
  const { resolvedTheme } = useTheme();

  return (
    <section className="section-padding relative flex flex-col items-center bg-[url(/images/gradient.webp)] bg-cover bg-center bg-no-repeat dark:bg-[url(/images/gradient-dark.webp)]">
      <motion.div
        variants={fadeIn}
        initial={initial}
        animate="visible"
        className="from-background/30 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent"
      />
      <Noise />
      <motion.div
        className="z-1 container"
        variants={heroContainer}
        initial={initial}
        animate="visible"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
            >
              Jacob Rees
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground mt-2 text-xl font-medium md:text-2xl"
            >
              Front-End Developer
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground my-4 text-sm md:my-6 md:text-lg"
            >
              Front-End Developer with full-stack experience and a strong
              background in UI &amp; UX design. 3+ years building products used
              by millions, including Vepple (30+ UK universities, 4x
              engagement) and Pavers e-commerce (160+ stores).
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
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
            variants={scaleUp}
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

        {/* GitHub Contributions Calendar */}
        <motion.div
          variants={fadeUp}
          className="mt-12 w-full lg:mt-16"
        >
          <div className="bg-card/40 rounded-2xl border p-4 backdrop-blur-sm sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <svg
                viewBox="0 0 16 16"
                className="text-muted-foreground size-5"
                fill="currentColor"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
              </svg>
              <span className="text-muted-foreground text-sm font-medium">
                Contribution Activity
              </span>
            </div>
            <div className="github-calendar-wrapper overflow-x-auto">
              <GitHubCalendar
                username="jacobreesgit"
                year="last"
                colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                blockSize={12}
                blockMargin={4}
                blockRadius={2}
                fontSize={12}
                showColorLegend={false}
                theme={{
                  light: ['#ebedf0', '#c7f0d2', '#7dd3a0', '#4eba7a', '#2e8b57'],
                  dark: ['#1a1f25', '#1e4d37', '#2d7a55', '#3ea876', '#50d890'],
                }}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
