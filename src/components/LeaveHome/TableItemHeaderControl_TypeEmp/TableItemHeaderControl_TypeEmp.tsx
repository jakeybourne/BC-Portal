import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconPlusSquareOutlined } from '../IconPlusSquareOutlined/IconPlusSquareOutlined';
import classes from './TableItemHeaderControl_TypeEmp.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:7528 */
export const TableItemHeaderControl_TypeEmp: FC<Props> = memo(function TableItemHeaderControl_TypeEmp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <IconPlusSquareOutlined
        className={classes.iconPlusSquareOutlined}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
