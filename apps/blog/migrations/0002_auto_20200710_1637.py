# Generated by Django 3.0.3 on 2020-07-10 09:37

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='website',
            name='subscribe',
            field=models.ManyToManyField(blank=True, related_name='subscribes', to=settings.AUTH_USER_MODEL),
        ),
    ]
