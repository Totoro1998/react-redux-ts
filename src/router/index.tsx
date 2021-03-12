import React from 'react';
import AppMain from '@/layout';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Router: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/" render={() => <AppMain />} />
    </Switch>
  </HashRouter>
);

export default Router;
