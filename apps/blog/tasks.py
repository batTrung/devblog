from backend.celery import app

from .crawler import blog_crawler


@app.task()
def crawl(*args, **kwargs):
    blog_crawler.run()
