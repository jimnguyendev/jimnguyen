import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
import { Card, Space, Typography } from 'antd';
import cx from 'classnames';

import { IdentityProvider } from 'nlib/gen2/rpx/model';

import { useAppDomData } from 'nlib/components/AppDomData';
import { GoogleColored } from 'nlib/components/Icons/GoogleColored';
import { Button } from 'nlib/components/wrapped-antd';
import { Form } from 'nlib/components/wrapped-antd/Form';
import { useQueryParams } from 'nlib/hooks/useQueryParams';
import { UnauthRoutes } from 'nlib/routes/dash';
import commonStyles from 'nlib/theme/style-variables/common.less';

import {
  AcceptTermsAndPrivacyCheckbox,
  TermsAndPrivacyCheckboxFormRules,
} from 'features/signup/AcceptTermsAndConditions';

interface FormValues {
  confirm: boolean;
}

const initialValues = (): FormValues => ({
  confirm: false,
});

const fieldName = (name: keyof FormValues): string => name;

interface PageParams {
  email: string;
  provider: IdentityProvider;
}

const pageParamsName = (name: keyof PageParams): string => name;

function usePageParams(): PageParams {
  const [query] = useQueryParams();
  const providerValue = query.get(pageParamsName('provider')) ?? '';
  const provider: IdentityProvider = React.useMemo(
    () => Number.parseInt(providerValue, 10) || IdentityProvider.Undefined,
    [providerValue]
  );

  return React.useMemo(
    () => ({
      email: query.get(pageParamsName('email')) ?? '',
      provider,
    }),
    [provider, query]
  );
}

type ValidIdentityProvider = Exclude<
  IdentityProvider,
  | IdentityProvider.Password
  | IdentityProvider.Undefined
  | IdentityProvider.Runscope
>;

const IdentityProviderMetaLookup: Record<
  IdentityProvider,
  { icon: React.ReactNode; redirect: string }
> = {
  [IdentityProvider.Undefined]: { icon: null, redirect: '' },
  [IdentityProvider.Github]: {
    icon: <GithubOutlined style={{ color: '#24292e' }} />,
    redirect: UnauthRoutes.LoginGithub,
  },
  [IdentityProvider.Google]: {
    icon: <GoogleColored />,
    redirect: UnauthRoutes.LoginGoogle,
  },
  [IdentityProvider.Runscope]: { icon: null, redirect: '' },
  [IdentityProvider.Password]: { icon: null, redirect: '' },
};

function validatePageParams({ email, provider }: PageParams) {
  if (!email) {
    throw new Error('Invalid email address');
  }

  switch (provider as ValidIdentityProvider) {
    case IdentityProvider.Github:
    case IdentityProvider.Google:
      return;
    default:
      throw new Error('Invalid IdentityProvider');
  }
}

export function ConfirmOauthSignupPage() {
  const navigate = useNavigate();
  const { webHostname } = useAppDomData();
  const { email, provider } = usePageParams();
  const { icon, redirect } = IdentityProviderMetaLookup[provider];

  const redirectToSignup = React.useCallback(() => {
    navigate(UnauthRoutes.Signup, { replace: true });
  }, [navigate]);

  const onSubmit = () => {
    const url = new URL(window.location.href);
    url.pathname = redirect;
    url.searchParams.set('confirm', '1');
    url.searchParams.set('login_hint', email);
    window.location.href = url.toString();
  };

  React.useEffect(() => {
    try {
      validatePageParams({ email, provider });
    } catch (_) {
      redirectToSignup();
    }
  }, [email, provider, redirectToSignup]);

  return (
    <Card
      className={cx(
        'w-120',
        'p-8',
        'pb-6',
        'mt-16',
        commonStyles.noCardBodyPadding
      )}
    >
      <div className={cx('flex')}>
        <span className={cx('text-heading-3', 'inline-block', 'mr-4')}>
          {icon}
        </span>
        <Typography.Title level={4}>
          Do you want to create an ngrok account for {email}?
        </Typography.Title>
      </div>
      <Form<FormValues>
        initialValues={initialValues()}
        onFinish={onSubmit}
        className={cx('ml-10')}
      >
        <Form.Item
          name={fieldName('confirm')}
          valuePropName="checked"
          rules={TermsAndPrivacyCheckboxFormRules}
        >
          <AcceptTermsAndPrivacyCheckbox webHostname={webHostname} />
        </Form.Item>
        <Form.Item className={cx('text-right', 'm-0')}>
          <Space>
            <Button type="default" onClick={redirectToSignup}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Create Account
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
}
