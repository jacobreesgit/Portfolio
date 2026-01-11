'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import Noise from '@/components/noise';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import {
  fadeUp,
  fadeUpSmall,
  heroContainer,
  scrollViewport,
  staggerContainerFast,
} from '@/lib/animations';
import { PROJECTS } from '@/lib/project-data';
import { cn } from '@/lib/utils';

// First two featured projects shown larger
const heroProjects = PROJECTS.filter((p) => p.featured).slice(0, 2);
// Remaining projects shown smaller
const secondaryProjects = [
  ...PROJECTS.filter((p) => p.featured).slice(2),
  ...PROJECTS.filter((p) => !p.featured),
];

export default function ProjectsPage() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={cn(
            'absolute h-[60vh] w-full rounded-full bg-pink-500/15 blur-3xl will-change-transform',
            'top-0 left-0 -translate-y-1/3 md:-translate-x-1/4',
          )}
        />
        <div
          className={cn(
            'absolute h-[60vh] w-full rounded-full bg-orange-400/15 blur-3xl will-change-transform',
            'right-0 bottom-0 translate-y-1/2 md:translate-x-1/4',
          )}
        />
      </div>
      <Noise />
      <section className="section-padding relative z-10">
        <div className="container">
        {/* Page Header */}
        <motion.div
          className="mx-auto max-w-3xl space-y-4 text-center"
          initial={initial}
          animate="visible"
          variants={heroContainer}
        >
          <motion.h1
            className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
            variants={fadeUp}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg md:text-xl"
            variants={fadeUp}
          >
            A selection of professional and personal work
          </motion.p>
        </motion.div>

        {/* Hero Projects Grid - 2 columns */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainerFast}
        >
          {heroProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} size="large" />
          ))}
        </motion.div>

        {/* Secondary Projects Grid - 3 columns */}
        <motion.div
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainerFast}
        >
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} size="small" />
          ))}
        </motion.div>
        </div>
      </section>
    </div>
  );
}

interface ProjectCardProps {
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  size: 'large' | 'small';
}

function ProjectCard({
  slug,
  image,
  category,
  title,
  description,
  technologies,
  size,
}: ProjectCardProps) {
  return (
    <motion.div variants={fadeUpSmall}>
      <Link href={`/projects/${slug}`} className="group block h-full">
        <Card className="hover:border-primary/50 h-full transition-all duration-300 hover:shadow-lg">
          <CardContent>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={title}
                width={800}
                height={600}
                unoptimized
                className={cn(
                  'w-full object-cover transition-transform duration-300 group-hover:scale-105',
                  size === 'large' ? 'aspect-[4/3]' : 'aspect-[16/9]',
                )}
              />
            </div>
          </CardContent>
          <CardHeader>
            <p className="text-muted-foreground text-sm font-medium">
              {category}
            </p>
            <CardTitle className="text-xl leading-tight font-semibold">
              {title}
            </CardTitle>
            <p className="text-muted-foreground/70 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.slice(0, 4).map((tech) => (
                <Badge
                    key={tech}
                    className="border-transparent bg-muted text-muted-foreground text-xs"
                  >
                  {tech}
                </Badge>
              ))}
              {technologies.length > 4 && (
                <Badge className="border-transparent bg-muted text-muted-foreground text-xs">
                  +{technologies.length - 4}
                </Badge>
              )}
            </div>
          </CardHeader>
        </Card>
      </Link>
    </motion.div>
  );
}
