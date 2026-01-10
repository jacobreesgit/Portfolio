import { MapPin } from 'lucide-react';
import Image from 'next/image';

import Noise from '@/components/noise';

const stats = [
  { number: '3+', label: 'Years Professional' },
  { number: '30+', label: 'Universities' },
  { number: '160+', label: 'Stores' },
];

export default function AboutHero() {
  return (
    <section className="section-padding relative">
      <Noise />
      <div className="bigger-container">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:gap-16">
          {/* Profile Image */}
          <div className="relative h-72 w-72 shrink-0 overflow-hidden rounded-2xl border md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image
              src="/me.jpeg"
              alt="Jacob Rees"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-medium tracking-tighter md:text-6xl md:leading-none lg:text-7xl">
              Jacob Rees
            </h1>
            <p className="text-muted-foreground mt-2 text-xl md:text-2xl">
              Front-End Developer
            </p>
            <p className="text-muted-foreground mt-3 flex items-center justify-center gap-1.5 md:justify-start">
              <MapPin className="size-4" />
              Durham, England
            </p>

            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-3 gap-6 lg:mt-12 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="border-input border-b pb-4">
                  <div className="text-2xl font-medium md:text-3xl lg:text-4xl">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground mt-1 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
