from django.shortcuts import render

def index(request):
    return render(request,'the_wall/index.html')
