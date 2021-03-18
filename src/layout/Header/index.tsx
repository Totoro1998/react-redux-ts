import './index.less';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import React from 'react';
import { push } from 'connected-react-router';
import { removeCookie } from '@/utils/cookies';
import { useDispatch } from 'react-redux';
import { toggleIsLogin } from '@/model/slice/appSlice';
import store from '@/model/store';

const { Header } = Layout;
const HeaderLayout: React.FC = () => {
  const dispatch = useDispatch();
  const avatorUrl = store.getState().user.avatar;
  const onClick = ({ key }) => {
    switch (key) {
      case 'loginOut':
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
      <Menu.Item key="loginOut">login out</Menu.Item>
    </Menu>
  );
  return (
    <Header className="header-layout" style={{ padding: 0 }}>
      <Dropdown overlay={menu} className="dropdown-container">
        <div>
          <Avatar shape="circle" size={40} src={avatorUrl} />
        </div>
      </Dropdown>
    </Header>
  );
};
export default HeaderLayout;
