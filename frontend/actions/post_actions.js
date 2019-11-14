import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';

const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const fetchAllPosts = () => dispatch => (
  PostAPIUtil.fetchAllPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
);
