'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface Metric {
  label: string;
  value: string;
  description?: string;
}

interface ImpactMetricsProps {
  metrics: Metric[];
  className?: string;
}

export function ImpactMetrics({ metrics, className }: ImpactMetricsProps) {
  return (
    <div className={cn('not-prose my-12', className)}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="group relative flex flex-col gap-2 rounded-lg border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-card/80 hover:shadow-lg"
          >
            {/* Metric value */}
            <div className="text-4xl font-bold tabular-nums tracking-tight">
              <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                {metric.value}
              </span>
            </div>

            {/* Metric label */}
            <div className="text-sm font-medium text-muted-foreground">
              {metric.label}
            </div>

            {/* Optional description */}
            {metric.description && (
              <div className="mt-1 text-xs text-muted-foreground/70">
                {metric.description}
              </div>
            )}

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-amber-500 to-orange-400 transition-transform duration-300 group-hover:scale-x-100" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
