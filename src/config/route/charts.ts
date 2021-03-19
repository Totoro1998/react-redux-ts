import { RouteItemConfig } from '@/types/app';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const Keyboard = Loadable({ loader: () => import('@/views/charts/keyboard'), loading: Loading });
const LineChart = Loadable({ loader: () => import('@/views/charts/linechart'), loading: Loading });
const MixChart = Loadable({ loader: () => import('@/views/charts/mixchart'), loading: Loading });
const ChartsRoute: RouteItemConfig = {
  title: '图表',
  path: 'charts',
  icon: 'dashboard',
  hideInMenu: false,
  exact: true,
  auth: ['menu-charts'],
  children: [
    {
      title: '键盘图表',
      path: 'keyboard',
      icon: 'chart',
      component: Keyboard,
      hideInMenu: false,
      exact: true,
      auth: ['menu-charts-keyboard'],
    },
    {
      title: '折线图',
      path: 'line',
      icon: 'chart',
      component: LineChart,
      hideInMenu: false,
      exact: true,
      auth: ['menu-charts-line'],
    },
    {
      title: '混合图',
      path: 'mix-chart',
      icon: 'chart',
      component: MixChart,
      hideInMenu: false,
      exact: true,
      auth: ['menu-charts-mix-chart'],
    },
  ],
};
export default ChartsRoute;
