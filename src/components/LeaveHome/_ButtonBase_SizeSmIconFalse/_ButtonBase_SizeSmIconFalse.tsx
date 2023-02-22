import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_ButtonBase_SizeSmIconFalse.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1:18594 */
export const _ButtonBase_SizeSmIconFalse: FC<Props> = memo(function _ButtonBase_SizeSmIconFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Button CTA</div>}
    </div>
  );
});
