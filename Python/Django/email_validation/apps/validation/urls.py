from django.conf.urls import url
from . import views
# from django.contrib import admin

urlpatterns = [
    url(r'^$',views.index),
    url(r'^show$',views.validity),
    url(r'^success$',views.success)
]
