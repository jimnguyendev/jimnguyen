import { useMatchesMediaQuery } from './useMatchesMediaQuery';

const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

export function usePrefersReducedMotion() {
  return useMatchesMediaQuery(mediaQuery);
}
