from django.shortcuts import render, redirect
import re
import bcrypt
from .models import User, UserManager
# Create your views here.
def index (request):
    if 'id' in request.session:
        return redirect('/success')
    return render(request,'registration/index.html')

def login(request):
    if request.method != 'POST':
        return redirect('/')
    else:
        user = User.objects.login_verification(request.POST)
        if user[0] == True:
            request.session["id"] = user[1].id
            return redirect('/success')
        else:
            return render (request,'regisration/login_failed.html')

def process(request):
    if request.method != 'POST':
        return redirect('/')
    else:
        user = User.objects.validate(request.POST)
        if user[0] == True:
            request.session["id"] = user[1].id
            return redirect('/success')
        else:
            errors = user[1]
            for error in errors:
                if error=="first name":
                    return render (request,'registration/name_error.html')
                if error=="last name":
                    return render (request,'registration/name_error.html')
                if error=="valid email":
                    return render (request,'registration/email_error.html')
                if error=="email taken":
                    return render (request,'registration/email_taken.html')
                if error=="password 8":
                    return render (request,'registration/password_error.html')
                if error=="password match":
                    return render(request,'registration/confirmation_error.html')
            return redirect('/')

def success(request):
    if 'id' not in request.session:
        return redirect('/')
    else:
        user = User.objects.get(id=request.session["id"])
        return render(request, 'registration/success.html', {"user":user})

def logout(request):
    if request.method =='POST':
        return redirect('/')
