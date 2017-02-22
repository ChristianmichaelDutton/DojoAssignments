from django.conf.urls import url
from .import views
# from django.contrib import admin

urlpatterns = [
      # Inside your app's urls.py file
  url(r'^$', views.index)

]
