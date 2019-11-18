json.extract! comment, :id, :body, :user_id, :post_id
json.author comment.user.username
json.body comment.body