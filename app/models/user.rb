class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
 
  attr_reader :password
 
  after_initialize :ensure_session_token

  has_many :comments,
    dependent: :destroy

  has_many :posts,
    dependent: :destroy

  has_many :likes, 
    dependent: :destroy

  has_many :active_follows,  
    class_name: :Follow,
    foreign_key: :user_id,
    dependent: :destroy

  has_many :passive_follows, 
    class_name: :Follow,
    foreign_key: :followed_user_id,
    dependent: :destroy

  has_many :follows, 
    through: :active_follows,
    source: :following,
    dependent: :destroy

  has_many :followers, 
    through: :passive_follows, 
    source: :follower,
    dependent: :destroy

  has_one_attached :photo,
    dependent: :destroy
 
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end
 
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
 
  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
 
  def reset_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
 
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end


