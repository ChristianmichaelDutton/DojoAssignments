from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render (request, 'ninjas/index.html')

def show(request, color):
    if color == 'blue':
        context = {'color': 'ninjas/images/leonardo.jpg',
                    'name':'Leonardo'
        }
    elif color == 'red':
        context = {'color': 'ninjas/images/raphael.jpg',
                    'name':'raphael'
        }
    elif color == 'orange':
        context = {'color': 'ninjas/images/michelangelo.jpg',
                    'name':'Michelangelo'
        }
    elif color == 'purple':
        context = {'color': 'ninjas/images/donatello.jpg',
                    'name': 'Donatello'
        }
    elif color == 'black':
        context = {
                'color':'ninjas/images/dragon.jpg',
                'name': "a frickin' dragon that will eat you!!"    
        }
    else:
        context = {'color': 'ninjas/images/notapril.jpg',
                    'name': "April O'Neill"
        }
    return render(request, 'ninjas/ninjas.html', context)

def showninjas(request):
    context = {
        "color": 'ninjas/images/tmnt.png',
        'name': 'the team'
    }
    return render (request, 'ninjas/ninjas.html', context)
