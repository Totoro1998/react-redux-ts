import './index.less';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Layout } from 'antd';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { hasAuth } from '@/utils/common';
import React from 'react';
import routeList from '@/config/route';

const { Content } = Layout;
const ContentLayout: React.FC<RouteComponentProps> = ({ location }) => {
  const routeRoles = [
    'menu-about',
    'menu-charts',
    'menu-charts-keyboard',
    'menu-charts-line',
    'menu-charts-mix-chart',
    'menu-user',
  ];
  const handleFilter = (route: string[]) => {
    if (route.length === 0) {
      return true;
    }
    return hasAuth(route, routeRoles);
  };
  return (
    <Content style={{ height: 'calc(100% - 100px)' }}>
      <TransitionGroup>
        <CSSTransition key={location.pathname} timeout={500} classNames="fade" exit={false}>
          <Switch location={location}>
            <Redirect exact from="/" to="/about" />
            {routeList.map(route => {
              return (
                handleFilter(route.auth) && (
                  <Route component={route.component} key={route.path} path={route.path} />
                )
              );
            })}
            <Redirect to="/error/404" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  );
};
export default withRouter(ContentLayout);
