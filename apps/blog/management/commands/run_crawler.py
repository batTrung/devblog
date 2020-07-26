import requests

from django.core.management.base import BaseCommand

from apps.blog.tasks import crawl
from apps.blog.crawler import blog_crawler


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        blog_crawler.run()
        requests.get('https://videv-blog.herokuapp.com/')
