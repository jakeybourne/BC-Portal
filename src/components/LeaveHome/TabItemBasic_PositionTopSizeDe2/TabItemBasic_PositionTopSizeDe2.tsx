import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconAndroidOutlined } from '../IconAndroidOutlined/IconAndroidOutlined';
import classes from './TabItemBasic_PositionTopSizeDe2.module.css';

interface Props {
  className?: string;
  text?: {
    tabTitle?: ReactNode;
  };
}
/* @figmaId 1:1944 */
export const TabItemBasic_PositionTopSizeDe2: FC<Props> = memo(function TabItemBasic_PositionTopSizeDe2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.tabTitle != null ? props.text?.tabTitle : <div className={classes.tabTitle}>Tab title</div>}
    </div>
  );
});
