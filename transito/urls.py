from django.urls import path
from transito.views import home, contato


urlpatterns = [
    path('', home),
    path('contato/', contato),
]
