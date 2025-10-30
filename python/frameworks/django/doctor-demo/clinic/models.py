

# Create your models here.
from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialty = models.CharField(max_length=100)
    years_experience = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.name} ({self.specialty})"