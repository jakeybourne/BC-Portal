import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BarChart2 } from '../BarChart2/BarChart2';
import classes from './_NavItemBase_CurrentFalseBadge.module.css';
import { BarChart2Icon } from './BarChart2Icon';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    root?: string;
  };
  swap?: {
    barChart2?: ReactNode;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1:13313 */
export const _NavItemBase_CurrentFalseBadge: FC<Props> = memo(function _NavItemBase_CurrentFalseBadge(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.content || ''} ${classes.content}`}>
        {props.swap?.barChart2 || (
          <BarChart2
            swap={{
              icon: <BarChart2Icon className={classes.icon} />,
            }}
          />
        )}
        {props.text?.text != null ? props.text?.text : <div className={classes.text}>Dashboard</div>}
      </div>
    </div>
  );
});
