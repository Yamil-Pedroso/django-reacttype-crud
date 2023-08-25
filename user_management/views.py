from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.authtoken.models import Token
from .serializer import CustomUserSerializer
from user_management.models import CustomUser

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all()
    http_method_names = ['get', 'post', 'put', 'delete']
    

def custom_login(request):
   if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, username=username, email=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, f'You has been logged as {username}')
            token, _ = Token.objects.get_or_create(user=user)
            return JsonResponse({'token': token.key})
        else:
            messages.error(request, 'Your username or password is incorrect')
            return JsonResponse({'message': 'Invalid credentials'}, status=400)

def create_user(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    email = request.POST.get('email')
    profile_picture = request.FILES.get('profile_picture')
    user = CustomUser.objects.create_user(username, email, password, profile_picture=profile_picture)
    return JsonResponse({'message': 'User created successfully'})

def custom_logout(request):
    logout(request)
    return JsonResponse({'message': 'Logged out successfully'})


def get_users(request):
    users = CustomUser.objects.all()
    user_list = [{'id': user.id, 'username': user.username} for user in users]
    return JsonResponse({'users': user_list})

def get_user(request, user_id):
    try:
        user = CustomUser.objects.get(id=user_id)
        user_data = {'id': user.id, 'username': user.username}
        return JsonResponse({'user': user_data})
    except CustomUser.DoesNotExist:
        return JsonResponse({'message': 'User not found'}, status=404)

def update_user(request, user_id):
    try:
        user = CustomUser.objects.get(id=user_id)
        new_username = request.data.get('username')
        if new_username:
            user.username = new_username
            user.save()
            return JsonResponse({'message': 'User updated successfully'})
        else:
            return JsonResponse({'message': 'Username field is required'}, status=400)
    except CustomUser.DoesNotExist:
        return JsonResponse({'message': 'User not found'}, status=404)

def delete_user(request, user_id):
    try:
        user = CustomUser.objects.get(id=user_id)
        user.delete()
        return JsonResponse({'message': 'User deleted successfully'})
    except CustomUser.DoesNotExist:
        return JsonResponse({'message': 'User not found'}, status=404)
