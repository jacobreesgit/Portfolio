'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface AnimationContextType {
  isAnimationComplete: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  isAnimationComplete: true,
});

export function useAnimationComplete() {
  return useContext(AnimationContext);
}

interface AnimationProviderProps {
  children: React.ReactNode;
  duration?: number;
}

export function AnimationProvider({
  children,
  duration = 1200
}: AnimationProviderProps) {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimationContext.Provider value={{ isAnimationComplete }}>
      {children}
    </AnimationContext.Provider>
  );
}
