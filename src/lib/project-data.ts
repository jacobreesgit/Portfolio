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
      'Built a full-stack media library with drag-and-drop organisation, Google Drive streaming, and 464+ tests. Next.js 16, React 19, PostgreSQL.',
    shortDescription: 'Full-stack media library',
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma'],
    tags: ['Front-End', 'Full-Stack', 'Tools & Design'],
    image: '/images/projects/canoncore-hero.png',
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
      'Developed WCAG 2.1 AA component library for 160+ store retailer. Algolia search (+10% conversions), weather-based recommendations (+7% conversion).',
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
    description:
      'Built native iOS app for syncing play counts across duplicate songs with MusicKit API integration.',
    shortDescription: 'iOS play count sync',
    technologies: ['Swift', 'SwiftUI', 'MusicKit', 'Swift Testing'],
    tags: ['Mobile'],
    image: '/images/musiccount.png',
    featured: false,
    icon: Music,
  },
  {
    slug: 'waveger',
    title: 'Waveger',
    category: 'University Project',
    description:
      'Engineered music chart prediction game achieving First class grade. Beta tested with 25 users, 24% satisfaction improvement through iterative UX.',
    shortDescription: 'Music prediction game',
    technologies: ['JavaScript', 'Python', 'Flask', 'Firebase', 'PostgreSQL'],
    tags: ['Front-End', 'Full-Stack'],
    image: '/images/projects/waveger-hero.png',
    featured: false,
    icon: Headphones,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const SECONDARY_PROJECTS = PROJECTS.filter((p) => !p.featured);
