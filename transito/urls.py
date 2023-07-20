from django.urls import path
from .views import home, contato, sobre


urlpatterns = [
    path('', home),
    path('contato/', contato),
    path('sobre/', sobre),

]
