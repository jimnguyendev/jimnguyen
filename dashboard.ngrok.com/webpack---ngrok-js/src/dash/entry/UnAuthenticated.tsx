import 'nlib/polyfills';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { getAppRoot } from 'nlib/utils/getAppElements';

import { UnAuthenticatedApp } from 'containers/app/UnAuthenticatedApp';
import { setupDashSentry } from 'lib/setupDashSentry';

import 'nlib/theme/antd.less';
import 'nlib/theme/global.less';
import 'tailwindcss/tailwind.css';

setupDashSentry();

ReactDOM.render(
  <React.StrictMode>
    <UnAuthenticatedApp />
  </React.StrictMode>,
  getAppRoot()
);
