class Comment < ApplicationRecord
  validates :body, presence: true
  has_many :likes
  belongs_to :user
  belongs_to :post
end
