from django.db import models

from .constants import Status


class WebsiteManager(models.Manager):
    def get_queryset(self):
        return super(
            WebsiteManager, self).get_queryset(
            ).select_related(
                'topic',
            ).prefetch_related(
                'posts',
                'subscribers',
            )

    def actived(self):
        return self.get_queryset().filter(is_active=True)


class PostManager(models.Manager):
    def get_queryset(self):
        return super(
            PostManager, self).get_queryset(
            ).select_related(
                'website',
            ).prefetch_related(
                'users_like',
            )


class PlayListManager(models.Manager):
    def get_queryset(self):
        return super(
            PlayListManager, self).get_queryset(
            ).select_related(
                'user',
            ).prefetch_related(
                'posts',
                'users_star',
            )

    def published(self):
        return self.get_queryset().filter(status=Status.PUBLIC)
