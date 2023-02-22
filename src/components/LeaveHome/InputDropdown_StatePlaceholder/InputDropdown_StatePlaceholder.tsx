import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _InputDropdownBase_LabelFalseT } from '../_InputDropdownBase_LabelFalseT/_InputDropdownBase_LabelFalseT';
import classes from './InputDropdown_StatePlaceholder.module.css';

interface Props {
  className?: string;
  classes?: {
    input?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1:11583 */
export const InputDropdown_StatePlaceholder: FC<Props> = memo(function InputDropdown_StatePlaceholder(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_InputDropdownBase_LabelFalseT
        className={classes._InputDropdownBase}
        classes={{ input: props.classes?.input || '' }}
        swap={{
          icon: props.swap?.icon,
        }}
        text={{
          text: props.text?.text,
        }}
      />
    </div>
  );
});
