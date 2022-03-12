import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
import { Button, Card, PageHeader, Row, Typography } from 'antd';
import cx from 'classnames';

import type { DashAuthSignupReq } from 'nlib/gen2/rpx/dash';
import { DashAuthClientImpl } from 'nlib/gen2/rpx/dash';

import { useAppDomData } from 'nlib/components/AppDomData';
import { GoogleColored } from 'nlib/components/Icons/GoogleColored';
import { LinkButton } from 'nlib/components/LinkButton';
import { Paragraph } from 'nlib/components/wrapped-antd';
import { Divider } from 'nlib/components/wrapped-antd/Divider/Divider';
import { Form } from 'nlib/components/wrapped-antd/Form';
import { Input, PasswordInput } from 'nlib/components/wrapped-antd/Input/Input';
import { UnauthRoutes } from 'nlib/routes/dash';
import page from 'nlib/theme/style-variables/page.less';

import { useGrpc } from 'components/Context/Grpc';
import { Recaptcha } from 'components/ReCaptcha';
import type { ICreateHandler } from 'components/Table/GenericForm';
import { GenericForm } from 'components/Table/GenericForm';
import {
  AcceptTermsAndPrivacyCheckbox,
  TermsAndPrivacyCheckboxFormRules,
} from 'features/signup/AcceptTermsAndConditions';
import styles from 'features/unauth/styles.less';

type FormValues = Omit<DashAuthSignupReq, 'recaptchaResponse'>;

const initialValues = (): FormValues => ({
  name: '',
  email: '',
  password: '',
  acceptedTermsAndPrivacy: false,
});

const fieldName = (name: keyof FormValues): string => name;

export function SignupPage() {
  const navigate = useNavigate();
  const { recaptchaSiteKey, webHostname } = useAppDomData();
  const grpc = useGrpc();
  const [recaptcha, setRecatpcha] = React.useState<string>('');
  const [resetCaptcha, setResetCaptcha] = React.useState<() => void>();

  const getResetCaptcha = React.useCallback(
    (reset: () => void) => setResetCaptcha(() => reset),
    [setResetCaptcha]
  );

  const signup: ICreateHandler<FormValues> = async (value: FormValues) => {
    const name = value.name?.trim();
    const email = value.email?.trim();
    const { password, acceptedTermsAndPrivacy } = value;

    try {
      await new DashAuthClientImpl(grpc).Signup({
        name,
        email,
        password,
        recaptchaResponse: recaptcha,
        acceptedTermsAndPrivacy,
      });
      window.location.href = '/';
    } catch (error) {
      if (resetCaptcha) {
        resetCaptcha();
      }
      throw error;
    }
  };

  return (
    <div className={page.xsmallWidth}>
      <Card>
        <PageHeader
          className={styles.pageHeader}
          onBack={() => navigate(UnauthRoutes.Login)}
          title={<Typography.Title level={3}>Sign Up</Typography.Title>}
        />
        <GenericForm<FormValues>
          layout="vertical"
          submitText="Sign Up"
          successMsg="Signed up! Redirecting..."
          submitButtonProps={{ block: true }}
          handleSubmit={signup}
          initialValues={initialValues()}
          preventReset
        >
          <Form.Item
            name={fieldName('name')}
            label="Name"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input autoComplete="name" />
          </Form.Item>
          <Form.Item
            name={fieldName('email')}
            label="E-mail"
            rules={[{ required: true, message: 'Please enter an e-mail' }]}
          >
            <Input autoComplete="email" />
          </Form.Item>
          <Form.Item
            name={fieldName('password')}
            label="Password"
            rules={[{ required: true, message: 'Please enter a password' }]}
          >
            <PasswordInput autoComplete="new-password" />
          </Form.Item>

          <Recaptcha
            className={cx('mb-4')}
            siteKey={recaptchaSiteKey}
            onChange={setRecatpcha}
            getReset={getResetCaptcha}
          />

          <Form.Item
            name={fieldName('acceptedTermsAndPrivacy')}
            valuePropName="checked"
            rules={TermsAndPrivacyCheckboxFormRules}
          >
            <AcceptTermsAndPrivacyCheckbox webHostname={webHostname} />
          </Form.Item>
        </GenericForm>

        <Divider>or</Divider>

        <Button
          href={UnauthRoutes.LoginGithub}
          icon={<GithubOutlined />}
          block
          className={cx('mb-2')}
        >
          Sign up with Github
        </Button>
        <Button href={UnauthRoutes.LoginGoogle} icon={<GoogleColored />} block>
          Sign up with Google
        </Button>
      </Card>
      <Row justify="center" className={cx('mt-4')}>
        <Paragraph>Already have an account?</Paragraph>
      </Row>
      <Row justify="center">
        <LinkButton to={UnauthRoutes.Login}>Log in here!</LinkButton>
      </Row>
    </div>
  );
}
