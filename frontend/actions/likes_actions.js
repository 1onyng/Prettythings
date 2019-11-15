import * as LikeApiUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
  };
};

const removeLike = like => {
  return {
    type: REMOVE_LIKE,
    like
  };
};

export const createLike = postId => dispatch => {
  return LikeApiUtil.createLike(postId)
    .then(res => dispatch(receiveLike(res)));
};

export const deleteLike = postId => dispatch => {
  return LikeApiUtil.deleteLike(postId)
    .then(res => dispatch(removeLike(res)));
};

