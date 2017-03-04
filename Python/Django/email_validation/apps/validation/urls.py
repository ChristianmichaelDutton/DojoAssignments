from django.conf.urls import url
from . import views
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^(?P<email_id)[0-9]+$', views.email_id),
    url(r'^$',views.index),
    url(r'^show$',views.validity),
    url(r'^success$',views.success),
]
