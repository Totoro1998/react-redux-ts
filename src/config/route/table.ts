import { RouteItemConfig } from '@/types/app';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Table = Loadable({ loader: () => import('@/views/table'), loading: Loading });

const TableRoute: RouteItemConfig = {
  title: '表格',
  path: 'table',
  icon: 'table',
  component: Table,
  hideInMenu: false,
  exact: true,
  auth: ['menu-table'],
};
export default TableRoute;
