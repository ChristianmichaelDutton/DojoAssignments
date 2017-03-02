from django.shortcuts import render, redirect, HttpResponse
from datetime import datetime
import random

# Create your views here.
def index(request):
    if 'activities' not in request.session:
        request.session['activities'] = ''
    if 'goldcount' not in request.session:
        request.session['goldcount'] = 0
    return render(request, 'dragongold/index.html')

def process(request, building):
    date = datetime.now().strftime("%A/%B/%d/%Y/%-I/%M/%S/%p")
    if building == 'farm':
        goldpieces = random.randrange(1,9)+6
        request.session['goldcount'] += goldpieces
        request.session['activities'] += 'You collected ' + str(goldpieces) + ' gold at farm (' + str(date) + ')\n'
    if building =='dungeon':
        goldpieces = random.randrange(1,21)
        request.session['goldcount'] += goldpieces
        request.session['activities'] += 'You collected ' + str(goldpieces) + ' gold at dungeon (' + str(date) + ')\n'
    if building =='hovel':
        goldpieces = random.randrange(1,5)+1
        request.session['goldcount'] += goldpieces
        request.session['activities'] += 'You collected ' + str(goldpieces) + ' gold at hovel (' + str(date) + ')\n'
    if building =='tavern':
        if random.randrange(1,11)>5:
            goldpieces = random.randrange(1,11)+random.randrange(1,11)+random.randrange(1,11)+random.randrange(1,11)+random.randrange(1,11)
            request.session['goldcount'] += goldpieces
            request.session['activities'] += 'You won ' + str(goldpieces) + ' gold at the tavern (' + str(date) + ')\n'
        else:
            goldpieces = (random.randrange(1,11)*-1)+(random.randrange(1,11)*-1)+(random.randrange(1,11)*-1)+(random.randrange(1,11)*-1)+(random.randrange(1,11)*-1)
            request.session['goldcount'] += goldpieces
            request.session['activities'] += 'You lost ' + str(goldpieces) + ' gold at the tavern (' + str(date) + ')\n'
    return redirect('/')
