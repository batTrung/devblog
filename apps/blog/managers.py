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
                'link_socials',
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
                'website__subscribers',
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



class SocialManager(models.Manager):
    def get_queryset(self):
        return super(
            SocialManager, self).get_queryset(
            ).select_related(
                'social',
            )
