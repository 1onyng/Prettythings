import * as ApiUtilUser from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const removeUser = user => {
  return {
    type: REMOVE_USER,
    user
  };
};
export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user: user
  };
};
export const deleteUser = id => dispatch => {
  return UserApiUtil.deleteUser(id)
    .then(user => {
      return dispatch(removeUser(user));
    })
    .then(() => {
      return dispatch(push("/my-profile"));
    });
};

export const fetchUsers = () => dispatch => {
  return ApiUtilUser.fetchUsers().then(users => {
    return dispatch(receiveAllUsers(users));
  });
};

export const fetchUser = userId => dispatch => {
  return ApiUtilUser.fetchUser(userId).then(user =>
    dispatch(receiveUser(user))
  );
};

export const updateUser = user => dispatch => {
  return ApiUtilUser.updateUser(user).then(res =>
    dispatch(receiveUser(res)));
};
