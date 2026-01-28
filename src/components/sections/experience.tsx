'use client';

import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import {
  fadeUp,
  fadeUpSmall,
  scrollViewport,
  staggerContainer,
  staggerContainerFast,
} from '@/lib/animations';
import { cn } from '@/lib/utils';

interface ExperienceProps {
  className?: string;
}

export default function Experience({ className }: ExperienceProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  const experience: Array<{
    id: string;
    period: string;
    title: string;
    company: string;
    description: React.ReactNode;
    technologies: string;
  }> = [
    {
      id: 'revolution-viewing',
      period: 'Mar 2023 - Present',
      title: 'Front-End Developer',
      company: 'Revolution Viewing',
      description: (
        <>
          Developed{' '}
          <a
            href="https://vepple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground decoration-muted-foreground/50 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
          >
            Vepple
          </a>
          , a virtual experience platform for 30+ UK universities delivering
          personalised campus tours, interactive maps, and live events with lead
          capture. Architected Events Management System with Firebase real-time
          chat, 1-second status engine, and timezone-aware scheduling. Built
          production A/B testing framework with GrowthBook SDK, GDPR-compliant
          tracking, and GTM analytics, reducing bounce rate by 19%. Led mobile
          navigation overhaul increasing session duration by 41% and mobile
          engagement by 85%. Developed custom map UI with Mapbox GL and
          directions API, with map users viewing 68% more pages. Enhanced
          panorama Guided Tour suite with ambassador video integration,
          real-time synchronised transcription, and engagement analytics.
        </>
      ),
      technologies:
        'Vue.js, Pinia, Quasar, Firebase, Vitest, Figma, GTM, Google Analytics, Bitbucket Pipelines',
    },
    {
      id: 'pavers',
      period: 'Aug 2022 - Mar 2023',
      title: 'Web Developer',
      company: 'Pavers',
      description: (
        <>
          Built front-end solutions for{' '}
          <a
            href="https://pavers.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground decoration-muted-foreground/50 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
          >
            Pavers
          </a>
          , a UK footwear retailer with 160+ stores. Developed a WCAG 2.1
          AA-compliant component library using Shopify Liquid and jQuery,
          enabling content teams to customise pages via Sanity CMS across 5+
          brands including Jones Bootmaker and Herring Shoes. Integrated Algolia
          search, improving search relevance and driving a 10% increase in
          search-driven conversions. Combined Lucky Orange with a weather API
          for location-based recommendations, resulting in 7+% conversion.
          Increased front-end test coverage by 40% through Jest-based tests for
          critical user flows.
        </>
      ),
      technologies:
        'Shopify Liquid, Sanity CMS, Bootstrap, jQuery, Algolia, Jest, Lucky Orange, Google Tag Manager',
    },
    {
      id: 'university-leeds',
      period: 'Jul 2022',
      title: 'BA in Digital Media',
      company: 'University of Leeds',
      description: (
        <>
          Achieved a 2:1 overall with a First in the{' '}
          <a
            href="https://waveger.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground decoration-muted-foreground/50 hover:decoration-foreground underline underline-offset-2 transition-all duration-300"
          >
            final coding project
          </a>
          .
        </>
      ),
      technologies: '',
    },
  ];

  return (
    <section className={cn('py-32', className)}>
      <div className="container">
        <motion.div
          className="flex h-fit w-full flex-col justify-between gap-10 lg:flex-row lg:items-center"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          <motion.div className="max-w-xl" variants={fadeUp}>
            <p className="text-muted-foreground/50 tracking-loose uppercase">
              Professional Journey
            </p>
            <h2 className="mt-2 text-4xl tracking-tight lg:text-5xl">
              Experience
            </h2>
            <p className="text-muted-foreground mt-10 text-lg">
              3+ years building products used by millions, from virtual campus
              platforms to e-commerce solutions.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link href="/cv.pdf" target="_blank">
                Download CV
                <Download className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.ul
          className="relative w-full"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainerFast}
        >
          <motion.li
            className="text-muted-foreground/60 flex justify-between gap-10 border-b pt-15 pb-2 text-sm tracking-tight uppercase lg:text-base"
            variants={fadeUpSmall}
          >
            <p>Role & Company</p>
            <p>Period</p>
          </motion.li>
          {experience.map((exp) => (
            <motion.li
              key={exp.id}
              className="flex justify-between gap-10 border-b py-10 lg:py-15"
              variants={fadeUpSmall}
            >
              <div className="max-w-2xl">
                <h3 className="mb-2 text-xl font-semibold tracking-tighter lg:text-2xl lg:text-3xl">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-base font-medium">
                  {exp.company}
                </p>
                <p className="text-muted-foreground/80 mb-3 text-sm lg:text-base">
                  {exp.description}
                </p>
                {exp.technologies && (
                  <p className="text-muted-foreground/60 text-xs lg:text-sm">
                    <span className="font-medium">Technologies:</span>{' '}
                    {exp.technologies}
                  </p>
                )}
              </div>
              <p className="text-muted-foreground w-fit min-w-28 text-right text-sm uppercase lg:text-base">
                {exp.period}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
