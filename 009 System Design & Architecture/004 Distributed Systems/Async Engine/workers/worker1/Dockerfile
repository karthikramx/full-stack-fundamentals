FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["celery", "-A", "celery_app", "worker", "--loglevel=info", "--concurrency=4" , "-Q", "task_queue_1"] 

ENV CELERY_BROKER_URL=redis://host.docker.internal:6379/0
ENV CELERY_RESULT_BACKEND=redis://host.docker.internal:6379/0