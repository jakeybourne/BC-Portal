import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _ButtonBase_SizeMdIconFalse } from '../_ButtonBase_SizeMdIconFalse/_ButtonBase_SizeMdIconFalse';
import classes from './Button_SizeMdHierarchyTertiary.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:15940 */
export const Button_SizeMdHierarchyTertiary: FC<Props> = memo(function Button_SizeMdHierarchyTertiary(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <_ButtonBase_SizeMdIconFalse
        className={classes._ButtonBase}
        text={{
          text: <div className={classes.text}>Button CTA</div>,
        }}
      />
    </button>
  );
});
