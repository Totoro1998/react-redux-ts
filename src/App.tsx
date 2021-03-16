import './App.css';
import { ConfigProvider } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import store, { persistor } from '@/model/store';
import Router from './router';

const App = () => (
  <ConfigProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </ConfigProvider>
);

export default App;
