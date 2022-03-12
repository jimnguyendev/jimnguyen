import cx from 'classnames';

import scrollbarsStyle from '../theme/scrollbars.less';

export function shouldStyleScrollbars() {
  try {
    const platform = window.navigator.platform || '';
    const isOnApple = /(mac|iphone|ipad)/gi.test(platform);
    return !isOnApple;
  } catch {
    return true;
  }
}

export function getScrollbarsStyle() {
  return cx(shouldStyleScrollbars() && scrollbarsStyle.styledScrollbars);
}
