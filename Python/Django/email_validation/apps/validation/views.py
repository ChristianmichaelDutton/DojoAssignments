from django.shortcuts import render, redirect, HttpResponse
from .models import Email, EmailManager


def index(request):
    return render (request,'validation/index.html')

def success(request):
    data = {
        "email":Email.objects.all()
    }
    return render (request,'validation/success.html',data)

def email_id(request):
    if request.method=='GET':
        email_id = {
            "email_id":Email.objects.delete(id)
        }
        return redirect('/')

def validity(request):
    if request.method != 'POST':
        return redirect('/')
    else:
        user = Email.objects.validate(request.POST)
        if user[0] == True:
            request.session["id"] = user[1].id
            return redirect('/success')
        else:
            errors = {
                "errors":user[1]
            }
            return redirect('/')
