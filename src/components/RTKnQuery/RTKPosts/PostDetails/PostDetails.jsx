import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { clearFetchSinglePostErrors } from "../../../../reducers/postReducers/singlePostSlice";
import { fetchSinglePostAction } from "../../../../reducers/postReducers/singlePostAction";

const PostDetails = () => {
  const { id } = useParams();

  const { isLoading, post, error } = useSelector((store) => store.postDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error.message);
      dispatch(clearFetchSinglePostErrors());
    }
    dispatch(fetchSinglePostAction(id));
  }, [dispatch, error]);
  //   const postDetails = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <h1>PostDetails of {post.id}</h1>
      <hr />
      <h6>{post.title}</h6>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Go All Posts by Btn</button>
      <hr />
    </div>
  );
};

export default PostDetails;
