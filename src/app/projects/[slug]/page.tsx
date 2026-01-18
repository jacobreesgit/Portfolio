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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
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

// Gradient colors per project (color3 is optional middle blob for tall pages)
const projectGradients: Record<
  string,
  { color1: string; color2: string; color3?: string }
> = {
  canoncore: {
    color1: 'bg-blue-500/15',
    color2: 'bg-violet-500/15',
    color3: 'bg-indigo-400/10',
  },
  vepple: {
    color1: 'bg-teal-500/15',
    color2: 'bg-cyan-400/15',
    color3: 'bg-emerald-400/10',
  },
  pavers: {
    color1: 'bg-amber-500/15',
    color2: 'bg-orange-400/15',
    color3: 'bg-yellow-400/10',
  },
  musiccount: {
    color1: 'bg-violet-500/15',
    color2: 'bg-fuchsia-400/15',
    color3: 'bg-pink-400/10',
  },
  waveger: {
    color1: 'bg-emerald-500/15',
    color2: 'bg-green-400/15',
    color3: 'bg-teal-400/10',
  },
};

// Custom MDX components for images with captions
const mdxComponents = {
  img: (props: { src?: string; alt?: string }) => (
    <span className="not-prose my-16 block">
      <Image
        src={props.src || ''}
        alt={props.alt || ''}
        width={1920}
        height={1080}
        unoptimized
        className="w-full rounded-lg"
      />
      {props.alt && (
        <span className="text-muted-foreground mt-4 block text-center text-sm italic">
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

  const gradient = projectGradients[slug] || {
    color1: 'bg-pink-500/15',
    color2: 'bg-orange-400/15',
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={cn(
            gradient.color1,
            'absolute h-[60vh] w-full rounded-full blur-3xl will-change-transform',
            'top-0 left-0 -translate-y-1/3 md:-translate-x-1/4',
          )}
        />
        {/* Middle blob for tall pages */}
        {gradient.color3 && (
          <div
            className={cn(
              gradient.color3,
              'absolute h-[60vh] w-full rounded-full blur-3xl will-change-transform',
              'top-[35%] left-0 md:-translate-x-1/4',
            )}
          />
        )}
        <div
          className={cn(
            gradient.color2,
            'absolute h-[60vh] w-full rounded-full blur-3xl will-change-transform',
            'right-0 bottom-0 translate-y-1/2 md:translate-x-1/4',
          )}
        />
      </div>
      <Noise />

      <section className="relative z-10 py-16">
        <div className="container max-w-7xl">
          {/* Back Button */}
          <Button variant="ghost" size="sm" className="mb-8" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 size-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8 lg:sticky lg:top-8">
                {/* Project Info */}
                <div>
                  <p className="text-muted-foreground mb-4 text-xs font-semibold tracking-widest uppercase">
                    {project.category}
                  </p>
                  <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metadata */}
                <div className="space-y-6 border-t pt-8">
                  <div>
                    <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-wider uppercase">
                      Year
                    </p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-wider uppercase">
                      Technologies
                    </p>
                    <p className="font-medium">
                      {project.technologies.slice(0, 4).join(', ')}
                    </p>
                  </div>
                  {project.github && (
                    <div>
                      <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-wider uppercase">
                        Source
                      </p>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary flex items-center gap-2 font-medium"
                      >
                        <Github className="size-4" />
                        GitHub
                      </Link>
                    </div>
                  )}
                  {project.link && (
                    <div>
                      <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-wider uppercase">
                        Live Site
                      </p>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary flex items-center gap-2 font-medium"
                      >
                        <ExternalLink className="size-4" />
                        Visit
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Hero Image */}
              <div className="mb-16">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  unoptimized
                  className="w-full rounded-lg"
                />
              </div>

              {/* Content */}
              <article className="prose prose-lg prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-ol:text-muted-foreground max-w-none">
                <MDXRemote
                  source={project.content}
                  components={mdxComponents}
                />
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
