import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../type';

interface AppState {
  sidebarCollapsed: boolean;
}

const initialState: AppState = {
  sidebarCollapsed: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSiderBar: state => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
  },
});

export const { toggleSiderBar } = appSlice.actions;

export const sidebarCollapsed = (state: RootState) => state.app.sidebarCollapsed;

export default appSlice.reducer;
