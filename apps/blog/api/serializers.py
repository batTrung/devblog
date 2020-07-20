from rest_framework import serializers

from ..models import Website, Post, PlayList


class WebsiteSerializer(serializers.ModelSerializer):
    language_description = serializers.CharField(source='get_language_display', read_only=True)
    timesince = serializers.CharField(source='timeago', read_only=True)
    post_count = serializers.CharField(source='posts.count', read_only=True)
    countViews = serializers.CharField(source='count_views', read_only=True)

    class Meta:
        model = Website
        fields = (
            'name',
            'posts_url',
            'post_count',
            'countViews',
            'photo',
            'language',
            'language_description',
            'description',
            'created',
            'timesince',
            'subscribers',
            'max_post',
            'is_active',
        )


class PostSerializer(serializers.ModelSerializer):
    website = WebsiteSerializer(many=False, read_only=True)
    timesince = serializers.CharField(source='timeago', read_only=True)
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = (
            'website',
            'title',
            'link',
            'views',
            'created',
            'timesince',
            'photo_url',
            'users_saved',
        )

    def get_photo_url(self, post):
        request = self.context.get('request')
        photo_url = post.get_photo_url()
        return request.build_absolute_uri(photo_url)


class PostPhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = (
            'photo',
        )


class PlayListSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username', read_only=True)
    posts = PostPhotoSerializer(many=True, read_only=True)
    timesince = serializers.CharField(source='timeago', read_only=True)

    class Meta:
        model = PlayList
        fields = (
            'user',
            'title',
            'slug',
            'posts',
            'views',
            'users_like',
            'created',
            'updated',
            'timesince',
        )
