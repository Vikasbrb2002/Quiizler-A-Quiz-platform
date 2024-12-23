from django.shortcuts import render
from django.http import JsonResponse
from .models import User

def signup(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        # Save user to the database
        if not User.objects.filter(email=email).exists():
            user = User(username=username, email=email, password=password)
            user.save()
            return JsonResponse({"message": "User created successfully!"})
        return JsonResponse({"error": "Email already exists!"})

def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        # Authenticate user
        user = User.objects.filter(email=email, password=password).first()
        if user:
            return JsonResponse({"message": "Login successful!"})
        return JsonResponse({"error": "Invalid email or password!"})
