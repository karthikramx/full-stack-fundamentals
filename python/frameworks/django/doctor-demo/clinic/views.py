from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
from .models import Doctor

def doctor_list(request):
    qs = Doctor.objects.all().values('id', 'name', 'specialty', 'years_experience')
    return JsonResponse(list(qs), safe=False)