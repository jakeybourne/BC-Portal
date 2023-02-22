import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TagColorful_PresetPurple.module.css';

interface Props {
  className?: string;
  text?: {
    purple?: ReactNode;
  };
}
/* @figmaId 1:7801 */
export const TagColorful_PresetPurple: FC<Props> = memo(function TagColorful_PresetPurple(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.purple != null ? props.text?.purple : <div className={classes.purple}>Purple</div>}
    </div>
  );
});
