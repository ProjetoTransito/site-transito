from django.urls import path
from . import views


urlpatterns = [
    path('', views.home),
    path('contato/', views.contato),
    path('sobre/', views.sobre),
    path('servicos/', views.servicos),

]
