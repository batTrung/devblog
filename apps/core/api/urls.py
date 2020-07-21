from django.urls import path, include

from rest_framework_simplejwt import views as jwt_views

from apps.accounts.api import views as accounts_views
from apps.blog.api import views as blog_views

from .views import ApiRoot

urlpatterns = [
    path(
        '',
        ApiRoot.as_view(),
        name=ApiRoot.name,
    ),

    #  Authentication
    path('rest-auth/', include('dj_rest_auth.urls')),
    path('rest-auth/registration/', include('dj_rest_auth.registration.urls')),

    #  Blog
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

    #  Check Views
    path(
        'check/account/email/checker/<str:email>/',
        accounts_views.EmailChecker.as_view(),
        name=accounts_views.EmailChecker.name,
    ),
]
