import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconCalendarOutlined } from '../IconCalendarOutlined/IconCalendarOutlined';
import classes from './DatePickerInputBasic_StatusDef.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    selectDate?: ReactNode;
  };
}
/* @figmaId 1:2074 */
export const DatePickerInputBasic_StatusDef: FC<Props> = memo(function DatePickerInputBasic_StatusDef(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.selectDate != null ? props.text?.selectDate : <div className={classes.selectDate}>Select date</div>}
      <IconCalendarOutlined
        className={classes.iconCalendarOutlined}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
