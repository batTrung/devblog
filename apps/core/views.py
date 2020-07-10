from django.shortcuts import render

from apps.blog.tasks import crawl


def home(request):
    crawl.delay()

    return render(request, 'core/home.html')
