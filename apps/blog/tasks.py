from backend.celery import app

from .crawler import blog_crawler


@app.task()
def crawl():
    blog_crawler.run()
