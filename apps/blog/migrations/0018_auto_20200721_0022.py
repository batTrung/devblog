# Generated by Django 3.0.3 on 2020-07-20 17:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0017_auto_20200720_2328'),
    ]

    operations = [
        migrations.RenameField(
            model_name='playlist',
            old_name='users_like',
            new_name='users_star',
        ),
    ]
