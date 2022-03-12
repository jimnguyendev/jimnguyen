import * as React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import cx from 'classnames';

import type { DashFlash } from '../../gen2/rpx/dash';
import { useFlash } from '../../hooks/useFlash';
import type { App } from '../../types/app';
import type { BackAction } from '../BackLink';
import { BackLinkButton } from '../BackLink';
import { Button } from '../wrapped-antd/Button/Button';
import type { AppHeaderShellProps } from './AppShell';
import { AppHeaderShell, AppShell } from './AppShell';
import { Main } from './Main';

export interface Props {
  appHeader?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  flashes?: DashFlash[];
  footer?: React.ReactNode;
  hideBackTop?: boolean;
  leftNav?: React.ReactNode;
  style?: React.CSSProperties;
  windowHeader?: React.ReactNode;
}

export function AppLayout({
  appHeader,
  children,
  className,
  contentClassName,
  flashes,
  footer,
  hideBackTop = false,
  leftNav,
  style,
  windowHeader,
}: Props) {
  useFlash(flashes);

  return (
    <AppShell
      windowHeader={windowHeader}
      leftNav={leftNav}
      style={style}
      className={className}
    >
      {appHeader}
      <Main className={contentClassName} hideBackTop={hideBackTop}>
        {children}
      </Main>
      {footer && (
        <Layout.Footer className={cx('relative', 'z-10', 'flex-initial')}>
          {footer}
        </Layout.Footer>
      )}
    </AppShell>
  );
}

type Path = `/${string}`;
export type BackHref = Path | BackAction;

type AppHeaderProps = AppHeaderShellProps & {
  app: App;
  backHref?: BackHref;
  children?: React.ReactNode;
  hideSideNav?: boolean;
  isSideNavCollapsed?: boolean;
  onToggleSideNav?: () => void;
};

export const AppHeader = ({
  actionButtons,
  app,
  backHref = 'BACK',
  children,
  hideSideNav,
  isSideNavCollapsed,
  onToggleSideNav,
  userEmail,
  userMenuItems,
  ...rest
}: AppHeaderProps) => (
  <AppHeaderShell
    actionButtons={actionButtons}
    userEmail={userEmail}
    userMenuItems={userMenuItems}
    {...rest}
  >
    {!hideSideNav ? (
      <Button
        title={`${isSideNavCollapsed ? 'Expand' : 'Collapse'} navigation menu`}
        icon={
          isSideNavCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
        }
        type="text"
        onClick={onToggleSideNav}
      />
    ) : (
      <BackLinkButton to={backHref} />
    )}
    {children}
  </AppHeaderShell>
);
