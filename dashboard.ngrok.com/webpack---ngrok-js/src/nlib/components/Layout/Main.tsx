import * as React from 'react';
import { BackTop } from 'antd';
import cx from 'classnames';
import invariant from 'tiny-invariant';

import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import type { WithChildren, WithStyleProps } from '../../types/components';
import { debounceAnimationFrame } from '../../utils/debounceAnimationFrame';
import { AutoScrollToHash } from '../AutoScrollToHash';
import { ScrollToTop } from '../ScrollToTop';

export interface Props extends WithStyleProps, WithChildren {
  disableAutoScrollToHash?: boolean;
  hideBackTop?: boolean;
  scrollToHashDelay?: number;
}

const ContentScrolledContext = React.createContext(false);

export const useContentScrolled = () =>
  React.useContext(ContentScrolledContext);

const MainRefContext = React.createContext<
  React.RefObject<HTMLDivElement> | undefined
>(undefined);

export const useMainRef = () => {
  const ref = React.useContext(MainRefContext);

  invariant(ref, 'main ref not found');

  return ref;
};

export function Main({
  children,
  className,
  disableAutoScrollToHash = false,
  hideBackTop = false,
  scrollToHashDelay,
  style,
}: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [hasMainScrolled, setHasMainScrolled] = React.useState(false);
  const mainRef = React.useRef<HTMLDivElement>(null);
  const [mainEl, setMainEl] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    const { current: main } = mainRef;
    setMainEl(main);
  }, []);

  const handleScroll = debounceAnimationFrame(() => {
    const hasScrolled = (mainRef.current?.scrollTop || 0) > 0;
    if (hasScrolled !== hasMainScrolled) {
      setHasMainScrolled(hasScrolled);
    }
  });

  return (
    <>
      <ScrollToTop elementRef={mainRef} />
      <AutoScrollToHash
        delay={scrollToHashDelay}
        disabled={disableAutoScrollToHash}
      />
      {!hideBackTop && mainEl != null && (
        <BackTop
          duration={prefersReducedMotion ? 0 : 300}
          className={cx('bottom-2', 'right-4')}
          target={() => mainEl}
        />
      )}
      <main
        ref={mainRef}
        onScroll={handleScroll}
        className={cx(
          'overflow-auto',
          'flex-auto',
          'min-h-0',
          'h-full',
          className
        )}
        style={style}
      >
        <ContentScrolledContext.Provider value={hasMainScrolled}>
          <MainRefContext.Provider value={mainRef}>
            {children}
          </MainRefContext.Provider>
        </ContentScrolledContext.Provider>
      </main>
    </>
  );
}
