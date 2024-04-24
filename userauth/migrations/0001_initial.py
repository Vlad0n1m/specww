# Generated by Django 4.1.3 on 2024-04-24 04:30

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_updated', models.DateTimeField(auto_created=datetime.datetime(2024, 4, 24, 4, 30, 12, 897018, tzinfo=datetime.timezone.utc), auto_now_add=True)),
                ('date_created', models.DateTimeField(auto_created=datetime.datetime(2024, 4, 24, 4, 30, 12, 897018, tzinfo=datetime.timezone.utc))),
                ('name', models.CharField(max_length=600)),
                ('description', models.TextField()),
                ('price', models.IntegerField()),
                ('status', models.CharField(choices=[('0', 'Черновик'), ('1', 'На модерации'), ('2', 'Опубликовано'), ('3', 'В работе'), ('4', 'Завершенно')], max_length=50)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userauth.category')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('phone', models.CharField(blank=True, max_length=50, null=True)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(blank=True, max_length=50, null=True)),
                ('mid_name', models.CharField(blank=True, max_length=50, null=True)),
                ('balance', models.IntegerField(default=0)),
                ('is_worker', models.BooleanField(default=False)),
                ('age', models.IntegerField(blank=True, null=True)),
                ('jobs', models.ManyToManyField(related_name='jobs', to='userauth.job')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Worker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bio', models.CharField(max_length=500)),
                ('rating', models.IntegerField(default=0)),
                ('jobs', models.ManyToManyField(related_name='job_worker', to='userauth.job')),
                ('profile', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='worker', to='userauth.profile')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=500)),
                ('rating', models.IntegerField()),
                ('job', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='review', to='userauth.job')),
            ],
        ),
        migrations.AddField(
            model_name='job',
            name='customer_review',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='customer_job', to='userauth.review'),
        ),
        migrations.AddField(
            model_name='job',
            name='profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to='userauth.profile'),
        ),
        migrations.AddField(
            model_name='job',
            name='worker',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='job', to='userauth.worker'),
        ),
        migrations.AddField(
            model_name='job',
            name='worker_review',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='worker_job', to='userauth.review'),
        ),
    ]
