import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_TypeLinkSizeDefaultStat } from '../Button_TypeLinkSizeDefaultStat/Button_TypeLinkSizeDefaultStat';
import { DatePickerMenuItem_StateCurren } from '../DatePickerMenuItem_StateCurren/DatePickerMenuItem_StateCurren';
import { DatePickerMenuItem_StateDefaul } from '../DatePickerMenuItem_StateDefaul/DatePickerMenuItem_StateDefaul';
import { DatePickerMenuItem_StateInacti } from '../DatePickerMenuItem_StateInacti/DatePickerMenuItem_StateInacti';
import { IconDoubleLeftOutlined } from '../IconDoubleLeftOutlined/IconDoubleLeftOutlined';
import { IconDoubleRightOutlined } from '../IconDoubleRightOutlined/IconDoubleRightOutlined';
import { IconLeftOutlined } from '../IconLeftOutlined/IconLeftOutlined';
import { IconRightOutlined } from '../IconRightOutlined/IconRightOutlined';
import classes from './DatePickerMenu_TypeDayRangeFal.module.css';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';

interface Props {
  className?: string;
}
/* @figmaId 1:2530 */
export const DatePickerMenu_TypeDayRangeFal: FC<Props> = memo(function DatePickerMenu_TypeDayRangeFal(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.header}>
        <div className={classes.navigation}>
          <IconLeftOutlined
            className={classes.iconLeftOutlined}
            swap={{
              vector: <VectorIcon className={classes.icon} />,
            }}
          />
          <IconDoubleLeftOutlined
            className={classes.iconDoubleLeftOutlined}
            swap={{
              vector: <VectorIcon2 className={classes.icon2} />,
            }}
          />
        </div>
        <div className={classes.dec2020}>Dec 2020</div>
        <div className={classes.navigation2}>
          <IconDoubleRightOutlined
            className={classes.iconDoubleRightOutlined}
            swap={{
              vector: <VectorIcon3 className={classes.icon3} />,
            }}
          />
          <IconRightOutlined
            className={classes.iconRightOutlined}
            swap={{
              vector: <VectorIcon4 className={classes.icon4} />,
            }}
          />
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.row}>
          <div className={classes.cellWrapper}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem}
              text={{
                _24: <div className={classes._24}>Su</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper2}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem2}
              text={{
                _24: <div className={classes._242}>Mo</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper3}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem3}
              text={{
                _24: <div className={classes._243}>Tu</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper4}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem4}
              text={{
                _24: <div className={classes._244}>We</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper5}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem5}
              text={{
                _24: <div className={classes._245}>Th</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper6}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem6}
              text={{
                _24: <div className={classes._246}>Fr</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper7}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem7}
              text={{
                _24: <div className={classes._247}>Sa</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.row2}>
          <div className={classes.cellWrapper8}>
            <DatePickerMenuItem_StateInacti
              className={classes.datePickerMenuItem8}
              text={{
                _24: <div className={classes._248}>29</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper9}>
            <DatePickerMenuItem_StateInacti
              className={classes.datePickerMenuItem9}
              text={{
                _24: <div className={classes._249}>30</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper10}>
            <DatePickerMenuItem_StateCurren
              className={classes.datePickerMenuItem10}
              text={{
                _24: <div className={classes._2410}>1</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper11}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem11}
              text={{
                _24: <div className={classes._2411}>2</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper12}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem12}
              text={{
                _24: <div className={classes._2412}>3</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper13}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem13}
              text={{
                _24: <div className={classes._2413}>4</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper14}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem14}
              text={{
                _24: <div className={classes._2414}>5</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.row3}>
          <div className={classes.cellWrapper15}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem15}
              text={{
                _24: <div className={classes._2415}>6</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper16}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem16}
              text={{
                _24: <div className={classes._2416}>7</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper17}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem17}
              text={{
                _24: <div className={classes._2417}>8</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper18}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem18}
              text={{
                _24: <div className={classes._2418}>9</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper19}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem19}
              text={{
                _24: <div className={classes._2419}>10</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper20}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem20}
              text={{
                _24: <div className={classes._2420}>11</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper21}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem21}
              text={{
                _24: <div className={classes._2421}>12</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.row4}>
          <div className={classes.cellWrapper22}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem22}
              text={{
                _24: <div className={classes._2422}>13</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper23}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem23}
              text={{
                _24: <div className={classes._2423}>14</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper24}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem24}
              text={{
                _24: <div className={classes._2424}>15</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper25}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem25}
              text={{
                _24: <div className={classes._2425}>16</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper26}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem26}
              text={{
                _24: <div className={classes._2426}>17</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper27}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem27}
              text={{
                _24: <div className={classes._2427}>18</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper28}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem28}
              text={{
                _24: <div className={classes._2428}>19</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.row5}>
          <div className={classes.cellWrapper29}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem29}
              text={{
                _24: <div className={classes._2429}>20</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper30}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem30}
              text={{
                _24: <div className={classes._2430}>21</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper31}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem31}
              text={{
                _24: <div className={classes._2431}>22</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper32}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem32}
              text={{
                _24: <div className={classes._2432}>23</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper33}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem33}
              text={{
                _24: <div className={classes._2433}>24</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper34}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem34}
              text={{
                _24: <div className={classes._2434}>25</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper35}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem35}
              text={{
                _24: <div className={classes._2435}>26</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.row6}>
          <div className={classes.cellWrapper36}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem36}
              text={{
                _24: <div className={classes._2436}>27</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper37}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem37}
              text={{
                _24: <div className={classes._2437}>28</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper38}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem38}
              text={{
                _24: <div className={classes._2438}>29</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper39}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem39}
              text={{
                _24: <div className={classes._2439}>30</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper40}>
            <DatePickerMenuItem_StateDefaul
              className={classes.datePickerMenuItem40}
              text={{
                _24: <div className={classes._2440}>31</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper41}>
            <DatePickerMenuItem_StateInacti
              className={classes.datePickerMenuItem41}
              text={{
                _24: <div className={classes._2441}>1</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper42}>
            <DatePickerMenuItem_StateInacti
              className={classes.datePickerMenuItem42}
              text={{
                _24: <div className={classes._2442}>2</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.row7}>
          <div className={classes.cellWrapper43}>
            <DatePickerMenuItem_StateInacti
              className={classes.datePickerMenuItem43}
              text={{
                _24: <div className={classes._2443}>3</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper44}>
            <DatePickerMenuItem_StateInacti
              className={classes.datePickerMenuItem44}
              text={{
                _24: <div className={classes._2444}>4</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper45}>
            <DatePickerMenuItem_StateInacti
              className={classes.datePickerMenuItem45}
              text={{
                _24: <div className={classes._2445}>5</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper46}>
            <DatePickerMenuItem_StateInacti
              className={classes.datePickerMenuItem46}
              text={{
                _24: <div className={classes._2446}>6</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper47}>
            <DatePickerMenuItem_StateInacti
              className={classes.datePickerMenuItem47}
              text={{
                _24: <div className={classes._2447}>7</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper48}>
            <DatePickerMenuItem_StateInacti
              className={classes.datePickerMenuItem48}
              text={{
                _24: <div className={classes._2448}>8</div>,
              }}
            />
          </div>
          <div className={classes.cellWrapper49}>
            <DatePickerMenuItem_StateInacti
              className={classes.datePickerMenuItem49}
              text={{
                _24: <div className={classes._2449}>9</div>,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <Button_TypeLinkSizeDefaultStat
          text={{
            button: <div className={classes.button}>Today</div>,
          }}
        />
      </div>
    </div>
  );
});
