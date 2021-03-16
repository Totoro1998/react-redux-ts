import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { getCookie } from '@/utils/cookies';
import { getQueryVariable } from '@/utils/common';
import AppMain from '@/layout';
import Login from '@/views/login';
import React from 'react';
import localStorage from 'redux-persist/es/storage';

const Router: React.FC = () => {
  const history = createBrowserHistory();
  const casSession = getQueryVariable(history.location.search, 'session') || getCookie('session');
  const redirectPath = history.location.pathname;
  const session = getCookie('session');
  const redirectSearch = history.location.search;
  const showAppMain = session || casSession;
  if (!(redirectPath.includes('login') || redirectSearch.includes('session'))) {
    localStorage.setItem('redirect', encodeURIComponent(redirectPath + redirectSearch));
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/"
          render={() =>
            showAppMain ? (
              <AppMain />
            ) : (
              <Redirect to={`/login?redirect=${redirectPath}${redirectSearch}`} />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
