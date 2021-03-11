import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import Router from './router';
import store from './model';

const App = () => (
  <ConfigProvider>
    <Provider store={store}>
      <Router />
    </Provider>
  </ConfigProvider>
);

export default App;
