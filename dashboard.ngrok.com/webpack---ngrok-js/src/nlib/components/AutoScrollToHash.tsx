import * as React from 'react';
import { useLocation } from 'react-router-dom';

import { useScrollBehavior } from '../hooks/useScrollBehavior';
import { parseNumber } from '../utils/parse/parseNumber';

interface Props {
  disabled?: boolean;
  delay?: number;
}

const DEFAULT_DELAY = 0;

export function AutoScrollToHash({
  disabled = false,
  delay = DEFAULT_DELAY,
}: Props) {
  const { hash } = useLocation();
  const scrollBehavior = useScrollBehavior();
  const actualDelay = React.useMemo(
    () => Math.max(0, parseNumber(delay) ?? DEFAULT_DELAY),
    [delay]
  );

  React.useEffect(() => {
    if (disabled) {
      return () => {};
    }

    const id = hash.replace(/^#/, '');
    let handleId = 0;
    if (id) {
      handleId = window.setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: scrollBehavior });
      }, actualDelay);
    }

    return () => {
      window.clearTimeout(handleId);
    };
  }, [actualDelay, disabled, hash, scrollBehavior]);

  return null;
}
