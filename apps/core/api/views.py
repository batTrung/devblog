from apps.blog.api.views import (
    TopicList,
    PostList,
)
from apps.blog.api.viewsets import WebsiteViewSet, PlaylistViewSet
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
            'playlists': reverse(PlaylistViewSet.vname, request=request),
        })
