from django.shortcuts import render

def index(request):
    return render(request, 'vinmyMVC/index.html')

def show(request):
    return render (request,'vinmyMVC/show_users.html')

# Create your views here.
