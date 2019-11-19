import * as FollowApiUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  };
};

const receiveRemoveFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const createFollow = user_id => dispatch =>
  FollowApiUtil.createFollow(user_id)
    .then(res => dispatch(receiveFollow(res))
  );

export const deleteFollow = user_id => dispatch =>
  FollowApiUtil.deleteFollow(user_id)
    .then(res => dispatch(receiveRemoveFollow(res))
  );
