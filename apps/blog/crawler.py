import asyncio
import re
from urllib.parse import urlparse
from urllib.parse import urljoin

from django.core.files.storage import get_storage_class
from django.core.files.base import ContentFile
from django.utils.text import slugify

import requests
from bs4 import BeautifulSoup

from .models import Post, Website

default_storage = get_storage_class()


class Crawler():

    def get_req(self, url):
        my_headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 \
                        (KHTML, like Gecko)Chrome/61.0.3163.100 Safari/537.36'
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
        if selector:
            children = element.select(selector)
            if children is not None and len(children) > 0:
                return self.get_content(web, children, type_content)
        return ''

    def start_crawl(self, web_id):
        web = Website.objects.get(id=web_id)
        bs = self.get_req(web.posts_url)
        print("Start with ", web)
        count = 0
        if bs:
            posts_data = bs.select(web.post_tag)
            top_posts = posts_data[4-len(posts_data)::-1]
            print("-> Tim thay posts")
            for result in top_posts:
                if count >= int(web.max_post):
                    print('Count > max_post')
                    return
                try:
                    link_post = result.select(web.link_tag)[0].attrs['href']
                except IndexError as e:
                    print(f"Không tìm thấy link post detail {web}: {e}")
                    return
                full_link_post = self.get_absolute_url(web, link_post)
                bs_detail = self.get_req(full_link_post)
                if bs_detail:
                    title = self.safe_get(bs_detail, web, web.title_tag, 'text')
                    if title and not self.slug_exists(title):
                        image = self.safe_get(bs_detail, web, web.image_tag, 'image')
                        if not image:
                            image = self.safe_get(bs_detail, web, web.content_image_tag, 'image')
                        post_saved = self.save_post(web, full_link_post, title, image)
                        if post_saved:
                            count += 1
                    else:
                        pass

    def slug_exists(self, title):
        slug = slugify(title)
        return Post.objects.filter(slug=slug).exists()

    def save_post(self, web, full_link_post, title, link_image):
        print(f'Luu Post: {title}')
        post = Post(website=web, link=full_link_post, title=title)
        try:
            post.save()
            self.save_photo(post, link_image)
            return True
        except ValueError as e:
            print(f"Can't save post!: ", e)
            return None

    def save_photo(self, post, url):
        print('Luiwu hinh anh')
        image_name = self.get_image_name(post, url)
        response = requests.get(url)
        if self.status_ok(response) and image_name:
            try:
                image_content = ContentFile(response.content)
                image_obj = default_storage().save(image_name, image_content)
                post.photo = image_name
                post.save()
            except Exception as e:
                print(f"Can't save image: {e}")

    def get_image_name(self, post, url):
        pattern = re.compile(r'/([^/]+\.(jpg|jpeg|png|gif))', re.IGNORECASE)
        result = pattern.search(url)
        if result:
            return result.group(1)
        return f'{post.slug}.jpg'

    def status_ok(self, response):
        return response.status_code == 200

    def run(self):
        website_ids = Website.objects.actived().values_list('id', flat=True)
        website_ids = list(website_ids)
        print('Danh sach crawl: ', website_ids)
        loop = asyncio.new_event_loop()
        loop.run_until_complete(self.async_crawl(loop, website_ids))
        loop.close()

    async def async_crawl(self, loop, website_ids):
        futures = [asyncio.ensure_future(self.fetch_web(loop, web_id)) for web_id in website_ids]
        await asyncio.gather(*futures)

    async def fetch_web(self, loop, web_id):
        return await loop.run_in_executor(None, self.start_crawl, web_id)

    def get_absolute_url(self, web, url):
        is_absolute = bool(urlparse(url).netloc)
        return url if is_absolute else urljoin(web.get_url(), url)


blog_crawler = Crawler()
