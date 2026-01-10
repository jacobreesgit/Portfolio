import { AudioLines } from 'lucide-react';
import type React from 'react';

import { cn } from '@/lib/utils';

interface Projects15dProps {
  className?: string;
}

interface CardSectionProps {
  imageSrc: string;
  label: string;
  title: string;
  className?: string;
}

const CardSection: React.FC<CardSectionProps> = ({
  imageSrc,
  label,
  title,
  className = '',
}) => {
  return (
    <div
      className={`group relative w-full cursor-pointer overflow-hidden rounded-lg ${className}`}
    >
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/20" />

      <div className="absolute inset-0 bottom-12 flex items-end">
        <div className="px-6 text-left text-white sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <p className="mb-2 text-xs font-medium tracking-wider uppercase opacity-80 sm:mb-3 sm:text-sm md:mb-4 md:text-base">
            {label}
          </p>
          <h2 className="max-w-md text-2xl font-light tracking-tight sm:text-3xl md:text-4xl lg:max-w-lg">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

const Projects15d = ({ className }: Projects15dProps) => {
  const cardSections = [
    {
      imageSrc:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg',
      label: 'MERIDIAN FILMS',
      title: 'Coastal Reflections',
    },
    {
      imageSrc:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/carles-rabada-f7UprkNqi08-unsplash.jpg',
      label: 'ZENITH VISUALS',
      title: 'Ethereal Moments',
    },
    {
      imageSrc:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/sam-wermut-FiUuNWxnb3k-unsplash.jpg',
      label: 'NEXUS CREATIVE',
      title: 'Deserted Frontiers',
    },
    {
      imageSrc:
        'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ines-alvarez-fdez-VjRc6HDXJ5s-unsplash.jpg',
      label: 'PRISM STUDIOS',
      title: "Nature's Symphony",
    },
  ];

  return (
    <section className={cn('bg-background py-8 md:py-32', className)}>
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-foreground mb-12 text-left">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:mb-8 lg:text-8xl">
            Explore Our Projects
          </h1>

          <div className="flex items-center">
            <p className="mr-4 text-sm font-medium tracking-wider uppercase opacity-80">
              Our Work
            </p>
            <div className="opacity-60">
              <AudioLines className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Simple 2x2 Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {cardSections.map((section, index) => (
            <CardSection
              key={index}
              imageSrc={section.imageSrc}
              label={section.label}
              title={section.title}
              className="aspect-video"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects15d };
