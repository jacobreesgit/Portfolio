import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export interface ProjectFrontmatter {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  link?: string;
  links?: { label: string; url: string }[];
  image: string;
  year: string;
  featured: boolean;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}

export function getProjectSlugs(): string[] {
  const files = fs.readdirSync(projectsDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as ProjectFrontmatter),
  };
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null)
    .sort((a, b) => {
      // Featured projects first, then by year descending
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }
      return b.year.localeCompare(a.year);
    });
}
