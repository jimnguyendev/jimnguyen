import * as Sentry from '@sentry/react';

import { getAppDomData } from '../../components/AppDomData';
import { injectedConstants, isProdDeploy } from '../injectedConstants';
import type { ReleaseVersionsContext } from './constants';
import { SENTRY_CONTEXT_KEY_RELEASE_VERSIONS } from './constants';

const { APP_VERSION, LIB_VERSION, DEPS_VERSION } = injectedConstants;

const baseIgnoreErrors: string[] = [
  'ResizeObserver loop limit exceeded', // https://stackoverflow.com/a/50387233
  'ResizeObserver loop completed with undelivered notifications.', // https://stackoverflow.com/a/50387233
  "can't access dead object", // https://blog.mozilla.org/addons/2012/09/12/what-does-cant-access-dead-object-mean/
];

interface Props {
  allowUrls?: (string | RegExp)[];
  dsn: string;
  ignoreErrors?: string[];
}

export function setupSentry({ allowUrls, dsn, ignoreErrors }: Props) {
  if (isProdDeploy() === false) {
    return;
  }

  Sentry.init({
    dsn,
    allowUrls,
    release: APP_VERSION,
    ignoreErrors: [...new Set(baseIgnoreErrors.concat(ignoreErrors ?? []))],
  });

  setReleaseVersions();
}

function setReleaseVersions() {
  const { releaseVersion: serverReleaseVersion = '' } = getAppDomData();

  if (!serverReleaseVersion) {
    throw new Error('Error finding application server release version');
  }

  const releaseVersionsContext: ReleaseVersionsContext = {
    app: APP_VERSION,
    clientBuild: injectedConstants.RELEASE_VERSION,
    deps: DEPS_VERSION,
    lib: LIB_VERSION,
    server: serverReleaseVersion,
  };

  Sentry.configureScope(scope => {
    scope.setContext(
      SENTRY_CONTEXT_KEY_RELEASE_VERSIONS,
      releaseVersionsContext
    );
  });
}
