import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import configData from '../../../config.json';
import axios from 'axios';

export const getNotifications = createAsyncThunk(
  'notifications/getNotifications',
  async () => {
    const notifications = await axios.get(configData.NOTIFICATIONS_API);
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
