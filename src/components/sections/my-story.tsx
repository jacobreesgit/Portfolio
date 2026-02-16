'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

import Noise from '@/components/noise';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { fadeUp, scrollViewport, staggerContainer } from '@/lib/animations';

export default function MyStory() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section className="section-padding relative">
      <Noise />
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl space-y-6"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl tracking-tight lg:text-5xl"
            variants={fadeUp}
          >
            My Story
          </motion.h2>

          <motion.div
            className="text-muted-foreground space-y-6 text-lg leading-relaxed"
            variants={fadeUp}
          >
            <p>
              I&apos;ve been hooked on building things with code since secondary
              school Computer Science. What started as curiosity became a drive
              to make things that work well and feel right to use.
            </p>

            <p>
              After studying Digital Media at Leeds (graduating with a First in
              my{' '}
              <Link
                href="https://waveger.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground decoration-muted-foreground/30 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
              >
                final coding project
              </Link>
              ), I&apos;ve spent the last 3+ years building products and
              managing client relationships across higher education and
              e-commerce. At{' '}
              <Link
                href="https://pavers.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground decoration-muted-foreground/30 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
              >
                Pavers
              </Link>
              , I built accessible component libraries across headless CMS
              architectures powering 160+ retail shops. At Revolution Viewing, I
              worked on{' '}
              <Link
                href="https://vepple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground decoration-muted-foreground/30 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
              >
                Vepple
              </Link>
              , a platform serving 30+ UK universities, while also mentoring
              engineers and supporting customer success through client
              onboarding and demos.
            </p>

            <p>
              What keeps me interested is the mix of visual polish and technical
              problem-solving. Some days I&apos;m tweaking animations and
              getting interactions just right, other days I&apos;m figuring out
              complex logic or tracking down a weird bug.
            </p>

            <p>
              I&apos;m now looking for a role with more technical ownership
              across full-stack and iOS development. I want to build products
              that matter, with a team that cares about doing things properly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
