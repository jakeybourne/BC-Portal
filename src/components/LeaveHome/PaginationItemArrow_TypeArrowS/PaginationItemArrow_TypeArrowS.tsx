import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconLeftOutlined } from '../IconLeftOutlined/IconLeftOutlined';
import classes from './PaginationItemArrow_TypeArrowS.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:7899 */
export const PaginationItemArrow_TypeArrowS: FC<Props> = memo(function PaginationItemArrow_TypeArrowS(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <IconLeftOutlined
        className={classes.iconLeftOutlined}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
