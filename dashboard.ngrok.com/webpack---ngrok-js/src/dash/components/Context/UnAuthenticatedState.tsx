import * as React from 'react';

import { DashUnauthState } from 'nlib/gen2/rpx/dash';

import { getEncodedAppDataBytes } from 'nlib/utils/getAppElements';

const UnAuthenticatedStateContext = React.createContext<DashUnauthState>(
  DashUnauthState.fromPartial({})
);

export const useUnAuthenticatedState = () =>
  React.useContext<DashUnauthState>(UnAuthenticatedStateContext);

interface Props {
  children: React.ReactNode | ((state: DashUnauthState) => React.ReactNode);
}

function getUnauthState(): DashUnauthState {
  const data = getEncodedAppDataBytes('pageData', {
    ignoreEmpty: true,
    app: 'Dashboard',
  });
  return DashUnauthState.decode(data);
}

export function UnAuthenticatedStateProvider({ children }: Props) {
  const value = React.useMemo(getUnauthState, []);

  return (
    <UnAuthenticatedStateContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </UnAuthenticatedStateContext.Provider>
  );
}
