import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

const About = Loadable({ loader: () => import('@/views/about'), loading: Loading });
const AboutRoute = [{ path: '/about', component: About }];
export default AboutRoute;
