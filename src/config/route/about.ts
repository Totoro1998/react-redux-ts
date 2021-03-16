import { RouteConfig } from '@/types/app';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const About = Loadable({ loader: () => import('@/views/about'), loading: Loading });
const AboutRoute: RouteConfig[] = [{ path: '/about', component: About, auth: ['menu-about'] }];
export default AboutRoute;
