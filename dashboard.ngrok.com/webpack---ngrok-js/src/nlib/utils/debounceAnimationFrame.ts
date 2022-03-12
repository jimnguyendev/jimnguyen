export function debounceAnimationFrame(fn: (...args: any[]) => void) {
  let frame = 0;
  return (...args: any[]) => {
    if (frame !== 0) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...args);
    });
  };
}
