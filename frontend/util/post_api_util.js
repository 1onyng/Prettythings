export const fetchAllPosts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
);

export const fetchPost = id => {
  return $.ajax({
    method: "GET",
    url: `api/posts/${id}`
  });
};

export const createPost = post => {
  return $.ajax({
    method: "POST",
    url: "api/posts",
    data: { post }
  });
};

export const deletePost = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/posts/${id}`
  });
};

export const fetchProfilePosts = id => {
  return $.ajax({
    method: "GET",
    url: `api/profile/posts/${id}`
  });
};

export const fetchExplorePosts = () => {
 return $.ajax({
    method: 'GET',
    url: `/api/explore/posts`
  })
};