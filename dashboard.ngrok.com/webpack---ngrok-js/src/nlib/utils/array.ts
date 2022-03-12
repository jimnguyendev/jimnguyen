import { UnreachableCaseError } from '../errors/UnreachableCaseError';
import {
  jsNlibClientUnreachableModeGetMutativeInsertMethodMessage,
  jsNlibClientUnreachableModeGetPureInsertMethodMessage,
  NgrokErrorCode,
} from '../gen/NgrokErrorCode';
import type { IDLike, MaybeWithID } from '../types/base';
import { getIDString, matchID } from '../types/base';

export type InsertMode = 'start' | 'end';

export function getPureInsertMethod(mode: InsertMode) {
  switch (mode) {
    case 'start':
      return pureUnshift;
    case 'end':
      return purePush;
    default:
      throw new UnreachableCaseError({
        value: mode,
        enrichedCode:
          NgrokErrorCode.JsNlibClientUnreachableModeGetPureInsertMethod,
        message: jsNlibClientUnreachableModeGetPureInsertMethodMessage,
      });
  }
}

export function getMutInsertMethod(mode: InsertMode) {
  switch (mode) {
    case 'start':
      return mutUnshift;
    case 'end':
      return mutPush;
    default:
      throw new UnreachableCaseError({
        value: mode,
        enrichedCode:
          NgrokErrorCode.JsNlibClientUnreachableModeGetMutativeInsertMethod,
        message: jsNlibClientUnreachableModeGetMutativeInsertMethodMessage,
      });
  }
}

export function pureUnshift<T>(array: Readonly<T[]>, item: Readonly<T>): T[] {
  return [item].concat(array);
}

export function purePush<T>(array: Readonly<T[]>, item: Readonly<T>): T[] {
  return array.concat(item);
}

export function pureReplace<T extends MaybeWithID>(
  array: Readonly<T[]>,
  item: Readonly<T>
) {
  const idx = findIndex(array, item);
  return idx !== -1
    ? array.slice(0, idx).concat(item, array.slice(idx + 1))
    : [...array];
}

export function pureRemove<T extends MaybeWithID>(
  array: Readonly<T[]>,
  item: Readonly<T>
) {
  const idx = findIndex(array, item);
  return idx !== -1 ? array.filter((_, i) => i !== idx) : [...array];
}

/**
 * Insert item at the beginning of the given array.
 * @note _MUTATIVE_
 */
export function mutUnshift<T>(array: T[], item: Readonly<T>): T {
  array.unshift(item);
  return item;
}

/**
 * Insert item at the end of the given array.
 * @note _MUTATIVE_
 */
export function mutPush<T>(array: T[], item: Readonly<T>): T {
  array.push(item);
  return item;
}

/**
 * Replace the first item with matching ID in the array with the given item
 * @note _MUTATIVE_
 */
export function mutReplace<T extends MaybeWithID>(
  array: T[],
  item: Readonly<T>
): T | undefined {
  const idx = findIndex(array, item);

  if (idx === -1) {
    return undefined;
  }

  // eslint-disable-next-line no-param-reassign
  array[idx] = item;
  return item;
}

/**
 * Remove the first item with matching ID in the array
 * @note _MUTATIVE_
 */
export function mutRemove<T extends IDLike>(
  array: T[],
  item: Readonly<IDLike>
): T | undefined {
  const index = findIndex(array, item);
  return mutRemoveIndex(array, index);
}

/**
 * Remove the item at the given index in the array
 * @note _MUTATIVE_
 */
export function mutRemoveIndex<T>(array: T[], index: number): T | undefined {
  if (index < 0 || index >= array.length) {
    return undefined;
  }
  const t = array[index];
  array.splice(index, 1);
  return t;
}

const searchId =
  (searchElement: Readonly<IDLike>) =>
  (item: Readonly<IDLike>): boolean =>
    matchID(searchElement, item);

export function findIndex<T extends IDLike>(
  array: Readonly<T[]>,
  item: Readonly<IDLike>
): number {
  return array.findIndex(searchId(item));
}

export function difference<T>(
  a: Readonly<T[]>,
  b: Readonly<T[]>,
  include?: (a: Readonly<T>, b: Readonly<T>) => boolean
) {
  if (include) {
    return a.filter(a_e => !b.find(b_e => include(a_e, b_e)));
  }

  const sa = new Set(a);
  const sb = new Set(b);
  sb.forEach(b_e => sa.delete(b_e));
  return Array.from(sa);
}

export function differenceUnalike<T, U>(
  a: Readonly<T[]>,
  b: Readonly<U[]>,
  include: (a: Readonly<T>, b: Readonly<U>) => boolean
) {
  return a.filter(aEl => b.findIndex(bEl => include(aEl, bEl)) < 0);
}

export function differenceWithID<T extends IDLike, U extends IDLike>(
  a: Readonly<T[]>,
  b: Readonly<U[]>
): T[] {
  const bIds = new Set<string>(
    b.map(id => getIDString(id)).filter((s): s is string => Boolean(s))
  );
  return a.filter(a_el => {
    const aId = getIDString(a_el);
    return aId && !bIds.has(aId);
  });
}

export function includesWithID<T extends IDLike>(
  array: Readonly<T[]>,
  item: T | IDLike
): boolean {
  return Boolean(array.some(a => matchID(a, item)));
}

export function excludesWithID<T extends IDLike>(
  array: Readonly<T[]>,
  item: T | IDLike
): boolean {
  return !includesWithID(array, item);
}

export function excludes<T>(
  array: Readonly<T[]>,
  item: unknown,
  include?: (a: T) => boolean
): boolean {
  return !includes(array, item, include);
}

export function includes<T>(
  array: Readonly<T[]>,
  item: unknown,
  include?: (a: T) => boolean
): boolean {
  return array.some(a => (include ? include(a) : a === item));
}

export function partition<T>(
  array: Readonly<T[]>,
  predicate: (a: T) => boolean
): [accept: T[], reject: T[]] {
  const accept = array.filter(a => predicate(a));
  const reject = array.filter(a => predicate(a) === false);
  return [accept, reject];
}

export function pureReplaceByIndex<T>(
  array: Readonly<T[]>,
  index: number,
  item: T
) {
  if (index < 0) {
    return [item, ...array];
  }
  if (index >= array.length) {
    return [...array, item];
  }
  return array.slice(0, index).concat(item, array.slice(index + 1));
}

export function mutReplaceByIndex<T>(array: T[], index: number, item: T) {
  if (index < 0) {
    array.unshift(item);
  } else if (index >= array.length) {
    array.push(item);
  } else {
    // eslint-disable-next-line no-param-reassign
    array[index] = item;
  }
  return array;
}
