import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import CarouselStandard2 from '@/components/carousel-standard-2';
import { ClickableImage } from '@/components/clickable-image';
import { LightboxProvider } from '@/components/lightbox-provider';
import Noise from '@/components/noise';
import { ProjectPageAnimated } from '@/components/project-page-animated';
import { ProjectSidebar } from '@/components/project-sidebar';
import { ImpactMetrics } from '@/components/stats-grid';
import { ThemeAwareCarousel } from '@/components/theme-aware-carousel';
import { ThemeAwareCarousel2 } from '@/components/theme-aware-carousel-2';
import { ThemeAwareImage } from '@/components/theme-aware-image';
import { Button } from '@/components/ui/button';
import { getProjectBySlug, getProjectSlugs } from '@/lib/projects';
import { cn } from '@/lib/utils';

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
  },
  pavers: {
    color1: 'bg-amber-500/15',
    color2: 'bg-orange-400/15',
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
  CarouselStandard2,
  ClickableImage,
  ImpactMetrics,
  ThemeAwareCarousel,
  ThemeAwareCarousel2,
  ThemeAwareImage,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} target="_blank" rel="noopener noreferrer" />
  ),
  img: (props: {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    loading?: 'lazy' | 'eager';
    decoding?: 'async' | 'auto' | 'sync';
  }) => (
    <ClickableImage
      src={props.src || ''}
      alt={props.alt || ''}
      width={props.width}
      height={props.height}
      className={props.className}
      loading={props.loading}
      decoding={props.decoding}
    />
  ),
};

// Helper to extract high-res image URLs from MDX content
function extractHighResImages(
  content: string,
  heroLightboxSrc?: string,
): string[] {
  const images: string[] = [];

  // Add hero lightbox image if exists
  if (heroLightboxSrc) {
    images.push(heroLightboxSrc);
  }

  // Extract all thumbnail images and convert to high-res versions
  const thumbRegex = /\/portfolio\/[^"'\s]+-thumb\.webp/g;
  const thumbMatches = content.match(thumbRegex) || [];

  thumbMatches.forEach((thumb) => {
    const highRes = thumb.replace('-thumb.webp', '.webp');
    if (!images.includes(highRes)) {
      images.push(highRes);
    }
  });

  // Extract explicit lightboxSrc/highResImages from MDX
  const lightboxRegex =
    /(?:lightboxSrc|highResImages)=\{?\["?([^"'\]]+)"?\]?\}?/g;
  let match;
  while ((match = lightboxRegex.exec(content)) !== null) {
    const src = match[1];
    if (src && !images.includes(src)) {
      images.push(src);
    }
  }

  return images;
}

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

  // Generate lightbox version of hero image if it's a WebP in /images/
  const heroLightboxSrc =
    project.image.includes('/images/') && project.image.endsWith('.webp')
      ? project.image.replace('.webp', '-lightbox.webp')
      : undefined;

  // Extract all high-res images to preload after animations
  const preloadImages = extractHighResImages(project.content, heroLightboxSrc);

  return (
    <LightboxProvider>
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

        <ProjectPageAnimated
          backButton={
            <Link
              href="/projects"
              className="group text-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="relative">
                Back to Projects
                <span className="from-foreground to-foreground/30 absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </span>
            </Link>
          }
          sidebar={<ProjectSidebar project={project} />}
          preloadImages={preloadImages}
          mainContent={
            <>
              <div className="mb-12">
                <ClickableImage
                  src={project.image}
                  alt={project.title}
                  showCaption={false}
                  showShadow={false}
                  lightboxSrc={heroLightboxSrc}
                  loading="eager"
                />
              </div>

              {/* Content */}
              <article className="prose prose-lg prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-foreground prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-ol:text-muted-foreground prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 max-w-none">
                <MDXRemote
                  source={project.content}
                  components={mdxComponents}
                />
              </article>
            </>
          }
        />
      </div>
    </LightboxProvider>
  );
}
