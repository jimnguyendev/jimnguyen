import * as React from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  elementRef: React.RefObject<HTMLElement>;
};

export const ScrollToTop = ({ elementRef }: Props) => {
  const location = useLocation();

  React.useEffect(() => {
    elementRef.current?.scrollTo(0, 0);
  }, [elementRef, location]);

  return null;
};
