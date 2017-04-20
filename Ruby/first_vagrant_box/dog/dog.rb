require_relative 'mammal'

class Dog < Mammal

  def pet(val)
    @health +=5*val
    self
  end

  def walk(val)
    @health -=1*val
    self
  end

  def run(val)
    @health -=10*val
    self
  end

  def display_health
    puts "The dog has #{@health} hp."
    self
  end
end

puppy = Dog.new.pet(2).walk(3).run(5).display_health
