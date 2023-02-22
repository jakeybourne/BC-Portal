import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _ButtonBase_SizeSmIconFalse } from '../_ButtonBase_SizeSmIconFalse/_ButtonBase_SizeSmIconFalse';
import classes from './Button_SizeSmHierarchyLinkColo.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1:18040 */
export const Button_SizeSmHierarchyLinkColo: FC<Props> = memo(function Button_SizeSmHierarchyLinkColo(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <_ButtonBase_SizeSmIconFalse
        className={classes._ButtonBase}
        text={{
          text: props.text?.text || <div className={classes.text}>Button CTA</div>,
        }}
      />
    </button>
  );
});
