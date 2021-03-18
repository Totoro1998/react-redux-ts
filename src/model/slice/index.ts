import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from './appSlice';
import userReducer from './userSlice';

const createReducers = (history: any) =>
  combineReducers({
    app: appReducer,
    user: userReducer,
    router: connectRouter(history),
  });
export default createReducers;
