from apps.common.pagination import CustomPageNumberPagination


class WebsitePagination(CustomPageNumberPagination):
    page_size = 18


class PostPagination(CustomPageNumberPagination):
    page_size = 20


class PlayListPagination(CustomPageNumberPagination):
    page_size = 20
