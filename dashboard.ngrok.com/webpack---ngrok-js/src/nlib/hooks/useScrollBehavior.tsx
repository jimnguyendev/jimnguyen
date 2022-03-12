import * as React from 'react';

import { usePrefersReducedMotion } from './usePrefersReducedMotion';

type ScrollBehavior = 'auto' | 'smooth';

export function useScrollBehavior(): ScrollBehavior {
  const prefersReducedMotion = usePrefersReducedMotion();

  return React.useMemo(
    () => (prefersReducedMotion ? 'auto' : 'smooth'),
    [prefersReducedMotion]
  );
}
