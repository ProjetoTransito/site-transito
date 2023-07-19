
from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, 'transito/pages/home.html')


def contato(request):
    return render(request, 'transito/pages/contato.html')
