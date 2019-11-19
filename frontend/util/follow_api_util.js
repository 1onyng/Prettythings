export const createFollow = follow => {
  return $.ajax({
    method: "POST",
    url: "api/followings",
    data: { follow }
  });
};

export const deleteFollow = followId => {
  return $.ajax({
    method: "DELETE",
    url: `api/followings/${followId}`
  });
};

export const fetchFollow = followId => {
  return $.ajax({
    method: "GET",
    url: `api/followings/${followId}`
  });
};

export const fetchUserFollows = userId => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/followings`
  });
};
