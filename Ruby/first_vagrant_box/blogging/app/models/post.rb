class Post < ActiveRecord::Base
  validates :title, :content, presence: true, length: {minimum: 7}
  belongs_to :blog
  has_many :messages
end
