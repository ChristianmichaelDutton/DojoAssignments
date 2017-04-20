class Human

  attr_accessor :strength, :intelligence, :stealth, :health, :offensive_rating, :defensive_rating, :attack_roll, :damage_roll

  def initialize (name)
    @name = name
    @strength = rand(1..100)
    @intelligence = rand(1..100)
    @stealth = rand(1..100)
    @health = 100
    @offensive_rating = 50 + @strength/10
    @defensive_rating = 20 + @intelligence/5 + @stealth/5
  end

  def character
    puts "#{@name}"
    puts "Ability Scores"
    puts "Strength: #{@strength} Intelligence: #{@intelligence} Stealth: #{@stealth} Health: #{@health}"
    puts "Attack and Defense"
    puts "Offense Bonus: +#{@offensive_rating}, Defense Rating: #{@defensive_rating}"
    self
  end

  def attack (obj)
    if obj.class.ancestors.include?(Human)
      @roll = rand(1..100)
      if @roll > 90 && @roll < 95
        puts "Critical Hit!!"
        @multiplier = 2
      elsif @roll > 95
        puts "Major Critical Hit!!"
        @multiplier = 4
      else
        puts "Attack!"
        @multiplier = 1
      end
      @attack_roll = @roll + @offensive_rating
      puts "You rolled #{@attack_roll}"
      @damage_roll = (rand(51..100)/5) * @multiplier.to_i
      puts "You did #{@damage_roll} to your opponent!"
      self
    else
      false
    end
  end
end

class Goblin < Human

  def initialize (name)
    super
    @health = 25
  end

  def attacked
    damage
    @health -= @damage_roll.to_i
    if @health < 0
      puts "The Goblin died!!"
    else
      puts "The Goblin has #{@health} health left!"
    end
    self
  end
end


termicius = Human.new("Termicius").character.attack(gobber)
gobber =Goblin.new("Goblin").attacked
