import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { TableItemCollapse_ExpandedTrue } from '../TableItemCollapse_ExpandedTrue/TableItemCollapse_ExpandedTrue';
import classes from './TableItemRowControl_TypeCollap.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:7710 */
export const TableItemRowControl_TypeCollap: FC<Props> = memo(function TableItemRowControl_TypeCollap(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <TableItemCollapse_ExpandedTrue className={classes.tableItemCollapse} />
    </div>
  );
});
