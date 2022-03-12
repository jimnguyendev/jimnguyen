import * as React from 'react';

import { AppDomData } from '../gen2/rpx/model_frontend_app';
import { getEncodedAppDataBytes } from '../utils/getAppElements';
import { injectedConstants, isStatic } from '../utils/injectedConstants';

export const fallbackAppDomData: AppDomData = {
  csrfToken: '',
  dashHostname: 'https://dashboard.ngrok.com',
  federatedIdpHostname: 'https://idp.ngrok.com',
  recaptchaSiteKey: '',
  releaseVersion: injectedConstants.RELEASE_VERSION,
  stripePublicKey: '',
  webHostname: 'https://ngrok.com',
};

const AppDomDataContext = React.createContext<AppDomData>(fallbackAppDomData);

export const useAppDomData = () => React.useContext(AppDomDataContext);

interface AppDomDataProviderProps {
  children: React.ReactNode | ((value: AppDomData) => React.ReactNode);
}

export function AppDomDataProvider({ children }: AppDomDataProviderProps) {
  const value = React.useMemo(() => getAppDomData(), []);

  return (
    <AppDomDataContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </AppDomDataContext.Provider>
  );
}

export function getAppDomData(): AppDomData {
  const app = injectedConstants.APP_ID;
  if (isStatic() || app === '' || app === 'Agent') {
    return fallbackAppDomData;
  }

  const data = getEncodedAppDataBytes('appData', { app });
  return AppDomData.decode(data);
}
