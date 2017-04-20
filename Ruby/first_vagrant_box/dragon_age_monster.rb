class Monster
  @@no_of_monsters = 0 #variable in the class itself
  def initialize(name, type, com, con, cun, dex, mag, per, str, wil, spd, hp, df, ar, wpn, atk, dmg)
    @monster_name = name
    @monster_type = type
    @monster_communication = com
    @monster_constitution = con
    @monster_cunning = cun
    @monster_dexterity = dex
    @monster_magic = mag
    @monster_perception = per
    @monster_strength = str
    @monster_willpower = wil
    @monster_speed = spd
    @monster_health = hp
    @monster_defense = df
    @monster_armor_rating = ar
    @monster_weapon = wpn
    @monster_attack_roll = atk
    @monster_damage = dmg
    @@no_of_monsters += 1
    puts "Created monster #{@@no_of_monsters}"
    self
  end #ends initialize def
  def hello
    puts "The #{@monster_name} roars onto the battlefield!"
    self
  end
  def display_all
    puts "#{@monster_name} #{@monster_type}"
    puts "Abilties"
    puts "#{@monster_communication}   Communication"
    puts "#{@monster_constitution}   Constitution"
    puts "#{@monster_cunning}   Cunning"
    puts "#{@monster_dexterity}   Dexterity"
    puts "#{@monster_magic}   Magic"
    puts "#{@monster_perception}   Perception"
    puts "#{@monster_strength}   Strength"
    puts "#{@monster_willpower}   Willpower"
    puts "Speed: #{@monster_speed} Health: #{@monster_health} Defense: #{@monster_defense} Armor Rating: #{@monster_armor_rating}"
    puts "Weapon: #{@monster_weapon} Attack Roll: #{@monster_attack_roll} Damage: #{@monster_damage}"
    self
  end
end
# now using above class to create objects
revengers = Monster.new("Revengers","Rage Darkspawn",0,2,0,2,1,2,3,1,14,20,12,3,"claws","+5","1d6+6").hello.display_all
mythallen = Monster.new("Mythallen", "Rage Abomination",2,3,2,3,2,1,3,4,15,60,13,5,"claws","+5","2d6+3").hello.display_all
