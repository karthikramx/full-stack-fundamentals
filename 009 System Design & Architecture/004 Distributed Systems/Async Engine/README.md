## Async Engine

The project contains the necessary code required to run
an Asynchronous Worker Setup, triggered using fast-api and
Redis as the message broker and Celery as distributed task
queue system

#### Project Setup

```
monorepo/
├── api/ # Main FastAPI application
│ ├── main.py
│ ├── requirements.txt
│ ├── Dockerfile
│ ├── config.py
│ └── .env
│
├── workers/ # Separate service umbrella
│ │
│ ├── worker1/ # Service 1: Database operations
│ │ ├── celery_app.py
│ │ ├── tasks.py # DB-specific tasks
│ │ ├── requirements.txt # psycopg2, sqlalchemy, etc.
│ │ ├── .env
│ │ └── Dockerfile
│ │
│ ├── worker2/ # Service 2: External API calls
│ │ ├── celery_app.py
│ │ ├── tasks.py # API call tasks
│ │ ├── requirements.txt # requests, openai, etc.
│ │ ├── .env
│ │ └── Dockerfile
│
├── docker-compose.yml # Local development
├── docker-compose.prod.yml # Production (AWS/GCP/Azure)
└── README.md
```
