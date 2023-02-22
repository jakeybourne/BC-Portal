import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _3Layers } from './_3Layers/_3Layers';
import { _3LayersIcon } from './_3LayersIcon';
import { _NavFeaturedCard_CloseXFalseTy } from './_NavFeaturedCard_CloseXFalseTy/_NavFeaturedCard_CloseXFalseTy';
import { _NavItemBase_CurrentFalseBadge } from './_NavItemBase_CurrentFalseBadge/_NavItemBase_CurrentFalseBadge';
import { _NavItemBase_CurrentTrueBadgeF } from './_NavItemBase_CurrentTrueBadgeF/_NavItemBase_CurrentTrueBadgeF';
import { AvatarLabelGroup_SizeMdStatusI } from './AvatarLabelGroup_SizeMdStatusI/AvatarLabelGroup_SizeMdStatusI';
import { BetweenCollectiveLogoWhite1Ico } from './BetweenCollectiveLogoWhite1Ico';
import { Button_SizeMdHierarchySecondar2 } from './Button_SizeMdHierarchySecondar2/Button_SizeMdHierarchySecondar2';
import { Button_SizeMdHierarchySecondar } from './Button_SizeMdHierarchySecondar/Button_SizeMdHierarchySecondar';
import { Button_SizeSmHierarchyTertiary } from './Button_SizeSmHierarchyTertiary/Button_SizeSmHierarchyTertiary';
import { CheckSquare } from './CheckSquare/CheckSquare';
import { CheckSquareIcon } from './CheckSquareIcon';
import { Decision } from './Decision/Decision';
import { DividerIcon } from './DividerIcon';
import { DividerIcon2 } from './DividerIcon2';
import { FiltersLines } from './FiltersLines/FiltersLines';
import { FiltersLinesIcon } from './FiltersLinesIcon';
import { Flag } from './Flag/Flag';
import { FlagIcon } from './FlagIcon';
import { HeaderSection } from './HeaderSection/HeaderSection';
import { Home } from './Home/Home';
import { HomeIcon } from './HomeIcon';
import { InputDropdown_StatePlaceholder } from './InputDropdown_StatePlaceholder/InputDropdown_StatePlaceholder';
import { LeaveBalance } from './LeaveBalance/LeaveBalance';
import classes from './LeaveHome.module.css';
import { LogOut } from './LogOut/LogOut';
import { LogOutIcon } from './LogOutIcon';
import { Pagination_VariantBasic } from './Pagination_VariantBasic/Pagination_VariantBasic';
import { SearchIcon } from './SearchIcon';
import { Settings } from './Settings/Settings';
import { SettingsIcon } from './SettingsIcon';
import { SizeDefaultBorderedFalse_SizeS } from './SizeDefaultBorderedFalse_SizeS/SizeDefaultBorderedFalse_SizeS';
import { SortIcon } from './SortIcon';
import { SortIcon2 } from './SortIcon2';
import { SortIcon3 } from './SortIcon3';
import { SortIcon4 } from './SortIcon4';
import { TableItemHeaderControl_TypeChe } from './TableItemHeaderControl_TypeChe/TableItemHeaderControl_TypeChe';
import { TableItemHeaderControl_TypeEmp } from './TableItemHeaderControl_TypeEmp/TableItemHeaderControl_TypeEmp';
import { TableItemHeaderItem_SizeSmallB } from './TableItemHeaderItem_SizeSmallB/TableItemHeaderItem_SizeSmallB';
import { TableItemRowControl_TypeCheckb } from './TableItemRowControl_TypeCheckb/TableItemRowControl_TypeCheckb';
import { TableItemRowControl_TypeCollap } from './TableItemRowControl_TypeCollap/TableItemRowControl_TypeCollap';
import { TableItemRowControl_TypeExpand } from './TableItemRowControl_TypeExpand/TableItemRowControl_TypeExpand';
import { TagColorful_PresetCyan } from './TagColorful_PresetCyan/TagColorful_PresetCyan';
import { TagColorful_PresetGeekblue } from './TagColorful_PresetGeekblue/TagColorful_PresetGeekblue';
import { TagColorful_PresetGold } from './TagColorful_PresetGold/TagColorful_PresetGold';
import { TagColorful_PresetGreen } from './TagColorful_PresetGreen/TagColorful_PresetGreen';
import { TagColorful_PresetPurple } from './TagColorful_PresetPurple/TagColorful_PresetPurple';
import { UpcomingPublicHolidays } from './UpcomingPublicHolidays/UpcomingPublicHolidays';
import { Users } from './Users/Users';
import { UsersIcon } from './UsersIcon';
import { X } from './X/X';
import { XIcon } from './XIcon';

interface Props {
  className?: string;
  hide?: {
    checkbox?: boolean;
    iconFilterFilled?: boolean;
    sort?: boolean;
    sort2?: boolean;
    iconFilterFilled2?: boolean;
    sort3?: boolean;
    sort4?: boolean;
    checkbox2?: boolean;
    tableCellText?: boolean;
    TagColorful?: boolean;
    checkbox3?: boolean;
    tableCellText2?: boolean;
    TagColorful2?: boolean;
    checkbox4?: boolean;
    tableCellText3?: boolean;
    TagColorful3?: boolean;
    checkbox5?: boolean;
    tableCellText4?: boolean;
    TagColorful4?: boolean;
    checkbox6?: boolean;
    tableCellText5?: boolean;
    TagColorful5?: boolean;
    checkbox7?: boolean;
    tableCellText6?: boolean;
    TagColorful6?: boolean;
  };
}
/* @figmaId 1:25201 */
export const LeaveHome: FC<Props> = memo(function LeaveHome(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.sidebarNavigation}>
        <div className={classes.divider}>
          <DividerIcon className={classes.icon17} />
        </div>
        <div className={classes.content7}>
          <div className={classes.nav}>
            <div className={classes.header}>
              <div className={classes.logo}>
                <div className={classes.betweenCollectiveLogoWhite1}>
                  <BetweenCollectiveLogoWhite1Ico className={classes.icon18} />
                </div>
              </div>
            </div>
            <div className={classes.search}>
              <InputDropdown_StatePlaceholder
                className={classes.inputDropdown}
                classes={{ input: classes.input }}
                swap={{
                  icon: <SearchIcon className={classes.icon} />,
                }}
                text={{
                  text: <div className={classes.text}>Search</div>,
                }}
              />
            </div>
            <div className={classes.navigation}>
              <_NavItemBase_CurrentFalseBadge
                className={classes._NavItemBase}
                classes={{ content: classes.content }}
                swap={{
                  barChart2: (
                    <Home
                      swap={{
                        icon: <HomeIcon className={classes.icon2} />,
                      }}
                    />
                  ),
                }}
                text={{
                  text: <div className={classes.text2}>Home</div>,
                }}
              />
              <_NavItemBase_CurrentTrueBadgeF
                className={classes._NavItemBase2}
                classes={{ content: classes.content2 }}
                text={{
                  text: <div className={classes.text3}>Leave</div>,
                }}
              />
              <_NavItemBase_CurrentFalseBadge
                className={classes._NavItemBase3}
                classes={{ content: classes.content3 }}
                swap={{
                  barChart2: (
                    <_3Layers
                      swap={{
                        icon: <_3LayersIcon className={classes.icon3} />,
                      }}
                    />
                  ),
                }}
                text={{
                  text: <div className={classes.text4}>Equipment</div>,
                }}
              />
              <_NavItemBase_CurrentFalseBadge
                className={classes._NavItemBase4}
                classes={{ content: classes.content4 }}
                swap={{
                  barChart2: (
                    <CheckSquare
                      swap={{
                        icon: <CheckSquareIcon className={classes.icon4} />,
                      }}
                    />
                  ),
                }}
                text={{
                  text: <div className={classes.text5}>University</div>,
                }}
              />
              <_NavItemBase_CurrentFalseBadge
                className={classes._NavItemBase5}
                classes={{ content: classes.content5 }}
                swap={{
                  barChart2: (
                    <Flag
                      swap={{
                        icon: <FlagIcon className={classes.icon5} />,
                      }}
                    />
                  ),
                }}
                text={{
                  text: <div className={classes.text6}>Reporting</div>,
                }}
              />
              <_NavItemBase_CurrentFalseBadge
                className={classes._NavItemBase6}
                classes={{ content: classes.content6 }}
                swap={{
                  barChart2: (
                    <Users
                      swap={{
                        icon: <UsersIcon className={classes.icon6} />,
                      }}
                    />
                  ),
                }}
                text={{
                  text: <div className={classes.text7}>Users</div>,
                }}
              />
            </div>
          </div>
          <div className={classes.footer}>
            <div className={classes.navigation2}>
              <_NavItemBase_CurrentFalseBadge
                text={{
                  text: <div className={classes.text8}>Support</div>,
                }}
              />
              <_NavItemBase_CurrentFalseBadge
                swap={{
                  barChart2: (
                    <Settings
                      swap={{
                        icon: <SettingsIcon className={classes.icon7} />,
                      }}
                    />
                  ),
                }}
                text={{
                  text: <div className={classes.text9}>Settings</div>,
                }}
              />
            </div>
            <_NavFeaturedCard_CloseXFalseTy />
            <div className={classes.divider2}>
              <DividerIcon2 className={classes.icon19} />
            </div>
            <div className={classes.account}>
              <AvatarLabelGroup_SizeMdStatusI
                classes={{ avatar: classes.avatar }}
                text={{
                  text: <div className={classes.text10}>Olivia Rhye</div>,
                  supportingText: <div className={classes.supportingText}>olivia@betweencollective.com</div>,
                }}
              />
              <div className={classes.icon20}>
                <Button_SizeSmHierarchyTertiary
                  className={classes.button}
                  swap={{
                    circle: (
                      <LogOut
                        className={classes.logOut}
                        swap={{
                          icon: <LogOutIcon className={classes.icon8} />,
                        }}
                      />
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mainWrap}>
        <div className={classes.main}>
          <HeaderSection className={classes.headerSection} />
          <div className={classes.section}>
            <div className={classes.container}>
              <div className={classes.metricGroup}>
                <LeaveBalance className={classes.leaveBalance} classes={{ TabsBasic: classes.TabsBasic }} />
                <UpcomingPublicHolidays
                  className={classes.upcomingPublicHolidays}
                  text={{
                    leaveBalance: <div className={classes.leaveBalance2}>Upcoming Leave</div>,
                    _34237423Easter: <div className={classes._34237423Easter}>22/03/23 - 24/03/23 - Annual Leave</div>,
                    _34237423Easter2: (
                      <div className={classes._34237423Easter2}>22/05/23 - 24/05/23 - Annual Leave</div>
                    ),
                    _34237423Easter3: (
                      <div className={classes._34237423Easter3}>22/05/23 - 24/05/23 - Annual Leave</div>
                    ),
                  }}
                />
                <UpcomingPublicHolidays className={classes.upcomingPublicHolidays2} />
              </div>
            </div>
          </div>
          <div className={classes.section2}>
            <div className={classes.container2}>
              <div className={classes.filtersBar}>
                <div className={classes.content8}>
                  <InputDropdown_StatePlaceholder />
                </div>
              </div>
              <div className={classes.Table}>
                <div className={classes.tableTitle}>
                  <div className={classes.leavePending}>Leave Pending</div>
                  <div className={classes.confirmedLeave}>Confirmed Leave</div>
                </div>
                <div className={classes.table}>
                  <div className={classes.headerRow}>
                    <TableItemHeaderControl_TypeChe
                      className={classes.tableItemHeaderControl}
                      classes={{ Checkbox: classes.Checkbox }}
                    />
                    <TableItemHeaderItem_SizeSmallB
                      className={classes.tableItemHeaderItem}
                      classes={{ iconFilterFilled: classes.iconFilterFilled, wrapper: classes.wrapper }}
                      hide={{
                        iconFilterFilled: false,
                      }}
                      text={{
                        tableHeader: <div className={classes.tableHeader}>Name</div>,
                      }}
                    />
                    <TableItemHeaderItem_SizeSmallB
                      className={classes.tableItemHeaderItem2}
                      classes={{ sort: classes.sort }}
                      swap={{
                        sort: !props.hide?.sort && (
                          <div className={classes.sort}>
                            <SortIcon className={classes.icon13} />
                          </div>
                        ),
                      }}
                      hide={{
                        sort: false,
                      }}
                      text={{
                        tableHeader: <div className={classes.tableHeader2}>Start Date </div>,
                      }}
                    />
                    <TableItemHeaderItem_SizeSmallB
                      className={classes.tableItemHeaderItem3}
                      classes={{ sort: classes.sort2 }}
                      swap={{
                        sort: !props.hide?.sort2 && (
                          <div className={classes.sort2}>
                            <SortIcon2 className={classes.icon14} />
                          </div>
                        ),
                      }}
                      hide={{
                        sort: false,
                      }}
                      text={{
                        tableHeader: <div className={classes.tableHeader3}>End Date</div>,
                      }}
                    />
                    <TableItemHeaderItem_SizeSmallB
                      className={classes.tableItemHeaderItem4}
                      classes={{ iconFilterFilled: classes.iconFilterFilled2 }}
                      hide={{
                        iconFilterFilled: false,
                      }}
                      text={{
                        tableHeader: <div className={classes.tableHeader4}>Leave Type</div>,
                      }}
                    />
                    <TableItemHeaderItem_SizeSmallB
                      className={classes.tableItemHeaderItem5}
                      classes={{ sort: classes.sort3, wrapper: classes.wrapper2 }}
                      swap={{
                        sort: !props.hide?.sort3 && (
                          <div className={classes.sort3}>
                            <SortIcon3 className={classes.icon15} />
                          </div>
                        ),
                      }}
                      hide={{
                        sort: false,
                      }}
                      text={{
                        tableHeader: <div className={classes.tableHeader5}>Amount</div>,
                      }}
                    />
                    <TableItemHeaderItem_SizeSmallB
                      className={classes.tableItemHeaderItem6}
                      classes={{ sort: classes.sort4, wrapper: classes.wrapper3 }}
                      swap={{
                        sort: !props.hide?.sort4 && (
                          <div className={classes.sort4}>
                            <SortIcon4 className={classes.icon16} />
                          </div>
                        ),
                      }}
                      hide={{
                        sort: false,
                      }}
                      text={{
                        tableHeader: <div className={classes.tableHeader6}>Currently Off</div>,
                      }}
                    />
                    <TableItemHeaderItem_SizeSmallB
                      className={classes.tableItemHeaderItem7}
                      classes={{ wrapper: classes.wrapper4 }}
                      text={{
                        tableHeader: <div className={classes.tableHeader7}>Decision</div>,
                      }}
                    />
                  </div>
                  <div className={classes.row}>
                    <TableItemRowControl_TypeCheckb
                      className={classes.tableItemRowControl}
                      classes={{ Checkbox: classes.Checkbox2 }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse}
                      text={{
                        tableCellText: <div className={classes.tableCellText}>Jake Bourne</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse2}
                      text={{
                        tableCellText: <div className={classes.tableCellText2}>20/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse3}
                      text={{
                        tableCellText: <div className={classes.tableCellText3}>22/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse4}
                      swap={{
                        TagColorful: (
                          <TagColorful_PresetCyan
                            text={{
                              cyan: <div className={classes.cyan}>🌴 Annual Leave</div>,
                            }}
                          />
                        ),
                      }}
                      hide={{
                        tableCellText: true,
                        TagColorful: false,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse5}
                      text={{
                        tableCellText: <div className={classes.tableCellText4}>2 Days</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse6}
                      text={{
                        tableCellText: <div className={classes.tableCellText5}>2 Days</div>,
                      }}
                    />
                    <Decision className={classes.decision} />
                  </div>
                  <div className={classes.row2}>
                    <TableItemRowControl_TypeCheckb
                      className={classes.tableItemRowControl2}
                      classes={{ Checkbox: classes.Checkbox3 }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse7}
                      text={{
                        tableCellText: <div className={classes.tableCellText6}>Veronica Costas</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse8}
                      text={{
                        tableCellText: <div className={classes.tableCellText7}>20/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse9}
                      text={{
                        tableCellText: <div className={classes.tableCellText8}>22/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse10}
                      swap={{
                        TagColorful: (
                          <TagColorful_PresetGold
                            text={{
                              gold: <div className={classes.gold}>🎉 Birthday</div>,
                            }}
                          />
                        ),
                      }}
                      hide={{
                        tableCellText: true,
                        TagColorful: false,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse11}
                      text={{
                        tableCellText: <div className={classes.tableCellText9}>2 Days</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse12}
                      text={{
                        tableCellText: <div className={classes.tableCellText10}>2 Days</div>,
                      }}
                    />
                    <Decision className={classes.decision2} />
                  </div>
                  <div className={classes.row3}>
                    <TableItemRowControl_TypeCheckb
                      className={classes.tableItemRowControl3}
                      classes={{ Checkbox: classes.Checkbox4 }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse13}
                      text={{
                        tableCellText: <div className={classes.tableCellText11}>David Robson</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse14}
                      text={{
                        tableCellText: <div className={classes.tableCellText12}>20/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse15}
                      text={{
                        tableCellText: <div className={classes.tableCellText13}>22/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse16}
                      swap={{
                        TagColorful: (
                          <TagColorful_PresetGeekblue
                            text={{
                              geekblue: <div className={classes.geekblue}>🇬🇧 Public Holiday</div>,
                            }}
                          />
                        ),
                      }}
                      hide={{
                        tableCellText: true,
                        TagColorful: false,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse17}
                      text={{
                        tableCellText: <div className={classes.tableCellText14}>2 Days</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse18}
                      text={{
                        tableCellText: <div className={classes.tableCellText15}>2 Days</div>,
                      }}
                    />
                    <Decision className={classes.decision3} />
                  </div>
                  <div className={classes.row4}>
                    <TableItemRowControl_TypeCheckb
                      className={classes.tableItemRowControl4}
                      classes={{ Checkbox: classes.Checkbox5 }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse19}
                      text={{
                        tableCellText: <div className={classes.tableCellText16}>Komail Altaf</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse20}
                      text={{
                        tableCellText: <div className={classes.tableCellText17}>20/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse21}
                      text={{
                        tableCellText: <div className={classes.tableCellText18}>22/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse22}
                      swap={{
                        TagColorful: (
                          <TagColorful_PresetGreen
                            text={{
                              green: <div className={classes.green}>🤒 Sick Leave</div>,
                            }}
                          />
                        ),
                      }}
                      hide={{
                        tableCellText: true,
                        TagColorful: false,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse23}
                      text={{
                        tableCellText: <div className={classes.tableCellText19}>2 Days</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse24}
                      text={{
                        tableCellText: <div className={classes.tableCellText20}>2 Days</div>,
                      }}
                    />
                    <Decision className={classes.decision4} />
                  </div>
                  <div className={classes.row5}>
                    <TableItemRowControl_TypeCheckb
                      className={classes.tableItemRowControl5}
                      classes={{ Checkbox: classes.Checkbox6 }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse25}
                      text={{
                        tableCellText: <div className={classes.tableCellText21}>Michelle Martin</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse26}
                      text={{
                        tableCellText: <div className={classes.tableCellText22}>20/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse27}
                      text={{
                        tableCellText: <div className={classes.tableCellText23}>22/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse28}
                      hide={{
                        tableCellText: true,
                        TagColorful: false,
                      }}
                      text={{
                        magenta: <div className={classes.magenta}>💸 Leave w/o Pay</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse29}
                      text={{
                        tableCellText: <div className={classes.tableCellText24}>2 Days</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse30}
                      text={{
                        tableCellText: <div className={classes.tableCellText25}>2 Days</div>,
                      }}
                    />
                    <Decision className={classes.decision5} />
                  </div>
                  <div className={classes.row6}>
                    <TableItemRowControl_TypeCheckb
                      className={classes.tableItemRowControl6}
                      classes={{ Checkbox: classes.Checkbox7 }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse31}
                      text={{
                        tableCellText: <div className={classes.tableCellText26}>Rodrigo Mondelo</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse32}
                      text={{
                        tableCellText: <div className={classes.tableCellText27}>20/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse33}
                      text={{
                        tableCellText: <div className={classes.tableCellText28}>22/02/2023</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse34}
                      swap={{
                        TagColorful: (
                          <TagColorful_PresetPurple
                            text={{
                              purple: <div className={classes.purple}>😓 Time in Leiu</div>,
                            }}
                          />
                        ),
                      }}
                      hide={{
                        tableCellText: true,
                        TagColorful: false,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse35}
                      text={{
                        tableCellText: <div className={classes.tableCellText29}>2 Days</div>,
                      }}
                    />
                    <SizeDefaultBorderedFalse_SizeS
                      className={classes.sizeDefaultBorderedFalse36}
                      text={{
                        tableCellText: <div className={classes.tableCellText30}>2 Days</div>,
                      }}
                    />
                    <Decision className={classes.decision6} />
                  </div>
                </div>
                <Pagination_VariantBasic className={classes.Pagination} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
