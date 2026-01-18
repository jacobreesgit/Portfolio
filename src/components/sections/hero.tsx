'use client';

import { MeshGradient } from '@paper-design/shaders-react';
import { ChevronRight, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

import Noise from '@/components/noise';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeIn, fadeUp, heroContainer, scaleUp } from '@/lib/animations';

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';
  const { resolvedTheme } = useTheme();
  const { isAtLeast } = useMediaQuery();
  const [mounted, setMounted] = useState(false);
  const isDesktop = isAtLeast('lg');

  // Ensure component only renders on client to fetch fresh GitHub data
  useEffect(() => {
    setMounted(true);
  }, []);

  // Light theme colors matching the original gradient
  const lightColors = ['#e0eaff', '#241d9a', '#f75092', '#9f50d3'];
  // Dark theme - richer, more visible colors
  const darkColors = ['#1a1a2e', '#4a148c', '#880e4f', '#311b92'];

  const gradientColors = resolvedTheme === 'dark' ? darkColors : lightColors;

  return (
    <section className="section-padding relative flex flex-col items-center overflow-hidden">
      {/* Mesh Gradient Background */}
      {mounted && (
        <div className="absolute inset-0">
          <MeshGradient
            width="100%"
            height="100%"
            colors={gradientColors}
            distortion={0.8}
            swirl={0.1}
            grainMixer={0}
            grainOverlay={0}
            speed={0.4}
          />
        </div>
      )}
      <motion.div
        variants={fadeIn}
        initial={initial}
        animate="visible"
        className="from-background/60 dark:from-background/30 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent"
      />
      <Noise />
      <motion.div
        className="z-1 container"
        variants={heroContainer}
        initial={initial}
        animate="visible"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Conditional render order: Mobile = Image first, Desktop = Text first */}
          {mounted && !isDesktop && (
            <motion.div variants={scaleUp} className="flex justify-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-white/10 shadow-2xl">
                <Image
                  src="/me.jpeg"
                  alt="Jacob Rees"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          )}

          {/* Text Content */}
          <div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
            >
              Jacob Rees
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground dark:text-foreground mt-2 text-xl font-medium md:text-2xl"
            >
              Front-End Developer
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground dark:text-foreground my-4 text-sm md:my-6 md:text-lg"
            >
              Front-End Developer with full-stack experience and a strong
              background in UI &amp; UX design. 3+ years building products used
              by millions, including Vepple (30+ UK universities, 4x engagement)
              and Pavers e-commerce (160+ stores).
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

          {/* Profile Image - Desktop only (after text for animation order) */}
          {(!mounted || isDesktop) && (
            <motion.div
              variants={scaleUp}
              className="flex justify-center lg:justify-end"
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
          )}
        </div>

        {/* GitHub Contributions Calendar */}
        <motion.div variants={fadeUp} className="mt-12 lg:mt-16">
          <div className="bg-card/40 overflow-hidden rounded-2xl border p-5 backdrop-blur-sm sm:p-8">
            <Link
              href="https://github.com/jacobreesgit"
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-5 inline-flex items-center gap-3 transition-colors hover:opacity-80"
            >
              <svg
                viewBox="0 0 16 16"
                className="text-foreground size-6"
                fill="currentColor"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
              </svg>
              <span className="text-foreground text-lg font-medium underline-offset-4 group-hover:underline md:text-xl">
                My Contribution Activity
              </span>
            </Link>
            <div className="github-calendar-wrapper overflow-x-auto">
              {mounted ? (
                <GitHubCalendar
                  username="jacobreesgit"
                  year="last"
                  colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                  blockSize={12}
                  blockMargin={4}
                  blockRadius={2}
                  fontSize={14}
                  showColorLegend={true}
                  theme={{
                    light: [
                      '#ebedf0',
                      '#c7f0d2',
                      '#7dd3a0',
                      '#4eba7a',
                      '#2e8b57',
                    ],
                    dark: [
                      '#1a1f25',
                      '#1e4d37',
                      '#2d7a55',
                      '#3ea876',
                      '#50d890',
                    ],
                  }}
                  labels={{
                    totalCount: '{{count}} contributions in the last year',
                  }}
                />
              ) : (
                <div className="text-muted-foreground h-[130px] animate-pulse text-base">
                  Loading contributions...
                </div>
              )}
            </div>
            <p className="text-muted-foreground mt-4 text-xs">
              Powered by my forks of{' '}
              <Link
                href="https://github.com/jacobreesgit/react-github-calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground underline underline-offset-2"
              >
                react-github-calendar
              </Link>{' '}
              &{' '}
              <Link
                href="https://github.com/jacobreesgit/react-activity-calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground underline underline-offset-2"
              >
                react-activity-calendar
              </Link>
              , with fixes for caching and responsive scaling.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
