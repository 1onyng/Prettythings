export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: `api/users`
  });
};

export const fetchUser = userId => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  });
};

export const updateUser = (formData, userId) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${userId}`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const deleteUser = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/users/${id}`
  });
};
