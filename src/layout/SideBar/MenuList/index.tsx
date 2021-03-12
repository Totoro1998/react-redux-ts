import React, { ReactNode } from 'react';
import menuList from '@/config/menuConfig';
import { MenuDataItem } from '@/types/app';
import { Link, withRouter } from 'react-router-dom';
import SvgIcon from '@/components/SvgIcon';
import { Scrollbars } from 'rc-scrollbars';
import { Menu } from 'antd';

const MenuItemList: React.FC = () => {
  const createMenu = (MenuItemList: MenuDataItem[]) => {
    let submenuIndex = 0; // 累计的每一项展开菜单索引
    const menu: ReactNode[] = [];
    const create = (MenuItemList: MenuDataItem[], el: ReactNode[]) => {
      for (let i = 0; i < MenuItemList.length; i += 1) {
        if (MenuItemList[i].children) {
          const children: ReactNode[] = [];
          create(MenuItemList[i].children!, children);
          submenuIndex += 1;
          el.push(
            <Menu.SubMenu
              key={`sub${submenuIndex}`}
              icon={<SvgIcon iconClass={MenuItemList[i].icon} className={MenuItemList[i].title!} />}
              title={MenuItemList[i].title}
            >
              {children}
            </Menu.SubMenu>,
          );
        } else {
          el.push(
            <Menu.Item
              key={MenuItemList[i].path}
              icon={<SvgIcon iconClass={MenuItemList[i].icon} className={MenuItemList[i].title!} />}
            >
              <Link to={MenuItemList[i].path}>
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
      <Menu mode="inline" theme="dark">
        {createMenu(menuList)}
      </Menu>
    </Scrollbars>
  );
};
export default withRouter(MenuItemList);
