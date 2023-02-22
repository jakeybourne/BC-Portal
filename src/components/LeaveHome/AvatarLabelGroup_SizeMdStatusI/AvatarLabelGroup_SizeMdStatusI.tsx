import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Avatar_SizeMdPlaceholderFalseT } from '../Avatar_SizeMdPlaceholderFalseT/Avatar_SizeMdPlaceholderFalseT';
import classes from './AvatarLabelGroup_SizeMdStatusI.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar?: string;
  };
  text?: {
    text?: ReactNode;
    supportingText?: ReactNode;
  };
}
/* @figmaId 1:18917 */
export const AvatarLabelGroup_SizeMdStatusI: FC<Props> = memo(function AvatarLabelGroup_SizeMdStatusI(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Avatar_SizeMdPlaceholderFalseT className={`${props.classes?.avatar || ''} ${classes.avatar}`} />
      <div className={classes.textAndSupportingText}>
        {props.text?.text != null ? props.text?.text : <div className={classes.text}>Olivia Rhye</div>}
        {props.text?.supportingText != null ? (
          props.text?.supportingText
        ) : (
          <div className={classes.supportingText}>olivia@untitledui.com</div>
        )}
      </div>
    </div>
  );
});
