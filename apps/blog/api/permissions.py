from rest_framework import permissions

from ..constants import Status


class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.user == request.user


class isOwnerOrPublicPlayList(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        is_owner = obj.user == request.user
        is_public = obj.status == Status.PUBLIC
        return is_owner or is_public
