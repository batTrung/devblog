from rest_framework.viewsets import ReadOnlyModelViewSet

from ..models import Website
from .serializers import WebsiteSerializer
from .paginations import WebsitePagination
from .filters import WebsiteFilter


class WebsiteViewSet(ReadOnlyModelViewSet):
    queryset = Website.objects.all()
    serializer_class = WebsiteSerializer
    pagination_class = WebsitePagination
    filterset_class = WebsiteFilter
    lookup_field = 'name'
    lookup_value_regex = '[\w.]+'
    search_fields = (
        'name',
        'description',
    )
    ordering_fields = (
        'subscribers',
        'created',
    )
    vname = 'website-list'
