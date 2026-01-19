from fastapi import FastAPI, HTTPException
import logging
from celery import Celery
from celery.exceptions import WorkerLostError
import redis
import os

app = FastAPI() 

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Get Redis host from environment variable, default to localhost for local dev
REDIS_HOST = os.getenv("REDIS_HOST", "localhost")
# Use host.docker.internal if running in Docker without custom network
if REDIS_HOST == "docker":
    REDIS_HOST = "host.docker.internal"
REDIS_URL = f"redis://{REDIS_HOST}:6379/0"

# Initialize Celery client with lazy connection
celery_client = Celery("worker", broker=REDIS_URL)
celery_client.conf.update(
    task_track_started=True,
    task_serializer='json',
    result_serializer='json',
    accept_content=['json'],
    result_expires=3600,
    broker_connection_retry_on_startup=True,
    broker_connection_retry=True,
    broker_connection_max_retries=10,
    broker_connection_retry_delay=5.0,
)

# Health check for Redis connection
def check_redis_connection():
    try:
        r = redis.Redis(host=REDIS_HOST, port=6379, db=0)
        r.ping()
        return True
    except (redis.ConnectionError, redis.TimeoutError):
        return False

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/health")
async def health_check():
    redis_status = check_redis_connection()
    return {
        "status": "healthy" if redis_status else "degraded",
        "redis": "connected" if redis_status else "disconnected"
    }

@app.get("/start-task1")
async def start_task1(delay: int):
    if not celery_client:
        raise HTTPException(status_code=503, detail="Task queue unavailable")
    
    if not check_redis_connection():
        raise HTTPException(status_code=503, detail="Redis connection failed")
    
    try:
        task = celery_client.send_task("tasks.task1", args=[delay], queue="task_queue_1")
        logger.info(f"Task1 started with ID: {task.id}")
        return {"task_id": task.id, "status": "queued"}
    except (WorkerLostError, Exception) as e:
        logger.error(f"Failed to start task1: {e}")
        raise HTTPException(status_code=500, detail="Failed to queue task")

@app.get("/start-task2")
async def start_task2(delay: int):
    if not celery_client:
        raise HTTPException(status_code=503, detail="Task queue unavailable")
    
    if not check_redis_connection():
        raise HTTPException(status_code=503, detail="Redis connection failed")
    
    try:
        task = celery_client.send_task("tasks.task2", args=[delay], queue="task_queue_2")
        logger.info(f"Task2 started with ID: {task.id}")
        return {"task_id": task.id, "status": "queued"}
    except (WorkerLostError, Exception) as e:
        logger.error(f"Failed to start task2: {e}")
        raise HTTPException(status_code=500, detail="Failed to queue task")