def stars():
    x = [4, 6, 1, 3, 5, 7, 25]
    for i in range(len(x)):
        print x[i]*"*"

stars()

'''Part 2'''


def draw_stars2():
    y = [4, 'Tom', 1, 'Michael', 5, 7, 'Jimmy Smith']
    for i in y:
        output = ''
        if type(i) is int:
            for z in range(i):
                output += '*'
        elif type(i) is str:
            first_letter = i[0].lower()
            for z in range(len(i)):
                output += first_letter
        print output

draw_stars2()

