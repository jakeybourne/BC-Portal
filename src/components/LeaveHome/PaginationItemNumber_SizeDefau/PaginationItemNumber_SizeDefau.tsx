import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './PaginationItemNumber_SizeDefau.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:7940 */
export const PaginationItemNumber_SizeDefau: FC<Props> = memo(function PaginationItemNumber_SizeDefau(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes._1}>1</div>
    </div>
  );
});
