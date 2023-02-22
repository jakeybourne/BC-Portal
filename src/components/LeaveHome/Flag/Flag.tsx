import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Flag.module.css';
import { FlagIcon } from './FlagIcon';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:15226 */
export const Flag: FC<Props> = memo(function Flag(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <FlagIcon className={classes.icon2} />}</div>
    </div>
  );
});
