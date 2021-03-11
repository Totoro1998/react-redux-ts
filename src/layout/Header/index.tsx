import React from 'react';
import { Layout } from 'antd';
import './index.less';

const { Header } = Layout;
const HeaderLayout: React.FC = () => (
  <Header className="header-layout" style={{ padding: 0 }}>
    <div>我是Header</div>
  </Header>
);
export default HeaderLayout;
