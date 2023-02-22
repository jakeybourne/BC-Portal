import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_SizeMdHierarchyTertiary } from '../Button_SizeMdHierarchyTertiary/Button_SizeMdHierarchyTertiary';
import { IconCalendarOutlined } from '../IconCalendarOutlined/IconCalendarOutlined';
import { IconPlusOutlined } from '../IconPlusOutlined/IconPlusOutlined';
import { MenuItemInlineNavigationItem_S } from '../MenuItemInlineNavigationItem_S/MenuItemInlineNavigationItem_S';
import classes from './HeaderSection.module.css';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    iconCalendarOutlined?: boolean;
  };
}
/* @figmaId 1:61923 */
export const HeaderSection: FC<Props> = memo(function HeaderSection(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.container}>
        <div className={classes.pageHeader}>
          <div className={classes.content}>
            <div className={classes.textAndSupportingText}>
             </div>
            <div className={classes.actions}>
              <MenuItemInlineNavigationItem_S
                className={classes.menuItemInlineNavigationItem}
                hide={{
                  iconMailOutlined: true,
                }}
                text={{
                  navigationItem: <div className={classes.navigationItem}>Add Employee</div>,
                }}
              />
              <MenuItemInlineNavigationItem_S
                className={classes.menuItemInlineNavigationItem2}
                swap={{
                  iconMailOutlined: (
                    <IconCalendarOutlined
                      className={classes.iconCalendarOutlined}
                      swap={{
                        vector: <VectorIcon className={classes.icon} />,
                      }}
                    />
                  ),
                }}
                text={{
                  navigationItem: <div className={classes.navigationItem2}>View Team Calendar</div>,
                }}
              />
              <MenuItemInlineNavigationItem_S
                className={classes.menuItemInlineNavigationItem3}
                swap={{
                  iconMailOutlined: (
                    <IconPlusOutlined
                      className={classes.iconPlusOutlined}
                      swap={{
                        vector: <VectorIcon2 className={classes.icon2} />,
                      }}
                    />
                  ),
                }}
                text={{
                  navigationItem: <div className={classes.navigationItem3}>Submit Leave Application</div>,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
