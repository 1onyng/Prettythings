export const fetchAllPosts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
);

export const fetchPost = id => {
  return $.ajax({
    url: `api/posts/${id}`,
    method: "GET"
  });
};

export const createPost = post => {
  return $.ajax({
    url: "api/posts",
    method: "POST",
    data: { post }
  });
};

export const deletePost = id => {
  return $.ajax({
    url: `api/posts/${id}`,
    method: "DELETE"
  });
};