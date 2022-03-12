import * as React from 'react';
import Icon from '@ant-design/icons';
import type { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

const googleSvgCustom = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 533.5 544.3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        fill="#4285F4"
        d="M533.5,278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1,33.8-25.7,63.7-54.4,82.7v68h87.7
        C503.9,431.2,533.5,361.2,533.5,278.4z"
      />
      <path
        fill="#34A853"
        d="M272.1,544.3c73.4,0,135.3-24.1,180.4-65.7l-87.7-68c-24.4,16.6-55.9,26-92.6,26c-71,0-131.2-47.9-152.8-112.3
        H28.9v70.1C75.1,486.3,169.2,544.3,272.1,544.3z"
      />
      <path
        fill="#FBBC04"
        d="M119.3,324.3c-11.4-33.8-11.4-70.4,0-104.2V150H28.9c-38.6,76.9-38.6,167.5,0,244.4L119.3,324.3z"
      />
      <path
        fill="#EA4335"
        d="M272.1,107.7c38.8-0.6,76.3,14,104.4,40.8l0,0l77.7-77.7C405,24.6,339.7-0.8,272.1,0C169.2,0,75.1,58,28.9,150
        l90.4,70.1C140.8,155.6,201.1,107.7,272.1,107.7z"
      />
    </g>
  </svg>
);

export const GoogleColored = (props: Omit<AntdIconProps, 'ref'>) => (
  <Icon component={googleSvgCustom} {...props} />
);
