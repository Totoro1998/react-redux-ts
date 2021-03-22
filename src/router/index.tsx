import { Redirect, Route, Switch } from 'react-router-dom';
import AppMain from '@/layout';
import Login from '@/views/login';
import React from 'react';
import localStorage from 'redux-persist/es/storage';
import { ConnectedRouter } from 'connected-react-router';
import { useSelector } from 'react-redux';
import { appState } from '@/model/slice/appSlice';

interface RouterType {
  history: any;
}
const Router: React.FC<RouterType> = ({ history }) => {
  const redirectPath = history.location.pathname;
  const redirectSearch = history.location.search;
  if (!(redirectPath.includes('login') || redirectSearch.includes('session'))) {
    localStorage.setItem('redirect', encodeURIComponent(redirectPath + redirectSearch));
  }
  const showAppMain = useSelector(appState).isLogin;
  return (
    <ConnectedRouter history={history}>
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
    </ConnectedRouter>
  );
};

export default Router;
