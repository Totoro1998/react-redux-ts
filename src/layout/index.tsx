import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import SideBar from './SideBar';

const AppMain: React.FC = () => (
  <Layout className="app-main">
    <SideBar />
    <Layout>
      <Header />
    </Layout>
  </Layout>
);
export default AppMain;
