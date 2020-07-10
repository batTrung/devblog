from django.db import models


class Language(models.TextChoices):
    VIETNAM = 'vi', 'Việt Nam'
    ENGLISH = 'en', 'English'
