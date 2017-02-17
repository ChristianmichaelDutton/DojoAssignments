from django.conf.urls import url
from . import views
# from django.contrib import admin

urlpatterns = [
    url(r'^$',views.index),
    url(r'^random_word$',views.random_word)
    # url(r'^new_user$',views.create)
]
