import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Noise from '@/components/noise';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A selection of professional and personal work by Jacob Rees',
};

const heroProjects = [
  {
    slug: 'canoncore',
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=CanonCore',
    category: 'Full-Stack Application',
    title: 'CanonCore',
    description:
      'Built a full-stack media library with drag-and-drop organisation, Google Drive streaming, and 464+ tests',
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma'],
  },
  {
    slug: 'vepple',
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=Vepple',
    category: 'Enterprise Platform',
    title: 'Vepple',
    description:
      'Led front-end development for virtual campus tour platform serving 30+ UK universities with real-time events, interactive maps, and A/B testing',
    technologies: ['Vue.js', 'Pinia', 'Quasar', 'Firebase', 'Mapbox GL'],
  },
];

const secondaryProjects = [
  {
    slug: 'pavers',
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=Pavers',
    category: 'E-Commerce',
    title: 'Pavers',
    description:
      'Developed WCAG 2.1 AA component library for 160+ store retailer driving 10%+ conversion improvements',
    technologies: ['Shopify Liquid', 'Sanity CMS', 'Algolia', 'jQuery'],
  },
  {
    slug: 'musiccount',
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=MusicCount',
    category: 'iOS Application',
    title: 'MusicCount',
    description:
      'Built native iOS app for syncing play counts across duplicate songs with MusicKit API integration',
    technologies: ['Swift', 'SwiftUI', 'MusicKit', 'Swift Testing'],
  },
  {
    slug: 'waveger',
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=Waveger',
    category: 'University Project',
    title: 'Waveger',
    description:
      'Engineered music chart prediction game achieving First class grade with 3,000+ users and 150,000+ views',
    technologies: ['JavaScript', 'Python', 'Flask', 'Firebase', 'PostgreSQL'],
  },
];

export default function ProjectsPage() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute size-full mask-t-from-50% mask-t-to-100% mask-b-from-50% mask-b-to-90%">
        <div
          className={cn(
            'absolute size-full rounded-full bg-pink-500/15 blur-3xl will-change-transform',
            'top-0 left-0 -translate-y-1/3 md:-translate-x-1/3 md:translate-y-0',
          )}
        />
        <div
          className={cn(
            'absolute size-full rounded-full bg-orange-400/15 blur-3xl will-change-transform',
            'right-0 bottom-0 translate-y-1/3 md:top-0 md:translate-x-1/3 md:-translate-y-0',
          )}
        />
      </div>
      <Noise />
      <div className="relative z-10 container">
        {/* Page Header */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            A selection of professional and personal work
          </p>
        </div>

        {/* Hero Projects Grid - 2 columns */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16">
          {heroProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} size="large" />
          ))}
        </div>

        {/* Secondary Projects Grid - 3 columns */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} size="small" />
          ))}
        </div>
      </div>
    </section>
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
    <Link href={`/projects/${slug}`} className="group">
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
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
