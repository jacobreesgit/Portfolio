'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Noise from '@/components/noise';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    value: '3+',
    label: 'Years Professional',
  },
  {
    value: '30+',
    label: 'Universities',
  },
  {
    value: '160+',
    label: 'Stores',
  },
];

export default function WhyWeBegan() {
  return (
    <section className="section-padding relative">
      <Noise />
      <div className="container">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row lg:gap-12">
          {/* Image Section */}
          <div className="relative h-full w-full md:w-[453px]">
            {/* Background gradient circles */}
            <div className="bg-chart-2 absolute top-0 left-0 size-60 -translate-x-1/6 rounded-full opacity-30 blur-[80px] will-change-transform md:opacity-70" />
            <div className="bg-chart-3 absolute right-0 bottom-0 size-60 -translate-x-1/4 translate-y-1/6 rounded-full opacity-50 blur-[80px] will-change-transform md:opacity-70" />

            <div className="relative aspect-square size-full overflow-hidden rounded-xl">
              <Image
                src="/me.jpeg"
                alt="Jacob Rees"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-6 lg:space-y-8">
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-3xl leading-none font-medium tracking-tight lg:text-4xl">
                About Me
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I create intuitive, feature-rich applications that prioritise
                the user experience. With 3+ years of professional experience,
                I&apos;ve built platforms used by millions.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-1 flex-wrap gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="min-w-[120px] flex-1 gap-0 text-center"
                >
                  <CardHeader className="pb-1">
                    <CardTitle className="text-3xl font-medium">
                      {stat.value}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm">
                    {stat.label}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
