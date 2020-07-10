import re
import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse

from django.core.files.base import ContentFile
from django.utils.text import slugify

from .models import Website, Post


class Crawler():

    def get_req(self, url):
        my_headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +\
                        ' (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
        }
        try:
            req = requests.get(url, headers=my_headers)
        except requests.exceptions.RequestException:
            return None
        return BeautifulSoup(req.text, 'html.parser')

    def get_text(self, elements):
        for el in elements:
            text = el.get_text().strip()
            if text and text != '':
                return text

    def get_image(self, web, elements):
        for el in elements:
            src = el.attrs['src']
            if src:
                return self.get_absolute_url(web, src)

    def get_content(self, web, elements, type_content):
        if type_content == 'text':
            return self.get_text(elements)
        elif type_content == 'image':
            return self.get_image(web, elements)


    def safe_get(self, element, web, selector, type_content):
        children = element.select(selector)
        if children is not None and len(children) > 0:
            return self.get_content(web, children, type_content)
        return ''

    def start_crawl(self, web):
        bs = self.get_req(web.posts_url)
        count = 0
        if bs:
            posts = bs.select(web.post_tag)
            for result in posts:
                if count >= int(web.max_post):
                    return
                try:
                    link_post = result.select(web.link_tag)[0].attrs['href']
                except IndexError:
                    print(f"Không tìm thấy link post detail: {web}")
                    return
                full_link_post = self.get_absolute_url(web, link_post)
                bs_detail = self.get_req(full_link_post)
                if bs_detail:
                    title = self.safe_get(bs_detail, web, web.title_tag, 'text')
                    if not self.post_exists(title):
                        image = self.safe_get(bs_detail, web, web.image_tag, 'image')
                        if not image:
                            image = self.safe_get(bs_detail, web, web.content_image_tag, 'image')
                        post_saved = self.save_post(web, full_link_post, title, image)
                        if post_saved:
                            count += 1
                            print('LINK DETAIL: ', full_link_post)
                            print('TITLE: ', title)
                            print('IMAGE: ', image)

    def post_exists(self, title):
        slug = slugify(title)
        return Post.objects.filter(slug=slug).exists()

    def save_post(self, web, full_link_post, title, link_image): 
        post = Post(website=web, link=full_link_post, title=title)
        try:
            post.save()
            self.save_photo(post, link_image)
            return True
        except ValueError:
            print(f"Can't save post!")
            return None

    def save_photo(self, post, url):
        image_name = self.get_image_name(post, url)
        response = requests.get(url)
        if self.status_ok(response) and image_name:
            try:
                print('Save photo: ', image_name)
                post.photo.save(image_name, ContentFile(response.content), save=True)
            except AttributeError as e:
                print("Can't save image")

    def get_image_name(self, post, url):
        pattern = re.compile(r'/([^/]+\.(jpg|jpeg|png|gif))', re.IGNORECASE)
        result = pattern.search(url)
        if result:
            return result.group(1)
        return f'{post.slug}.jpg'

    def status_ok(self, response):
        return response.status_code == 200

    def run(self):
        websites = Website.objects.actived()
        for web in websites:
            print(f'start with: {web}')
            self.start_crawl(web)

    def get_absolute_url(self, web, url):
        is_absolute = bool(urlparse(url).netloc)
        return url if is_absolute else web.get_url() + url


blog_crawler = Crawler()
