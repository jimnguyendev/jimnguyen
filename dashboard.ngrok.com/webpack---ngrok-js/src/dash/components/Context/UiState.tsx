import * as React from 'react';
import { action as mobxAction, observable } from 'mobx';
import { observer } from 'mobx-react-lite';

import { IpRestrictedError } from 'nlib/components/FullPageError';

type AccountStatus = 'noAccount' | 'notMember' | 'authenticated' | 'unknown';

class UiState {
  @observable leftNavCollapsed: boolean = false;

  @observable pageHasLeftNav: boolean = true;

  @observable isIpRestricted: boolean = false;

  @observable accountStatus: AccountStatus = 'unknown';

  @mobxAction toggle_leftNavCollapsed = () => {
    this.leftNavCollapsed = !this.leftNavCollapsed;
  };

  @mobxAction setIsIpRestricted = () => {
    this.isIpRestricted = true;
  };

  @mobxAction setAccountStatus = (value: AccountStatus) => {
    this.accountStatus = value;
  };

  @mobxAction hideLeftNav = () => {
    this.pageHasLeftNav = false;
  };

  @mobxAction showLeftNav = () => {
    this.pageHasLeftNav = true;
  };
}

export type { UiState };

export const UiStateContext = React.createContext<UiState | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode | ((state: UiState) => React.ReactNode);
}

export const UiStateProvider = observer(({ children }: Props) => {
  const state = React.useMemo(() => new UiState(), []);

  if (state.isIpRestricted) {
    return <IpRestrictedError />;
  }

  return (
    <UiStateContext.Provider value={state}>
      {typeof children === 'function' ? children(state) : children}
    </UiStateContext.Provider>
  );
});

UiStateProvider.displayName = 'UiStateProvider';
