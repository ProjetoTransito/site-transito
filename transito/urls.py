from django.urls import path
from .views import home, contato, sobre, servicos


urlpatterns = [
    path('', home),
    path('contato/', contato),
    path('sobre/', sobre),
    path('servicos/', servicos),

]
