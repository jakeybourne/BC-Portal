import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TagColorful_PresetGreen.module.css';

interface Props {
  className?: string;
  text?: {
    green?: ReactNode;
  };
}
/* @figmaId 1:7795 */
export const TagColorful_PresetGreen: FC<Props> = memo(function TagColorful_PresetGreen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.green != null ? props.text?.green : <div className={classes.green}>Green</div>}
    </div>
  );
});
