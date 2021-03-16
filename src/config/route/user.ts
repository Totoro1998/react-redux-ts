import { RouteConfig } from '@/types/app';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const User = Loadable({ loader: () => import('@/views/user'), loading: Loading });
const UserRoute: RouteConfig[] = [{ path: '/user', component: User, auth: ['menu-user'] }];
export default UserRoute;
