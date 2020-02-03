import Posts from "../data/posts";
import { combineReducers } from "redux";

function comments(state = {}, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.postId]) {
        return { ...state, [action.postId]: [action.comment] };
      } else {
        return {
          ...state,
          [action.postId]: [...state[action.postId], action.comment]
        };
      }
    case "LOAD_COMMENTS":
      return action.comments;
    default:
      return state;
  }
  // return state;
}

function posts(state = Posts, action) {
  switch (action.type) {
    case "REMOVE_POST":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case "ADD_POST":
      return [...state, action.post];
    case "LOAD_POST":
      return action.posts;
    default:
      return state;
  }
}
const userRegister = (state = {}, action) => {
  if (action.type === "HANDEL_REGISTER") {
    let user = action.user;
    return user;
  } else {
    return state;
  }
};

export const userLogin = (state = {}, action) => {
  if (action.type === "USER_ONLOGIN") {
    let user = action.user;
    return { ...state, user };
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  posts,
  comments,
  userRegister,
  userLogin
});
export default rootReducer;
