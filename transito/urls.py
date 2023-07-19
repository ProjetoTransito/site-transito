from django.urls import path
from transito.views import home, contato


urlpatterns = [
    path('transito/', home),
    path('transito/contato/', contato),
]
