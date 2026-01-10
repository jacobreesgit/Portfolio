'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Noise from '@/components/noise';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const PROJECTS_DATA = [
  {
    id: 1,
    slug: 'canoncore',
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=CanonCore',
    imageAlt: 'CanonCore media library application',
    category: 'Full-Stack Application',
    title: 'CanonCore',
    description:
      'Built a full-stack media library with drag-and-drop organisation, Google Drive streaming, and 464+ tests. Next.js 16, React 19, PostgreSQL.',
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    className: 'lg:col-span-2',
  },
  {
    id: 2,
    slug: 'vepple',
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=Vepple',
    imageAlt: 'Vepple virtual campus tour platform',
    category: 'Enterprise Platform',
    title: 'Vepple',
    description:
      'Architected features for virtual campus tour platform serving 30+ UK universities. Events system, A/B testing, 41% increased session duration.',
    technologies: ['Vue.js', 'Pinia', 'Quasar', 'Firebase'],
    className: 'lg:col-span-2',
  },
  {
    id: 3,
    slug: 'pavers',
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=Pavers',
    imageAlt: 'Pavers e-commerce platform',
    category: 'E-Commerce',
    title: 'Pavers',
    description:
      'Developed WCAG 2.1 AA component library for 160+ store retailer. Algolia search (+10% conversions), weather-based recommendations (+7% conversion).',
    technologies: ['Shopify Liquid', 'Sanity CMS', 'Algolia'],
    className: 'lg:col-span-2',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="projects" className="section-padding relative">
      <Noise />
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-5xl space-y-3 lg:space-y-4 lg:text-center">
          <h2 className="text-4xl tracking-tight lg:text-5xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg leading-snug lg:text-balance">
            A selection of professional and personal work showcasing full-stack
            development, enterprise platforms, and e-commerce solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-6">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-8 flex justify-center lg:mt-12">
          <Button size="lg" variant="outline" className="rounded-full" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
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
    <Link href={`/projects/${slug}`} className={cn('group', className)}>
      <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
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
        <CardHeader>
          <p className="text-muted-foreground text-sm font-medium">{category}</p>
          <CardTitle className="text-xl font-semibold leading-tight">
            {title}
          </CardTitle>
          <p className="text-muted-foreground/70 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
