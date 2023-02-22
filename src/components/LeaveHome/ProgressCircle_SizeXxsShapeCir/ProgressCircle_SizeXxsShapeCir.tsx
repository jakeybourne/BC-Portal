import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BackgroundIcon } from './BackgroundIcon';
import { LineIcon } from './LineIcon';
import classes from './ProgressCircle_SizeXxsShapeCir.module.css';

interface Props {
  className?: string;
  swap?: {
    background?: ReactNode;
    line?: ReactNode;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1:18734 */
export const ProgressCircle_SizeXxsShapeCir: FC<Props> = memo(function ProgressCircle_SizeXxsShapeCir(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ring}>
        <div className={classes.background}>
          {props.swap?.background || <BackgroundIcon className={classes.icon} />}
        </div>
        <div className={classes.line}>{props.swap?.line || <LineIcon className={classes.icon2} />}</div>
        {props.text?.text != null ? props.text?.text : <div className={classes.text}>40%</div>}
      </div>
    </div>
  );
});
