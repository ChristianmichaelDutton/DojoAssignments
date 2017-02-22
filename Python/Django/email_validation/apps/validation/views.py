from django.shortcuts import render, redirect, HttpResponse
import re

def index(request):
    return render (request,'validation/index.html')

def validity(request):
    if request.method=="POST":
        request.session['email'] = request.POST['email']
        email = request.session['email']
        if re.match(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{,3}$',email,re.IGNORECASE):
            return redirect('/')
        else:
            return redirect ('/')
