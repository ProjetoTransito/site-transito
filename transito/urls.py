from django.urls import path
from transito.views import home


urlpatterns = [
    path('', home),

]
