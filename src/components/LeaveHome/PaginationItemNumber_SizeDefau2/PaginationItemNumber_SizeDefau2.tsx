import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './PaginationItemNumber_SizeDefau2.module.css';

interface Props {
  className?: string;
  text?: {
    _1?: ReactNode;
  };
}
/* @figmaId 1:7932 */
export const PaginationItemNumber_SizeDefau2: FC<Props> = memo(function PaginationItemNumber_SizeDefau2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?._1 != null ? props.text?._1 : <div className={classes._1}>1</div>}
    </div>
  );
});
