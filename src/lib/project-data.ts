import {
  Globe,
  Headphones,
  Music,
  MonitorPlay,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react';

export interface ProjectMeta {
  slug: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  tags: string[];
  image: string;
  featured: boolean;
  icon: LucideIcon;
}

// Filter categories matching homepage Skills & Technologies section
export const PROJECT_TAGS = [
  'Front-End',
  'Full-Stack',
  'Mobile',
  'Tools & Design',
] as const;

export type ProjectTag = (typeof PROJECT_TAGS)[number];

/**
 * Single source of truth for project metadata used across the site.
 * For full project content (MDX), use lib/projects.ts which reads from content files.
 */
export const PROJECTS: ProjectMeta[] = [
  {
    slug: 'canoncore',
    title: 'CanonCore',
    category: 'Full-Stack Application',
    description:
      'Google Drive meets Netflix. Visual browsing, drag-and-drop organisation, watch progress, collections others can fork.',
    shortDescription: 'Full-stack media library',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'PostgreSQL',
      'Prisma 7',
    ],
    tags: ['Front-End', 'Full-Stack', 'Tools & Design'],
    image: '/images/canoncore.jpg',
    featured: true,
    icon: MonitorPlay,
  },
  {
    slug: 'vepple',
    title: 'Vepple',
    category: 'Enterprise Platform',
    description:
      'Architected features for virtual campus tour platform serving 30+ UK universities. 4x more pages per session, 12+ pages and 7 min average visits.',
    shortDescription: 'Virtual campus tours',
    technologies: ['Vue.js', 'Pinia', 'Quasar', 'Firebase', 'Mapbox GL'],
    tags: ['Front-End', 'Tools & Design'],
    image: '/images/projects/vepple.jpg',
    featured: true,
    icon: Globe,
  },
  {
    slug: 'pavers',
    title: 'Pavers',
    category: 'E-Commerce',
    description:
      'WCAG-compliant component library and personalisation engine for UK footwear retailer with 160+ stores.',
    shortDescription: 'E-commerce components',
    technologies: ['Shopify Liquid', 'Sanity CMS', 'Algolia', 'jQuery'],
    tags: ['Front-End', 'Tools & Design'],
    image: '/images/projects/pavers.jpg',
    featured: true,
    icon: ShoppingBag,
  },
  {
    slug: 'musiccount',
    title: 'MusicCount',
    category: 'iOS Application',
    description: 'Match your play counts before cleaning up duplicates.',
    shortDescription: 'iOS play count sync',
    technologies: ['Swift 6.1', 'SwiftUI', 'MediaPlayer', 'Swift Testing'],
    tags: ['Mobile'],
    image: '/images/musiccount.png',
    featured: false,
    icon: Music,
  },
  {
    slug: 'waveger',
    title: 'Waveger',
    category: 'Full-Stack Application',
    description:
      'Billboard meets March Madness: Predict the Hot 100, compete for accuracy.',
    shortDescription: 'Music prediction game',
    technologies: [
      'React 18',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Deno Edge Functions',
    ],
    tags: ['Front-End', 'Full-Stack'],
    image: '/images/projects/waveger-hero.png',
    featured: false,
    icon: Headphones,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const SECONDARY_PROJECTS = PROJECTS.filter((p) => !p.featured);
