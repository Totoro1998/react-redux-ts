import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from '@/model';
import Router from './router';

const App = () => (
  <ConfigProvider>
    <Provider store={store}>
      <Router />
    </Provider>
  </ConfigProvider>
);

export default App;
