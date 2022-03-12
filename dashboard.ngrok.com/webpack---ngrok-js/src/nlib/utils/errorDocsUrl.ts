import { getAppDomData } from '../components/AppDomData';
import type { NgrokErrorCode } from '../gen/NgrokErrorCode';

export function makeErrorDocsUrl(
  code: NgrokErrorCode,
  hostname: string = 'https://ngrok.com'
) {
  const cleanHostname = hostname.trim().replace(/\/+$/, '');
  return `${cleanHostname}/docs/errors/err_ngrok_${code}`;
}

export function errorDocsUrl(code: NgrokErrorCode) {
  const appDomData = getAppDomData();

  return makeErrorDocsUrl(code, appDomData.webHostname);
}
