import * as React from 'react';
import invariant from 'tiny-invariant';

import { useAppDomData } from 'nlib/components/AppDomData';
import { messageContext } from 'nlib/components/MessageContext';
import { getEnrichedErrorCode } from 'nlib/errors/getEnrichedErrorCode';
import type { GrpcError } from 'nlib/errors/GrpcError';
import { NgrokErrorCode } from 'nlib/gen/NgrokErrorCode';
import type { ErrorFilter } from 'nlib/hooks/useThrowRenderCycleError';

import type { Grpc, GrpcErrorAction, GrpcErrorMiddleware } from 'lib/grpc';
import { createFakeGrpc, createGrpc, GrpcCode } from 'lib/grpc';

interface Props {
  children: React.ReactNode | ((grpc: Grpc) => React.ReactNode);
}

const GrpcContext = React.createContext<Grpc | undefined>(undefined);

function isIpRestricted(error?: unknown): boolean {
  const grpcCode = (error as GrpcError)?.grpcCode;
  return grpcCode === GrpcCode.PermissionDenied;
}

type MakeGrpcErrorMiddlewareArgs = {
  onIpRestricted: (error?: unknown) => GrpcErrorAction | void;
  onPermissionDenied: (error?: unknown) => GrpcErrorAction | void;
  onWrongAccount: (error?: unknown) => GrpcErrorAction | void;
  onNoAccount: (error?: unknown) => GrpcErrorAction | void;
};

export const makeDashGrpcErrorMiddleware =
  ({
    onIpRestricted,
    onPermissionDenied,
    onWrongAccount,
    onNoAccount,
  }: MakeGrpcErrorMiddlewareArgs): GrpcErrorMiddleware =>
  error => {
    const enrichedCode = getEnrichedErrorCode(error) ?? NgrokErrorCode.Unknown;

    if (isIpRestricted(error)) {
      const action = onIpRestricted(error) || 'throw';
      return [error, action];
    }

    switch (enrichedCode) {
      case NgrokErrorCode.DashTeamInviteDisallowed:
      case NgrokErrorCode.DashTeamManageDisallowed:
      case NgrokErrorCode.DashBillingReadDisallowed:
      case NgrokErrorCode.DashBillingWriteDisallowed:
      case NgrokErrorCode.DashDeveloperWriteDisallowed:
      case NgrokErrorCode.DashAdminDisallowed:
      case NgrokErrorCode.MembershipsRemoveLastAdminDisallowed:
      case NgrokErrorCode.MemberhipsRBACDisallowed:
      case NgrokErrorCode.MembershipsRemoveAdminDisallowed:
      case NgrokErrorCode.MembershipsSetAdminDisallowed:
      case NgrokErrorCode.MembershipsChangeAdminDisallowed:
      case NgrokErrorCode.MembershipsSwapAdminDisallowed: {
        const action = onPermissionDenied(error) || 'throw';
        return [error, action];
      }

      case NgrokErrorCode.DashUserNotMemberOfCurrentAccount: {
        const action = onWrongAccount(error) || 'throw';
        return [error, action];
      }

      case NgrokErrorCode.DashUserBelongsToNoAccounts: {
        const action = onNoAccount(error) || 'throw';
        return [error, action];
      }

      default:
        return [error, 'throw'];
    }
  };

export function GrpcProvider({ children }: Props) {
  const appDomData = useAppDomData();

  const [grpc, creationErrors] = React.useMemo(
    () => createGrpc({ appDomData }),
    [appDomData]
  );

  React.useEffect(() => {
    creationErrors.forEach(error => messageContext.setErrorGeneric({ error }));
  }, [creationErrors]);

  return (
    <GrpcContext.Provider value={grpc}>
      {typeof children === 'function' ? children(grpc) : children}
    </GrpcContext.Provider>
  );
}

interface FakeGrpcProviderProps extends Props {
  host?: string;
}

export function FakeGrpcProvider({ children, host }: FakeGrpcProviderProps) {
  const [grpc, creationErrors] = React.useMemo(
    () => createFakeGrpc(host),
    [host]
  );

  React.useEffect(() => {
    creationErrors.forEach(error => messageContext.setErrorGeneric({ error }));
  }, [creationErrors]);

  return (
    <GrpcContext.Provider value={grpc}>
      {typeof children === 'function' ? children(grpc) : children}
    </GrpcContext.Provider>
  );
}

export function useGrpc() {
  const grpc = React.useContext(GrpcContext);

  invariant(
    grpc,
    'You should not use `useGrpc()` outside of the <GrpcProvider />'
  );

  return grpc;
}

export const dashErrorFilter: ErrorFilter = error => {
  if (error == null) {
    return false;
  }

  let passthroughError = true;
  const middleware = makeDashGrpcErrorMiddleware({
    onIpRestricted: () => {
      passthroughError = false;
    },
    onNoAccount: () => {
      passthroughError = false;
    },
    onPermissionDenied: () => {
      passthroughError = false;
    },
    onWrongAccount: () => {
      passthroughError = false;
    },
  });
  middleware(error);

  return passthroughError;
};
