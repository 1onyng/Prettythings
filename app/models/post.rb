class Post < ApplicationRecord
  validates :user_id, presence: true 

  belongs_to :user

  has_many :likes
    dependent: :destroy

  has_many :comments
    dependent: :destroy
    
  has_one_attached :photo
end
