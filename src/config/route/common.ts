import { RouteConfig } from '@/types/app';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Error404 = Loadable({
  loader: () => import('@/views/error/404'),
  loading: Loading,
});
const CommonRoute: RouteConfig[] = [{ path: '/error/404', component: Error404, auth: [] }];
export default CommonRoute;
