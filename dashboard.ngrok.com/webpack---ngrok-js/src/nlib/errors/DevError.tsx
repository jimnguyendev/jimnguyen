import * as React from 'react';
import { CodeOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import cx from 'classnames';

import { NgrokErrorCode } from '../gen/NgrokErrorCode';
import type { App } from '../types/app';
import { isDevBuild } from '../utils/injectedConstants';
import { ErrorWithRender } from './WithRender';

interface Props {
  app: App;
  message: string;
  render: React.ReactNode;
}

const codeLookup: Record<App, NgrokErrorCode> = {
  Dashboard: NgrokErrorCode.DashClientDevBuildError,
  Corp: NgrokErrorCode.CorpClientDevBuildError,
  Agent: NgrokErrorCode.Unknown, // TODO(cody): unsupported/unimplemented
};

export class DevError extends ErrorWithRender {
  render: React.ReactNode;

  title: React.ReactNode;

  constructor({ app, message, render }: Props) {
    const title = isDevBuild() ? (
      <Typography.Title className={cx('mb-2')} level={5}>
        <CodeOutlined /> DEV ONLY
      </Typography.Title>
    ) : undefined;

    super({
      enrichedCode: codeLookup[app],
      message,
      render,
      preventTelemetry: true,
      title,
    });

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, DevError.prototype);
  }
}
