import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconFilterFilled } from '../IconFilterFilled/IconFilterFilled';
import { IconSearchOutlined } from '../IconSearchOutlined/IconSearchOutlined';
import classes from './TableItemHeaderItem_SizeSmallB.module.css';

interface Props {
  className?: string;
  classes?: {
    iconFilterFilled?: string;
    wrapper?: string;
    root?: string;
    sort?: string;
  };
  swap?: {
    sort?: ReactNode;
  };
  hide?: {
    iconFilterFilled?: boolean;
    sort?: boolean;
  };
  text?: {
    tableHeader?: ReactNode;
  };
}
/* @figmaId 1:7647 */
export const TableItemHeaderItem_SizeSmallB: FC<Props> = memo(function TableItemHeaderItem_SizeSmallB(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.header}>
        <div className={`${props.classes?.wrapper || ''} ${classes.wrapper}`}>
          {props.text?.tableHeader != null ? (
            props.text?.tableHeader
          ) : (
            <div className={classes.tableHeader}>Table header</div>
          )}
          {props.hide?.sort === false && (props.swap?.sort || null)}
          {props.hide?.iconFilterFilled === false && (
            <IconFilterFilled className={props.classes?.iconFilterFilled || ''} />
          )}
        </div>
      </div>
    </div>
  );
});
