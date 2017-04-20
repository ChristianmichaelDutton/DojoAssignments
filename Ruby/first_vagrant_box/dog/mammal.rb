class Mammal

  attr_accessor :health

  def initialize
    @health = 150
    self
  end

  def display_health
    puts "Your pet has #{@health} hp."
    self
  end
end

puppy = Mammal.new.display_health
