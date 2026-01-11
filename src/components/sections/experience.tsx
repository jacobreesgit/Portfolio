'use client';

import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

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

  const experience = [
    {
      id: 'revolution-viewing',
      period: 'Mar 2023 - Present',
      title: 'Front-End Developer',
      company: 'Revolution Viewing',
      description:
        'Developed Vepple, a virtual experience platform for 30+ UK universities including Imperial College London and Nottingham Trent. Platform drives 4x more pages per session vs standard university websites, with users averaging 12+ pages and 7 minutes per visit. Architected Events System with Firebase real-time chat delivering 108% increase in views per session. Built Explore by Map feature (21 pages/session, 64% engagement increase) and Guided Tours used by 1M+ students. Led mobile navigation overhaul increasing session duration by 41%.',
      technologies:
        'Vue.js, Pinia, Quasar, Firebase, Vitest, Figma, GTM, Google Analytics',
    },
    {
      id: 'pavers',
      period: 'Aug 2022 - Mar 2023',
      title: 'Web Developer',
      company: 'Pavers',
      description:
        'Built front-end solutions for a UK footwear retailer with 160+ stores. Developed a WCAG 2.1 AA-compliant component library using Shopify Liquid and jQuery, enabling content teams to customise pages via Sanity CMS across 5+ brands including Jones Bootmaker and Herring Shoes. Integrated Algolia search driving a 10% increase in search-driven conversions. Combined Lucky Orange with a weather API for location-based recommendations, resulting in 7%+ conversion improvement. Increased front-end test coverage by 40% through Jest-based tests.',
      technologies:
        'Shopify Liquid, Sanity CMS, Bootstrap, jQuery, Algolia, Jest, Lucky Orange, GTM',
    },
    {
      id: 'university-leeds',
      period: '2019 - 2022',
      title: 'BA Digital Media',
      company: 'University of Leeds',
      description:
        'Achieved a 2:1 overall with a First in the final coding project. Built Waveger, a full-stack music chart prediction game that attracted 3,000+ users and 150,000+ views through targeted social media launch strategy.',
      technologies:
        'JavaScript, Python, Flask, Firebase, PostgreSQL, Spotify API',
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
                <Download className="mr-2 size-4" />
                Download CV
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
                <p className="text-muted-foreground/60 text-xs lg:text-sm">
                  <span className="font-medium">Technologies:</span>{' '}
                  {exp.technologies}
                </p>
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
