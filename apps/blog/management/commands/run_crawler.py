import requests

from django.core.management.base import BaseCommand

from apps.blog.tasks import crawl
from apps.blog.crawler import blog_crawler


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        requests.get('https://videv-blog.herokuapp.com/api/v1/posts/')
        requests.get('https://videv-blog.herokuapp.com/api/v1/websites/')
        requests.get('https://videv-blog.herokuapp.com/api/v1/playlists/')
        requests.get('https://videv-blog.herokuapp.com/api/v1/topics/')
        requests.get('https://videv-blog.herokuapp.com/')
        requests.get('https://videv-blog.herokuapp.com/posts/')
        requests.get('https://videv-blog.herokuapp.com/pages/')
        blog_crawler.run()
