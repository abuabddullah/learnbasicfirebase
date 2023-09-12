import { createSlice } from "@reduxjs/toolkit";
import { fetchSinglePostAction } from "./singlePostAction";

const singlePostSlice = createSlice({
  name: "postDetails",
  initialState: {
    post: {},
    error: null,
    isLoading: false,
  },
  reducers: {
    clearFetchSinglePostErrors: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePostAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSinglePostAction.fulfilled, (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSinglePostAction.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { clearFetchSinglePostErrors } = singlePostSlice.actions;
export default singlePostSlice.reducer;
