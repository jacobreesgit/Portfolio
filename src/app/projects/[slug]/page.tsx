import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import Noise from '@/components/noise';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

// Custom MDX components for full-bleed images with captions
const mdxComponents = {
  // Override img to support full-bleed styling
  img: (props: { src?: string; alt?: string }) => (
    <span className="not-prose -mx-8 my-12 block sm:-mx-16 lg:-mx-32">
      <Image
        src={props.src || ''}
        alt={props.alt || ''}
        width={1920}
        height={1080}
        unoptimized
        className="w-full rounded-lg"
      />
      {props.alt && (
        <span className="mt-4 block text-center text-sm text-muted-foreground italic">
          {props.alt}
        </span>
      )}
    </span>
  ),
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className={cn('py-16', 'relative')}>
      <Noise />

      <div className="container max-w-4xl relative z-10">
        {/* Back Button */}
        <Button variant="ghost" size="sm" className="mb-8" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 size-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Header Section */}
        <div className="mb-20">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              {project.category}
            </p>
            <h1 className="mt-4 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              {project.title}
            </h1>
            <p className="mt-6 text-2xl text-muted-foreground md:text-3xl">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="font-semibold tracking-wider text-muted-foreground uppercase">
                Year
              </p>
              <p className="mt-2 text-lg font-medium">{project.year}</p>
            </div>
            <div>
              <p className="font-semibold tracking-wider text-muted-foreground uppercase">
                Technologies
              </p>
              <p className="mt-2 text-lg font-medium">
                {project.technologies.slice(0, 3).join(', ')}
              </p>
            </div>
            {project.github && (
              <div>
                <p className="font-semibold tracking-wider text-muted-foreground uppercase">
                  Source
                </p>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 text-lg font-medium hover:text-primary"
                >
                  <Github className="size-4" />
                  GitHub
                </Link>
              </div>
            )}
            {project.link && (
              <div>
                <p className="font-semibold tracking-wider text-muted-foreground uppercase">
                  Live Site
                </p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 text-lg font-medium hover:text-primary"
                >
                  <ExternalLink className="size-4" />
                  Visit
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Image - Full Width */}
      <div className="mb-20">
        <div className="container max-w-7xl">
          <Image
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            unoptimized
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl relative z-10">
        <div className="prose prose-lg mb-16 max-w-none">
          <p className="lead text-xl text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="mb-16">
          <article className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-ol:text-muted-foreground">
            <MDXRemote source={project.content} components={mdxComponents} />
          </article>
        </div>
      </div>
    </section>
  );
}
