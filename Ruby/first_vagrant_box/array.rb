a = ["dragon", "dungeon", "Pathfinder", "character"]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
c = ["dragon", 8]

x = (a + b) - c

print x.to_s

puts a.at(0)

puts a.fetch(3)

puts b.delete(9)
puts b

puts c.reverse.to_s

puts a.sort.to_s

puts b.slice(4..7).to_s
puts b.slice(4..8).to_s

puts b.shuffle.to_s

puts a.join("-doom-doom-")

puts b.insert(8,9).to_s
