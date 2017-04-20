require_relative 'mammal'

class Lion < Mammal

  def initialize
    super
    @health = 500
    self
  end

  def fly(val)
    @health -=10*val
    self
  end

  def attack_town(val)
    @health -=50*val
    self
  end

  def eat_humans(val)
    @health +=20*val
    self
  end

  def display_health
    if @health <=0
      puts "The lion has died."
    else
    puts "The lion has #{@health} hp."
    end
    self
  end
end

aslan = Lion.new.fly(8).attack_town(3).eat_humans(5).display_health
