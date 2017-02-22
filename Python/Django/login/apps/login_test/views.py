from django.shortcuts import render, HttpResponse
from .models import User

def index(request):
    User.objects.login("badwolf@yahoo.com", "badwolf")
    return HttpResponse(User.objects.login("badwolf@yahoo.com", "badwolf"))
