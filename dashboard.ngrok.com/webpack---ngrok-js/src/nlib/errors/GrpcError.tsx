import * as React from 'react';
import { grpc as grpcWeb } from '@improbable-eng/grpc-web';

import { ContactSupportLink } from '../components/ContactSupportLink';
import { NewTabLink } from '../components/ExternalLink';
import { Paragraph } from '../components/wrapped-antd/Paragraph';
import {
  corpClientInternalServerErrorMessage,
  dashClientInternalServerErrorMessage,
  NgrokErrorCode,
  ngrokErrorCodeFromString,
} from '../gen/NgrokErrorCode';
import type { App } from '../types/app';
import { ngrokStatusHref } from '../utils/links';
import { ErrorWithRender } from './WithRender';

export const HEADER_ENRICHED_ERROR_CODE = 'ngrok-enriched-error-code';
export const HEADER_TRACE_ID = 'ngrok-trace-id';

export interface GrpcErrorOptions {
  app: App;
  customParseGrpcError?: CustomParseGrpcError;
}

export interface TsProtoError extends Error {
  code: grpcWeb.Code;
  metadata: grpcWeb.Metadata;
}

export class GrpcError extends ErrorWithRender {
  grpcCode: grpcWeb.Code;

  traceId: string;

  grpcError: TsProtoError;

  constructor(error: TsProtoError, options: GrpcErrorOptions) {
    const { enrichedCode, message, preventTelemetry, render } = parseGrpcError({
      error,
      ...options,
    });

    super({
      enrichedCode,
      message,
      preventTelemetry,
      render,
    });

    this.grpcCode = error.code;
    this.grpcError = error;
    this.traceId = getHeaderFromError(error, HEADER_TRACE_ID);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GrpcError.prototype);
  }
}

// we don't expect there to be more than one entry in each header list
const getHeaderFromError = (error: TsProtoError, key: string): string =>
  (error.metadata.headersMap[key] || [])[0] ?? '';

interface CustomParseGrpcErrorReturn {
  message: string;
  render?: React.ReactNode;
  preventTelemetry?: boolean;
}

export type CustomParseGrpcError = (
  error: TsProtoError,
  enrichedCode: NgrokErrorCode
) => CustomParseGrpcErrorReturn;

export interface ParseGrpcErrorReturn {
  enrichedCode: NgrokErrorCode;
  message: string;
  render: React.ReactNode;
  preventTelemetry: boolean;
}

interface ParseGrpcErrorProps {
  app: App;
  customParseGrpcError?: CustomParseGrpcError;
  error: TsProtoError;
}

const internalServerErrorCodeLookup: Record<App, NgrokErrorCode> = {
  Dashboard: NgrokErrorCode.DashClientInternalServerError,
  Corp: NgrokErrorCode.CorpClientInternalServerError,
  Agent: NgrokErrorCode.Unknown, // TODO(cody): unsupported/unimplemented
};

const internalServerErrorMessageLookup: Record<App, string> = {
  Dashboard: dashClientInternalServerErrorMessage,
  Corp: corpClientInternalServerErrorMessage,
  Agent: 'Internal server error', // TODO(cody): unsupported/unimplemented
};

const internalServerError = (app: App): ParseGrpcErrorReturn => ({
  enrichedCode: internalServerErrorCodeLookup[app],
  message: internalServerErrorMessageLookup[app],
  render: <InternalServerError app={app} />,
  preventTelemetry: false, // always send telemetry for internal server errors
});

function parseGrpcError({
  app,
  customParseGrpcError,
  error,
}: ParseGrpcErrorProps): ParseGrpcErrorReturn {
  switch (error.code) {
    case grpcWeb.Code.Unknown:
    case grpcWeb.Code.Internal:
    case grpcWeb.Code.Unavailable:
      return internalServerError(app);
    default:
    // fallthrough
  }

  if (error.message?.match(/Response closed without headers/i)) {
    return internalServerError(app);
  }

  const enrichedCode = ngrokErrorCodeFromString(
    getHeaderFromError(error, HEADER_ENRICHED_ERROR_CODE)
  );

  const isInternalServerError =
    enrichedCode === NgrokErrorCode.DashClientInternalServerError ||
    enrichedCode === NgrokErrorCode.CorpClientInternalServerError;
  if (isInternalServerError) {
    return internalServerError(app);
  }

  const {
    message: customMessage,
    render,
    preventTelemetry: customPreventTelemetry,
  } = customParseGrpcError?.(error, enrichedCode) ?? {};
  const message = customMessage || error.message;
  // assume that by default we don't want to send telemetry for this grpc error
  // unless it's overwritten by the customParseGrpcError
  const preventTelemetry =
    typeof customPreventTelemetry === 'boolean' ? customPreventTelemetry : true;

  return {
    enrichedCode,
    message: message || error.message,
    render: render || message,
    preventTelemetry,
  };
}

function InternalServerError({ app }: { app: App }) {
  const contact =
    app === 'Corp' ? (
      'the frontend team'
    ) : (
      <ContactSupportLink>support</ContactSupportLink>
    );

  return (
    <>
      <Paragraph>Internal Server Error.</Paragraph>
      <Paragraph>Please refresh the page and try again.</Paragraph>
      <Paragraph>
        If the problem persists, please check our{' '}
        <NewTabLink href={ngrokStatusHref}>status page</NewTabLink> or contact{' '}
        {contact}.
      </Paragraph>
    </>
  );
}
