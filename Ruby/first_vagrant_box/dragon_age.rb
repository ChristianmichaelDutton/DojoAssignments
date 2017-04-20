dragon_age = {
  name: "Ferrowclaw",
  race: "werepanther",
  background: "Plains of Azmen",
  gender: "male",
  communication: "1",
  constitution: "2",
  cunning:"-1",
  dexterity: "0",
  magic:"4",
  perception:"2",
  strength:"1",
  willpower:"2"
}

puts dragon_age[:name]

dragon_age.delete(:background)
puts dragon_age

if dragon_age.empty?
  puts "This is an empty hash."
else
  puts "There is a character in this hash."
end

if dragon_age.has_key?(:background)
  puts dragon_age[:background]
else
  puts "There is no background in this hash."
end

if dragon_age.has_value?("4")
  puts "The character has a magic score of #{dragon_age[:magic]}"
else
  puts "There is no value associated with magic."
end
