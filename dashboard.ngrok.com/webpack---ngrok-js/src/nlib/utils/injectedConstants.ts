import type { App } from '../types/app';

// these injected via the bundler
declare const APP_ID: App | '' | undefined;
declare const APP_VERSION: string | undefined;
declare const BUILD_ENV: 'development' | 'production' | undefined;
declare const DEPS_VERSION: string | undefined;
declare const IS_STATIC: boolean | undefined;
declare const LIB_VERSION: string | undefined;
declare const RELEASE_VERSION: string | undefined;
declare const IS_PROD_DEPLOY: boolean | undefined;
declare const SILENCE_DEV_WARNINGS: boolean | undefined;

export const injectedConstants = {
  APP_ID: typeof APP_ID === 'string' ? APP_ID : '',
  APP_VERSION: typeof APP_VERSION === 'string' ? APP_VERSION : '',
  BUILD_ENV: typeof BUILD_ENV === 'string' ? BUILD_ENV : 'development',
  DEPS_VERSION: typeof DEPS_VERSION === 'string' ? DEPS_VERSION : '',
  IS_STATIC: typeof IS_STATIC === 'boolean' ? IS_STATIC : false,
  LIB_VERSION: typeof LIB_VERSION === 'string' ? LIB_VERSION : '',
  RELEASE_VERSION: typeof RELEASE_VERSION === 'string' ? RELEASE_VERSION : '',
  IS_PROD_DEPLOY: typeof IS_PROD_DEPLOY === 'boolean' ? IS_PROD_DEPLOY : false,
  SILENCE_DEV_WARNINGS:
    typeof SILENCE_DEV_WARNINGS === 'boolean' ? SILENCE_DEV_WARNINGS : false,
};

export const isStatic = (): boolean => Boolean(injectedConstants.IS_STATIC);

export const isProdBuild = (): boolean =>
  injectedConstants.BUILD_ENV === 'production';

export const isDevBuild = (): boolean =>
  injectedConstants.BUILD_ENV === 'development';

export const showDevWarnings = (): boolean =>
  isDevBuild() && Boolean(injectedConstants.SILENCE_DEV_WARNINGS) === false;

export const isProdDeploy = (): boolean =>
  Boolean(injectedConstants.IS_PROD_DEPLOY);
