import { RECEIVE_COMMENT_ERRORS, CLEAR_COMMENT_ERRORS } from "../actions/comment_actions";

const commentErrorsReducer = (state = null, action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case CLEAR_COMMENT_ERRORS:
      return newState;
    default:
      return state;
  }
};

export default commentErrorsReducer;
