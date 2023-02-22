import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconSearchOutlined } from '../IconSearchOutlined/IconSearchOutlined';
import classes from './Button_TypeLinkSizeDefaultStat.module.css';

interface Props {
  className?: string;
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 1:892 */
export const Button_TypeLinkSizeDefaultStat: FC<Props> = memo(function Button_TypeLinkSizeDefaultStat(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.content}>
        {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
      </div>
    </div>
  );
});
