import * as React from 'react';
import * as Sentry from '@sentry/react';
import type { StripeError } from '@stripe/stripe-js';
import { message as antdMessage, notification } from 'antd';
import type { IconType } from 'antd/lib/notification';
import cx from 'classnames';

import { FakeGrpcCallError } from '../errors/FakeGrpcCallError';
import { hasValidEnrichedErrorCode } from '../errors/getEnrichedErrorCode';
import type { GrpcError } from '../errors/GrpcError';
import { isError } from '../errors/isError';
import { preventErrorTelemetry } from '../errors/telemetry';
import type { UserError } from '../errors/UserError';
import { ErrorWithRender } from '../errors/WithRender';
import type { NgrokErrorCode } from '../gen/NgrokErrorCode';
import { ngrokErrorCodeTitle } from '../gen/NgrokErrorCode';
import { includes } from '../utils/array';
import { errorDocsUrl } from '../utils/errorDocsUrl';
import { SENTRY_CONTEXT_KEY_ERROR_CONTEXT } from '../utils/sentry/constants';
import { getMessage } from '../utils/withMessage';
import { Paragraph } from './wrapped-antd/Paragraph';
import { NewTabLink } from './ExternalLink';

type OurCustomError = GrpcError | UserError | ErrorWithRender;
type ErrorType =
  | OurCustomError
  | Error
  | StripeError
  | string
  | null
  | undefined
  | unknown;

export type ISetMessage = (content: React.ReactNode, type: IconType) => void;
export type ISetGeneric = (content: React.ReactNode) => void;
export type ISetGeneralError = (props: ErrorMessageProps) => void;

export interface MessageContextProps {
  setMessage: ISetMessage;
  setError: ISetGeneric;
  setErrorGeneric: ISetGeneralError;
  setSuccess: ISetGeneric;
  setWarning: ISetGeneric;
  setInfo: ISetGeneric;
}

const errorMessageTelemetryBlocklist: (string | RegExp)[] = [
  /rpc "\/rpx.EventDestinationChecker\/Check" failed with:/i,
];

function isInErrorMessageTelemetryBlocklist(error?: unknown): boolean {
  if (!error) {
    return false;
  }

  const message =
    (typeof error === 'string' ? error : (error as Error).message) || '';

  return (
    Boolean(message) &&
    includes(
      errorMessageTelemetryBlocklist,
      message,
      item => Boolean(message.match(item)) // eslint-disable-line unicorn/prefer-regexp-test
    )
  );
}

export function getErrorLocalContext(error: unknown): Record<string, unknown> {
  if (isError(error)) {
    const extras: Record<string, unknown> = {
      'Error Name': error.constructor.name,
    };

    Object.getOwnPropertyNames(error)
      .filter(name => /(title|preventTelemetry|render)/i.test(name) === false)
      .forEach(name => {
        extras[name] = error[name as keyof Error];
      });

    return extras;
  }

  return {};
}

function sendErrorTelemetry({
  error,
  forcePreventTelemetry,
}: {
  error: unknown;
  forcePreventTelemetry: boolean;
}) {
  const doSendTelemetry =
    forcePreventTelemetry === false &&
    preventErrorTelemetry(error) === false &&
    isInErrorMessageTelemetryBlocklist(error) === false;

  if (doSendTelemetry === false) {
    return;
  }

  const errorContext = getErrorLocalContext(error);

  Sentry.withScope(localScope => {
    localScope.setContext(SENTRY_CONTEXT_KEY_ERROR_CONTEXT, errorContext);
    Sentry.captureException(error);
  });
}

const defaultUnknownErrorMsg =
  'An unknown error occurred while communicating with the server, please try again later.';

type ErrorMessageProps = {
  error: ErrorType;
  defaultMessage?: string;
  forcePreventTelemetry?: boolean;
};

type GetErrorMsgReturn = [message: string, render: React.ReactNode];

export function getErrorMessage({
  error,
  defaultMessage = defaultUnknownErrorMsg,
  forcePreventTelemetry = false,
}: ErrorMessageProps): GetErrorMsgReturn {
  const fallbackMessage = defaultMessage || defaultUnknownErrorMsg;

  if (error == null) {
    Sentry.captureException(
      new Error('There was an error without a defined error.')
    );
    return [fallbackMessage, fallbackMessage];
  }

  const message = getMessage(error) || fallbackMessage;

  let result: GetErrorMsgReturn = [message, message];

  if (error instanceof ErrorWithRender) {
    result = [message, error.render];
  } else if (error instanceof Error) {
    if (/unrecognized enum value/i.test(message)) {
      const refreshMessage =
        'Please refresh the page to load the current state of your account';
      result = [refreshMessage, refreshMessage];
    }
  }

  sendErrorTelemetry({ error, forcePreventTelemetry });

  return result;
}

function rejectError(error?: ErrorType): boolean {
  const rejectList = [FakeGrpcCallError];
  return includes(rejectList, error, reject => error instanceof reject);
}

function setErrorGeneric(props: ErrorMessageProps) {
  const { error } = props;
  if (rejectError(error)) {
    return;
  }

  const [, content] = getErrorMessage(props);

  let title: React.ReactNode = 'Error';
  let footer: React.ReactNode = null;

  if (error instanceof ErrorWithRender && hasValidEnrichedErrorCode(error)) {
    title = error.title ?? (
      <FallbackErrorTitle enrichedCode={error.enrichedCode} />
    );
    footer = (
      <Paragraph className={cx('m-0', 'mt-4')}>
        <NewTabLink href={errorDocsUrl(error.enrichedCode)}>
          More about this error.
        </NewTabLink>
      </Paragraph>
    );
  }

  const description = (
    <>
      {content}
      {footer}
    </>
  );

  notification.error({
    message: title,
    description,
    duration: 0, // prevents from auto closing
  });
}

function FallbackErrorTitle({
  enrichedCode,
}: {
  enrichedCode: NgrokErrorCode;
}) {
  const title = ngrokErrorCodeTitle(enrichedCode);
  return title ? <>{title}</> : <>Error</>;
}

const setMessage: ISetMessage = (text, type = 'success') =>
  type === 'error'
    ? notification[type]({
        message: text,
        duration: 0, // prevents from auto closing
      })
    : antdMessage[type]({
        content: text,
      });

function setError(content: React.ReactNode) {
  setMessage(content, 'error');
}

export const messageContext: MessageContextProps = {
  setMessage,
  setErrorGeneric,
  setError,
  setSuccess: content => setMessage(content, 'success'),
  setWarning: content => setMessage(content, 'warning'),
  setInfo: content => setMessage(content, 'info'),
};

export const MessageContext = React.createContext(messageContext);

export const useMessage = () => React.useContext(MessageContext);
