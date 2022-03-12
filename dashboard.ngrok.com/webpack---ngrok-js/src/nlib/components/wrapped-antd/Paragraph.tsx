import * as React from 'react';
import type { BlockProps } from 'antd/lib/typography/Base';
import Base from 'antd/lib/typography/Base';

export interface ParagraphProps extends BlockProps {
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}

export const Paragraph = (props: ParagraphProps) => (
  <Base {...props} component="p" />
);
