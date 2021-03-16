import { combineReducers } from 'redux';
import appReducer from './appSlice';
import userSlice from './userSlice';
//  导出所有reducer
export default combineReducers({
  app: appReducer,
  user: userSlice,
});
