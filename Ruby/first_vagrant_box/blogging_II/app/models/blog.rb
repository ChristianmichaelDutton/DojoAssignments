class Blog < ActiveRecord::Base
  validates :name, :description, presence: true
  has_many :users, through: :owners
  has_many :user_posts, through: :posts, source: :user
  has_many :owner
  has_many :post
  has_many :comment, as: :discussion
end
