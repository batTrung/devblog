from django.db.models import Sum

import django_filters
from django_filters.rest_framework import FilterSet

from ..models import Post, Website
from ..constants import Language


class PostFilter(FilterSet):
    website = django_filters.AllValuesFilter(field_name='website__name')
    language = django_filters.ChoiceFilter(
        choices=Language.choices,
        method="filter_language",
    )
    search = django_filters.CharFilter(field_name="title", lookup_expr='icontains')

    class Meta:
        model = Post
        fields = ('website', 'language', 'search',)

    @staticmethod
    def filter_language(queryset, name, value):
        if value:
            return queryset.filter(
                website__language=value
            )
        return queryset


class WebsiteFilter(FilterSet):
    language = django_filters.ChoiceFilter(
        choices=Language.choices,
    )
    topic = django_filters.AllValuesFilter(field_name='topic__title')
    ordering = django_filters.CharFilter(method='order_views')

    class Meta:
        model = Website
        fields = ('language', 'ordering', 'topic',)

    @staticmethod
    def order_views(queryset, name, value):
        queryset = queryset.annotate(
            count_views=Sum('posts__views')
        )
        if value == 'views':
            queryset = queryset.order_by('count_views')
        elif value == '-views':
            queryset = queryset.order_by('-count_views')
        return queryset
