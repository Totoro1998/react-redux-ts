import React from 'react';
import { Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarCollapsed, toggleSiderBar } from '../../model/slice/appSlice';
import MenuItemList from './MenuList';

const { Sider } = Layout;
const SideBar: React.FC = () => {
  const Collapsed = useSelector(sidebarCollapsed);
  const dispatch = useDispatch();
  return (
    <Sider collapsible collapsed={Collapsed} onCollapse={() => dispatch(toggleSiderBar())}>
      <div className="sidebarLogo">logo</div>
      <MenuItemList />
    </Sider>
  );
};
export default SideBar;
