import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receiveAllPosts = posts => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  };
};

const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

export const fetchAllPosts = () => dispatch => (
  PostAPIUtil.fetchAllPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = id => dispatch => {
  return PostAPIUtil.fetchPost(id)
    .then(post => dispatch(receivePost(post)));
};

export const deletePost = postId => dispatch => {
  return PostAPIUtil.deletePost(postId)
    .then(post => dispatch(removePost(postId)));
};

export const createPost = post => dispatch => {
  return PostAPIUtil.createPost(post)
    .then(post => dispatch(receivePost(post)));
};