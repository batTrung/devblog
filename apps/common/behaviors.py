import uuid

from django.db import models
from django.utils.text import slugify


class UUIDable(models.Model):
    uuid_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    class Meta:
        abstract = True


class TitleSlugable(models.Model):
    title = models.CharField('Tiêu đề', max_length=250)
    slug = models.SlugField(
        max_length=250,
        db_index=True,
        blank=True,
        unique=True,
    )

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(TitleSlugable, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
