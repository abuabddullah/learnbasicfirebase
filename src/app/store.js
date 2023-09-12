import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducers/postReducers/postsSlice";
import postDetailsReducer from "../reducers/postReducers/singlePostSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        postDetails : postDetailsReducer
    }
})

export default store;