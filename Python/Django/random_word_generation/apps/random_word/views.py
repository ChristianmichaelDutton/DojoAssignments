from django.shortcuts import render, redirect
import random

def index(request):
    return render (request, 'random_word/index.html')

def randomthing(request):
    if request.method == "POST":
        if 'count' not in request.session:
            request.session['count'] =1
        else:
            request.session['count'] += 1
        print request.session['count']
        array = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]
        newarray =[]
        for i in range(14):
            newarray.append(array[random.randrange(0,36)])
        str1 = ''.join(newarray)
        request.session['key']=str1
        return redirect('/')
    else:
        return redirect('/')
