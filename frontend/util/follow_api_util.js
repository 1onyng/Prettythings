export const createFollow = follow => {
  return $.ajax({
    method: "POST",
    url: "api/follows",
    data: { follow }
  });
};

export const deleteFollow = followId => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${followId}`
  });
};

export const fetchFollow = followId => {
  return $.ajax({
    method: "GET",
    url: `api/follows/${followId}`
  });
};

export const fetchUserFollows = userId => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/follows`
  });
};
