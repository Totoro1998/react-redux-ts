import { RouteConfig } from '@/types/app';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Table = Loadable({ loader: () => import('@/views/table'), loading: Loading });
const TableRoute: RouteConfig[] = [{ path: '/table', component: Table, auth: ['menu-table'] }];
export default TableRoute;
