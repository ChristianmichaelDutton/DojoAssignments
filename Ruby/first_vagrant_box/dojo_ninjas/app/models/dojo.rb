class Dojo < ActiveRecord::Base
  validates :name, :location, presence: true, length: { in: 2..20 }
  validates :state, presence: true, length: { in: 2..2 }
  has_many :ninjas
end
