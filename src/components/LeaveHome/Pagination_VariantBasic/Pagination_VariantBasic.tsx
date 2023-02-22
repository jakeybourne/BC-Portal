import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { PaginationItemArrow_TypeArrowS2 } from '../PaginationItemArrow_TypeArrowS2/PaginationItemArrow_TypeArrowS2';
import { PaginationItemArrow_TypeArrowS } from '../PaginationItemArrow_TypeArrowS/PaginationItemArrow_TypeArrowS';
import { PaginationItemNumber_SizeDefau2 } from '../PaginationItemNumber_SizeDefau2/PaginationItemNumber_SizeDefau2';
import { PaginationItemNumber_SizeDefau } from '../PaginationItemNumber_SizeDefau/PaginationItemNumber_SizeDefau';
import classes from './Pagination_VariantBasic.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:7824 */
export const Pagination_VariantBasic: FC<Props> = memo(function Pagination_VariantBasic(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <PaginationItemArrow_TypeArrowS />
      <PaginationItemNumber_SizeDefau />
      <PaginationItemNumber_SizeDefau2
        text={{
          _1: <div className={classes._1}>2</div>,
        }}
      />
      <PaginationItemNumber_SizeDefau2
        text={{
          _1: <div className={classes._12}>3</div>,
        }}
      />
      <PaginationItemNumber_SizeDefau2
        text={{
          _1: <div className={classes._13}>4</div>,
        }}
      />
      <PaginationItemNumber_SizeDefau2
        text={{
          _1: <div className={classes._14}>5</div>,
        }}
      />
      <PaginationItemArrow_TypeArrowS2 />
    </div>
  );
});
