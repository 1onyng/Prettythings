class Follow < ApplicationRecord
  validates :user_id, :followed_user_id, presence: true

  belongs_to :following,
    class_name: :User,
    foreign_key: :followed_user_id

  belongs_to :follower,
    class_name: :User,
    foreign_key: :user_id
end
