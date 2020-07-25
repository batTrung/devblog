# Generated by Django 3.0.3 on 2020-07-19 18:48

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0013_auto_20200720_0144'),
    ]

    operations = [
        migrations.AddField(
            model_name='playlist',
            name='users_like',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='playlist',
            name='views',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
