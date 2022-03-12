import type { ValidNgrokErrorCode } from '../gen/NgrokErrorCode';
import { NgrokErrorCode } from '../gen/NgrokErrorCode';

export interface WithEnrichedErrorCode {
  enrichedCode: NgrokErrorCode;
}

export interface WithValidEnrichedErrorCode {
  enrichedCode: ValidNgrokErrorCode;
}

type MaybeWithEnrichedErrorCode = {
  enrichedCode?: NgrokErrorCode;
};

export function getEnrichedErrorCode(
  value: unknown
): ValidNgrokErrorCode | undefined {
  const enrichedErrorCode: NgrokErrorCode =
    (value as MaybeWithEnrichedErrorCode)?.enrichedCode ??
    NgrokErrorCode.Unknown;

  return enrichedErrorCode !== NgrokErrorCode.Unknown
    ? enrichedErrorCode
    : undefined;
}

export const hasValidEnrichedErrorCode = (
  value: unknown
): value is WithValidEnrichedErrorCode => Boolean(getEnrichedErrorCode(value));
