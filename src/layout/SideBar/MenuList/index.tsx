import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuDataItem } from '@/types/app';
import { Scrollbars } from 'rc-scrollbars';
import { hasAuth } from '@/utils/common';
import React, { ReactNode } from 'react';
import SvgIcon from '@/components/SvgIcon';
import menuList from '@/config/menuConfig';

const MenuItemList: React.FC<RouteComponentProps> = ({ location }) => {
  const path = location.pathname;
  const menuRoles = [
    'menu-about',
    'menu-charts',
    'menu-charts-keyboard',
    'menu-charts-line',
    'menu-charts-mix-chart',
    'menu-table',
    'menu-user',
  ];
  const createMenu = (MenuItemList: MenuDataItem[]) => {
    let submenuIndex = 0; // 累计的每一项展开菜单索引
    const menu: ReactNode[] = [];
    const create = (MenuItemList: MenuDataItem[], el: ReactNode[]) => {
      for (let i = 0; i < MenuItemList.length; i += 1) {
        if (hasAuth(MenuItemList[i].auth, menuRoles) && MenuItemList[i].children) {
          const children: ReactNode[] = [];
          create(MenuItemList[i].children!, children);
          submenuIndex += 1;
          el.push(
            <Menu.SubMenu
              key={`sub${submenuIndex}`}
              icon={<SvgIcon iconClass={MenuItemList[i].icon} />}
              title={MenuItemList[i].title}
            >
              {children}
            </Menu.SubMenu>,
          );
        } else if (hasAuth(MenuItemList[i].auth, menuRoles)) {
          el.push(
            <Menu.Item
              key={MenuItemList[i].path}
              icon={<SvgIcon iconClass={MenuItemList[i].icon} />}
            >
              <Link to={MenuItemList[i].path!}>
                <span>{MenuItemList[i].title}</span>
              </Link>
            </Menu.Item>,
          );
        }
      }
    };
    create(MenuItemList, menu);
    return menu;
  };
  return (
    <Scrollbars>
      <Menu mode="inline" theme="dark" selectedKeys={[path]}>
        {createMenu(menuList)}
      </Menu>
    </Scrollbars>
  );
};
export default withRouter(MenuItemList);
