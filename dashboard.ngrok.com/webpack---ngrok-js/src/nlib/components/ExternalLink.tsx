import * as React from 'react';

import type { ButtonProps } from './wrapped-antd/Button/Button';
import { Button } from './wrapped-antd/Button/Button';

type LinkProps = React.LinkHTMLAttributes<HTMLAnchorElement> & {
  asNewTab?: boolean;
};

const makeRel = (rel: string = ''): string =>
  ['noopener', 'noreferrer', rel].join(' ').trim();

const makeTarget = ({
  asNewTab = false,
}: {
  asNewTab?: boolean;
}): '_blank' | undefined => (asNewTab ? '_blank' : undefined);

export const ExternalLink = ({
  asNewTab,
  rel = '',
  children,
  ...rest
}: LinkProps) => (
  <a rel={makeRel(rel)} target={makeTarget({ asNewTab })} {...rest}>
    {children}
  </a>
);

export const NewTabLink = (
  props: React.LinkHTMLAttributes<HTMLAnchorElement>
) => <ExternalLink asNewTab {...props} />;

export const ExternalButton = ({
  asNewTab = false,
  rel = '',
  ...props
}: Omit<ButtonProps, 'target'> & { asNewTab?: boolean }) => (
  <Button target={makeTarget({ asNewTab })} rel={makeRel(rel)} {...props} />
);
