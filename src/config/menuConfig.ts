import { MenuDataItem } from '../types/app';

const menuList: MenuDataItem[] = [
  {
    title: '关于',
    path: '/about',
    icon: 'guide',
    auth: ['menu-about'],
  },
  {
    title: '图表',
    path: '/charts',
    icon: 'dashboard',
    auth: ['menu-charts'],
    children: [
      {
        title: '键盘图表',
        path: '/charts/keyboard',
        icon: 'chart',
        auth: ['menu-charts-keyboard'],
      },
      {
        title: '折线图',
        path: '/charts/line',
        icon: 'chart',
        auth: ['menu-charts-line'],
      },
      {
        title: '混合图表',
        path: '/charts/mix-chart',
        icon: 'chart',
        auth: ['menu-charts-mix-chart'],
      },
    ],
  },
  {
    title: '表格',
    path: '/table',
    icon: 'table',
    auth: ['menu-table'],
  },
  {
    title: '用户管理',
    path: '/user',
    icon: 'user',
    auth: ['menu-user'],
  },
];
export default menuList;
