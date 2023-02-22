import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconMailOutlined } from '../IconMailOutlined/IconMailOutlined';
import { IconUpOutlined } from '../IconUpOutlined/IconUpOutlined';
import classes from './MenuItemInlineNavigationItem_S.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    iconMailOutlined?: ReactNode;
  };
  hide?: {
    iconMailOutlined?: boolean;
  };
  text?: {
    navigationItem?: ReactNode;
  };
}
/* @figmaId 1:7164 */
export const MenuItemInlineNavigationItem_S: FC<Props> = memo(function MenuItemInlineNavigationItem_S(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.iconMailOutlined &&
        (props.swap?.iconMailOutlined || (
          <IconMailOutlined
            className={classes.iconMailOutlined}
            swap={{
              vector: <VectorIcon className={classes.icon} />,
            }}
          />
        ))}
      {props.text?.navigationItem != null ? (
        props.text?.navigationItem
      ) : (
        <div className={classes.navigationItem}>Navigation Item</div>
      )}
    </div>
  );
});
