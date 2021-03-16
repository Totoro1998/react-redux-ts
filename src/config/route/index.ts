import { RouteConfig } from '@/types/app';
import AboutRoute from './about';
import ChartsRoute from './charts';
import TableRoute from './table';
import UserRoute from './user';
import commonRoute from './common';

const Route: RouteConfig[] = [
  ...AboutRoute,
  ...ChartsRoute,
  ...TableRoute,
  ...UserRoute,
  ...commonRoute,
];
export default Route;
