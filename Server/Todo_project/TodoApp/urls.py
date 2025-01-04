from django.urls import path
from . import views
urlpatterns =[
path('GetAllTodos/',views.GetAllTodos.as_view(),name='GetAllTodos'),
path('AddTodo/',views.AddTodo.as_view(),name='AddTodo'),
path('DeleteTodo/<int:pk>/',views.DeleteTodo.as_view(),name='DeleteTodo'),
path('EditTodo/<int:pk>/',views.EditTodo.as_view(),name='DeleteTodo')
]