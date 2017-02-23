from django.shortcuts import render, redirect, HttpResponse
import re
from .models import Valid_Email


def index(request):
    return render (request,'validation/index.html')

def success(request):
    data = {
        "email_db":Valid_Email.objects.all()
    }
    return render (request,'validation/success.html',data)

def validity(request):
    if request.method=="POST":
        request.session['email'] = request.POST['email']
        check = request.session['email']
        if re.match(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{,3}$',check,re.IGNORECASE):
            Valid_Email.objects.create(email=request.POST['email'])
            return redirect ('/success')
        else:
            return redirect ('/')
