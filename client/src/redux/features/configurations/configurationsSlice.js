import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getConfigurations = createAsyncThunk(
  'configurations/getConfigurations',
  async () => {
    const configurations = await axios.get(
      'http://localhost:3001/api/v1/configurations'
    );
    console.log('result in get configurations', configurations.data);
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
