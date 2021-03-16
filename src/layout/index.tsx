import { Layout } from 'antd';
import React from 'react';
import Content from './Content';
import Header from './Header';
import SideBar from './SideBar';

const AppMain: React.FC = () => (
  <Layout className="app-main">
    <SideBar />
    <Layout>
      <Header />
      <Content />
    </Layout>
  </Layout>
);
export default AppMain;
