import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Circle } from '../Circle/Circle';
import classes from './_ButtonBase_SizeSmIconOnly.module.css';
import { CircleIcon } from './CircleIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
    circle?: ReactNode;
  };
}
/* @figmaId 1:18584 */
export const _ButtonBase_SizeSmIconOnly: FC<Props> = memo(function _ButtonBase_SizeSmIconOnly(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.circle || (
        <Circle
          className={classes.circle}
          swap={{
            icon: props.swap?.icon || <CircleIcon className={classes.icon} />,
          }}
        />
      )}
    </div>
  );
});
