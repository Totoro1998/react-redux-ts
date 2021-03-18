import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuDataItem } from '@/types/app';
import { Scrollbars } from 'rc-scrollbars';
import { hasAuth } from '@/utils/common';
import map from 'lodash/map';
import { useSelector } from 'react-redux';
import React from 'react';
import SvgIcon from '@/components/SvgIcon';
import menuList from '@/config/menuConfig';
import { formatMenuPath, formatSelectedKeys } from '@/utils/menu';
import { RootState } from '@/model/type';

const MenuItemList: React.FC = () => {
  const pathname = useSelector((state: RootState) => {
    return state.router.location.pathname;
  });
  const selectedKeys = formatSelectedKeys(formatMenuPath(menuList), pathname);
  const menuRoles = [
    'menu-about',
    'menu-charts',
    'menu-charts-keyboard',
    'menu-charts-line',
    'menu-charts-mix-chart',
    'menu-table',
    'menu-user',
  ];
  const renderMenu = (MenuItemList: MenuDataItem[]) => {
    return map(MenuItemList, (item: MenuDataItem) => {
      if (hasAuth(item.auth, menuRoles) && item.children) {
        return (
          <Menu.SubMenu key={item.path} title={item.title} icon={<SvgIcon iconClass={item.icon} />}>
            {renderMenu(item.children)}
          </Menu.SubMenu>
        );
      }
      if (hasAuth(item.auth, menuRoles)) {
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
        {renderMenu(formatMenuPath(menuList))}
      </Menu>
    </Scrollbars>
  );
};
export default withRouter(MenuItemList);
