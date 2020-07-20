from django.urls import path

from apps.blog.api import views as blog_views

from .views import ApiRoot

urlpatterns = [
    path(
        '',
        ApiRoot.as_view(),
        name=ApiRoot.name,
    ),
    path(
        'topics/',
        blog_views.TopicList.as_view(),
        name=blog_views.TopicList.name,
    ),
    path(
        'posts/',
        blog_views.PostList.as_view(),
        name=blog_views.PostList.name,
    ),
    path(
        'websites/',
        blog_views.WebsiteList.as_view(),
        name=blog_views.WebsiteList.name,
    ),
    path(
        'websites/<str:name>/',
        blog_views.WebsiteDetail.as_view(),
        name=blog_views.WebsiteDetail.name,
    ),
    path(
        'playlists/',
        blog_views.PlaylistSerializer.as_view(),
        name=blog_views.PlaylistSerializer.name,
    ),
]
