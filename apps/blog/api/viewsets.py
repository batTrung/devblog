from rest_framework.viewsets import ReadOnlyModelViewSet

from ..models import Website, PlayList
from .serializers import WebsiteSerializer, PlayListSerializer
from .paginations import WebsitePagination, PlayListPagination
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


class PlaylistViewSet(ReadOnlyModelViewSet):
    serializer_class = PlayListSerializer
    pagination_class = PlayListPagination
    lookup_field = 'slug'
    search_fields = (
        'title',
    )
    ordering_fields = (
        'updated',
        'views',
        'users_star',
    )
    vname = 'playlist-list'

    def get_queryset(self):
        owner = self.request.query_params.get('owner', 'false')
        is_owner = False if owner == 'false' or not owner else True
        if is_owner and self.request.user.is_authenticated:
            return PlayList.objects.filter(user=self.request.user)
        return PlayList.objects.published()
