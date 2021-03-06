import os
import string
from datetime import timedelta

import dj_database_url
from celery.schedules import crontab
from decouple import Csv, config

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# ==============================================================================
# CORE SETTINGS
# ==============================================================================

SECRET_KEY = config('SECRET_KEY', default=string.ascii_letters)

DEBUG = config('DEBUG', default=True, cast=bool)

ALLOWED_HOSTS = config('ALLOWED_HOSTS', default='127.0.0.1,localhost', cast=Csv())


DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
]

THIRD_PARTY_APPS = [
    'taggit',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'rest_framework',
    'dj_rest_auth',
    'dj_rest_auth.registration',
    'corsheaders',
    'django_filters',
    'sorl.thumbnail',
]

LOCAL_APPS = [
    'apps.common.apps.CommonConfig',
    'apps.core.apps.CoreConfig',
    'apps.accounts.apps.AccountsConfig',
    'apps.blog.apps.BlogConfig',
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

SITE_ID = 1

INTERNAL_IPS = ['127.0.0.1']

if config("USE_DOCKER", default=False, cast=bool):
    import socket
    hostname, _, ips = socket.gethostbyname_ex(socket.gethostname())  # noqa
    INTERNAL_IPS += [ip[:-1] + "1" for ip in ips]

DATABASES = {
    'default': dj_database_url.config(
        default=config('DATABASE_URL', default='sqlite:///%s' % os.path.join(BASE_DIR, 'db.sqlite3'))
    )
}

ROOT_URLCONF = 'backend.urls'

WSGI_APPLICATION = 'backend.wsgi.application'

ADMIN_URL = config('ADMIN_URL', default='admin/')


# ==============================================================================
# MIDDLEWARE SETTINGS
# ==============================================================================

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


# ==============================================================================
# TEMPLATES SETTINGS
# ==============================================================================

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


# ==============================================================================
# AUTHENTICATION AND AUTHORIZATION SETTINGS
# ==============================================================================

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

AUTH_USER_MODEL = 'accounts.CustomUser'

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
)

ACCOUNT_USERNAME_REQUIRED = False

ACCOUNT_AUTHENTICATION_METHOD = 'email'

ACCOUNT_EMAIL_REQUIRED = True

ACCOUNT_UNIQUE_EMAIL = True

ACCOUNT_EMAIL_VERIFICATION = "none"


# ==============================================================================
# INTERNATIONALIZATION AND LOCALIZATION SETTINGS
# ==============================================================================

LANGUAGE_CODE = config('LANGUAGE_CODE', default='en')

TIME_ZONE = config('TIME_ZONE', default='UTC')

USE_I18N = True

USE_L10N = True

USE_TZ = True


# ==============================================================================
# STATIC & MEDIA FILES SETTINGS
# ==============================================================================

STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'dist', 'static'),
]

MEDIA_URL = '/media/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media', 'public')

PRIVATE_MEDIA_ROOT = os.path.join(BASE_DIR, 'media', 'private')


# ==============================================================================
# EMAIL SETTINGS
# ==============================================================================

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


# ==============================================================================
# THIRD-PARTY APPS SETTINGS
# ==============================================================================

REDIS_HOST = 'localhost'

REDIS_PORT = 6379

REDIS_URL = config('REDIS_URL', default='redis://localhost:6379')

CELERY_BROKER_URL = config('CELERY_BROKER_URL', default=REDIS_URL)

CELERY_RESULT_BACKEND = config('CELERY_RESULT_BACKEND', default=REDIS_URL)

CELERY_BEAT_SCHEDULE = {
    'crawl-task': {
        'task': 'apps.blog.tasks.crawl',
        'schedule': crontab(),
    },
}


DEFAULT_RENDERER_CLASSES = [
    'rest_framework.renderers.JSONRenderer',
]

if DEBUG:
    DEFAULT_RENDERER_CLASSES += ['rest_framework.renderers.BrowsableAPIRenderer']

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': DEFAULT_RENDERER_CLASSES,
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'dj_rest_auth.jwt_auth.JWTCookieAuthentication',
    ],
    'DEFAULT_PAGINATION_CLASS': 'apps.common.pagination.CustomPageNumberPagination',
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ],
}

CORS_ORIGIN_WHITELIST = config(
    'CORS_ORIGIN_WHITELIST',
    default='http://localhost:8080',
    cast=Csv(),
)


#  ignore error OSError: cannot write mode RGBA as JPEG
THUMBNAIL_PRESERVE_FORMAT = True

REST_USE_JWT = True

# SIMPLE_JWT = {
#     'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
#     'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
# }
