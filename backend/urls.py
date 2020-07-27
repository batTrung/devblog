from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path(settings.ADMIN_URL, admin.site.urls),

    path('api/v1/', include('apps.core.api.urls')),
    path('api-auth/', include('rest_framework.urls')),

    # re_path('.*', TemplateView.as_view(template_name='index.html')),
]

if settings.DEBUG:
    from django.conf.urls.static import static

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
