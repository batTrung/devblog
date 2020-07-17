from rest_framework.generics import ListAPIView

from ..models import Website, Post
from .serializers import WebsiteSerializer, PostSerializer


class WebsiteList(ListAPIView):
    queryset = Website.objects.all()
    serializer_class = WebsiteSerializer
    name = 'website-list'


class PostList(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    name = 'post-list'
