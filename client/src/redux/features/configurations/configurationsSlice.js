import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import configData from '../../../config.json';
import axios from 'axios';

export const getConfigurations = createAsyncThunk(
  'configurations/getConfigurations',
  async () => {
    const configurations = await axios.get(configData.CONFIG_API);
    return configurations.data;
  }
);

export const configurationsSlice = createSlice({
  name: 'configurations',
  initialState: {},
  extraReducers: {
    [getConfigurations.fulfilled]: (state, { payload }) => {
      state.data = payload.data;
    },
  },
});

export const { getConfigurationsAction } = configurationsSlice.actions;

export default configurationsSlice.reducer;
