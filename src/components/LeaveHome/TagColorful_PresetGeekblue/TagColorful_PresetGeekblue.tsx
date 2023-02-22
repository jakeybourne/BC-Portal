import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TagColorful_PresetGeekblue.module.css';

interface Props {
  className?: string;
  text?: {
    geekblue?: ReactNode;
  };
}
/* @figmaId 1:7799 */
export const TagColorful_PresetGeekblue: FC<Props> = memo(function TagColorful_PresetGeekblue(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.geekblue != null ? props.text?.geekblue : <div className={classes.geekblue}>Geekblue</div>}
    </div>
  );
});
