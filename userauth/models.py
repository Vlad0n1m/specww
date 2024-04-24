from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=50, null=True, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    mid_name = models.CharField(max_length=50, null=True, blank=True)
    jobs = models.ManyToManyField('Job', related_name='jobs')
    balance = models.IntegerField(default=0)
    is_worker = models.BooleanField(default=False)
    age = models.IntegerField(null=True, blank=True)
    def __str__(self) -> str:
        return f"{ self.last_name } {self.first_name}"
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.get_or_create(user=instance)

class Worker(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE, related_name='worker')
    bio = models.CharField(max_length=500)
    jobs = models.ManyToManyField('Job', related_name='job_worker')
    rating = models.IntegerField(default=0)
    
class Job(models.Model):
    # PRICE_TYPES = [
    #     ('0', 'Фиксированная'),
    #     ('1', 'Договорная'),
    # ]
    STATUSES = [
        ('0', 'Черновик'),
        ('1', 'На модерации'),
        ('2', 'Опубликовано'),
        ('3', 'В работе'),
        ('4', 'Завершенно')
    ]
    name = models.CharField(max_length=600)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    description = models.TextField()
    price = models.IntegerField()
    
    # price_type = models.CharField(max_length=15, choices=PRICE_TYPES)
    profile = models.ForeignKey(Profile, related_name='profile', on_delete=models.CASCADE)
    status = models.CharField(max_length=50, choices=STATUSES)
    worker = models.ForeignKey(Worker, on_delete=models.CASCADE, related_name='job', blank=True, null=True)
    worker_review = models.OneToOneField('Review', on_delete=models.CASCADE, related_name='worker_job', blank=True, null=True)
    customer_review = models.OneToOneField('Review', on_delete=models.CASCADE, related_name='customer_job', blank=True, null=True)
    date_created = models.DateTimeField(default=timezone.now())
    date_updated = models.DateTimeField(default=timezone.now())
    def __str__(self) -> str:
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self) -> str:
        return self.name
    
    
class Review(models.Model):
    job = models.OneToOneField(Job, on_delete=models.CASCADE, related_name='review')
    text = models.CharField(max_length=500)
    rating = models.IntegerField()
    def __str__(self) -> str:
        return f"{self.job.name} - {self.text} - {self.rating}"