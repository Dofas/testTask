import React from "react";
import "./Post.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removePost } from "../../store/action-creators/postsAction";

const Post = ({ post }) => {
  const router = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="post">
      <div className="postTitle">{post.title}</div>
      <div>{post.body}</div>
      <div className="postBtns">
        <button onClick={() => router.push(`/${post.id}`)}>
          Перейти до поста
        </button>
        <button onClick={() => dispatch(removePost(post.id))}>
          Видалити пост
        </button>
      </div>
    </div>
  );
};

export default Post;
