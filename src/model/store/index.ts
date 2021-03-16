import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import Reducer from '../slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
//  数据持久化
const persistedReducer = persistReducer(persistConfig, Reducer);
const store = configureStore({
  reducer: persistedReducer,
  //  You can also pass an object full of "slice reducers", and configureStore will call combineReducers for you:
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
export default store;
