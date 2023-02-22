import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TagColorful_PresetCyan.module.css';

interface Props {
  className?: string;
  text?: {
    cyan?: ReactNode;
  };
}
/* @figmaId 1:7797 */
export const TagColorful_PresetCyan: FC<Props> = memo(function TagColorful_PresetCyan(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.cyan != null ? props.text?.cyan : <div className={classes.cyan}>Cyan</div>}
    </div>
  );
});
