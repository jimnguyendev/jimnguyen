import * as React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntdButtonProps } from 'antd/lib/button';
import cx from 'classnames';

import styles from './styles.less';

export interface ButtonProps extends AntdButtonProps {
  ghostbg?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ghostbg, ghost, ...props }, ref) => (
    <AntButton
      ref={ref}
      className={cx(className, ghostbg && styles.addBackground)}
      ghost={ghostbg || ghost}
      {...props}
    />
  )
);

export const ButtonGroup = AntButton.Group;
