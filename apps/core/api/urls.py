from django.urls import path, include

from rest_framework_simplejwt import views as jwt_views
from rest_framework import routers

from apps.accounts.api import views as accounts_views
from apps.blog.api import views as blog_views
from apps.blog.api import viewsets as blog_viewsets

from .views import ApiRoot

router = routers.DefaultRouter()
router.register('websites', blog_viewsets.WebsiteViewSet)
router.register('playlists', blog_viewsets.PlaylistViewSet, basename='playlist')

urlpatterns = [
    path(
        '',
        ApiRoot.as_view(),
        name=ApiRoot.name,
    ),

    path('', include(router.urls)),

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
        'websites/<str:name>/subscribe/',
        blog_views.WebsiteSubscribe.as_view(),
        name=blog_views.WebsiteSubscribe.name,
    ),
    path(
        'playlists/<str:username_owner>/<slug:slug>/star/',
        blog_views.PlayListStar.as_view(),
        name=blog_views.PlayListStar.name,
    ),
    path(
        'posts/<slug:post_slug>/like/',
        blog_views.PostLike.as_view(),
        name=blog_views.PostLike.name,
    ),
    path(
        'posts/<slug:post_slug>/view/',
        blog_views.PostIncreaseView.as_view(),
        name=blog_views.PostIncreaseView.name,
    ),
    #  Check Views
    path(
        'check/account/email/checker/<str:email>/',
        accounts_views.EmailChecker.as_view(),
        name=accounts_views.EmailChecker.name,
    ),
]
