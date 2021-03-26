import { RouteItemConfig } from '@/types/app';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const About = Loadable({ loader: () => import('@/views/about'), loading: Loading });
const AboutRoute: RouteItemConfig = {
  title: '关于',
  path: 'about',
  icon: 'admin',
  component: About,
  hideInMenu: false,
  exact: true,
  auth: ['menu-about'],
};
export default AboutRoute;
