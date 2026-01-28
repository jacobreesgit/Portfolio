'use client';

import { Code, Database, Palette, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';

import Noise from '@/components/noise';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import {
  fadeUp,
  fadeUpSmall,
  heroContainer,
  staggerContainerFast,
} from '@/lib/animations';
import { PROJECT_TAGS, PROJECTS } from '@/lib/project-data';
import { cn } from '@/lib/utils';

// Map tags to icons (matching homepage skills-carousel)
const tagIcons = {
  'Front-End': Code,
  'Full-Stack': Database,
  Mobile: Smartphone,
  'Tools & Design': Palette,
} as const;

// Grid class helpers (hoisted for performance)
const getCompactGridClasses = (count: number) => {
  if (count === 1) return 'grid-cols-1 max-w-2xl mx-auto';
  if (count === 2) return 'grid-cols-1 md:grid-cols-2';
  return 'grid-cols-1 md:grid-cols-3';
};

const getHeroGridClasses = (count: number) => {
  if (count === 1) return 'grid-cols-1 max-w-2xl mx-auto';
  return 'grid-cols-1 md:grid-cols-2';
};

const getSecondaryGridClasses = (count: number) => {
  if (count === 1) return 'grid-cols-1 max-w-md mx-auto';
  if (count === 2) return 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto';
  return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
};

export default function ProjectsPage() {
  return (
    <Suspense fallback={<ProjectsPageSkeleton />}>
      <ProjectsPageContent />
    </Suspense>
  );
}

function ProjectsPageSkeleton() {
  return (
    <div className="relative overflow-hidden">
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
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              Projects
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              A selection of professional and personal work
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="bg-muted/30 h-10 w-64 animate-pulse rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectsPageContent() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? 'visible' : 'hidden';
  const searchParams = useSearchParams();
  const router = useRouter();

  // Track if initial animation has completed to prevent re-animation on filter change
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    // Mark as animated after initial render
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1200); // After all stagger animations complete
    return () => clearTimeout(timer);
  }, []);

  // Use 'visible' initial state after first animation to prevent re-animation
  const gridInitial = hasAnimated ? 'visible' : initial;

  // Read filter from URL query param
  const filterParam = searchParams.get('filter');
  const selectedTag = PROJECT_TAGS.includes(
    filterParam as (typeof PROJECT_TAGS)[number],
  )
    ? filterParam
    : null;

  // Update URL when filter changes
  const setSelectedTag = useCallback(
    (tag: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (tag) {
        params.set('filter', tag);
      } else {
        params.delete('filter');
      }
      router.push(`/projects?${params.toString()}`, { scroll: false });
    },
    [searchParams, router],
  );

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === null) return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(selectedTag));
  }, [selectedTag]);

  // Determine layout mode based on filtered count
  const totalFiltered = filteredProjects.length;
  const useCompactLayout = totalFiltered <= 3;

  // For compact layout: all projects in single adaptive grid
  // For normal layout: split into hero (featured) and secondary
  const heroProjects = useCompactLayout
    ? []
    : filteredProjects.filter((p) => p.featured).slice(0, 2);
  const secondaryProjects = useCompactLayout
    ? filteredProjects
    : [
        ...filteredProjects.filter((p) => p.featured).slice(2),
        ...filteredProjects.filter((p) => !p.featured),
      ];

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

          {/* Filter Buttons */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={initial}
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            <motion.div
              className="flex flex-wrap items-center justify-center gap-2"
              variants={fadeUp}
            >
              <button
                onClick={() => setSelectedTag(null)}
                aria-pressed={selectedTag === null}
                className={cn(
                  'flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ease-out active:scale-95',
                  selectedTag === null
                    ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/25'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border-border/50 border hover:scale-[1.02]',
                )}
              >
                All
              </button>
              {PROJECT_TAGS.map((tag) => {
                const Icon = tagIcons[tag];
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    aria-pressed={isActive}
                    className={cn(
                      'flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ease-out active:scale-95',
                      isActive
                        ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/25'
                        : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border-border/50 border hover:scale-[1.02]',
                    )}
                  >
                    <Icon className="size-4" />
                    {tag}
                  </button>
                );
              })}
            </motion.div>
          </motion.div>

          {filteredProjects.length > 0 ? (
            <>
              {/* Compact Layout - Single adaptive grid for ≤3 items */}
              {useCompactLayout && (
                <motion.div
                  className={cn(
                    'mt-12 grid gap-6 lg:mt-16',
                    getCompactGridClasses(totalFiltered),
                  )}
                  initial={gridInitial}
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.7,
                      },
                    },
                  }}
                >
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      {...project}
                      size={totalFiltered === 1 ? 'large' : 'medium'}
                    />
                  ))}
                </motion.div>
              )}

              {/* Normal Layout - Hero + Secondary grids for 4+ items */}
              {!useCompactLayout && (
                <>
                  {/* Hero Projects Grid */}
                  {heroProjects.length > 0 && (
                    <motion.div
                      className={cn(
                        'mt-12 grid gap-6 lg:mt-16',
                        getHeroGridClasses(heroProjects.length),
                      )}
                      initial={gridInitial}
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.7,
                          },
                        },
                      }}
                    >
                      {heroProjects.map((project) => (
                        <ProjectCard
                          key={project.slug}
                          {...project}
                          size="large"
                        />
                      ))}
                    </motion.div>
                  )}

                  {/* Secondary Projects Grid */}
                  {secondaryProjects.length > 0 && (
                    <motion.div
                      className={cn(
                        'grid gap-6',
                        getSecondaryGridClasses(secondaryProjects.length),
                        heroProjects.length > 0 ? 'mt-8' : 'mt-12 lg:mt-16',
                      )}
                      initial={gridInitial}
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: heroProjects.length > 0 ? 0.9 : 0.7,
                          },
                        },
                      }}
                    >
                      {secondaryProjects.map((project) => (
                        <ProjectCard
                          key={project.slug}
                          {...project}
                          size="small"
                        />
                      ))}
                    </motion.div>
                  )}
                </>
              )}
            </>
          ) : (
            <motion.div
              className="mt-16 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-medium">No Projects Found</h3>
              <p className="text-muted-foreground mt-2 max-w-md">
                No projects match this category. Try selecting a different
                filter.
              </p>
              <button
                onClick={() => setSelectedTag(null)}
                className="mt-4 cursor-pointer rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-2 text-sm font-medium text-white shadow-lg shadow-pink-500/25 transition-all hover:shadow-xl hover:shadow-pink-500/30"
              >
                View All Projects
              </button>
            </motion.div>
          )}
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
  size: 'large' | 'medium' | 'small';
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
  const aspectClass =
    size === 'large'
      ? 'aspect-[4/3]'
      : size === 'medium'
        ? 'aspect-[3/2]'
        : 'aspect-[4/3]';

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
                className={cn(
                  'w-full object-cover transition-transform duration-300 group-hover:scale-105',
                  aspectClass,
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
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  className="bg-muted text-muted-foreground border-transparent text-xs"
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
