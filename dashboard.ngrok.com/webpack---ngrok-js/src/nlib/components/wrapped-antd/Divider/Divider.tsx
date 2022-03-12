import * as React from 'react';
import { Divider as AntDivider, Typography } from 'antd';
import type { DividerProps } from 'antd/lib/divider';
import type { TitleProps } from 'antd/lib/typography/Title';
import cx from 'classnames';

import styles from './styles.less';

export const Divider = ({ className, ...props }: DividerProps) => {
  const { orientation } = props;
  const leftAligned = orientation === 'left';
  const rightAligned = orientation === 'right';

  const dividerClasses = cx(
    className,
    leftAligned && styles.leftAligned,
    rightAligned && styles.rightAligned
  );

  return <AntDivider className={dividerClasses} {...props} />;
};

interface HeadingDividerProps extends DividerProps {
  titleProps?: TitleProps;
  children: React.ReactNode;
}

export const HeadingDivider = ({
  children,
  titleProps,
  ...props
}: HeadingDividerProps) => {
  const { className, level = 3, ...restTitleProps } = titleProps || {};
  return (
    <Divider {...props}>
      <Typography.Title
        {...restTitleProps}
        level={level}
        className={cx('font-medium', 'text-lg', 'leading-6', 'm-0', className)}
      >
        {children}
      </Typography.Title>
    </Divider>
  );
};
