import * as React from 'react';
import { Alert } from 'antd';

import { getErrorMessage } from 'nlib/components/MessageContext';
import { Paragraph } from 'nlib/components/wrapped-antd/Paragraph';
import { UserError } from 'nlib/errors/UserError';
import { NgrokErrorCode } from 'nlib/gen/NgrokErrorCode';
import { isStatic } from 'nlib/utils/injectedConstants';

import styles from './styles.less';

const loadScript = () =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://www.google.com/recaptcha/api.js?&render=explicit';
    script.onload = () => resolve(script);
    script.onerror = event => {
      reject(new ReCaptchaError(event));
    };
    document.body.appendChild(script);
  });

class ReCaptchaError extends UserError {
  constructor(event: string | Event) {
    const message =
      typeof event === 'string'
        ? event
        : `Failed to load the required reCAPTCHA script!\n\nAre you blocking it? It is required to continue.\n\n${
            (event?.target as HTMLScriptElement | null)?.src
          }`;
    const render =
      typeof event === 'string' ? (
        event
      ) : (
        <>
          <Paragraph>Failed to load the required reCAPTCHA script!</Paragraph>
          <Paragraph>
            Are you blocking it? It is required to continue.
          </Paragraph>
        </>
      );
    const enrichedCode = NgrokErrorCode.DashClientReCaptchaScriptLoadError;
    super({ message, enrichedCode, render });
  }
}

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  siteKey: string;
  onChange: (recaptchaResponse: string) => void;
  getReset: (cb: () => void) => void;
}

const getRecaptcha = async (): Promise<any> =>
  new Promise(resolve => {
    const recaptcha = (window as any).grecaptcha;

    recaptcha.ready(() => {
      resolve(recaptcha);
    });
  });

export function Recaptcha({
  siteKey,
  onChange,
  getReset,
  className,
  style,
}: Props) {
  const [errorMsg, setErrorMsg] = React.useState<string>('');
  const setRef = React.useCallback(
    node => {
      if (node !== null) {
        (async () => {
          if (isStatic()) {
            return;
          }
          try {
            await loadScript();
            const recaptcha = await getRecaptcha();
            getReset(recaptcha.reset);
            recaptcha.render(node, {
              sitekey: siteKey,
              callback: onChange,
            });
          } catch (error) {
            const [message] = getErrorMessage({ error });
            setErrorMsg(message);
          }
        })();
      }
    },
    [getReset, onChange, siteKey]
  );

  return (
    <div className={className} style={style}>
      {errorMsg ? (
        <Alert
          message="reCAPTCHA Error"
          description={errorMsg}
          type="error"
          showIcon
        />
      ) : (
        <div className={styles.recaptcha} ref={setRef} />
      )}
    </div>
  );
}
