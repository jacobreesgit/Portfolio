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
              ), I&apos;ve spent the last 3+ years as a Front-End Developer
              working on products used by millions. At{' '}
              <Link
                href="https://pavers.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground decoration-muted-foreground/30 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
              >
                Pavers
              </Link>
              , I developed accessible component libraries powering 160+ retail
              stores. At Revolution Viewing, I built{' '}
              <Link
                href="https://vepple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground decoration-muted-foreground/30 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
              >
                Vepple
              </Link>
              , a platform serving 30+ UK universities, architecting everything
              from real-time event systems to A/B testing frameworks.
            </p>

            <p>
              What I love about this work is the variety. One day I&apos;m
              refining a micro-interaction until it feels perfect; the next
              I&apos;m solving a complex state management problem or debugging a
              tricky edge case. That blend of craft and problem-solving keeps me
              engaged.
            </p>

            <p>
              I&apos;m now looking for a role with more technical ownership and
              the opportunity to grow further into full-stack development. I
              want to build products that matter, with a team that cares about
              doing things properly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
