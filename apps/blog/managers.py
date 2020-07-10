from django.db import models


class WebsiteManager(models.Manager):
    def get_queryset(self):
        return super(
            WebsiteManager, self).get_queryset(
            )

    def actived(self):
        return self.get_queryset().filter(is_active=True)
