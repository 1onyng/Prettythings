json.extract! post, :id, :user_id, :title
json.photoUrl url_for(post.photo)
# json.authorPhotoUrl url_for(post.user.profile_photo)
json.author post.user.username
json.likers post.likers.pluck(:id)