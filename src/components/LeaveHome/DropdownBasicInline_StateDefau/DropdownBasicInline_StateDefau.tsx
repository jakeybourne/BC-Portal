import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconDownOutlined } from '../IconDownOutlined/IconDownOutlined';
import classes from './DropdownBasicInline_StateDefau.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:7807 */
export const DropdownBasicInline_StateDefau: FC<Props> = memo(function DropdownBasicInline_StateDefau(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.dropdown}>Dropdown</div>
      <IconDownOutlined
        className={classes.iconDownOutlined}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
