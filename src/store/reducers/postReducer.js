import { FETCH_POST, EDIT_POST, ADD_COMMENT } from "../types";

const initialState = {
  post: {
    id: null,
    title: "",
    body: "",
    comments:[],
  },
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    case EDIT_POST:
      return {
        ...state,
        post: action.payload,
      };
    case ADD_COMMENT:
        return {
            ...state,
            post: {
              ...state.post,
              comments: [...state.post.comments].concat(action.payload)
            }
        }
    default:
      return state;
  }
};
