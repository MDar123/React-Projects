from rest_framework import generics
from .models import TodoApp
from .serializers import TodoSerializer


class GetAllTodos(generics.ListAPIView):
    queryset=TodoApp.objects.all()
    serializer_class = TodoSerializer


class AddTodo(generics.CreateAPIView):
    queryset=TodoApp.objects.all()
    serializer_class = TodoSerializer

class EditTodo(generics.UpdateAPIView):
    queryset = TodoApp.objects.all()
    serializer_class = TodoSerializer

class DeleteTodo(generics.DestroyAPIView):
    queryset=TodoApp.objects.all()
    serializer_class = TodoSerializer