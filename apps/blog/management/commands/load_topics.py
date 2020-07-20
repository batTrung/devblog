from django.core.management.base import BaseCommand
from django.utils.text import slugify

from apps.blog.models import Topic


class Command(BaseCommand):

    def handle(self, *args, **kwargs):
        self.stdout.write("Cleaning database...")
        Topic.objects.all().delete()

        self.stdout.write(self.style.HTTP_NOT_MODIFIED(f"Creating topics..."))

        topic_data = [
            'Web Development',
            'Data Analytics',
            'Machine Learning',
            'Software Engineering',
            'Design & illustration',
            'Computers & Technology',
        ]

        topics = [
            Topic(
                title=topic_name,
                slug=slugify(topic_name),
            ) for topic_name in topic_data
        ]
        Topic.objects.bulk_create(topics)

        self.stdout.write(
            self.style.SUCCESS(f'SUCCESSFULLY CREATED: { len(topic_data) } topics')
        )
