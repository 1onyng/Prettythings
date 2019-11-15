import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/likes_actions';
import merge from "lodash/merge";

const PostsReducer = (oldState = {}, action) => {
  let newObj = {};
  let nextState = {};
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, oldState, action.posts)
    case RECEIVE_POST:
      return Object.assign({}, oldState, { [action.post.id]: action.post })
    case REMOVE_POST:
      nextState = Object.assign({}, oldState);
      delete nextState[action.postId]
      return nextState;
    case RECEIVE_LIKE:
      newObj[action.like.post_id] = oldState[action.like.post_id];
      newObj[action.like.post_id].likers.push(action.like.user_id);
      nextState = merge({}, oldState, newObj);
      return nextState;
    case REMOVE_LIKE:
      let temp = oldState[action.like.post_id];
      let filtered_likers = temp.likers.filter(
        id => id !== action.like.user_id
      );
      temp.likers = filtered_likers;
      nextState = merge({}, oldState, { [action.like.post_id]: temp });
      return nextState;
    default:
      return oldState;
  }
};

export default PostsReducer;
