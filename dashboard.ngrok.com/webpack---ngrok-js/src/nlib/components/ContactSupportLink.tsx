import * as React from 'react';

import type { WithChildren, WithStyleProps } from '../types/components';
import type { SupportEmailDetails } from '../utils/supportEmail';
import {
  MAILTO_SUPPORT_HREF,
  makeMailtoSupportHref,
  SUPPORT_EMAIL,
} from '../utils/supportEmail';
import { HeadsetOutlined } from './Icons/HeadsetOutlined';
import { ExternalButton, NewTabLink } from './ExternalLink';

type ContactSupportLinkProps = WithChildren &
  WithStyleProps & {
    details?: SupportEmailDetails;
  };

export const ContactSupportLink = ({
  children,
  className,
  details,
  style,
}: ContactSupportLinkProps) => (
  <NewTabLink
    className={className}
    href={makeMailtoSupportHref(details)}
    style={style}
  >
    {children}
  </NewTabLink>
);

export const SupportEmail = () => <>{SUPPORT_EMAIL}</>;

export const ContactSupportButton = ({ className, style }: WithStyleProps) => (
  <ExternalButton
    asNewTab
    href={MAILTO_SUPPORT_HREF}
    icon={<HeadsetOutlined />}
    type="text"
    style={style}
    className={className}
  />
);
