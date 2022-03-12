import type { ValidNgrokErrorCode } from '../gen/NgrokErrorCode';
import { NgrokErrorCode } from '../gen/NgrokErrorCode';
import { excludes } from '../utils/array';
import { hasValidEnrichedErrorCode } from './getEnrichedErrorCode';

export interface ErrorWithPreventTelemetry extends Error {
  preventTelemetry: boolean;
}

const ngrokErrorCodeAllowList: ValidNgrokErrorCode[] = [
  // app ssr app data errors are _fatal_ and should be reported
  NgrokErrorCode.DashClientSsrAppDataError,
  NgrokErrorCode.CorpClientSsrAppDataError,
];

/**
 * @returns true if the error has explicitly marked preventTelemetry true or
 * if the error has a valid ngrok enriched error code
 */
export const preventErrorTelemetry = (error: unknown): boolean =>
  Boolean((error as ErrorWithPreventTelemetry)?.preventTelemetry) === true ||
  (hasValidEnrichedErrorCode(error) &&
    excludes(ngrokErrorCodeAllowList, error.enrichedCode));
