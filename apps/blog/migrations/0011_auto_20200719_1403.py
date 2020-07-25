# Generated by Django 3.0.3 on 2020-07-19 07:03

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0010_auto_20200718_1409'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ('created',)},
        ),
        migrations.AlterModelOptions(
            name='website',
            options={'ordering': ('-created',)},
        ),
        migrations.RenameField(
            model_name='website',
            old_name='subscribe',
            new_name='subscribers',
        ),
        migrations.AlterField(
            model_name='post',
            name='users_saved',
            field=models.ManyToManyField(blank=True, related_name='posts_saved', to=settings.AUTH_USER_MODEL),
        ),
    ]