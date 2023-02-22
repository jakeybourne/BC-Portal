import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BarChart2 } from '../BarChart2/BarChart2';
import classes from './_NavItemBase_CurrentTrueBadgeF.module.css';
import { BarChart2Icon } from './BarChart2Icon';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1:13324 */
export const _NavItemBase_CurrentTrueBadgeF: FC<Props> = memo(function _NavItemBase_CurrentTrueBadgeF(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.content || ''} ${classes.content}`}>
        <BarChart2
          swap={{
            icon: <BarChart2Icon className={classes.icon} />,
          }}
        />
        {props.text?.text != null ? props.text?.text : <div className={classes.text}>Dashboard</div>}
      </div>
    </div>
  );
});
