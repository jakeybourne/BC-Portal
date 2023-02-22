import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { TableItemCollapse_ExpandedFals } from '../TableItemCollapse_ExpandedFals/TableItemCollapse_ExpandedFals';
import classes from './TableItemRowControl_TypeExpand.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:7698 */
export const TableItemRowControl_TypeExpand: FC<Props> = memo(function TableItemRowControl_TypeExpand(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <TableItemCollapse_ExpandedFals className={classes.tableItemCollapse} />
    </div>
  );
});
