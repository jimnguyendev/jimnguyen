import * as React from 'react';

import {
  ErrorFallbackResult,
  ErrorFallbackResultShort,
  FullPageErrorWrapper,
} from './ErrorFallback';

type Props = {
  errorMessage: string;
  customErrorMessage: React.ReactNode;
};

export const FullPageError = ({ errorMessage, ...restProps }: Props) => (
  <FullPageErrorWrapper>
    <ErrorFallbackResult
      error={new Error(errorMessage)}
      resetErrorBoundary={() => undefined}
      {...restProps}
    />
  </FullPageErrorWrapper>
);

export const IpRestrictedError = () => (
  <FullPageErrorWrapper>
    <ErrorFallbackResultShort
      error={
        new Error(
          'Your IP does not match the IP Policy for this Account. Please authenticate from an IP in the correct range or update your IP Restrictions from the ngrok dashboard.'
        )
      }
      resetErrorBoundary={() => undefined}
    />
  </FullPageErrorWrapper>
);
