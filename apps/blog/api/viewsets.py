from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from ..models import Website, PlayList
from .serializers import WebsiteSerializer, PlayListSerializer
from .paginations import WebsitePagination, PlayListPagination
from .permissions import IsOwnerOrReadOnly
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


class PlaylistViewSet(ModelViewSet):
    serializer_class = PlayListSerializer
    pagination_class = PlayListPagination
    permission_classes = [
        IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    ]
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

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
