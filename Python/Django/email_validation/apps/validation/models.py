from __future__ import unicode_literals
import re
from django.db import models
Email_Regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.+_-]+\.[a-zA-Z]+$')

class EmailManager(models.Manager):
    def validate(self, postEmail):
        errors = []
        if len(postEmail) < 1:
            errors.append("You must enter an email!")
            return False, errors
        if not Email_Regex.match(postEmail['email']):
            errors.append("You must enter a valid email!")
            return False, errors
        if len(Email.objects.filter(email = postEmail['email'])) > 0:
            errors.append("That email is already taken!")
            return False, errors
        if len(errors) == 0:
            user=Email.objects.create(email = postEmail['email'])
            return True, user

class Email(models.Model):
    email=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)

    objects = EmailManager()
