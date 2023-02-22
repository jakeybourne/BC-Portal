import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_3Layers.module.css';
import { _3LayersIcon } from './_3LayersIcon';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:15222 */
export const _3Layers: FC<Props> = memo(function _3Layers(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <_3LayersIcon className={classes.icon2} />}</div>
    </div>
  );
});
