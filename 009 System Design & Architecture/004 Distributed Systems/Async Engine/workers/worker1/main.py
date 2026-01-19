# workers/db-worker/tasks.py
import os
from celery_app import celery_app
import time

@celery_app.task(name="tasks.task1", queue='task_queue_1')
def fetch_user_data(user_id: int):
    """Get user data from database"""
    try:

        # Simulate database fetch with dummy data
        time.sleep(5)  # Simulate delay 

        return {
            "user_id": "abc",
            "email": "karthikram570@gmail.com",
            "created_at": "2024-01-01T00:00:00"
        }
    finally:
        print("Worker finished executing closed")  
