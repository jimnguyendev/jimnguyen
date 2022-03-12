import * as React from 'react';
import type { CheckboxProps } from 'antd';
import { Checkbox } from 'antd';
import type { Rule } from 'antd/lib/form';
import cx from 'classnames';

import { NewTabLink } from 'nlib/components/ExternalLink';
import { getWebUrl, WebRoutes } from 'nlib/routes/web';

interface Props extends CheckboxProps {
  webHostname: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AcceptTermsAndPrivacyCheckbox({
  className,
  webHostname,
  ...props
}: Props) {
  return (
    <Checkbox className={cx('text-sm', className)} {...props}>
      I accept the{' '}
      <NewTabLink href={getWebUrl(webHostname, WebRoutes.Tos)}>
        terms of service
      </NewTabLink>{' '}
      and{' '}
      <NewTabLink href={getWebUrl(webHostname, WebRoutes.Privacy)}>
        privacy policy
      </NewTabLink>
      .
    </Checkbox>
  );
}

export const unacceptedMessage =
  'You must accept the terms of service and privacy policy to sign up for ngrok.';

export const TermsAndPrivacyCheckboxFormRules: Rule[] = [
  {
    required: true,
    message: unacceptedMessage,
  },
  {
    message: unacceptedMessage,
    validator: (_, value) => {
      if (!value) {
        return Promise.reject(new Error(unacceptedMessage));
      }
      return Promise.resolve();
    },
  },
];
