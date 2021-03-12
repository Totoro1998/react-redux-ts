import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Charts = Loadable({ loader: () => import('@/views/charts'), loading: Loading });
const ChartsRoute = [{ path: '/charts', component: Charts }];
export default ChartsRoute;
