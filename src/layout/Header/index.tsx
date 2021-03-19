import './index.less';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import React from 'react';
import { push } from 'connected-react-router';
import { removeCookie } from '@/utils/cookies';
import { useDispatch, useSelector } from 'react-redux';
import { appState, toggleIsLogin, toggleSiderBar } from '@/model/slice/appSlice';
import BreadCrumb from '@/components/BreadCrumb';
import { userState } from '@/model/slice/userSlice';
import SvgIcon from '@/components/SvgIcon';
import { RootState } from '@/model/type';

const { Header } = Layout;
const HeaderLayout: React.FC = () => {
  const dispatch = useDispatch();
  const pathname = useSelector((state: RootState) => {
    return state.router.location.pathname;
  });
  const userInfo = useSelector(userState);
  const appConfig = useSelector(appState);
  const onClick = ({ key }) => {
    switch (key) {
      case 'logout':
        handleLogout();
        break;
      default:
        break;
    }
  };
  const handleLogout = () => {
    removeCookie('session');
    dispatch(toggleIsLogin());
    dispatch(push('/login'));
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="logout">logout</Menu.Item>
    </Menu>
  );
  return (
    <Header className="header-layout" style={{ padding: 0 }}>
      <div className="fold-container" onClick={() => dispatch(toggleSiderBar())}>
        <SvgIcon iconClass={appConfig.sidebarCollapsed ? 'indent' : 'outdent'} />
      </div>
      {pathname === '/' ? null : <BreadCrumb />}
      <Dropdown overlay={menu} className="dropdown-container">
        <div>
          <Avatar shape="circle" size={40} src={userInfo.avatar} />
        </div>
      </Dropdown>
    </Header>
  );
};
export default HeaderLayout;
