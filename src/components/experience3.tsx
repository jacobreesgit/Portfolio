import { Download } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

interface Experience3Props {
  className?: string;
}

const Experience3 = ({ className }: Experience3Props) => {
  const experience = [
    {
      period: 'Mar 2023 - Present',
      title: 'Front-End Developer',
      company: 'Revolution Viewing',
      description:
        'Developed Vepple, a virtual experience platform for 30+ UK universities delivering personalised campus tours, interactive maps, and live events with lead capture. Engineered the front-end using Vue.js, Pinia, and Quasar, with a Figma design system and reusable component library. Architected Events Management System with Firebase real-time chat, 1-second status engine, and timezone-aware scheduling. Built production A/B testing framework reducing bounce rate by 19%. Led mobile navigation overhaul increasing session duration by 41% and mobile engagement by 85%.',
      technologies:
        'Vue.js, Pinia, Quasar, Firebase, Vitest, Figma, GTM, Google Analytics',
    },
    {
      period: 'Aug 2022 - Mar 2023',
      title: 'Web Developer',
      company: 'Pavers',
      description:
        'Built front-end solutions for a UK footwear retailer with 160+ stores. Developed a WCAG 2.1 AA-compliant component library using Shopify Liquid and jQuery, enabling content teams to customise pages via Sanity CMS across 5+ brands including Jones Bootmaker and Herring Shoes. Integrated Algolia search driving a 10% increase in search-driven conversions. Combined Lucky Orange with a weather API for location-based recommendations, resulting in 7%+ conversion improvement. Increased front-end test coverage by 40% through Jest-based tests.',
      technologies:
        'Shopify Liquid, Sanity CMS, Bootstrap, jQuery, Algolia, Jest, Lucky Orange, GTM',
    },
    {
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
        <div className="flex h-fit w-full flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="tracking-loose text-foreground/30 uppercase">
              Professional Journey
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight lg:text-6xl">
              Experience
            </h1>
            <p className="text-foreground/50 mt-10 text-lg">
              3+ years building products used by millions, from virtual campus
              platforms to e-commerce solutions.
            </p>
          </div>
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
        </div>
        <ul className="relative w-full">
          <li className="text-foreground/40 flex justify-between gap-10 border-b pt-15 pb-2 text-sm tracking-tight uppercase lg:text-base">
            <p>Role & Company</p>
            <p>Period</p>
          </li>
          {experience.map((exp, index) => (
            <li
              key={index}
              className="flex justify-between gap-10 border-b py-10 lg:py-15"
            >
              <div className="max-w-2xl">
                <h3 className="mb-2 text-xl font-semibold tracking-tighter lg:text-2xl lg:text-3xl">
                  {exp.title}
                </h3>
                <p className="text-foreground/70 mb-4 text-base font-medium">
                  {exp.company}
                </p>
                <p className="text-foreground/50 mb-3 text-sm lg:text-base">
                  {exp.description}
                </p>
                <p className="text-foreground/40 text-xs lg:text-sm">
                  <span className="font-medium">Technologies:</span>{' '}
                  {exp.technologies}
                </p>
              </div>
              <p className="text-foreground/50 w-fit min-w-28 text-right text-sm uppercase lg:text-base">
                {exp.period}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Experience3 };
