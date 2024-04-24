from django.shortcuts import render, redirect, HttpResponse
from django.views.decorators.http import require_POST
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from userauth.models import Profile, Job, Category

def home(request):
    return render(request, 'index.html')

def profile(request):
    return render(request, 'lk.html')

@require_POST
@login_required(login_url="/login/")
def update_profile(request):
    if request.method == 'POST':
        user_profile = Profile.objects.get(user=request.user)
        user_profile.first_name = request.POST.get('first_name', user_profile.first_name)
        user_profile.email = request.POST.get('email', user_profile.email)
        user_profile.phone = request.POST.get('phone', user_profile.phone)
        user_profile.age = request.POST.get('age', user_profile.age)
        # additional fields update as needed
        user_profile.save()
        messages.success(request, 'Profile updated successfully!')
        return HttpResponse('updated!')
        # return redirect('some_view_name')
    # return render(request, 'your_template_name.html')
    
@login_required(login_url="/login/")
def job(request):
    ctx = {}
    # ctx['jobs'] = Job.objects.all()
    ctx['categories'] = Category.objects.all()
    
    return render(request, 'create-order.html', ctx)

@require_POST
@login_required(login_url="/login/")
def create_job(request):
    if request.method == 'POST':
        job = Job()
        job.name = request.POST.get('name')
        job.category = Category.objects.filter(id=request.POST.get('category_id')).first()
        job.description = request.POST.get('description')
        job.price = request.POST.get('price')
        job.status = '1'
        job.profile = Profile.objects.get(user=request.user)
        job.save()
        
        # print(request.POST.get('name'))
        messages.success(request, 'Job Created successfully!')
        return redirect('userauth:profile')