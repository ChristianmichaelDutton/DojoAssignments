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
      obj.health -= @damage_roll
      puts "You did #{@damage_roll} to your opponent!"
      self
    else
      false
    end
  end

  def display_health
    puts "#{@health} health left."
    self
  end
end

class Wizard < Human

  def initialize(name)
    super
    @health = 50
    @intelligence = rand(75..100)
    self
  end

  def heal
    @health += rand(5..20)
    self
  end

  def fireball(obj)
    puts "You threw a fireball and it explodes in the chamber!"
    puts obj.health -= rand(51..150)*2
    @health -= rand(10..30)
    self
  end
end

class Ninja < Human

  def initialize(name)
    super
    @stealth = rand(100..175)
    self
  end

  def assassinate(obj)
    if obj.class.ancestors.include?(Human)
      @roll = rand(1..100)
      if @roll > 90 && @roll < 95
        puts "Critical Hit!!"
        @multiplier = 3
      elsif @roll > 95
        puts "Major Critical Hit!!"
        @multiplier = 6
      else
        puts "Attack!"
        @multiplier = 2
      end
      @attack_roll = @roll + @offensive_rating
      puts "You rolled #{@attack_roll}"
      @damage_roll = (rand(51..100)/5) * @multiplier.to_i
      obj.health -= @damage_roll
      puts "You did #{@damage_roll} to your opponent!"
      self
    else
      false
    end
  end

  def smoke_bomb
    @health -= 20
  end
end

class Samurai < Human

  def initialize
    super
    @health = 200
    self
  end

  def death_blow
    if obj.class.ancestors.include?(Human)
      @roll = rand(1..100)
      if @roll > 90 && @roll < 95
        puts "Critical Hit!!"
        obj.health = 10
      elsif @roll > 95
        puts "Major Critical Hit!!"
        obj.health = 0
      else
        puts "Attack!"
        obj.health = 20
      end
      @attack_roll = @roll + @offensive_rating
      puts "You rolled #{@attack_roll}"
      self
    else
      false
    end
  end

  def meditate
    @health += 20
  end
end

termicius = Human.new("Termicius").character.attack("Not a human")
nethin = Wizard.new("Nethin").character.fireball(termicius).heal
termicius.display_health
