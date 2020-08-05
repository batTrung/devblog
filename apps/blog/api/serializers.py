from django.contrib.auth import get_user_model

from rest_framework import serializers

from ..models import Topic, Website, Post, PlayList


class WebsiteSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='website-detail',
        lookup_field='name',
    )
    timesince = serializers.CharField(source='timeago', read_only=True)
    post_count = serializers.CharField(source='posts.count', read_only=True)
    countViews = serializers.CharField(source='count_views', read_only=True)
    root_url = serializers.CharField(source='get_url', read_only=True)
    subscribers = serializers.SlugRelatedField(
        queryset=get_user_model().objects.all(),
        many=True,
        slug_field='username',
    )

    class Meta:
        model = Website
        fields = (
            'url',
            'name',
            'posts_url',
            'root_url',
            'post_count',
            'countViews',
            'photo',
            'description',
            'timesince',
            'subscribers',
        )
        lookup_field = 'name'


class WebsitePostSerializer(serializers.ModelSerializer):
    subscribers = serializers.SlugRelatedField(
        queryset=get_user_model().objects.all(),
        many=True,
        slug_field='username',
    )

    class Meta:
        model = Website
        fields = ('photo', 'name', 'subscribers',)


class PostSerializer(serializers.ModelSerializer):
    website = WebsitePostSerializer(many=False, read_only=True)
    timesince = serializers.CharField(source='timeago', read_only=True)
    users_like = serializers.SlugRelatedField(
        queryset=get_user_model().objects.all(),
        many=True,
        slug_field='username',
    )
    photo = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = (
            'website',
            'title',
            'slug',
            'link',
            'views',
            'created',
            'timesince',
            'photo',
            'users_like',
        )

    def get_photo(self, post):
        request = self.context.get('request')
        return request.build_absolute_uri(post.get_photo_obj().url)


class PostPhotoSerializer(serializers.ModelSerializer):
    photo = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = (
            'photo',
        )

    def get_photo(self, post):
        request = self.context.get('request')
        return request.build_absolute_uri(post.get_photo_obj().url)


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('username', 'photo',)


class PlayListSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    posts = PostPhotoSerializer(many=True, read_only=True)
    timesince = serializers.CharField(source='timeago', read_only=True)
    users_star = serializers.SlugRelatedField(
        many=True,
        slug_field='username',
        read_only=True,
    )
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = PlayList
        fields = (
            'user',
            'title',
            'status',
            'status_display',
            'slug',
            'posts',
            'views',
            'users_star',
            'created',
            'updated',
            'timesince',
        )
        read_only_fields = ('users_star', 'views',)


class TopicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Topic
        fields = (
            'title',
            'slug',
        )
        read_only_fields = ('slug',)
