import { RouteItemConfig } from '@/types/app';
import AboutRoute from './about';
import ChartsRoute from './charts';
import TableRoute from './table';
import UserRoute from './user';
import exceptionRoute from './exception';

const Route: RouteItemConfig[] = [AboutRoute, ChartsRoute, TableRoute, UserRoute, exceptionRoute];
export const getFlatRoutes = () => {
  const tempRoutes: RouteItemConfig[] = [];
  const FlatRoutes = (routes: RouteItemConfig[], parentPath = '/') => {
    routes.forEach(item => {
      tempRoutes.push({
        ...item,
        path: `${parentPath}${item.path}`,
      });
      if (item.children) {
        FlatRoutes(item.children, `${parentPath}${item.path}/`);
      }
    });
  };
  FlatRoutes(Route);
  return tempRoutes;
};
export default Route;
