"""Assignment: Fun with FunctionsMandatoryDeadline: Wednesday of Week 1Difficulty Level: BasicEstimated Time: 1-4 hrs
Odd/Even:
Create a function called odd_even that counts from 1 to 2000. As your loop executes have
your program print the number of that iteration and specify whether it's an odd or even number.

Your program output should look like below:

Number is 1.  This is an odd number.
Number is 2.  This is an even number.
Number is 3.  This is an odd number.
...
Number is 2000.  This is an even number.
Copy Multiply:
Create a function called 'multiply' that iterates through each value in a list (e.g. a = [2, 4, 10, 16])
and returns a list where each value has been multiplied by 5.

The function should multiply each value in the list by the second argument. For example, let's say:

a = [2,4,10,16]
Copy
Then:

b = multiply(a, 5)
print b
Copy
Should print [10, 20, 50, 80 ].

Hacker Challenge:
Write a function that takes the multiply function call as an argument. Your new function should
return the multiplied list as a two-dimensional list. Each internal list should contain as many ones
as the number in the original list. Here's an example:

def layered_multiples(arr)
  # your code here
  return new_array
x = layered_multiples(multiply([2,4,5],3))
print x
# output
>>>[[1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]"""

"""Odd/Even"""
for i in range(1,2001,1):
    if i % 2 != 0:
        print "Number is " + str(i) + ". This is an odd number."
    else:
        print "Number is " + str(i) + ". This is an even number."

"""Multiply"""
a = [2,4,10,16]
b = []
for i in a:
    b.append(i*5)
print b

"""Hacker Challenge"""
def array(x,y):
    a = x*y
    for i in x:
        print x[i]
        """print i*y"""
array([2,4,5],3)

