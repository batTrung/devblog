# Generated by Django 3.0.3 on 2020-08-11 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0024_auto_20200811_2137'),
    ]

    operations = [
        migrations.AddField(
            model_name='social',
            name='icon',
            field=models.CharField(default=1, max_length=10),
            preserve_default=False,
        ),
    ]
