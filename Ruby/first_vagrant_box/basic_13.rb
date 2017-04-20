# print 1 - 255
for i in 1..255
  puts "Value of local variable is #{i}"
end

# print odd 1 -255
for i in 0..255
  if i % 2 != 0
    puts "#{i}"
  end
end

#print sum
sum = 0
for i in 0..255
  puts "The current sum is #{sum + i}"
  sum = sum+i
end

# iterate through an array
x = [1,3,5,7,9,13]
for i in x
  puts "#{i}"
end

# find max
def find_max (arr)
  puts arr.max
end
find_max([1,8,16,-3,0,88])

#get average
def get_average(arr)
  x = arr.inject :+
  puts x / arr.length
end
get_average([1,3,5,7,9,11,13])

# greater than y
def greater_than_y(ary,y)
  print ary.find_all{|x| x >y }
end
greater_than_y([1,3,5,7,9,11,13], 9)

#square the values
def square_array(ary)
  a = Array.new(ary.length)
  ary.each_index { |i| a[i] = ary[i] * ary[i] }
  puts a.to_a
end
square_array([1,5,25])

#eliminate negative numbers
def eliminate_negative(val)
  val.delete_if {|x| x < 0 }
  puts val.to_s
end
eliminate_negative([1,-3,8,13,-9,18,19,-28,20,-23])

#min,max,average
def min_max_avg(ary)
  puts ary.min
  puts ary.max
  x = ary.inject :+
  puts x / ary.length
end
min_max_avg([1,3,5,7,9,11,13])

#shift an Array
def shift(ary)
  ary.shift
  ary.push(0)
  puts ary.to_s
end
shift([1,3,5,7,9,11,13])

#number to string
def num_to_str(ary)
  ary.map! { |x| x < 0 ? "Dojo" : x }
  puts ary.to_s
end
num_to_str([1,-3,5,-7,9,-11,13])
