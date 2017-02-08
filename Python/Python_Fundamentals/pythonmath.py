"""Assignment: Multiples, Sum, Average
This assignment has several parts. All of your code should be in one file that is well commented
 to indicate what each block of code is doing and which problem you are solving. Don't forget to test your
code as you go!

Multiples:
Part I
Write code that prints all the odd numbers from 1 to 1000. Use the for loop and don't use an array to do this exercise.

Part II
Create another program that prints all the multiples of 5 from 5 to 1,000,000.

Sum List
Create a program that prints the sum of all the values in the list: a = [1, 2, 5, 10, 255, 3]

Assignment: Average List
Create a program that prints the average of the values in the list: a = [1, 2, 5, 10, 255, 3]"""


"""Part 1"""
for i in range(1,1000,2):
    print i

"""Part 2"""
for i in range(5,1000001,5):
    print i

"""Sum List & Average List"""

a = [1, 2, 5, 10, 255, 3]
print sum(a)
print sum(a)/len(a)

def add(a, b):
  x = a + b
  return x
sum1 = add(4,6)
sum2 = add(1,4)
sum3 = sum1 + sum2




