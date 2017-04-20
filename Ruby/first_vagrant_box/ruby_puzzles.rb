#1
def sum_return(ary)
  print "#{ary.inject :+}\n"
  print ary.find_all{|x| x >10 }
end
sum_return([3,5,1,2,7,9,8,13,25,32])

#2
def shuffletruffle(ary)
  puts ary.shuffle.to_s
  puts ary.find_all{|word| word.length > 5}.to_s
end
shuffletruffle(['John', 'KB', 'Oliver', 'Cory', 'Matthew', 'Christopher'])

# 3
def alphabet_soup
  ary = ("a".."z").to_a
  x = ary.shuffle
  puts x.first
  puts "#{x.first} is a vowel!" if ["a","e","i","o","u"].include? x.first
  puts x.last
end
alphabet_soup

#4
def generate
  ary = []
  for i in 1..10
    number = rand(55..100)
    ary.push(number)
  end
  puts ary.to_s
end
generate

#5
def generatex2
  ary = []
  for i in 1..10
    number = rand(55..100)
    ary.push(number)
  end
  puts ary.sort.to_s
  puts ary.min
  puts ary.max
end
generatex2

#6
def random_string
  a = ""
  5.times { a << rand(65..90).chr }
  puts a
end
random_string

#7
def random_string_array
  x = []
  10.times do
    a = ""
    5.times { a << rand(65..90).chr }
    x << a
  end
  puts x.to_s
end
random_string_array
