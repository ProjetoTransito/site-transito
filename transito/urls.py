from django.urls import path
from .views import home, contato


urlpatterns = [
    path('', home),
    path('contato/', contato)

]
