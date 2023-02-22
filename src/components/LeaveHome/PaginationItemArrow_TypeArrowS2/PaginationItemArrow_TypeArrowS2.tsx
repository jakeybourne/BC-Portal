import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconRightOutlined } from '../IconRightOutlined/IconRightOutlined';
import classes from './PaginationItemArrow_TypeArrowS2.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:7913 */
export const PaginationItemArrow_TypeArrowS2: FC<Props> = memo(function PaginationItemArrow_TypeArrowS2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <IconRightOutlined
        className={classes.iconRightOutlined}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
