import { RouteItemConfig } from '@/types/app';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const User = Loadable({ loader: () => import('@/views/user'), loading: Loading });
const UserRoute: RouteItemConfig = {
  title: '用户',
  path: 'user',
  icon: 'user',
  component: User,
  hideInMenu: false,
  exact: true,
  auth: ['menu-user'],
};
export default UserRoute;
