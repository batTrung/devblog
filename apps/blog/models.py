from PIL import Image
from urllib.parse import urlparse

from django.conf import settings
from django.db import models
from django.utils.timesince import timesince

from apps.common.behaviors import TitleSlugable
from taggit.managers import TaggableManager
from sorl.thumbnail import get_thumbnail

from .constants import Language, Status
from .managers import WebsiteManager, PlayListManager


class Topic(TitleSlugable):
    pass


class Website(models.Model):
    name = models.CharField(
        max_length=200, 
        blank=True, 
        null=True, 
        unique=True,
    )
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
    subscribers = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name='subscribes',
        blank=True,
    )
    topic = models.ForeignKey(
        'Topic',
        on_delete=models.SET_NULL,
        related_name='websites',
        null=True,
        blank=True,
    )
    max_post = models.PositiveIntegerField(default=5)
    tags = TaggableManager(blank=True, related_name='websites')
    is_active = models.BooleanField(default=False)

    objects = WebsiteManager()

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.name:
            name = urlparse(self.get_url()).netloc
            self.name = name
        super(Website, self).save(*args, **kwargs)

    def get_url(self):
        parse_url = urlparse(self.posts_url)._replace(
            params='',
            query=None,
            fragment='',
        )
        return str(parse_url.geturl())

    def timeago(self):
        return timesince(self.created)

    def count_views(self):
        return sum(post.views for post in self.posts.all())

    def thumbnail_photo_obj(self):
        if self.photo:
            return get_thumbnail(self.photo, 'x160', quality=90)
        return ''


class Post(TitleSlugable):
    website = models.ForeignKey(Website, on_delete=models.CASCADE, related_name='posts')
    link = models.URLField()
    views = models.PositiveIntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)
    photo = models.ImageField(upload_to='posts/', blank=True, null=True)
    users_like = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='posts_saved', blank=True)

    class Meta:
        ordering = ('-created',)

    def get_photo_obj(self):
        return self.photo if self.photo else self.website.photo

    def timeago(self):
        return timesince(self.created)

    def thumbnail_photo_obj(self):
        photo_obj = self.get_photo_obj()
        image_obj = Image.open(photo_obj)
        if image_obj.mode == 'RGB':
            return get_thumbnail(photo_obj, '245x161', quality=90)
        else:
            return photo_obj


class PlayList(TitleSlugable):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='playlist_created',
    )
    posts = models.ManyToManyField(Post, blank=True)
    views = models.PositiveIntegerField(default=0)
    users_star = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        blank=True,
    )
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(
        max_length=10,
        choices=Status.choices,
        default=Status.PUBLIC,
    )

    objects = PlayListManager()

    class Meta:
        ordering = ('-updated',)

    def timeago(self):
        return timesince(self.updated)


class ViewLater():
    owner = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    posts = models.ManyToManyField('Post')
