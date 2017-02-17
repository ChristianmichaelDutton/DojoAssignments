from django.shortcuts import render, redirect

def index(request):
    return render (request,'survey/index.html')

def result(request):
    return render(request,'survey/result.html')

def survey(request):
    if request.method == "POST":
        request.session['name'] = request.POST['name']
        print request.session['name']
        request.session['location'] = request.POST['location']
        print request.session['location']
        request.session['language'] = request.POST['language']
        print request.session['language']
        request.session['text'] = request.POST['text']
        print request.session['text']
        return redirect('/result')
    else:
        return redirect('/')

# Create your views here.
