from django.conf.urls import url
from . import views

urlpatterns = [
      url(r'^$',views.index),
      url(r'^users$',views.show) # And now we use include to pull in our first_app.urls...
  ]
