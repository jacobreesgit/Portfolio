import {
  Box,
  Globe,
  Headphones,
  Music,
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
  image: string;
  featured: boolean;
  icon: LucideIcon;
}

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
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=CanonCore',
    featured: true,
    icon: Box,
  },
  {
    slug: 'vepple',
    title: 'Vepple',
    category: 'Enterprise Platform',
    description:
      'Architected features for virtual campus tour platform serving 30+ UK universities. Events system, A/B testing, 41% increased session duration.',
    shortDescription: 'Virtual campus tours',
    technologies: ['Vue.js', 'Pinia', 'Quasar', 'Firebase', 'Mapbox GL'],
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=Vepple',
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
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=Pavers',
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
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=MusicCount',
    featured: false,
    icon: Music,
  },
  {
    slug: 'waveger',
    title: 'Waveger',
    category: 'University Project',
    description:
      'Engineered music chart prediction game achieving First class grade with 3,000+ users and 150,000+ views.',
    shortDescription: 'Music prediction game',
    technologies: ['JavaScript', 'Python', 'Flask', 'Firebase', 'PostgreSQL'],
    image: 'https://placehold.co/800x600/1a1a2e/FFFFFF?text=Waveger',
    featured: false,
    icon: Headphones,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const SECONDARY_PROJECTS = PROJECTS.filter((p) => !p.featured);
