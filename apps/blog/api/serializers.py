from rest_framework import serializers

from ..models import Website, Post


class WebsiteSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='get_name', read_only=True)
    language_description = serializers.CharField(source='get_language_display', read_only=True)

    class Meta:
        model = Website
        fields = (
            'name',
            'posts_url',
            'photo',
            'language',
            'language_description',
            'created',
            'subscribe',
            'max_post',
            'is_active',
        )


class PostSerializer(serializers.ModelSerializer):
    website = serializers.ReadOnlyField(source='website.get_name')

    class Meta:
        model = Post
        fields = (
            'website',
            'title',
            'link',
            'views',
            'created',
            'photo',
            'users_saved',
        )
