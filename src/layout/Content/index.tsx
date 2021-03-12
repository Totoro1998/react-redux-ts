import React from 'react';
import { Layout } from 'antd';
import './index.less';
import routeList from '@/config/route';
import { Redirect, withRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const { Content } = Layout;
const ContentLayout: React.FC<RouteComponentProps> = ({ location }) => (
  <Content style={{ height: 'calc(100% - 100px)' }}>
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={500} classNames="fade" exit={false}>
        <Switch location={location}>
          <Redirect exact from="/" to="/dashboard" />
          {routeList.map(route => (
            <Route component={route.component} key={route.path} path={route.path} />
          ))}
          <Redirect to="/error/404" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </Content>
);
export default withRouter(ContentLayout);
