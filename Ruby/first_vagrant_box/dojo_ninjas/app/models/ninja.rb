class Ninja < ActiveRecord::Base
  validates :first_name, :last_name, presence: true, length: { in: 2..45 }
  belongs_to :dojo
end
