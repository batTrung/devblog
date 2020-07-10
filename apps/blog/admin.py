from django.contrib import admin
from django.utils.html import format_html

from .models import Website


@admin.register(Website)
class WebsiteAdmin(admin.ModelAdmin):
    def photo_display(self, obj):
        return format_html(f'<img src="{obj.photo.url}" style="width: 50px; height:50px;" />')

    def root_url_display(self, obj):
        return obj.get_name()

    def tags_display(self, obj):
        return ','.join([tag.name for tag in obj.tags.all()])

    list_display = ('root_url_display', 'tags_display', 'photo_display',)
    search_fields = ('root_url',)
