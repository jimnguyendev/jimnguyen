import * as React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import type { WithChildren } from '../types/components';
import { isStatic } from '../utils/injectedConstants';

type Props = WithChildren;

export const AutoRouter = ({ children }: Props) =>
  isStatic() ? (
    <HashRouter
    // hashType="slash"
    // basename="/"
    >
      {children}
    </HashRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
