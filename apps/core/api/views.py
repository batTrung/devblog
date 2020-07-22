from apps.blog.api.views import (
    TopicList,
    PostList,
    PlaylistSerializer,
)
from apps.blog.api.viewsets import WebsiteViewSet
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({
            'topics': reverse(TopicList.name, request=request),
            'posts': reverse(PostList.name, request=request),
            'websites': reverse(WebsiteViewSet.vname, request=request),
            'playlists': reverse(PlaylistSerializer.name, request=request),
        })
