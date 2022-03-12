import * as React from 'react';
import { Link } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
import { Card, Divider, Form, Row, Typography } from 'antd';
import cx from 'classnames';

import { DashAuthClientImpl } from 'nlib/gen2/rpx/dash';

import { GoogleColored } from 'nlib/components/Icons/GoogleColored';
import { LinkButton } from 'nlib/components/LinkButton';
import {
  Button,
  Input,
  Paragraph,
  PasswordInput,
} from 'nlib/components/wrapped-antd';
import { UnauthRoutes } from 'nlib/routes/dash';
import page from 'nlib/theme/style-variables/page.less';

import { useGrpc } from 'components/Context/Grpc';
import type { ICreateHandler } from 'components/Table/GenericForm';
import { GenericForm } from 'components/Table/GenericForm';

interface FormValues {
  email: string;
  password: string;
}

const fieldName = (name: keyof FormValues): string => name;

export function LoginPage() {
  const grpc = useGrpc();

  const login: ICreateHandler<FormValues, void> = async ({
    email,
    password,
  }) => {
    const { postLoginPath } = await new DashAuthClientImpl(grpc).Login({
      email,
      password,
    });
    window.location.href = postLoginPath;
  };

  return (
    <div className={page.xsmallWidth}>
      <Card>
        <Typography.Title className={cx('text-center')} level={2}>
          Log in
        </Typography.Title>
        <GenericForm<FormValues>
          layout="vertical"
          submitText="Log in"
          submitButtonProps={{ block: true }}
          successMsg="Logged in! Redirecting..."
          handleSubmit={login}
          preventReset
        >
          <Form.Item
            name={fieldName('email')}
            label="E-mail"
            rules={[{ required: true, message: 'Please enter an e-mail' }]}
          >
            <Input autoFocus autoComplete="email" />
          </Form.Item>
          <Form.Item
            name={fieldName('password')}
            label="Password"
            rules={[{ required: true, message: 'Please enter a password' }]}
          >
            <PasswordInput autoComplete="current-password" />
          </Form.Item>
        </GenericForm>

        <Link to={UnauthRoutes.PasswordReset}>I forgot my password</Link>

        <Divider>or</Divider>

        <Button
          href={UnauthRoutes.LoginGithub}
          icon={<GithubOutlined />}
          block
          className={cx('mb-2')}
        >
          Log in with Github
        </Button>
        <Button href={UnauthRoutes.LoginGoogle} icon={<GoogleColored />} block>
          Log in with Google
        </Button>
      </Card>

      <Row justify="center" className={cx('mt-4')}>
        <Paragraph>Don't have an account?</Paragraph>
      </Row>
      <Row justify="center">
        <LinkButton to={UnauthRoutes.Signup}>Sign up for free!</LinkButton>
      </Row>
    </div>
  );
}
