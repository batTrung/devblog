from django.shortcuts import get_object_or_404

from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..models import Website, Topic, Post, PlayList
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
    queryset = PlayList.objects.published()
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


class WebsiteSubscribe(APIView):
    name = 'website-subscribe'

    def patch(self, request, name):
        user = request.user
        if user.is_authenticated:
            web = get_object_or_404(Website, name=name)
            if user not in web.subscribers.all():
                web.subscribers.add(user)
            else:
                web.subscribers.remove(user)
            return Response(
                status = status.HTTP_200_OK,
            )
        else:
            return Response(
                {
                    'detail': 'User is unauthorized'
                },
                status = status.HTTP_401_UNAUTHORIZED,
            )


class PlayListStar(APIView):
    name = 'playlist-star'

    def patch(self, request, username_owner, slug):
        user = request.user
        if user.is_authenticated:
            playlist = get_object_or_404(PlayList.objects.published(), user__username=username_owner, slug=slug)
            if user not in playlist.users_star.all():
                playlist.users_star.add(user)
            else:
                playlist.users_star.remove(user)
            return Response(
                status = status.HTTP_200_OK,
            )
        else:
            return Response(
                {
                    'detail': 'User is unauthorized'
                },
                status = status.HTTP_401_UNAUTHORIZED,
            )


class PostLike(APIView):
    name = 'post-like'

    def patch(self, request, post_slug):
        user = request.user
        if user.is_authenticated:
            post = get_object_or_404(Post, slug=post_slug)
            if user not in post.users_like.all():
                post.users_like.add(user)
            else:
                post.users_like.remove(user)
            return Response(
                status = status.HTTP_200_OK,
            )
        else:
            return Response(
                {
                    'detail': 'User is unauthorized'
                },
                status = status.HTTP_401_UNAUTHORIZED,
            )
