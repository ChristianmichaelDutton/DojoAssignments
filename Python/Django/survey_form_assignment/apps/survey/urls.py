from django.conf.urls import url
from . import views
# from django.contrib import a

urlpatterns = [
    url(r'^$',views.index),
    url(r'^survey_process$',views.survey),
    url(r'^result$',views.result)
]
