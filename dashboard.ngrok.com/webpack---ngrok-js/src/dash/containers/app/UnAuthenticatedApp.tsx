import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Col, Row } from 'antd';
import cx from 'classnames';

import { AppDomDataProvider, useAppDomData } from 'nlib/components/AppDomData';
import { AutoRouter } from 'nlib/components/AutoRouter';
import { ErrorFallbackResultFullPage } from 'nlib/components/ErrorFallback';
import { AppLayout } from 'nlib/components/Layout/AppLayout';
import { NgrokLogo } from 'nlib/components/NgrokLogo';
import { getWebUrl, WebRoutes } from 'nlib/routes/web';

import { GrpcProvider } from 'components/Context/Grpc';
import { UiStateProvider } from 'components/Context/UiState';
import {
  UnAuthenticatedStateProvider,
  useUnAuthenticatedState,
} from 'components/Context/UnAuthenticatedState';
import { UnAuthenticatedRoutes } from 'components/Routes/UnAuthenticatedRoutes';

export function UnAuthenticatedApp() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackResultFullPage}>
      <AppDomDataProvider>
        <UiStateProvider>
          <GrpcProvider>
            <AutoRouter>
              <UnAuthenticatedStateProvider>
                <UnAuthenticatedAppLayout>
                  <UnAuthenticatedRoutes />
                </UnAuthenticatedAppLayout>
              </UnAuthenticatedStateProvider>
            </AutoRouter>
          </GrpcProvider>
        </UiStateProvider>
      </AppDomDataProvider>
    </ErrorBoundary>
  );
}
interface UnAuthenticatedAppLayoutProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

function UnAuthenticatedAppLayout({
  children,
  className,
  style,
}: UnAuthenticatedAppLayoutProps) {
  const domData = useAppDomData();
  const state = useUnAuthenticatedState();
  const webUrl = getWebUrl(domData.webHostname, WebRoutes.App);

  return (
    <AppLayout
      flashes={state.flashes}
      style={style}
      className={className}
      contentClassName={cx('pb-20')}
    >
      <Row justify="center">
        <Col flex="354px">
          <Row justify="center" className={cx('mt-20', 'mb-8')}>
            <a href={webUrl}>
              <NgrokLogo className={cx('text-ngrok-blue-6', 'text-12.5')} />
            </a>
          </Row>
          {children}
        </Col>
      </Row>
    </AppLayout>
  );
}
