import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { grpc as grpcWeb } from '@improbable-eng/grpc-web';
import { Card, Typography } from 'antd';
import cx from 'classnames';

import { DashPasswordResetsClientImpl } from 'nlib/gen2/rpx/dash';

import { getErrorMessage, useMessage } from 'nlib/components/MessageContext';
import { GrpcError } from 'nlib/errors/GrpcError';
import { useQueryParams } from 'nlib/hooks/useQueryParams';
import { UnauthRoutes } from 'nlib/routes/dash';
import page from 'nlib/theme/style-variables/page.less';

import { useGrpc } from 'components/Context/Grpc';
import { PasswordChangeForm } from 'features/password-change/PasswordChangeForm';

interface ILocalMessage {
  text: string;
  type?: string;
}

const getMessage = (error: unknown) => {
  if (error instanceof GrpcError && error.grpcCode === grpcWeb.Code.NotFound) {
    return 'This is not a valid password reset token';
  }

  const [, errorMessage] = getErrorMessage({ error });
  return errorMessage;
};

export function PasswordChangePage() {
  const navigate = useNavigate();
  const grpc = useGrpc();
  const [pending, setPending] = React.useState<boolean>(true);
  const [query] = useQueryParams();
  const token = query.get('token') || '';
  const { setSuccess, setError, setErrorGeneric } = useMessage();

  React.useEffect(() => {
    const checkToken = async (): Promise<void | ILocalMessage> => {
      if (token === '') {
        setError('Password reset not found');
        navigate(UnauthRoutes.PasswordReset);
        return;
      }

      try {
        await new DashPasswordResetsClientImpl(grpc).GetByToken({
          token,
        });
        setPending(false);
      } catch (error) {
        setError(getMessage(error));
        navigate(UnauthRoutes.PasswordReset);
      }
    };

    checkToken();
  }, [grpc, navigate, setError, token]);

  const changePassword = async (
    password: string,
    tokenToUse: string
  ): Promise<void> => {
    try {
      await new DashPasswordResetsClientImpl(grpc).Redeem({
        password,
        token: tokenToUse,
      });

      const text = 'Your password has been successfully updated!';
      setSuccess(text);
      navigate(UnauthRoutes.Login);
    } catch (error) {
      if ((error as GrpcError)?.grpcCode === grpcWeb.Code.NotFound) {
        setError('This is not a valid password reset token');
        navigate(UnauthRoutes.PasswordReset);
      } else {
        setErrorGeneric({ error });
      }
    }
  };

  if (!token) {
    // we'll redirect in the useEffect above
    return null;
  }

  return (
    <Card className={page.xsmallWidth} loading={pending}>
      <Typography.Title className={cx('text-center')} level={3}>
        Change Password
      </Typography.Title>
      <PasswordChangeForm token={token} changePassword={changePassword} />
    </Card>
  );
}
