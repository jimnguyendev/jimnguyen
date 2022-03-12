import * as React from 'react';
import cx from 'classnames';

import type { App } from '../types/app';
import { Button } from './wrapped-antd/Button/Button';
import { Paragraph } from './wrapped-antd/Paragraph';

interface Props {
  app: App;
}

// A new version of the ngrok dashboard is required to continue. Please refresh the page to update.
export const NewVersionReload = ({ app }: Props) => (
  <>
    <Paragraph>
      A new version of the ngrok {app} is <strong>required</strong> to continue
    </Paragraph>
    <Paragraph>
      <Button
        className={cx('-ml-2', 'text-lg')}
        size="small"
        type="link"
        onClick={() => window.location.reload()}
      >
        Refresh the page
      </Button>
      to update
    </Paragraph>
  </>
);
