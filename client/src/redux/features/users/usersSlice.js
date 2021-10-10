import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk('users/createUser', async () => {
  const user = await axios.post('http://localhost:3001/api/v1/users');
  console.log('result in create user', user.data);
  return user.data;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: {},
  extraReducers: {
    [createUser.fulfilled]: (state, { payload }) => {
      state.data = payload.data;
    },
  },
});

export const { createUserAction } = usersSlice.actions;

export default usersSlice.reducer;
