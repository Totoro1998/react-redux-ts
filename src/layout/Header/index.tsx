import './index.less';
import { Layout } from 'antd';
import React from 'react';

const { Header } = Layout;
const HeaderLayout: React.FC = () => (
  <Header className="header-layout" style={{ padding: 0 }}>
    <div>我是Header</div>
  </Header>
);
export default HeaderLayout;
