from django.conf.urls import url
from . import views
# from django.contrib import a

urlpatterns = [
    url(r'^$',views.index),
    url(r'^result$',views.survey)
]
