import * as React from 'react';
import { action as mobxAction, observable } from 'mobx';
import { grpc as grpcWeb } from '@improbable-eng/grpc-web';
import { Typography } from 'antd';
import cx from 'classnames';

import { GrpcWebImpl } from 'nlib/gen2/rpx/dash';
import type { AppDomData } from 'nlib/gen2/rpx/model_frontend_app';

import { fallbackAppDomData } from 'nlib/components/AppDomData';
import { messageContext } from 'nlib/components/MessageContext';
import { NewVersionReload } from 'nlib/components/NewVersionReload';
import { Paragraph } from 'nlib/components/wrapped-antd/Paragraph';
import { AppVersionError } from 'nlib/errors/AppVersionError';
import { DevError } from 'nlib/errors/DevError';
import type { CustomParseGrpcError, TsProtoError } from 'nlib/errors/GrpcError';
import { GrpcError } from 'nlib/errors/GrpcError';
import { NgrokErrorCode } from 'nlib/gen/NgrokErrorCode';
import { UnauthRoutes } from 'nlib/routes/dash';
import {
  injectedConstants,
  isProdDeploy,
  isStatic,
  showDevWarnings,
} from 'nlib/utils/injectedConstants';

export interface Grpc extends GrpcWebImpl {
  isFake: boolean;
  middleware: GrpcErrorMiddleware;
  setMiddleware: (middleware: GrpcErrorMiddleware) => void;
}

export const GrpcCode = grpcWeb.Code;

type UnaryArgs = Parameters<Grpc['unary']>;
type UnaryReturn = ReturnType<Grpc['unary']>;

export type GrpcErrorAction =
  | 'swallow'
  | 'throw'
  | 'renderAndThrow'
  | 'renderAndSwallow';

export type GrpcErrorMiddlewareReturn = [
  error: unknown,
  action: GrpcErrorAction
];
export type GrpcErrorMiddleware = (
  error?: unknown
) => GrpcErrorMiddlewareReturn;

type GrpcWrapperOptions = ConstructorParameters<typeof GrpcWebImpl>[1] & {
  middleware?: GrpcErrorMiddleware;
};

class GrpcWrapper extends GrpcWebImpl implements Grpc {
  isFake = false;

  @observable middleware: GrpcErrorMiddleware;

  constructor(host: string, { middleware, ...options }: GrpcWrapperOptions) {
    super(host, options);

    this.middleware = middleware ?? defaultGrpcErrorMiddleware;
  }

  @mobxAction setMiddleware = (middleware: GrpcErrorMiddleware) => {
    this.middleware = middleware;
  };

  unary = (...args: UnaryArgs): UnaryReturn =>
    GrpcWebImpl.prototype.unary.apply(this, args).catch(this.handleError);

  handleError = (grpcWebError: TsProtoError) => {
    const grpcError = new GrpcError(grpcWebError, {
      app: 'Dashboard',
      customParseGrpcError,
    });
    const [error, action] = this.middleware(grpcError);

    switch (action) {
      case 'swallow':
        return;
      case 'renderAndSwallow':
        messageContext.setErrorGeneric({ error });
        return;
      case 'renderAndThrow':
        messageContext.setErrorGeneric({ error });
        throw error;
      case 'throw':
      default:
        throw error;
    }
  };
}

class FakeGrpcWrapper extends GrpcWebImpl implements Grpc {
  middleware: GrpcErrorMiddleware = defaultGrpcErrorMiddleware;

  setMiddleware = () => {};

  isFake = true;

  unary = () => Promise.reject(new Error('Fake GrpcWrapper'));
}

export function defaultGrpcErrorMiddleware(
  error?: unknown
): GrpcErrorMiddlewareReturn {
  const enrichedCode =
    (error as GrpcError)?.enrichedCode ?? NgrokErrorCode.Unknown;

  switch (enrichedCode) {
    case NgrokErrorCode.DashBrowserCodeVersionMismatch:
      return [new AppVersionError('Dashboard'), 'renderAndThrow'];
    default:
      return [error, 'throw'];
  }
}

const customParseGrpcError: CustomParseGrpcError = error => {
  const { code, message } = error;

  // eslint-disable-next-line default-case
  switch (code) {
    // case grpcWeb.Code.Unauthenticated:
    //   return {
    //     message: "You've been logged out. Please log back in.",
    //     render: (
    //       <span>
    //         You've been logged out.{' '}
    //         <a href={UnauthRoutes.Login}>You can log back in here</a>.
    //       </span>
    //     ),
    //   };
    case grpcWeb.Code.NotFound:
      return {
        message: `${message}. Please refresh the page to load the current state of your account.`,
      };
    case grpcWeb.Code.FailedPrecondition:
      return {
        message,
        render: <NewVersionReload app="Dashboard" />,
      };
    case grpcWeb.Code.PermissionDenied:
      if (!message) {
        return {
          message:
            'Permission denied. Please make sure you are logged in and have permissions for this action.',
          render: (
            <span>
              Permission denied. Please make sure you are{' '}
              <a href={UnauthRoutes.Login}>logged in</a> and have permissions
              for this action.
            </span>
          ),
        };
      }
  }
  return {
    message,
  };
};

const HEADER_X_CSRF_TOKEN = 'X-CSRF-Token';
const HEADER_X_BROWSER_CODE_VERSION = 'X-Browser-Code-Version';

export type CreateGrpcReturn = [grpc: Grpc, creationErrors: Error[]];

interface CreateGrpcProps {
  middleware?: GrpcErrorMiddleware;
  appDomData?: AppDomData;
}

export function createGrpc({
  middleware,
  appDomData = fallbackAppDomData,
}: CreateGrpcProps): CreateGrpcReturn {
  const host = isStatic()
    ? 'https://dashboard.dev-ngrok.com'
    : window.location.origin;
  const metadata = new grpcWeb.Metadata();
  const creationErrors: Error[] = [];

  const { releaseVersion: serverReleaseVersion, csrfToken } = appDomData;
  const clientReleaseVersion = injectedConstants.RELEASE_VERSION;

  if (!csrfToken) {
    creationErrors.push(new Error('Error finding application CSRF token'));
  }

  if (serverReleaseVersion !== clientReleaseVersion && showDevWarnings()) {
    creationErrors.push(releaseVersionDevError(serverReleaseVersion));
  }

  // to avoid local dev headaches, if we're not in a prod deploy env
  // we want to just use the server provided `serverReleaseVersion`
  // else we won't be able to resolve gRPC requests
  const browserCodeVersion = isProdDeploy()
    ? clientReleaseVersion
    : serverReleaseVersion;

  metadata.set(HEADER_X_CSRF_TOKEN, csrfToken);
  metadata.set(HEADER_X_BROWSER_CODE_VERSION, browserCodeVersion);

  const grpc = new GrpcWrapper(host, { metadata, middleware });

  return [grpc, creationErrors];
}

export function createFakeGrpc(
  host: string = 'https://dashboard.dev-ngrok.com'
): CreateGrpcReturn {
  const metadata = new grpcWeb.Metadata();
  const grpc = new FakeGrpcWrapper(host, { metadata });
  return [grpc, []];
}

function releaseVersionDevError(serverReleaseVersion: string = '') {
  const clientReleaseVersion = injectedConstants.RELEASE_VERSION;

  return new DevError({
    app: 'Dashboard',
    message: `Dashboard release versions do not match! Bundler injected constant \`RELEASE_VERSION (${clientReleaseVersion})\` does not match \`releaseVersion (${serverReleaseVersion})\` sent from server. Try redeploying the dash svc.`,
    render: (
      <>
        <Paragraph>Dashboard release versions do not match!</Paragraph>
        <table className={cx('mb-4', 'w-full')}>
          <tbody className={cx('w-full')}>
            <tr>
              <td>Client</td>
              <td>
                <Typography.Text code>{clientReleaseVersion}</Typography.Text>
              </td>
            </tr>
            <tr>
              <td>Server</td>
              <td>
                <Typography.Text code>{serverReleaseVersion}</Typography.Text>
              </td>
            </tr>
          </tbody>
        </table>
        <Paragraph>Try redeploying the dash svc.</Paragraph>
      </>
    ),
  });
}
