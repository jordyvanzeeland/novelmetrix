from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from .views import *
from .components.auth import *
from .components.books import Books
from .components.challenges import Challenges

urlpatterns = [
    path('auth/login', csrf_exempt(login)),
    path('auth/register', csrf_exempt(register)),
    path('books/', Books.as_view(), name="book-list-create"),
    path('books/<int:pk>', Books.as_view(), name="book-detail"),
    path('challenges/', Challenges.as_view(), name="challenge-list-create"),
    path('challenge/<int:pk>', Challenges.as_view(), name="challenge-detail"),
]