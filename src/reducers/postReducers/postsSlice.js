import { createSlice } from "@reduxjs/toolkit";
import { fetchPostsAction } from "./postsAction";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearPostsErrors: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPostsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPostsAction.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export const { clearPostsErrors } = postsSlice.actions;
export default postsSlice.reducer;
