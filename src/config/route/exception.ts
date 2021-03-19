import { RouteItemConfig } from '@/types/app';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Error404 = Loadable({
  loader: () => import('@/views/error/404'),
  loading: Loading,
});

const CommonRoute: RouteItemConfig = {
  title: '设置',
  path: 'common',
  icon: 'dashboard',
  hideInMenu: true,
  hideChildrenInMenu: true,
  exact: true,
  auth: [],
  children: [
    {
      title: '404',
      path: '404',
      icon: '404',
      component: Error404,
      hideInMenu: true,
      exact: true,
      auth: [],
    },
  ],
};
export default CommonRoute;
