from urllib.parse import urlparse

from django.db import models
from django.conf import settings

from taggit.managers import TaggableManager

from apps.common.behaviors import TitleSlugable

from .constants import Language
from .managers import WebsiteManager


class Website(models.Model):
    posts_url = models.URLField(unique=True)
    post_tag = models.CharField(max_length=200)
    link_tag = models.CharField(max_length=200)
    title_tag = models.CharField(max_length=200)
    image_tag = models.CharField(max_length=200, blank=True)
    content_image_tag = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    photo = models.ImageField(upload_to="websites/")
    language = models.CharField(
        max_length=2,
        choices=Language.choices,
        default=Language.VIETNAM,
    )
    created = models.DateTimeField(auto_now_add=True)
    subscribe = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name='subscribes',
        blank=True,
    )
    max_post = models.PositiveIntegerField(default=5)
    tags = TaggableManager(blank=True, related_name='websites')
    is_active = models.BooleanField(default=False)

    objects = WebsiteManager()

    def __str__(self):
        return self.get_name()

    def get_name(self):
        netloc = urlparse(self.get_url()).netloc
        domain = netloc.strip('www.')
        return domain.split('.')[0]

    def get_url(self):
        parse_url = urlparse(self.posts_url)._replace(params='', query=None, fragment='')
        return str(parse_url.geturl())


class Post(TitleSlugable):
    website = models.ForeignKey(Website, on_delete=models.CASCADE, related_name='posts')
    link = models.URLField()
    views = models.PositiveIntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)
    photo = models.ImageField(upload_to='posts/', blank=True, null=True)
    saved = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='posts_saved')

    class Meta:
        ordering = ('created',)

    def get_photo_obj(self):
        return self.photo if self.photo else self.website.photo
