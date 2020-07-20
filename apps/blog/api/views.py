from rest_framework.generics import ListAPIView, RetrieveAPIView

from ..models import Website, Post, PlayList
from .serializers import WebsiteSerializer, PostSerializer, PlayListSerializer
from .paginations import WebsitePagination, PostPagination, PlayListPagination
from .filters import PostFilter, WebsiteFilter


class WebsiteList(ListAPIView):
    queryset = Website.objects.all()
    serializer_class = WebsiteSerializer
    pagination_class = WebsitePagination
    filterset_class = WebsiteFilter
    search_fields = (
        'name',
        'description',
    )
    ordering_fields = (
        'subscribers',
        'created',
    )
    name = 'website-list'


class WebsiteDetail(RetrieveAPIView):
    queryset = Website.objects.all()
    serializer_class = WebsiteSerializer
    lookup_field = 'name'
    name = 'website-detail'


class PostList(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = PostPagination
    filterset_class = PostFilter
    ordering_fields = (
        'created',
        'views',
        'users_saved',
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
        'users_like',
    )
    name = 'playlist-list'
