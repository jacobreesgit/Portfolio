'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import Noise from '@/components/noise';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import {
  fadeUp,
  fadeUpSmall,
  scrollViewport,
  staggerContainer,
  staggerContainerFast,
} from '@/lib/animations';
import { FEATURED_PROJECTS } from '@/lib/project-data';
import { cn } from '@/lib/utils';

export default function FeaturesGrid() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';

  return (
    <section id="projects" className="section-padding relative">
      <Noise />
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-5xl space-y-3 lg:space-y-4 lg:text-center"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl tracking-tight lg:text-5xl"
            variants={fadeUp}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg leading-snug lg:text-balance"
            variants={fadeUp}
          >
            A selection of professional and personal work showcasing full-stack
            development, enterprise platforms, and e-commerce solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-6"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerContainerFast}
        >
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              image={project.image}
              imageAlt={`${project.title} project`}
              category={project.category}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              className="h-full lg:col-span-2"
            />
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="mt-8 flex justify-center lg:mt-12"
          initial={initial}
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeUp}
        >
          <Button size="lg" variant="outline" className="rounded-full" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  slug: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  className?: string;
}

function ProjectCard({
  slug,
  image,
  imageAlt,
  category,
  title,
  description,
  technologies,
  className,
}: ProjectCardProps) {
  return (
    <motion.div variants={fadeUpSmall} className={className}>
      <Link href={`/projects/${slug}`} className="group block h-full">
        <Card className="hover:border-primary/50 h-full transition-all duration-300 hover:shadow-lg">
          {/* Image Section */}
          <CardContent>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={imageAlt}
                width={800}
                height={600}
                unoptimized
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </CardContent>

          {/* Content Section */}
          <CardHeader className="flex-1">
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
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  className="border-transparent bg-muted text-muted-foreground text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardHeader>
        </Card>
      </Link>
    </motion.div>
  );
}
