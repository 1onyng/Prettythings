export const createLike = like => {
  return $.ajax({
    method: "POST",
    url: "api/likes",
    data: { like }
  });
};

export const deleteLike = post_id => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${post_id}`
  });
};

export const fetchLike = id => {
  return $.ajax({
    method: "GET",
    url: `api/likes/${id}`
  });
};
