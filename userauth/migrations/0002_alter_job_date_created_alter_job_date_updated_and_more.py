# Generated by Django 4.1.3 on 2024-04-24 04:36

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userauth', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 24, 4, 36, 53, 464713, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='job',
            name='date_updated',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 24, 4, 36, 53, 464713, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='job',
            name='worker',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='job', to='userauth.worker'),
        ),
    ]