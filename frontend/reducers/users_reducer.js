import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follows_actions";
import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../actions/user_actions";
import merge from "lodash/merge";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user })
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_FOLLOW:
      newState[action.follow.followed_user_id].followerIds.push(action.follow.user_id);
      newState[action.follow.user_id].followingIds.push(action.follow.followed_user_id);
      return newState;
    case REMOVE_FOLLOW:
      newState[action.follow.followed_user_id].followerIds = newState[action.follow.followed_user_id].followerIds
        .filter(followerId => followerId !== action.follow.user_id);
      newState[action.follow.user_id].followingIds = newState[action.follow.user_id].followingIds
        .filter(followingId => followingId !== action.follow.followed_user_id);
      return newState;
    default:
      return state;
    
  }
}

export default usersReducer;