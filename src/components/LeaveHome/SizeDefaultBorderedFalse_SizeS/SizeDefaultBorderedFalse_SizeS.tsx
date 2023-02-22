import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_TypeLinkSizeDefaultStat } from '../Button_TypeLinkSizeDefaultStat/Button_TypeLinkSizeDefaultStat';
import { DropdownBasicInline_StateDefau } from '../DropdownBasicInline_StateDefau/DropdownBasicInline_StateDefau';
import { TagColorful_PresetMagenta } from '../TagColorful_PresetMagenta/TagColorful_PresetMagenta';
import classes from './SizeDefaultBorderedFalse_SizeS.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    TagColorful?: ReactNode;
  };
  hide?: {
    tableCellText?: boolean;
    TagColorful?: boolean;
  };
  text?: {
    tableCellText?: ReactNode;
    magenta?: ReactNode;
  };
}
/* @figmaId 1:7770 */
export const SizeDefaultBorderedFalse_SizeS: FC<Props> = memo(function SizeDefaultBorderedFalse_SizeS(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.tableCellText &&
        (props.text?.tableCellText != null ? (
          props.text?.tableCellText
        ) : (
          <div className={classes.tableCellText}>Table cell text</div>
        ))}
      {props.hide?.TagColorful === false &&
        (props.swap?.TagColorful || (
          <TagColorful_PresetMagenta
            text={{
              magenta: props.text?.magenta,
            }}
          />
        ))}
    </div>
  );
});
