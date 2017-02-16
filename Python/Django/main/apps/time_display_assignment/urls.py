from django.conf.urls import url
from . import views
#from django.contrib import admin

urlpatterns = [
      url(r'^$',views.index) # And now we use include to pull in our first_app.urls...
  ]
