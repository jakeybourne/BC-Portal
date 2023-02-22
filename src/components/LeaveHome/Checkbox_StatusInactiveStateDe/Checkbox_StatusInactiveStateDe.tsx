import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Checkbox_StatusInactiveStateDe.module.css';
import { CheckboxInactiveDefaultIcon } from './CheckboxInactiveDefaultIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    checkbox?: boolean;
  };
}
/* @figmaId 1:7547 */
export const Checkbox_StatusInactiveStateDe: FC<Props> = memo(function Checkbox_StatusInactiveStateDe(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.checkboxWrapper}>
        <div className={classes.checkboxInactiveDefault}>
          <CheckboxInactiveDefaultIcon className={classes.icon} />
        </div>
      </div>
      {!props.hide?.checkbox && <div className={classes.checkbox}>Checkbox</div>}
    </div>
  );
});
