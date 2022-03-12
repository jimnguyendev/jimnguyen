import * as React from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import type { ButtonProps } from './wrapped-antd/Button/Button';
import { Button } from './wrapped-antd/Button/Button';

export type LinkButtonProps = Omit<ButtonProps, 'href'> & {
  to: LinkProps['to'];
};

export const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ children, icon, to, ...props }, ref) => (
    <Button {...props} ref={ref}>
      <Link
        className="flex gap-2 items-center justify-between text-inherit"
        to={to}
      >
        {icon}
        {children}
      </Link>
    </Button>
  )
);
