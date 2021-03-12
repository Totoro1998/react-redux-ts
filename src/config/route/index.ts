import AboutRoute from './about';
import ChartsRoute from './charts';
import TableRoute from './table';
import UserRoute from './user';

const Route = [...AboutRoute, ...ChartsRoute, ...TableRoute, ...UserRoute];
export default Route;
