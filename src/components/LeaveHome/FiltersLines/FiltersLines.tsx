import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './FiltersLines.module.css';
import { FiltersLinesIcon } from './FiltersLinesIcon';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:18942 */
export const FiltersLines: FC<Props> = memo(function FiltersLines(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icon || ''} ${classes.icon}`}>
        {props.swap?.icon || <FiltersLinesIcon className={classes.icon2} />}
      </div>
    </div>
  );
});
