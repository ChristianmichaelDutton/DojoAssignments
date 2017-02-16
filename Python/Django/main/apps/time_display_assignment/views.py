from django.shortcuts import render, HttpResponse
from datetime import datetime

# Create your views here.
def index(request):
    i = datetime.now().strftime("%A/%B/%d/%Y")
    x = datetime.now().strftime("%-I/%M/%S/%p")
    currentDateTime = (i +" "+ x)

    context={
    "currentDateTime":currentDateTime
    }
    return render(request, 'time_display_assignment/index.html', context)
