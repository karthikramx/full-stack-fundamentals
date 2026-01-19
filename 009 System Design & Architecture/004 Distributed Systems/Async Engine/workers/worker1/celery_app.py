import os
from celery import Celery
from dotenv import load_dotenv

load_dotenv()

celery_app = Celery(
    'worker1',
    broker=os.getenv("CELERY_BROKER_URL", "redis://redis:6379/0"),
    backend=os.getenv("CELERY_RESULT_BACKEND", "redis://redis:6379/0")
)

celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
    worker_prefetch_multiplier=4,
    task_acks_late=True,
    worker_max_tasks_per_child=100,
)

from main import * 

celery_app.conf.task_routes = {
    'worker1.tasks.*': {'queue': 'task_queue_1'}
}
