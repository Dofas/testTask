import React, { useState } from "react";
import "./CreateCommentForm.css";
import { useDispatch } from "react-redux";
import { addComment } from "../../store/action-creators/postAction";
import { useParams } from "react-router";

const CreateCommentForm = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const params = useParams();

  const createComment = (e) => {
    e.preventDefault();
    const newComment = {
      body:comment,
      postId:params.id ,
      id: Date.now(),
    };
    dispatch(addComment(newComment));
    setVisible(false);
  };

  return (
    <form className="postCommentForm">
      <div className="closeCommentBtn">
        <button
          onClick={(e) => {
            e.preventDefault();
            setVisible(false);
          }}
        >
          Закрити
        </button>
      </div>
      <textarea
        className="formCommentInput"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        type="text"
        placeholder="Напишіть коментар"
      />
      <button onClick={createComment}>Додати коментар</button>
    </form>
  );
};

export default CreateCommentForm;
