import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Circle } from '../Circle/Circle';
import classes from './_ButtonBase_SizeMdIconTrailing.module.css';
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
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1:18596 */
export const _ButtonBase_SizeMdIconTrailing: FC<Props> = memo(function _ButtonBase_SizeMdIconTrailing(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Button CTA</div>}
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
