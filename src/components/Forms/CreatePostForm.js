import React, { useState } from "react";
import "./CreatePostForm.css";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/action-creators/postsAction";

const CreatePostForm = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    dispatch(addPost(newPost));
    setVisible(false);
  };

  return (
    <form className="postForm">
      <div className="closeBtn">
        <button
          onClick={(e) => {
            e.preventDefault();
            setVisible(false);
          }}
        >
          Закрити
        </button>
      </div>
      <input
        className="formInput"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Введіть заголовок поста"
      />
      <textarea
        className="formInput"
        onChange={(e) => setBody(e.target.value)}
        value={body}
        type="text"
        placeholder="Текст поста"
      />
      <button onClick={createPost}>Створити пост</button>
    </form>
  );
};

export default CreatePostForm;
