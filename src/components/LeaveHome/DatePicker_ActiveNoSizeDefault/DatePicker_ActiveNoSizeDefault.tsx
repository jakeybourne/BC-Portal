import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { DatePickerInputBasic_StatusDef } from '../DatePickerInputBasic_StatusDef/DatePickerInputBasic_StatusDef';
import { DatePickerMenu_TypeDayRangeFal } from '../DatePickerMenu_TypeDayRangeFal/DatePickerMenu_TypeDayRangeFal';
import classes from './DatePicker_ActiveNoSizeDefault.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:2064 */
export const DatePicker_ActiveNoSizeDefault: FC<Props> = memo(function DatePicker_ActiveNoSizeDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <DatePickerInputBasic_StatusDef
        className={classes.datePickerInputBasic}
        text={{
          selectDate: <div className={classes.selectDate}>Select date</div>,
        }}
      />
    </div>
  );
});
