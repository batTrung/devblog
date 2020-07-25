from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import action

from ..models import Website, PlayList
from .serializers import WebsiteSerializer, PlayListSerializer
from .paginations import WebsitePagination, PlayListPagination
from .permissions import IsOwnerOrReadOnly, isOwnerOrPublicPlayList
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
        isOwnerOrPublicPlayList,
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
        is_owner = 'owner' in self.request.query_params
        user = self.request.user
        if is_owner and user.is_authenticated:
            return PlayList.objects.filter(user=user)
        return PlayList.objects.published()

    @action(detail=True, methods=['get'])
    def contents(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
