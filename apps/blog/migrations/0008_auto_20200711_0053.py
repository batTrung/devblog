# Generated by Django 3.0.3 on 2020-07-10 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20200711_0009'),
    ]

    operations = [
        migrations.AlterField(
            model_name='website',
            name='photo',
            field=models.ImageField(default=1, upload_to='websites/'),
            preserve_default=False,
        ),
    ]
