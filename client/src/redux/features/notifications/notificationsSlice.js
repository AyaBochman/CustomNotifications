import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNotifications = createAsyncThunk(
  'notifications/getNotifications',
  async () => {
    const notifications = await axios.get(
      'http://localhost:3001/api/v1/notifications'
    );
    console.log('result in get notifications', notifications.data);
    return notifications.data;
  }
);

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {},
  extraReducers: {
    [getNotifications.fulfilled]: (state, { payload }) => {
      state.data = payload.data;
    },
  },
});

export const { getNotificationsAction } = notificationsSlice.actions;

export default notificationsSlice.reducer;
