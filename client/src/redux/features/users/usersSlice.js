import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import configData from '../../../config.json';
import axios from 'axios';

export const createUser = createAsyncThunk('users/createUser', async () => {
  const user = await axios.post(configData.USERS_API);
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
