# flake8: noqa

import logging

from .settings import *


# ==============================================================================
# CORE SETTINGS
# ==============================================================================

INSTALLED_APPS += [  # noqa
    'debug_toolbar',
    'nplusone.ext.django',
]


# ==============================================================================
# MIDDLEWARE SETTINGS
# ==============================================================================

DEBUG_MIDDLEWARE = [
    'nplusone.ext.django.NPlusOneMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',

]

MIDDLEWARE = DEBUG_MIDDLEWARE + MIDDLEWARE   # noqa


# ==============================================================================
# THIRD-PARTY APPS SETTINGS
# ==============================================================================

NPLUSONE_LOGGER = logging.getLogger('nplusone')

NPLUSONE_LOG_LEVEL = logging.WARN


# ==============================================================================
# LOGGING
# ==============================================================================

LOGGING = {
    'version': 1,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        'nplusone': {
            'handlers': ['console'],
            'level': 'WARN',
        },
        'werkzeug': {
            'handlers': ['console'],
            'level': 'DEBUG',
            'propagate': True,
        },
    },
}
