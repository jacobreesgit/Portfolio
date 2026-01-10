'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TechBadgesProps {
  technologies: string[];
  className?: string;
}

const TechBadges = ({ technologies, className }: TechBadgesProps) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {technologies.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className="rounded-full px-3 py-1 text-sm"
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
};

export { TechBadges };
