import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/action-creators/postsAction";
import CreatePostForm from "../Forms/CreatePostForm";
import Post from "../Post/Post";
import CreatePostModal from "../UI/CreatePostModal/CreatePostModal";
import "./PostsPage.css";

const PostsPage = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <div>
        <button className="createPostBtn" onClick={() => setModal(true)}>
          Створити пост
        </button>
      </div>
      <CreatePostModal visible={modal} setVisible={setModal}>
        <CreatePostForm visible={modal} setVisible={setModal} />
      </CreatePostModal>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default PostsPage;
