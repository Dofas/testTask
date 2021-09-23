import { ADD_POST, FETCH_POSTS, REMOVE_POST } from "../types";

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts].concat(action.payload),
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: [...state.posts].filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};
