from __future__ import unicode_literals

from django.db import models

class Valid_Email(models.Model):
    name=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
