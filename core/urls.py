from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='landing'),
    path('profile/', views.profile, name='profile'),
    path('accounts/profile/', views.profile, name='profile'),
    path('update-profile/', views.update_profile, name='update_profile'),
    path('job/', views.job, name='job'),
    path('job/create/', views.create_job, name='create_job'),
    
    # path('chat/', views.chat, name='update_profile')
    
] + static('/home/django/womtask/specww/static', document_root=settings.STATIC_ROOT)
