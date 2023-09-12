import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostsAction = createAsyncThunk(
  "posts/fetchPostsAction",
  async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
);
