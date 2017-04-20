class Message < ActiveRecord::Base
  validates :author, presence: true, length: { in: 2..255 }
  validates :discussion, presence: true
  belongs_to :post
end
