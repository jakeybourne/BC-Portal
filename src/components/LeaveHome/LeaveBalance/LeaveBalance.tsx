import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_TypeLinkSizeDefaultStat } from '../Button_TypeLinkSizeDefaultStat/Button_TypeLinkSizeDefaultStat';
import { DatePicker_ActiveNoSizeDefault } from '../DatePicker_ActiveNoSizeDefault/DatePicker_ActiveNoSizeDefault';
import { TabItemBasic_PositionTopSizeDe2 } from '../TabItemBasic_PositionTopSizeDe2/TabItemBasic_PositionTopSizeDe2';
import { TabItemBasic_PositionTopSizeDe } from '../TabItemBasic_PositionTopSizeDe/TabItemBasic_PositionTopSizeDe';
import classes from './LeaveBalance.module.css';

interface Props {
  className?: string;
  classes?: {
    TabsBasic?: string;
    root?: string;
  };
}
/* @figmaId 1:24860 */
export const LeaveBalance: FC<Props> = memo(function LeaveBalance(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.cardHeadDefault}>
        <div className={classes.leaveBalance}>Leave Balance</div>
      </div>
      <div className={`${props.classes?.TabsBasic || ''} ${classes.TabsBasic}`}>
        <div className={classes.tabs}>
          <TabItemBasic_PositionTopSizeDe
            text={{
              tabTitle: <div className={classes.tabTitle}>Current</div>,
            }}
          />
          <TabItemBasic_PositionTopSizeDe2
            text={{
              tabTitle: <div className={classes.tabTitle2}>Future</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.cardBodyDefault}>
        <div className={classes.Space}>
          <div className={classes._132Days}>13.2 Days</div>
        </div>
      </div>
    </div>
  );
});
