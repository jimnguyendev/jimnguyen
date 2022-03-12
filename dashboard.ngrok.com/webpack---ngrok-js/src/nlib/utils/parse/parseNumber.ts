export function parseNumber(value?: unknown): number | undefined {
  const maybeNum = Number.parseFloat(`${value}`);
  return Number.isNaN(maybeNum) ? undefined : maybeNum;
}
