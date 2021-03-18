import './index.less';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '@/assets/icon.png';
import React from 'react';
import MenuItemList from './MenuList';
import { appState, toggleSiderBar } from '../../model/slice/appSlice';

const { Sider } = Layout;
const SideBar: React.FC = () => {
  const Collapsed = useSelector(appState).sidebarCollapsed;
  const dispatch = useDispatch();
  return (
    <Sider collapsible collapsed={Collapsed} onCollapse={() => dispatch(toggleSiderBar())}>
      {Collapsed ? null : (
        <div className="sidebarLogo">
          <img src={Logo} alt="Harbor Pub" />
        </div>
      )}
      <MenuItemList />
    </Sider>
  );
};
export default SideBar;
