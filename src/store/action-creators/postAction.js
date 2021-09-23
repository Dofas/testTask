import { FETCH_POST, ADD_COMMENT, EDIT_POST } from "../types";

export function fetchPostById(id) {
  return async (dispatch) => {
    const response = await fetch(
      `https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`
    );
    const data = await response.json();
    dispatch({ type: FETCH_POST, payload: data });
  };
}

export function editPost(post) {
  return async (dispatch) => {
    await fetch(`https://bloggy-api.herokuapp.com/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: post.id,
        title: post.title,
        body: post.body,
      }),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: EDIT_POST, payload: data }));
  };
}

export function addComment(comment) {
  return async (dispatch) => {
    // not found 404 https://bloggy-api.herokuapp.com/comments
    await fetch(`https://bloggy-api.herokuapp.com/posts/${comment.postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: comment.id,
        body: comment.body,
      }),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: ADD_COMMENT, payload: data }));
    };
  }
