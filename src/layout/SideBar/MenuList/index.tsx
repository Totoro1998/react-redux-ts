import { Link, withRouter } from 'react-router-dom';
import { RouteItemConfig } from '@/types/app';
import { Scrollbars } from 'rc-scrollbars';
import { hasAuth } from '@/utils/common';
import React from 'react';
import SvgIcon from '@/components/SvgIcon';
import { formatMenuPath, formatSelectedKeys } from '@/utils/menu';
import { RootState } from '@/model/type';
import { useSelector } from 'react-redux';
import map from 'lodash/map';
import Routes from '@/config/route';
import { Menu } from 'antd';

const MenuItemList: React.FC = () => {
  const pathname = useSelector((state: RootState) => {
    return state.router.location.pathname;
  });
  const selectedKeys = formatSelectedKeys(formatMenuPath(Routes), pathname);
  const menuRoles = [
    'menu-about',
    'menu-charts',
    'menu-charts-keyboard',
    'menu-charts-line',
    'menu-charts-mix-chart',
    'menu-table',
    'menu-user',
  ];
  const renderMenu = (MenuItemList: RouteItemConfig[]) => {
    return map(MenuItemList, (item: RouteItemConfig) => {
      if (
        hasAuth(item.auth, menuRoles) &&
        item.children &&
        !item.hideInMenu &&
        !item.hideChildrenInMenu
      ) {
        return (
          <Menu.SubMenu key={item.path} title={item.title} icon={<SvgIcon iconClass={item.icon} />}>
            {renderMenu(item.children)}
          </Menu.SubMenu>
        );
      }
      if (hasAuth(item.auth, menuRoles) && !item.hideInMenu && !item.hideChildrenInMenu) {
        return (
          <Menu.Item key={item.path} icon={<SvgIcon iconClass={item.icon} />}>
            <Link to={item.path} href={item.path}>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      }
      return null;
    });
  };
  return (
    <Scrollbars>
      <Menu mode="inline" theme="dark" selectedKeys={selectedKeys}>
        {renderMenu(formatMenuPath(Routes))}
      </Menu>
    </Scrollbars>
  );
};
export default withRouter(MenuItemList);
