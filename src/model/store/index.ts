import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../slice';

const store = configureStore({
  //  You can also pass an object full of "slice reducers", and configureStore will call combineReducers for you:
  reducer: Reducer,
});
export default store;
