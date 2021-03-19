import React, { ReactNode } from 'react';
import { Breadcrumb, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/model/type';
import { getFlatRoutes } from '@/config/route';
import { urlToList } from '@/utils/menu';
import { RouteItemConfig } from '@/types/app';
import { Link } from 'react-router-dom';
import { pathToRegexp } from 'path-to-regexp';
import './index.less';

const BreadCrumb = () => {
  const flatRoute = getFlatRoutes();
  const pathname = useSelector((state: RootState) => {
    return state.router.location.pathname;
  });
  const filterPath = flatRoute.filter(item => {
    return pathToRegexp(item.path).test(pathname);
  })[0].path;
  const matchedUrls = urlToList(filterPath);
  const createMenu = (routeList: RouteItemConfig[]) => {
    const MenuItemList = routeList.map(item => {
      return (
        <Menu.Item key={item.path}>
          <Link to={item.path}>{item.title}</Link>
        </Menu.Item>
      );
    });
    return <Menu>{MenuItemList}</Menu>;
  };
  const createBreadcrumbItemList = (urls: string[]) => {
    const BreadcrumbItemList: ReactNode[] = [];
    urls.forEach((item, index) => {
      let menu;
      const matchedRoute = flatRoute.filter(jtem => jtem.path === item)[0];
      if (index === 0) {
        BreadcrumbItemList.push(
          <Breadcrumb.Item key={`BreadcrumbItem${matchedRoute.path}`}>
            <span>{matchedRoute.title}</span>
          </Breadcrumb.Item>,
        );
      } else {
        const lastRoute = flatRoute.filter(jtem => jtem.path === urls[index - 1])[0];
        if (lastRoute.children) {
          menu = createMenu(lastRoute.children);
          BreadcrumbItemList.push(
            <Breadcrumb.Item overlay={menu} key={`BreadcrumbItem${matchedRoute.path}`}>
              {matchedRoute.title}
            </Breadcrumb.Item>,
          );
        } else {
          BreadcrumbItemList.push(
            <Breadcrumb.Item key={`BreadcrumbItem${matchedRoute.path}`}>
              <span>{matchedRoute.title}</span>
            </Breadcrumb.Item>,
          );
        }
      }
    });
    return BreadcrumbItemList;
  };
  return (
    <Breadcrumb className="breadcrumb-container">
      {createBreadcrumbItemList(matchedUrls)}
    </Breadcrumb>
  );
};

export default BreadCrumb;
