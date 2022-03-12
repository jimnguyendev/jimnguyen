import * as React from 'react';

import { NewVersionReload } from '../components/NewVersionReload';
import {
  corpBrowserCodeVersionMismatchMessage,
  dashBrowserCodeVersionMismatchMessage,
  NgrokErrorCode,
} from '../gen/NgrokErrorCode';
import type { App } from '../types/app';
import { ErrorWithRender } from './WithRender';

const enrichedCodeByApp: Record<App, NgrokErrorCode> = {
  Dashboard: NgrokErrorCode.DashBrowserCodeVersionMismatch,
  Corp: NgrokErrorCode.CorpBrowserCodeVersionMismatch,
  Agent: NgrokErrorCode.Unknown, // TODO(cody): unsupported/unimplemented
};

const messageByApp: Record<App, string> = {
  Dashboard: dashBrowserCodeVersionMismatchMessage,
  Corp: corpBrowserCodeVersionMismatchMessage,
  Agent:
    'A new version of the ngrok agent is required to continue. Please refresh the page to update.', // TODO(cody): unsupported/unimplemented
};

export class AppVersionError extends ErrorWithRender {
  app: App;

  render: React.ReactNode;

  constructor(app: App) {
    const message = messageByApp[app];
    const render = <NewVersionReload app={app} />;
    const enrichedCode = enrichedCodeByApp[app];
    super({ enrichedCode, message, preventTelemetry: true, render });

    this.app = app;

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, AppVersionError.prototype);
  }
}
