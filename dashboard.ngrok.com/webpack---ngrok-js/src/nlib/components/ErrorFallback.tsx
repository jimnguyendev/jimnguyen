import * as React from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { Alert, Col, Result, Row, Space } from 'antd';
import cx from 'classnames';

import { Button } from './wrapped-antd/Button/Button';
import { ExternalButton } from './ExternalLink';
import { NgrokLogo } from './NgrokLogo';
import { Paragraph } from './wrapped-antd';

function getSupportMessage(errorMessage: string): string {
  return encodeURIComponent(
    `This issue happened when I: \n\nError Message: ${errorMessage}\nUser Agent: ${navigator.userAgent}`
  );
}

const mailtoSupport = (body?: string) =>
  `mailto:support@ngrok.com${body ? `?body=${body}` : ''}`;

export function ErrorFallbackAlert({ error }: FallbackProps) {
  const supportMessage = getSupportMessage(error.message);

  return (
    <Alert
      message="Oops! We had a little trouble on our side. :("
      showIcon
      description={
        <>
          <Paragraph>
            We've piped this problem through our tunnels for our engineers to
            solve!
          </Paragraph>
          <Paragraph strong>Error Details:</Paragraph>
          <pre>{error.message}</pre>
        </>
      }
      type="error"
      action={
        <Space direction="vertical">
          <Button type="primary" size="small" href="/">
            Take me home
          </Button>
          <ExternalButton
            size="small"
            href={mailtoSupport(supportMessage)}
            asNewTab
          >
            Contact Support
          </ExternalButton>
        </Space>
      }
    />
  );
}

type CustomErrorMessage = {
  customErrorMessage?: React.ReactNode;
};

export function ErrorFallbackResult({
  error,
  customErrorMessage,
}: FallbackProps & CustomErrorMessage) {
  const supportMessage = getSupportMessage(error.message);

  return (
    <Result
      status="error"
      title="Oops! We had a little trouble on our side."
      subTitle="We've piped this problem through our tunnels for our engineers to solve!"
      extra={[
        <Button key="go-home" type="primary" href="/">
          Take me home
        </Button>,
        <ExternalButton
          key="contact-support"
          href={mailtoSupport(supportMessage)}
          asNewTab
        >
          Contact Support
        </ExternalButton>,
      ]}
    >
      <Paragraph strong>Error details:</Paragraph>
      <Paragraph>{customErrorMessage || error.message}</Paragraph>
    </Result>
  );
}
export function ErrorFallbackResultFullPage(
  props: FallbackProps & CustomErrorMessage
) {
  return (
    <FullPageErrorWrapper>
      <ErrorFallbackResult {...props} />
    </FullPageErrorWrapper>
  );
}

export function ErrorFallbackResultShort({
  error,
  customErrorMessage,
}: FallbackProps & CustomErrorMessage) {
  const supportMessage = getSupportMessage(error.message);

  return (
    <Result
      status="error"
      title={customErrorMessage || error.message}
      extra={[
        <ExternalButton
          key="contact-support"
          href={mailtoSupport(supportMessage)}
          asNewTab
        >
          Contact Support
        </ExternalButton>,
      ]}
    />
  );
}

export const FullPageErrorWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Row justify="center" className={cx('pt-6')}>
    <Col span={12}>
      <NgrokLogo
        className={cx('block')}
        style={{
          fontSize: '4em',
        }}
      />
      {children}
    </Col>
  </Row>
);
