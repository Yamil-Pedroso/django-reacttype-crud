from django.urls import path, include
from rest_framework import routers 
from user_management import views

router = routers.DefaultRouter()
router.register(r"users", views.UserViewSet, "users")

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('create/', views.create_user, name='create_user'),
    path('login/', views.custom_login, name='custom_login'),
    path('logout/', views.custom_logout, name='custom_logout'),
    path('users/', views.get_users, name='get_users'),
    path('users/<int:user_id>/', views.get_user, name='get_user'),
    path('users/<int:user_id>/update/', views.update_user, name='update_user'),
    path('users/<int:user_id>/delete/', views.delete_user, name='delete_user'),
]
