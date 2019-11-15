class Post < ApplicationRecord
  validates :user_id, presence: true 

  validate :ensure_photo

  belongs_to :user

  has_many :likes,
    dependent: :destroy

  has_many :likers,
    through: :likes,
    source: :user

  has_many :comments,
    dependent: :destroy
    
  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
end
