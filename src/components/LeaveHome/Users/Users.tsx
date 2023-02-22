import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Users.module.css';
import { UsersIcon } from './UsersIcon';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:15228 */
export const Users: FC<Props> = memo(function Users(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <UsersIcon className={classes.icon2} />}</div>
    </div>
  );
});
