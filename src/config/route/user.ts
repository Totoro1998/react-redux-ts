import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const User = Loadable({ loader: () => import('@/views/user'), loading: Loading });
const UserRoute = [{ path: '/user', component: User }];
export default UserRoute;
