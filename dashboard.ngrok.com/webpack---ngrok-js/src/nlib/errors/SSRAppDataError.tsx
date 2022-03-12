import {
  corpClientSsrAppDataErrorMessage,
  dashClientSsrAppDataErrorMessage,
  NgrokErrorCode,
} from '../gen/NgrokErrorCode';
import type { App } from '../types/app';
import { ErrorWithRender } from './WithRender';

const errorCodeLookup: Record<App, NgrokErrorCode> = {
  Dashboard: NgrokErrorCode.DashClientSsrAppDataError,
  Corp: NgrokErrorCode.CorpClientSsrAppDataError,
  Agent: NgrokErrorCode.Unknown, // TODO(cody): unsupported/unimplemented
};

const messageLookup: Record<App, string> = {
  Dashboard: dashClientSsrAppDataErrorMessage,
  Corp: corpClientSsrAppDataErrorMessage,
  Agent:
    'Could not read server rendered application data. Please refresh the page and try again.', // TODO(cody): unsupported/unimplemented
};

export class SSRAppDataError extends ErrorWithRender {
  constructor(app: App) {
    const message = messageLookup[app];
    super({
      message,
      render: message,
      enrichedCode: errorCodeLookup[app],
      preventTelemetry: false,
    });
  }
}
