from rest_framework.generics import ListAPIView

from ..models import Topic, Post, PlayList
from .serializers import PostSerializer, PlayListSerializer, TopicSerializer
from .paginations import PostPagination, PlayListPagination
from .filters import PostFilter, TopicFilter


class PostList(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = PostPagination
    filterset_class = PostFilter
    ordering_fields = (
        'created',
        'views',
        'users_like',
    )
    name = 'post-list'


class PlaylistSerializer(ListAPIView):
    queryset = PlayList.objects.all()
    serializer_class = PlayListSerializer
    pagination_class = PlayListPagination
    search_fields = (
        'title',
    )
    ordering_fields = (
        'updated',
        'views',
        'users_star',
    )
    name = 'playlist-list'


class TopicList(ListAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    filterset_class = TopicFilter
    name = 'topic-list'
