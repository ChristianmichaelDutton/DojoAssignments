class Message < ActiveRecord::Base
  validates :author, :message, presence: true
  belongs_to :post
  belongs_to :user
  has_many :comment, as: :discussion
end
