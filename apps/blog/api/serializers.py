from rest_framework import serializers

from ..models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            'website',
            'link',
            'views',
            'created',
            'photo',
            'users_saved',
        )
