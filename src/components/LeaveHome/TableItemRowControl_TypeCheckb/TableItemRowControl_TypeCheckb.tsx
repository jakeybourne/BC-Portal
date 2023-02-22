import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Checkbox_StatusInactiveStateDe } from '../Checkbox_StatusInactiveStateDe/Checkbox_StatusInactiveStateDe';
import classes from './TableItemRowControl_TypeCheckb.module.css';

interface Props {
  className?: string;
  classes?: {
    Checkbox?: string;
    root?: string;
  };
  hide?: {
    checkbox?: boolean;
  };
}
/* @figmaId 1:7686 */
export const TableItemRowControl_TypeCheckb: FC<Props> = memo(function TableItemRowControl_TypeCheckb(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Checkbox_StatusInactiveStateDe
        className={`${props.classes?.Checkbox || ''} ${classes.Checkbox}`}
        hide={{
          checkbox: true,
        }}
      />
    </div>
  );
});
