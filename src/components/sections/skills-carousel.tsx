'use client';

import { ArrowRight, Code, Database, Palette, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Noise from '@/components/noise';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import {
  fadeUp,
  popIn,
  scrollViewport,
  slideInRight,
  staggerContainer,
} from '@/lib/animations';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'frontend',
    icon: Code,
    title: 'Front-End Development',
    description: 'Vue.js, React, Next.js, TypeScript, Tailwind, Sass',
    filterTag: 'Front-End',
    image: {
      src: '/images/skills/front end.png',
      alt: 'Front-End Development',
      width: 400,
      height: 400,
      className: '',
    },
  },
  {
    id: 'fullstack',
    icon: Database,
    title: 'Full-Stack Development',
    description: 'Node.js, PostgreSQL, Prisma, REST APIs, GraphQL',
    filterTag: 'Full-Stack',
    image: {
      src: '/images/skills/full stack.png',
      alt: 'Full-Stack Development',
      width: 400,
      height: 400,
      className: '',
    },
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native iOS apps with Swift, SwiftUI, UIKit, Core Data, and Combine',
    filterTag: 'Mobile',
    image: {
      src: '/images/skills/mobile development.png',
      alt: 'Mobile Development',
      width: 400,
      height: 400,
      className: '',
    },
  },
  {
    id: 'tools',
    icon: Palette,
    title: 'DevOps, Analytics & UI/UX Design',
    description: 'Figma, Docker, Git, Vercel, GTM, Google Analytics',
    filterTag: 'Tools & Design',
    image: {
      src: '/images/skills/ux ui.png',
      alt: 'UX/UI Design',
      width: 400,
      height: 400,
      className: '',
    },
  },
];

export default function FeaturesCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  const handleFeatureClick = (index: number) => {
    setActiveIndex(index);
    api?.scrollTo(index);
  };

  // Listen to carousel changes to update active index
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    onSelect(); // Set initial state

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section id="skills" className="section-padding relative overflow-x-hidden">
      <Noise />
      <div className="container grid gap-8 lg:grid-cols-3 lg:gap-40">
        {/* Left Content */}
        <div className="flex flex-col gap-8 lg:col-span-1">
          {/* Title and Description */}
          <motion.div
            className="space-y-4"
            initial={initial}
            whileInView="visible"
            viewport={scrollViewport}
            variants={fadeUp}
          >
            <h2 className="text-4xl tracking-tight text-balance lg:text-5xl">
              Skills &{' '}
              <span className="text-muted-foreground/80">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-snug">
              From front-end frameworks to full-stack development and native
              mobile apps.
            </p>
          </motion.div>

          {/* Icon Buttons */}
          <motion.div
            className="mx-auto hidden max-w-[155px] grid-cols-2 justify-between gap-5 lg:grid"
            initial={initial}
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={feature.id}
                  onClick={() => handleFeatureClick(index)}
                  variants={popIn}
                  className={cn(
                    `border-input hover:bg-border/50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-sm border transition-all duration-300`,
                    isActive && 'bg-border',
                  )}
                  aria-label={feature.title}
                >
                  <IconComponent className="size-5" strokeWidth={2.1} />
                </motion.button>
              );
            })}
          </motion.div>

          {/* Dots Indicator */}
          <div className="mt-6 hidden flex-1 items-end justify-center gap-1 lg:flex">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={cn(
                  'size-1.5 cursor-pointer rounded-full transition-all duration-300',
                  index === activeIndex
                    ? 'bg-foreground'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50',
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Content - Carousel Cards */}
        <motion.div
          className="relative select-none lg:col-span-2"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={slideInRight}
        >
          {/* Right fade overlay - animated */}
          <div
            className={cn(
              'from-background pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[40%] bg-gradient-to-l to-transparent transition-opacity duration-500 ease-out md:block',
              activeIndex === features.length - 1 ? 'opacity-0' : 'opacity-100',
            )}
          />
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              skipSnaps: false,
            }}
            className="cursor-grab"
          >
            <CarouselContent className="h-full">
              {features.map((feature) => (
                <CarouselItem
                  key={feature.id}
                  className="h-full md:basis-[60%]"
                >
                  <Card className="bg-border border-input aspect-[284/362] h-full !pb-0 transition-all duration-300 hover:shadow-lg lg:aspect-[384/562]">
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight md:text-2xl lg:text-3xl">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-sm md:text-lg">
                        {feature.description}
                      </CardDescription>
                      <Link
                        href={`/projects?filter=${encodeURIComponent(feature.filterTag)}`}
                        className="group/link mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-pink-500 transition-all duration-300 hover:gap-2.5 hover:text-orange-400"
                      >
                        View Projects
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                      </Link>
                    </CardHeader>
                    <CardContent className="relative h-full">
                      <div className="bg-card dark:bg-card-foreground border-input relative h-full overflow-hidden rounded-lg border">
                        <Image
                          src={feature.image.src}
                          alt={feature.image.alt}
                          fill
                          unoptimized
                          className={cn(
                            'object-cover transition-transform duration-300 hover:scale-105',
                            feature.image.className,
                          )}
                        />
                      </div>
                      <div className="to-chart-4 absolute inset-0 bg-gradient-to-b from-transparent from-70%"></div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Mobile Icon Buttons */}
          <motion.div
            className="mx-auto my-8 flex max-w-md justify-between gap-4 lg:hidden"
            initial={initial}
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={feature.id}
                  onClick={() => handleFeatureClick(index)}
                  variants={popIn}
                  className={cn(
                    `border-input hover:bg-border/50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-sm border transition-all duration-300`,
                    isActive && 'bg-border',
                  )}
                  aria-label={feature.title}
                >
                  <IconComponent className="size-5" strokeWidth={2.1} />
                </motion.button>
              );
            })}
          </motion.div>

          {/* Mobile Dots Indicator */}
          <motion.div
            className="flex flex-1 items-end justify-center gap-1 lg:hidden"
            initial={initial}
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
          >
            {features.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleFeatureClick(index)}
                variants={popIn}
                className={cn(
                  'size-1.5 cursor-pointer rounded-full transition-all duration-300',
                  index === activeIndex
                    ? 'bg-foreground'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50',
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
