
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(request):
    return render(request, 'transito/home.html')


def contato(request):
    return HttpResponse('Contato')


def sobre(request):
    return HttpResponse('sobre')
