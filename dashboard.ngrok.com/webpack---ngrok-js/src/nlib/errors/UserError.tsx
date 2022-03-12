import type { ReactNode } from 'react';

import type { NgrokErrorCode } from '../gen/NgrokErrorCode';
import { ErrorWithRender } from './WithRender';

export interface UserErrorProps {
  enrichedCode: NgrokErrorCode;
  message: string;
  render?: ReactNode;
}

export class UserError extends ErrorWithRender {
  constructor({ enrichedCode, message, render }: UserErrorProps) {
    super({
      enrichedCode,
      message,
      render: render || message,
      preventTelemetry: true,
    });

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, UserError.prototype);
  }
}
