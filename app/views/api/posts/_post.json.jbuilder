json.extract! post, :id, :user_id, :title
json.photoUrl url_for(post.photo)
json.authorPhotoUrl url_for(post.user.profile_photo)
json.author post.user.username
json.likers post.likers.pluck(:id)

json.commentIds post.comment_ids
json.comments post.comments do |comment|
  json.author comment.user.username
  json.user_id comment.user_id
  json.body comment.body
  json.post_id comment.post_id
  json.id comment.id
end