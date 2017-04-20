class Post < ActiveRecord::Base
  validates :title, :content, presence: true
  has_many :message
  belongs_to :blog
  belongs_to :user
  has_many :comment, as: :discussion
end
