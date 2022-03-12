import { SSRAppDataError } from '../errors/SSRAppDataError';
import type { App } from '../types/app';

export const appRootId = 'app';

export const getAppRoot = () => window.document.getElementById(appRootId);

export const appDataId = 'data';

export const getAppDataEl = () => window.document.getElementById(appDataId);

type AppDataDatasetKey = 'appData' | 'pageData';

type Options = {
  ignoreEmpty?: boolean;
  app: App;
};

export function getEncodedAppDataBytes(
  key: AppDataDatasetKey,
  options: Options
): Uint8Array {
  const dataEl = getAppDataEl();
  const data = dataEl?.dataset?.[key] ?? '';
  if (!data && !options?.ignoreEmpty) {
    throw new SSRAppDataError(options.app);
  }
  return Uint8Array.from(atob(data), c => c.charCodeAt(0));
}
