import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, RootState } from '../store';

export interface FetchState {
  fetchData: string[];
}

const initialState: FetchState = {
  fetchData: []
};

export const fetchDataFromServer = createAsyncThunk<string>(
  'serverResponse/getServerMessage',
  async () => {
    const response = await axios.get('http://localhost:4444/api/test');
    console.log(response.data);
    return response.data;
    // const data = await response.data.json();
  }
);

const fetchSlice = createSlice({
  name: 'serverResponse',
  initialState,
  reducers: {
    // setFetchedData: (state, action) => {
    //   state.fetchData = action.payload;
    // },
  },
  extraReducers: builder => {
    builder.addCase(fetchDataFromServer.fulfilled, (state, action) => {
      state.fetchData = [];
      if (action.payload) {
        state.fetchData.push(action.payload);
      }
    });
  }
});

// export const { setFetchedData } = fetchSlice.actions;

export const selectFetched = (state: RootState) => state.serverResponse.fetchData;
console.log(selectFetched);
// console.log(fetchSlice.actions.setFetchedData({ message: 'message' }));

export default fetchSlice.reducer;
