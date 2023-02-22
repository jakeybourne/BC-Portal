import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Group1Icon } from './Group1Icon';
import classes from './TableItemCollapse_ExpandedTrue.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:7737 */
export const TableItemCollapse_ExpandedTrue: FC<Props> = memo(function TableItemCollapse_ExpandedTrue(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
    </div>
  );
});
