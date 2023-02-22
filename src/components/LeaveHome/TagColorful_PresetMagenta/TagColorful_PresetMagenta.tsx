import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TagColorful_PresetMagenta.module.css';

interface Props {
  className?: string;
  text?: {
    magenta?: ReactNode;
  };
}
/* @figmaId 1:7803 */
export const TagColorful_PresetMagenta: FC<Props> = memo(function TagColorful_PresetMagenta(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.magenta != null ? props.text?.magenta : <div className={classes.magenta}>Magenta</div>}
    </div>
  );
});
