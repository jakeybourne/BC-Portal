import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BarChart2.module.css';
import { BarChart2Icon } from './BarChart2Icon';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:14505 */
export const BarChart2: FC<Props> = memo(function BarChart2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <BarChart2Icon className={classes.icon2} />}</div>
    </div>
  );
});
