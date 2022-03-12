import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BookOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Layout, Menu, Space } from 'antd';
import cx from 'classnames';

import { getWebUrl, WebRoutes } from '../../routes/web';
import type { WithStyleProps } from '../../types/components';
import { getScrollbarsStyle } from '../../utils/scrollbarStyle';
import { useAppDomData } from '../AppDomData';
import { ContactSupportButton } from '../ContactSupportLink';
import { ErrorFallbackResultFullPage } from '../ErrorFallback';
import { ExternalButton } from '../ExternalLink';
import { Button, Tooltip } from '../wrapped-antd';

export interface Props extends WithStyleProps {
  children: React.ReactNode;
  leftNav?: React.ReactNode;
  windowHeader?: React.ReactNode;
}

export const AppShell = ({
  children,
  className,
  leftNav,
  style,
  windowHeader,
}: Props) => (
  <div
    className={cx(
      getScrollbarsStyle(),
      'h-screen',
      'min-h-screen',
      'overflow-hidden',
      'flex',
      'flex-col',
      className
    )}
    style={style}
  >
    <ErrorBoundary FallbackComponent={ErrorFallbackResultFullPage}>
      {windowHeader && (
        <header className={cx('flex-initial')}>{windowHeader}</header>
      )}
      <Layout className={cx('flex-auto', 'h-full')}>
        {leftNav}
        <Layout
          className={cx('relative', 'flex', 'flex-col', 'h-full', 'min-h-full')}
        >
          {children}
        </Layout>
      </Layout>
    </ErrorBoundary>
  </div>
);

export interface AppHeaderShellProps extends WithStyleProps {
  actionButtons?: React.ReactNode;
  logoutPath?: string;
  showContactSupport?: boolean;
  userEmail?: string;
  userMenuItems?: React.ReactNode;
}

export function AppHeaderShell({
  actionButtons,
  children,
  className,
  logoutPath = '/logout',
  showContactSupport,
  style,
  userEmail,
  userMenuItems,
}: AppHeaderShellProps & { children?: React.ReactNode }) {
  const showUserMenu = Boolean(userEmail || userMenuItems);
  const appDomData = useAppDomData();
  const docsUrl = getWebUrl(appDomData.webHostname, WebRoutes.Docs);

  return (
    <Layout.Header
      className={cx(
        'sticky',
        'top-0',
        'w-full',
        'z-10',
        'bg-white',
        'border-b',
        'border-gray',
        'leading-initial',
        'py-0',
        'px-5',
        'h-14',
        className
      )}
      style={style}
    >
      <div
        className={cx(
          'flex',
          'items-center',
          'justify-between',
          'h-full',
          'relative'
        )}
      >
        {children}
        <Space>
          {actionButtons}
          {showContactSupport && (
            <Tooltip title="Contact support">
              <ContactSupportButton />
            </Tooltip>
          )}
          <Tooltip title="Open documentation">
            <ExternalButton
              asNewTab
              href={docsUrl}
              icon={<BookOutlined />}
              type="text"
            />
          </Tooltip>
          {showUserMenu && (
            <Dropdown
              trigger={['click']}
              overlay={
                <Menu>
                  {userEmail && (
                    <>
                      <Menu.ItemGroup title={userEmail} />
                      <Menu.Divider />
                    </>
                  )}
                  {userMenuItems}
                  {userEmail && (
                    <Menu.Item key="logout">
                      <a href={logoutPath}>Logout</a>
                    </Menu.Item>
                  )}
                </Menu>
              }
            >
              <Button icon={<UserOutlined />} type="text" />
            </Dropdown>
          )}
        </Space>
      </div>
    </Layout.Header>
  );
}
