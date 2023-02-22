import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CheckSquare.module.css';
import { CheckSquareIcon } from './CheckSquareIcon';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:15224 */
export const CheckSquare: FC<Props> = memo(function CheckSquare(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <CheckSquareIcon className={classes.icon2} />}</div>
    </div>
  );
});
