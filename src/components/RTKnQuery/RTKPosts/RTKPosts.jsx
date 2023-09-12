import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { clearPostsErrors } from "../../../reducers/postReducers/postsSlice";
import { fetchPostsAction } from "../../../reducers/postReducers/postsAction";
import { Link } from "react-router-dom";

const RTKPosts = () => {
  const { isLoading, posts, error } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error.message);
      dispatch(clearPostsErrors());
    }
    dispatch(fetchPostsAction());
  }, [dispatch, error]);
  return (
    <div>
      <h1>all {posts.length} Posts</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <hr />
            <Link to={`/rtkPosts/${post.id}`}>
              Show the PostDetails {post.id}
            </Link>
            <hr />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RTKPosts;
