from django.db import models

class TodoApp(models.Model):
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=500)
    isCompleted = models.BooleanField(default=False)