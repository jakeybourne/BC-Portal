import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_SizeSmHierarchyLinkColo } from '../Button_SizeSmHierarchyLinkColo/Button_SizeSmHierarchyLinkColo';
import { Button_SizeSmHierarchyLinkGray } from '../Button_SizeSmHierarchyLinkGray/Button_SizeSmHierarchyLinkGray';
import { ProgressCircle_SizeXxsShapeCir } from '../ProgressCircle_SizeXxsShapeCir/ProgressCircle_SizeXxsShapeCir';
import classes from './_NavFeaturedCard_CloseXFalseTy.module.css';
import { BackgroundIcon } from './BackgroundIcon';
import { LineIcon } from './LineIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:15443 */
export const _NavFeaturedCard_CloseXFalseTy: FC<Props> = memo(function _NavFeaturedCard_CloseXFalseTy(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <ProgressCircle_SizeXxsShapeCir
        swap={{
          background: <BackgroundIcon className={classes.icon} />,
          line: <LineIcon className={classes.icon2} />,
        }}
        text={{
          text: <div className={classes.text}>80%</div>,
        }}
      />
      <div className={classes.textAndSupportingText}>
        <div className={classes.text4}>Used space</div>
        <div className={classes.supportingText}>Your team has used 80% of your available space. Need more?</div>
      </div>
      <div className={classes.actions}>
        <Button_SizeSmHierarchyLinkGray
          text={{
            text: <div className={classes.text2}>Dismiss</div>,
          }}
        />
        <Button_SizeSmHierarchyLinkColo
          text={{
            text: <div className={classes.text3}>Upgrade plan</div>,
          }}
        />
      </div>
    </div>
  );
});
