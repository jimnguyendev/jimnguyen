export const SUPPORT_EMAIL = 'support@ngrok.com';
export const MAILTO_SUPPORT_HREF = `mailto:${SUPPORT_EMAIL}`;

export type SupportEmailDetails = {
  subject: string;
  body: string;
};

export function makeMailtoSupportHref(details?: SupportEmailDetails): string {
  const url = new URL(MAILTO_SUPPORT_HREF);
  if (details) {
    url.searchParams.set('subject', details.subject);
    url.searchParams.set('body', details.body);
  }
  return url.href;
}
