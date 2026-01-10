import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  wrapperClassName?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  wrapperClassName = '',
}) => {
  return (
    <div className={cn('', wrapperClassName)}>
      <Link
        href="/"
        className={cn(
          'text-foreground text-xl font-bold tracking-tight',
          className,
        )}
      >
        Jacob Rees
      </Link>
    </div>
  );
};

export default Logo;
