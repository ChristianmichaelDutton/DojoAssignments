a = {first_name: "Termicius", last_name: "Fiveflails"}
b = {first_name: "Rithine", last_name: "Vyss"}
c = {first_name: "Lunavesca", last_name: "Vyss"}
d = {first_name: "Prydarii", last_name: "Cadlim"}
e = {first_name: "Lanath", last_name: "Mithrand"}
names = [a, b, c, d, e]

puts "You have #{names.length} names in the 'names' array."
names.each do |name|
puts "Your name is #{name[:first_name]} #{name[:last_name]}"
end
