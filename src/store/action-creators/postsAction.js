import { ADD_POST, FETCH_POSTS, REMOVE_POST } from "../types";

export function fetchPosts() {
  return async (dispatch) => {
    const response = await fetch("https://bloggy-api.herokuapp.com/posts");
    const data = await response.json();
    dispatch({ type: FETCH_POSTS, payload: data });
  };
}

export function addPost(post) {
  return async (dispatch) => {
    await fetch("https://bloggy-api.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        id: post.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: ADD_POST, payload: data }));
  };
}

export function removePost(id) {
  return async (dispatch) => {
    await fetch(`https://bloggy-api.herokuapp.com/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(dispatch({ type: REMOVE_POST, payload: id }));
  };
}
