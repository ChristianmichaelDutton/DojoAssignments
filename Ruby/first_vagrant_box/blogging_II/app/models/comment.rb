class Comment < ActiveRecord::Base
  belongs_to :discussion, polymorphic: true
  validates :content, presence: true
end
