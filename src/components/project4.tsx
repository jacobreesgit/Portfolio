import React from 'react';

import { cn } from '@/lib/utils';

interface Project4Props {
  className?: string;
}

const Project4 = ({ className }: Project4Props) => {
  return (
    <section className={cn('py-16', className)}>
      <div className="container max-w-4xl">
        {/* Header Section */}
        <div className="mb-20">
          <div className="mb-12">
            <p className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">
              Brand Identity Design
            </p>
            <h1 className="mt-4 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              Pure Pressed
            </h1>
            <p className="text-muted-foreground mt-6 text-2xl md:text-3xl">
              Crafting a fresh, authentic brand identity for a premium
              cold-pressed juice company that celebrates natural wellness.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="text-muted-foreground font-semibold tracking-wider uppercase">
                Creative Director
              </p>
              <p className="mt-2 text-lg font-medium">Maya Chen</p>
            </div>
            <div>
              <p className="text-muted-foreground font-semibold tracking-wider uppercase">
                Industry
              </p>
              <p className="mt-2 text-lg font-medium">Food & Beverage</p>
            </div>
            <div>
              <p className="text-muted-foreground font-semibold tracking-wider uppercase">
                Year
              </p>
              <p className="mt-2 text-lg font-medium">2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image - Full Width */}
      <div>
        <div className="container max-w-7xl">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pressed-juice/devin-avery-BRVqq2uak4E-unsplash.jpg"
            alt="Fresh cold-pressed juice bottles"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export { Project4 };
