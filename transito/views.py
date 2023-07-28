# from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, 'transito/pages/home.html')


def contato(request):
    return render(request, 'transito/pages/contato.html')


def sobre(request):
    return render(request, 'transito/pages/sobre.html')


def servicos(request):
    return render(request, 'transito/pages/servicos.html')


def multas(request):
    return render(request, 'transito/pages/multas.html')


def bicicletas(request):
    return render(request, 'transito/pages/bicicletas.html')


def zona_azul(request):
    return render(request, 'transito/pages/zona_azul.html')
