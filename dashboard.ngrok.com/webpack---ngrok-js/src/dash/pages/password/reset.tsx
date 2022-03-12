import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, PageHeader, Typography } from 'antd';
import cx from 'classnames';

import { DashPasswordResetsClientImpl } from 'nlib/gen2/rpx/dash';

import { useAppDomData } from 'nlib/components/AppDomData';
import { useMessage } from 'nlib/components/MessageContext';
import { UnauthRoutes } from 'nlib/routes/dash';
import page from 'nlib/theme/style-variables/page.less';

import { useGrpc } from 'components/Context/Grpc';
import { Recaptcha } from 'components/ReCaptcha';
import type { ICreateHandler } from 'components/Table/GenericForm';
import { GenericForm } from 'components/Table/GenericForm';
import styles from 'features/unauth/styles.less';

interface FormValues {
  email: string;
}

const fieldName = (name: keyof FormValues): string => name;

export function PasswordResetPage() {
  const navigate = useNavigate();
  const message = useMessage();
  const grpc = useGrpc();
  const { recaptchaSiteKey } = useAppDomData();
  const [recaptcha, setRecatpcha] = React.useState<string>('');
  const [resetCaptcha, setResetCaptcha] = React.useState<() => void>();

  const getResetCaptcha = React.useCallback(
    (reset: () => void) => setResetCaptcha(() => reset),
    [setResetCaptcha]
  );

  const forgotPassword: ICreateHandler<FormValues> = async ({ email }) => {
    try {
      await new DashPasswordResetsClientImpl(grpc).Create({
        email,
        recaptchaResponse: recaptcha,
      });
      message.setSuccess(
        `An email has been sent to ${email} with instructions to reset your password`
      );
      navigate(UnauthRoutes.Login);
    } catch (error) {
      if (resetCaptcha) {
        resetCaptcha();
      }
      throw error;
    }
  };

  return (
    <Card className={page.xsmallWidth}>
      <PageHeader
        className={styles.pageHeader}
        onBack={() => navigate(UnauthRoutes.Login)}
        title={<Typography.Title level={3}>Recover Password</Typography.Title>}
      />
      <GenericForm<FormValues>
        layout="vertical"
        submitText="Recover Password"
        handleSubmit={forgotPassword}
        preventReset
      >
        <Form.Item
          name={fieldName('email')}
          label="E-mail"
          rules={[{ required: true, message: 'Please enter an e-mail' }]}
        >
          <Input autoComplete="email" />
        </Form.Item>
        <Recaptcha
          className={cx('mb-4')}
          siteKey={recaptchaSiteKey}
          onChange={setRecatpcha}
          getReset={getResetCaptcha}
        />
      </GenericForm>
    </Card>
  );
}
