import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "./PostPage.css";
import { Link } from "react-router-dom";
import { fetchPostById } from "../../store/action-creators/postAction";
import CreateCommentModal from "../UI/CreateCommentModal/CreateCommentModal";
import CreateCommentForm from "../Forms/CreateCommentForm";
import EditPostModal from "../UI/EditPostModal/EditPostModal";
import EditPostForm from "../Forms/EditPostForm";

const PostPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [commentModal, setCommentModal] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false);
  
  

  useEffect(() => {
    dispatch(fetchPostById(params.id));
  }, []);

  const post = useSelector((state) => state.post.post);

  return (
    <>
        <h3 className="postItem">{post.title}</h3>
        <div className="postItemBody">{post.body}</div>
      <div className="itemComments">
        <label>Link for comments not found ( 404 )
        https://bloggy-api.herokuapp.com/comments
        when i used POST for comments
        i changed link for https://bloggy-api.herokuapp.com/posts/id/comments
        </label>
        <div className="comments">Коментарі:</div>
        {post.comments && post.comments.length > 0 ? (
          post.comments.map((comment) => (
            <div className="postComment" key={comment.id}>
              {comment.body}
            </div>
          ))
        ) : (
          <div>Коментарі відсутні</div>
        )}
        <button onClick={() => setCommentModal(true)}>Додати коментар</button>
      </div>
      <CreateCommentModal visible={commentModal} setVisible={setCommentModal}>
        <CreateCommentForm
          visible={commentModal}
          setVisible={setCommentModal}
        />
      </CreateCommentModal>
      <div className="postItemBtns">
        <Link to="/">
          <button className="backBtn">Назад</button>
        </Link>
        <EditPostModal visible={editPostModal} setVisible={setEditPostModal}>
          <EditPostForm visible={editPostModal} setVisible={setEditPostModal} />
        </EditPostModal>
        <button onClick={() => setEditPostModal(true)}>Редагувати пост</button>
      </div>
    </>
  );
};

export default PostPage;
