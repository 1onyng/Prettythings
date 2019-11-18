json.extract! user, :id, :username
json.photo_url url_for(user.profile_photo) if user.profile_photo.attached?