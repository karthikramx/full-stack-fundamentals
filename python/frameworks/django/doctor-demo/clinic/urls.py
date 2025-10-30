from django.urls import path
from .views import doctor_list

urlpatterns = [
    path('doctors/', doctor_list),
]
