import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TagColorful_PresetGold.module.css';

interface Props {
  className?: string;
  text?: {
    gold?: ReactNode;
  };
}
/* @figmaId 1:7791 */
export const TagColorful_PresetGold: FC<Props> = memo(function TagColorful_PresetGold(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.gold != null ? props.text?.gold : <div className={classes.gold}>Gold</div>}
    </div>
  );
});
