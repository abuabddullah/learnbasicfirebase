import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSinglePostAction = createAsyncThunk(
  "posts/fetchSinglePostAction",
  async (id) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  }
);
