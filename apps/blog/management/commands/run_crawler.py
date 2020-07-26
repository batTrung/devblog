import requests

from django.core.management.base import BaseCommand

from apps.blog.tasks import crawl


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        crawl.delay()
        requests.get('https://videv-blog.herokuapp.com/')
