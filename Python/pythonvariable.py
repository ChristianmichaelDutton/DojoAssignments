x = "Hello World!"
print x
x = 5
print x
print 5 + 15
x = "Hello"
y = " CM!"
print x + y
x ="CM you have a +"
y = 5
z =" sword!"
print x + str(y) + z

x = 5
y = 10

print x + y
print x,y

first_name = "Zen"
last_name = "Coder"
print "My name is {} {}".format(first_name, last_name)

my_string = 'hello world'
print my_string.capitalize()

my_string = 'Hello WORLD'
print my_string.lower()

my_string = 'Hello WORLD'
print my_string.swapcase()

my_string = 'hello world'
print my_string.upper()

my_string = "hello world"
print my_string.replace("world", "kitty")

my_string = "egg, egg, Spam, egg and Spam"
print my_string.replace("egg", "Spam", 2)

x = [1,2,3,4,5]
x.append(99)
print x

x = [1,2,3,4,5]
x.remove(3)
"""removes the value indicated--This is not pop!"""
print x

x = [1,2,3,4,5]
x.pop(3)
print x
x.append(8)
print x

x = [1,2,3,4,5]
x.pop()
print x
#the output would be [1,2,3,4]
y = [10,11,12,13,14]
y.pop(1)
print y
#the output would be [10,12,13,14]

x = [99,4,2,5,-3]
x.sort()
print x

x = [99,4,2,5,-3];
print x[:]
#the output would be [99,4,2,5,-3]
print x[1:]
#the output would be [4,2,5,-3];
print x[:4]
#the output would be [99,4,2,5]
print x[2:4]
#the output would be [2,5];

my_list = [1, 'Zen', 'hi']
print len(my_list)

my_list = [1, 7, 3]
print max(my_list)

my_list = [1, 7, 3]
print min(my_list)

my_list = [0, 'hi', '']
print any(my_list)
# the output would be True since a string would equate to true in this case
my_list = [0, '']
print any(my_list)
# the output would be False since 0 (zero) and an empty string will both be false

my_list = [0, 'Zen', '']
print all(my_list)
# the output would be False
my_list = [4, 'hi']
print all(my_list)
# the output would be True