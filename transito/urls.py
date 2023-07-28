from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('contato/', views.contato, name='contato'),
    path('sobre/', views.sobre, name='sobre'),
    path('servicos/', views.servicos, name='servicos'),
    path('multas/', views.multas, name='multas'),
    path('bicicletas/', views.bicicletas, name='bicicletas'),
    path('zona_azul/', views.zona_azul, name='zona_azul'),
    path('interd/', views.interd, name='interd')
]
