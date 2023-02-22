import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_TypeLinkSizeDefaultStat } from '../Button_TypeLinkSizeDefaultStat/Button_TypeLinkSizeDefaultStat';
import { DatePicker_ActiveNoSizeDefault } from '../DatePicker_ActiveNoSizeDefault/DatePicker_ActiveNoSizeDefault';
import { TabItemBasic_PositionTopSizeDe2 } from '../TabItemBasic_PositionTopSizeDe2/TabItemBasic_PositionTopSizeDe2';
import { TabItemBasic_PositionTopSizeDe } from '../TabItemBasic_PositionTopSizeDe/TabItemBasic_PositionTopSizeDe';
import classes from './UpcomingPublicHolidays.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    leaveBalance?: ReactNode;
    _34237423Easter?: ReactNode;
    _34237423Easter2?: ReactNode;
    _34237423Easter3?: ReactNode;
  };
}
/* @figmaId 1:61076 */
export const UpcomingPublicHolidays: FC<Props> = memo(function UpcomingPublicHolidays(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.cardHeadDefault}>
        {props.text?.leaveBalance != null ? (
          props.text?.leaveBalance
        ) : (
          <div className={classes.leaveBalance}>Upcoming Public Holidays</div>
        )}
      </div>
      <div className={classes.cardBodyDefault}>
        <div className={classes.Space}>
          {props.text?._34237423Easter != null ? (
            props.text?._34237423Easter
          ) : (
            <div className={classes._34237423Easter}>03/04/23 - 07/04/23 - Easter</div>
          )}
          {props.text?._34237423Easter2 != null ? (
            props.text?._34237423Easter2
          ) : (
            <div className={classes._34237423Easter2}>03/04/23 - 07/04/23 - Easter</div>
          )}
          {props.text?._34237423Easter3 != null ? (
            props.text?._34237423Easter3
          ) : (
            <div className={classes._34237423Easter3}>03/04/23 - 07/04/23 - Easter</div>
          )}
        </div>
      </div>
    </div>
  );
});
