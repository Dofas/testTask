import React, { useState } from "react";
import "./EditPostForm.css";
import { useDispatch} from "react-redux";
import { editPost } from "../../store/action-creators/postAction";
import { useParams } from "react-router";

const EditPostForm = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const params = useParams();

  const updPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: params.id,
      title,
      body,
    };
    dispatch(editPost(newPost));
    setVisible(false);
  };

  return (
    <form className="postEditForm">
      <div className="closeEditBtn">
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
        className="formEditInput"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Введіть новий заголовок поста"
      />
      <textarea
        className="formEditInput"
        onChange={(e) => setBody(e.target.value)}
        value={body}
        type="text"
        placeholder="Задайте новий текст поста"
      />
      <button onClick={updPost}>Редагувати пост</button>
    </form>
  );
};

export default EditPostForm;
