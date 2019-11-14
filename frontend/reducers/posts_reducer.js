import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';


const PostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, oldState, action.posts)
    // case RECEIVE_POST:
    //   return Object.assign({}, oldState, { [action.post.id]: action.post })
    // case REMOVE_POST:
    //   let nextState = Object.assign({}, oldState);
    //   delete nextState[action.postId]
    //   return nextState;
    default:
      return oldState;
  }
};

export default PostsReducer;
