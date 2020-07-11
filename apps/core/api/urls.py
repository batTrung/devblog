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
        'posts/',
        blog_views.PostList.as_view(),
        name=blog_views.PostList.name,
    ),
]
