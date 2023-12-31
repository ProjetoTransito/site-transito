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
    path('interd/', views.interd, name='interd'),
    path('lombadas/', views.lombadas, name='lombadas'),
    path('sinalizacao/', views.sinalizacao, name='sinalizacao'),
    path('cartao_idoso/', views.cartao_idoso, name='cartao_idoso'),
    path('vagas_especiais/', views.vagas_especiais, name='vagas_especiais'),
    path('cartao_def/', views.cartao_def, name='cartao_def')
]
