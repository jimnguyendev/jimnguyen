type WithMessage = {
  message: string;
};

export const isWithMessage = (value: unknown): value is WithMessage =>
  typeof (value as WithMessage)?.message === 'string';

export function toWithMessage(value: unknown): WithMessage {
  if (isWithMessage(value)) {
    return value;
  }

  try {
    return new Error(JSON.stringify(value));
  } catch {
    // fallback in case there's an error stringifying the value
    // like with circular references for example.
    return new Error(String(value));
  }
}

export const getMessage = (value: unknown): string =>
  toWithMessage(value).message;
