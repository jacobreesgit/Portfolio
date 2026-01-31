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
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="group border-border/50 bg-card/50 hover:bg-card/80 relative flex flex-col gap-2 rounded-lg border p-5 backdrop-blur-sm transition-colors duration-300 hover:border-amber-500/30 hover:shadow-lg"
          >
            {/* Metric value */}
            <div className="text-4xl font-bold tracking-tight tabular-nums">
              <span className="from-foreground to-foreground/60 bg-gradient-to-br bg-clip-text text-transparent">
                {metric.value}
              </span>
            </div>

            {/* Metric label */}
            <div className="text-muted-foreground text-sm font-medium">
              {metric.label}
            </div>

            {/* Optional description */}
            {metric.description && (
              <div className="text-muted-foreground/70 mt-1 text-xs">
                {metric.description}
              </div>
            )}

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-amber-500 to-orange-400 transition-transform duration-300 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
