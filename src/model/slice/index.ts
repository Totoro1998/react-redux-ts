import { combineReducers } from 'redux';
import appReducer from './appSlice';
//  导出所有reducer
export default combineReducers({
  app: appReducer,
});
