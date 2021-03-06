from django.shortcuts import render, redirect
from . models import Blogs, Comments

def index(request):
    context = {
        "blogs": Blogs.objects.all()
    }
    return render(request,"test_app/index.html",context)

def blogs(request):
    Blogs.objects.create(title=request.POST['title'],blog=request.POST['blog'])
    return redirect('/')

def comments(request,id):
      blog = Blogs.objects.get(id=id)
      Comments.objects.create(comment=request.POST['comment'],blog=blog)
      return redirect('/')
