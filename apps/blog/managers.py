from django.db import models

from .constants import Status


class WebsiteManager(models.Manager):
    def get_queryset(self):
        return super(
            WebsiteManager, self).get_queryset(
            )

    def actived(self):
        return self.get_queryset().filter(is_active=True)


class PlayListManager(models.Manager):
    def get_queryset(self):
        return super(
            PlayListManager, self).get_queryset(
            )

    def published(self):
        return self.get_queryset().filter(status=Status.PUBLIC)
