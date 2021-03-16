import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from '@/api/user';
import pick from 'lodash/pick';
import { RootState } from '../type';

interface UserState {
  id: string;
  department: string;
  email: string;
  avatar: string;
  name: string;
  token: string;
  webeye: number;
  roles: string[];
  employee_id: string;
  hw_role_list: string[];
  hw_role_name_list: string[];
  team_list: { team_id: number }[];
}

const initialState: UserState = {
  id: '',
  department: '',
  email: '',
  avatar: '',
  name: '',
  token: '',
  webeye: 0,
  roles: [],
  employee_id: '',
  hw_role_list: [],
  hw_role_name_list: [],
  team_list: [],
};
export const getUser = createAsyncThunk('getUser', async () => {
  const response = await getUserInfo();
  return response;
});
export const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  //  处理异步请求的reducer
  extraReducers: builder => {
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      const temp = pick(payload, [
        'id',
        'department',
        'email',
        'avatar',
        'name',
        'token',
        'webeye',
        'roles',
        'employee_id',
        'hw_role_list',
        'hw_role_name_list',
        'team_list',
      ]) as UserState;
      state = Object.assign(state, temp);
    });
  },
});

export const userState = (state: RootState) => state.user;

export default appSlice.reducer;
