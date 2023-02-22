import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Search } from '../Search/Search';
import classes from './_InputDropdownBase_LabelFalseT.module.css';
import { SearchIcon } from './SearchIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    input?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1:11785 */
export const _InputDropdownBase_LabelFalseT: FC<Props> = memo(function _InputDropdownBase_LabelFalseT(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.inputWithLabel}>
        <div className={`${props.classes?.input || ''} ${classes.input}`}>
          <div className={classes.content}>
            <Search
              className={classes.search}
              swap={{
                icon: props.swap?.icon || <SearchIcon className={classes.icon} />,
              }}
            />
            {props.text?.text != null ? props.text?.text : <div className={classes.text}>Search</div>}
          </div>
        </div>
      </div>
    </div>
  );
});
