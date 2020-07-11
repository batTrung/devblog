from rest_framework import serializers

from ..models import Post


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
