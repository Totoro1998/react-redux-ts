import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../type';

interface AppState {
  sidebarCollapsed: boolean;
  isLogin: boolean;
}

const initialState: AppState = {
  sidebarCollapsed: false,
  isLogin: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSiderBar: state => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    toggleIsLogin: state => {
      state.isLogin = !state.isLogin;
    },
  },
});

export const { toggleSiderBar, toggleIsLogin } = appSlice.actions;

export const appState = (state: RootState) => state.app;

export default appSlice.reducer;
