"""Write a function that generates ten scores between 60 and 100. Each time a score is generated, your function should display
 what the grade is for a particular score. Here is the grade table:

Score: 60 - 69; Grade - D
Score: 70 - 79; Grade - C
Score: 80 - 89; Grade - B
Score: 90 - 100; Grade - A"""

import random
def scores(num):
    print "Scores and Grades"
    for i in range(num):
        grade = random.randrange(60,100)
        if grade < 70:
            print "Score: "+str(grade)+"; Your grade is D"
        elif grade > 69 and grade < 80:
            print "Score: "+str(grade)+"; Your grade is C"
        elif grade > 89 and grade < 90:
            print "Score: "+str(grade)+"; Your grade is B"
        else:
            print "Score: " + str(grade) + "; Your grade is A"
    print "End of the program. Bye!"
scores(10)
