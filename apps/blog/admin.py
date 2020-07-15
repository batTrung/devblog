from django.contrib import admin
from django.utils.html import format_html

from .models import Post, Website


@admin.register(Website)
class WebsiteAdmin(admin.ModelAdmin):
    def photo_display(self, obj):
        if obj.photo:
            return format_html(f'<img src="{obj.photo.url}" style="width: 50px; height:50px;" />')
        return ''

    def url_display(self, obj):
        return obj.get_name()

    def tags_display(self, obj):
        return ','.join([tag.name for tag in obj.tags.all()])

    list_display = ('url_display', 'tags_display', 'photo_display',)


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    def photo_display(self, obj):
        return format_html(f'<img src="{obj.get_photo_obj().url}" style="width: 50px; height:50px;" />')

    list_display = ('title', 'link', 'photo_display',)
