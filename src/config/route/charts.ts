import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Keyboard = Loadable({ loader: () => import('@/views/charts/keyboard'), loading: Loading });
const LineChart = Loadable({ loader: () => import('@/views/charts/linechart'), loading: Loading });
const MixChart = Loadable({ loader: () => import('@/views/charts/mixchart'), loading: Loading });
const ChartsRoute = [
  { path: '/charts/keyboard', component: Keyboard },
  { path: '/charts/line', component: LineChart },
  { path: '/charts/mix-chart', component: MixChart },
];
export default ChartsRoute;
