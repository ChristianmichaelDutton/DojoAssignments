from django.shortcuts import render, redirect

def index(request):
    return render (request,'survey/index.html')

def result(request):
    # if request.method == "POST":
        return render(request,'survey/result.html')

def survey(request):
    if request.method == "POST":
        if 'count' not in request.session:
            request.session['count'] =1
        else:
            request.session['count'] += 1
        print request.session['count']
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] = request.POST['language']
        request.session['text'] = request.POST['text']
        return redirect('/result')
    else:
        return redirect('/')



# Create your views here.
