import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _ButtonBase_SizeMdIconTrailing } from '../_ButtonBase_SizeMdIconTrailing/_ButtonBase_SizeMdIconTrailing';
import classes from './Button_SizeMdHierarchySecondar.module.css';
import { CircleIcon } from './CircleIcon';

interface Props {
  className?: string;
  classes?: {
    _ButtonBase?: string;
    root?: string;
  };
  swap?: {
    circle?: ReactNode;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1:16264 */
export const Button_SizeMdHierarchySecondar: FC<Props> = memo(function Button_SizeMdHierarchySecondar(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_ButtonBase_SizeMdIconTrailing
        className={`${props.classes?._ButtonBase || ''} ${classes._ButtonBase}`}
        swap={{
          icon: <CircleIcon className={classes.icon} />,
          circle: props.swap?.circle,
        }}
        text={{
          text: props.text?.text || <div className={classes.text}>Button CTA</div>,
        }}
      />
    </button>
  );
});
