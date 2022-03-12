import * as React from 'react';
import { message } from 'antd';
import type { IconType } from 'antd/lib/notification';

import type { DashFlash } from '../gen2/rpx/dash';
import { DashFlash_Type } from '../gen2/rpx/dash';

export function getFlashType(flash: DashFlash): IconType {
  switch (flash.type) {
    case DashFlash_Type.Success:
      return 'success';
    case DashFlash_Type.Warn:
      return 'warning';
    default:
      return 'error';
  }
}

export function useFlash(flashes: DashFlash[] = []) {
  React.useEffect(() => {
    flashes.forEach(flash =>
      message[getFlashType(flash)]({ content: flash.msg })
    );
  }, [flashes]);
}
