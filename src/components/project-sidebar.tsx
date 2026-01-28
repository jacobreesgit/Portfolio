'use client';

import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { fadeUp } from '@/lib/animations';
import type { Project } from '@/lib/projects';

interface ProjectSidebarProps {
  project: Project;
}

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  return (
    <div className="space-y-8 lg:sticky lg:top-8">
      {/* Project Info */}
      <motion.div variants={fadeUp}>
        <p className="text-muted-foreground mb-4 text-xs font-semibold tracking-widest uppercase">
          {project.category}
        </p>
        <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </motion.div>

      {/* Metadata */}
      <motion.div className="space-y-6 border-t pt-8" variants={fadeUp}>
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
        {project.links && project.links.length > 0 ? (
          <div>
            <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-wider uppercase">
              Live Sites
            </p>
            <div className="space-y-2">
              {project.links.map((link: { label: string; url: string }) => (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary flex items-center gap-2 font-medium"
                >
                  <ExternalLink className="size-4" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : project.link ? (
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
        ) : null}
      </motion.div>
    </div>
  );
}
