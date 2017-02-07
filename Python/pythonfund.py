"""String and List Practice
Hint: You can do all of the following using only the built in methods and functions from the previous tabs.
Find and Replace

In a string like this one: str = "If monkeys like bananas, then I must be a monkey!" print the position for all instances of the word "monkey".
Then create a new string where the word "monkey" is replaced with the word "alligator".

Min and Max
Print the min and max values in a list like this one: x = [2,54,-2,7,12,98]. Your code should work for any list.

First and Last
Print the first and last values in a list like this one: x = ["hello",2,54,-2,7,12,98,"world"].
Now create a new list containing only the first and last values in the original list.

New List
Start with a list like this one: x = [19,2,54,-2,7,12,98,32,10,-3,6]. Sort it, then slice out all of the values that are negative, placing those values in a new list.
Then add your new list into the original one at position 0. The output should be: [[-3, -2], 2, 6, 7, 10, 12, 19, 32, 54, 98]. This one is tough!"""

foul = 'If monkeys like bananas, then I must be a monkey!'
print foul.find('monkey')
print foul.replace('monkey','alligator')

x = [2,54,-2,7,12,98]
print max(x)
print min(x)

x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[-1]
y = []
y.append(x[0])
y.append(x[-1])
print y

x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
print x
y = []
y.append(x[0])
y.append(x[1])
x.remove(-3)
x.remove(-2)
print y
x.insert(0,y)
print x





