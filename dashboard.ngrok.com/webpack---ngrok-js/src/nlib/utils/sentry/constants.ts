export const SENTRY_CONTEXT_KEY_RELEASE_VERSIONS = 'Release Versions';
export const SENTRY_CONTEXT_KEY_ERROR_CONTEXT = 'Error Context';

export type ReleaseVersionsContext = {
  app: string;
  clientBuild: string;
  deps: string;
  lib: string;
  server: string;
};
