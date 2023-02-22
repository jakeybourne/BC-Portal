import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './DatePickerMenuItem_StateCurren.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _24?: ReactNode;
  };
}
/* @figmaId 1:3276 */
export const DatePickerMenuItem_StateCurren: FC<Props> = memo(function DatePickerMenuItem_StateCurren(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?._24 != null ? props.text?._24 : <div className={classes._24}>24</div>}
    </div>
  );
});
