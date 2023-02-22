import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _ButtonBase_SizeSmIconOnly } from '../_ButtonBase_SizeSmIconOnly/_ButtonBase_SizeSmIconOnly';
import classes from './Button_SizeSmHierarchyTertiary.module.css';
import { CircleIcon } from './CircleIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    circle?: ReactNode;
  };
}
/* @figmaId 1:18404 */
export const Button_SizeSmHierarchyTertiary: FC<Props> = memo(function Button_SizeSmHierarchyTertiary(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_ButtonBase_SizeSmIconOnly
        className={classes._ButtonBase}
        swap={{
          icon: <CircleIcon className={classes.icon} />,
          circle: props.swap?.circle,
        }}
      />
    </button>
  );
});
