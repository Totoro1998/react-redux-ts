import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Table = Loadable({ loader: () => import('@/views/table'), loading: Loading });
const TableRoute = [{ path: '/table', component: Table }];
export default TableRoute;
