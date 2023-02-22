import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_TypeLinkSizeDefaultStat } from '../Button_TypeLinkSizeDefaultStat/Button_TypeLinkSizeDefaultStat';
import { Check } from '../Check/Check';
import { DropdownBasicInline_StateDefau } from '../DropdownBasicInline_StateDefau/DropdownBasicInline_StateDefau';
import { X2 } from '../X2/X2';
import { CheckIcon } from './CheckIcon';
import classes from './Decision.module.css';
import { XIcon } from './XIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:25190 */
export const Decision: FC<Props> = memo(function Decision(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame101}>
        <Check
          className={classes.check}
          swap={{
            icon: <CheckIcon className={classes.icon} />,
          }}
        />
      </div>
      <div className={classes.frame102}>
        <X2
          className={classes.x}
          swap={{
            icon: <XIcon className={classes.icon2} />,
          }}
        />
      </div>
    </div>
  );
});
