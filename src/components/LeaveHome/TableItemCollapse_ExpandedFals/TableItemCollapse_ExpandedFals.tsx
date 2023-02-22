import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Group1Icon } from './Group1Icon';
import classes from './TableItemCollapse_ExpandedFals.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:7727 */
export const TableItemCollapse_ExpandedFals: FC<Props> = memo(function TableItemCollapse_ExpandedFals(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
    </div>
  );
});
