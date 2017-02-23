from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Courses(models.Model):
    course_name=models.CharField(max_length=100)
    course_description=models.TextField(max_length=1000)
    created_at=models.DateTimeField(auto_now_add=True)
