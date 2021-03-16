import { RouteConfig } from '@/types/app';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Keyboard = Loadable({ loader: () => import('@/views/charts/keyboard'), loading: Loading });
const LineChart = Loadable({ loader: () => import('@/views/charts/linechart'), loading: Loading });
const MixChart = Loadable({ loader: () => import('@/views/charts/mixchart'), loading: Loading });
const ChartsRoute: RouteConfig[] = [
  { path: '/charts/keyboard', component: Keyboard, auth: ['menu-charts-keyboard'] },
  { path: '/charts/line', component: LineChart, auth: ['menu-charts-line'] },
  { path: '/charts/mix-chart', component: MixChart, auth: ['menu-charts-mix-chart'] },
];
export default ChartsRoute;
