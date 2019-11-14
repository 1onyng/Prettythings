export const fetchAllPosts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
);