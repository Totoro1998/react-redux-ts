import { MenuDataItem } from '../types/app';

const menuList: MenuDataItem[] = [
  {
    title: '关于',
    path: '/about',
    icon: 'guide',
  },
  {
    title: '图表',
    path: '/charts',
    icon: 'dashboard',
    children: [
      {
        title: '键盘图表',
        path: '/charts/keyboard',
        icon: 'chart',
      },
      {
        title: '折线图',
        path: '/charts/line',
        icon: 'chart',
      },
      {
        title: '混合图表',
        path: '/charts/mix-chart',
        icon: 'chart',
      },
    ],
  },
  {
    title: '表格',
    path: '/table',
    icon: 'table',
  },
  {
    title: '用户管理',
    path: '/user',
    icon: 'user',
  },
];
export default menuList;
