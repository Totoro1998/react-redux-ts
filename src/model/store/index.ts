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
import { routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import createReducers from '../slice';

export const history = createBrowserHistory();
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['router'],
};
//  数据持久化
const persistedReducer = persistReducer(persistConfig, createReducers(history));
const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    routerMiddleware(history),
  ],
});
export const persist = persistStore(store);
export default store;
