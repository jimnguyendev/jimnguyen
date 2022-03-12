import type * as React from 'react';

import type { NgrokErrorCode } from '../gen/NgrokErrorCode';
import type { WithEnrichedErrorCode } from './getEnrichedErrorCode';
import type { ErrorWithPreventTelemetry } from './telemetry';

export interface ErrorWithRenderProps extends WithEnrichedErrorCode {
  message: string;
  render: React.ReactNode;
  preventTelemetry?: boolean;
  title?: React.ReactNode;
}

export class ErrorWithRender extends Error implements WithEnrichedError {
  enrichedCode: NgrokErrorCode;

  render: React.ReactNode;

  title?: React.ReactNode;

  preventTelemetry: boolean;

  constructor({
    enrichedCode,
    message,
    render,
    preventTelemetry = false,
    title,
  }: ErrorWithRenderProps) {
    super(message);
    this.render = render;
    this.enrichedCode = enrichedCode;
    this.title = title;
    this.preventTelemetry = preventTelemetry;
  }
}

export interface WithEnrichedError
  extends ErrorWithPreventTelemetry,
    WithEnrichedErrorCode {
  preventTelemetry: boolean;
  title?: React.ReactNode;
}
