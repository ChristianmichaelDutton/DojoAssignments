from __future__ import unicode_literals
from django.db import models
from django.shortcuts import render, redirect
import bcrypt
import re
from validate_email import validate_email

class UserManager(models.Manager):# work in the  actual validation
    def validate(self, postData):
            errors = []
            # regexemail = re.compile('r^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{,3}$')
            if len(postData['first_name']) < 2:
                errors.append("first name")
                return False,errors
            if len(postData['last_name']) < 2:
                errors.append("last name")
                return False,errors
            if not validate_email(postData['email']) == True:
            # if not regexemail.match(postData['email'],re.IGNORECASE):
                errors.append("valid email")
                return False,errors
            if len(self.filter(email=postData['email'])) > 0:
                errors.append("email taken")
                return False,errors
            if len(postData['password'])<8:
                errors.append("password 8")
                return False,errors
            if postData['password'] != postData['confirm']:
                errors.append("password match")
                return False,errors
            if len(errors) == 0:
                user=User.objects.create(first_name=postData['first_name'],last_name=postData['last_name'],email=postData['email'],password=postData['password'])
                return True, user

    def login_verification(self, postData):
        if "email" in postData and "password" in postData:
            user = User.objects.get(email=postData["email"])
            password_match = bcrypt.hashpw(postData['password'].encode(),user.password.encode())
            return True, user
        else:
            return False


class User(models.Model):
      first_name = models.CharField(max_length=45)
      last_name = models.CharField(max_length=45)
      email = models.CharField(max_length=100)
      password = models.CharField(max_length=100)
      created_at = models.DateTimeField(auto_now_add = True)
      updated_at = models.DateTimeField(auto_now = True)

      objects = UserManager()
