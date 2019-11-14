json.extract! post, :id, :user_id, :title
json.photoUrl url_for(post.photo)