from django.conf import settings
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/v1/', include('apps.core.api.urls')),
    path('api-auth/', include('rest_framework.urls')),
]

if settings.DEBUG:
    from django.conf.urls.static import static

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
