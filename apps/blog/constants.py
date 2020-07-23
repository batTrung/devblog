from django.db import models


class Language(models.TextChoices):
    VIETNAM = 'vi', 'Việt Nam'
    ENGLISH = 'en', 'English'


class Status(models.TextChoices):
    PUBLIC = 'public', 'Công khai'
    PRIVATE = 'private', 'Ẩn'
