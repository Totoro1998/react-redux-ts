import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';

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
