#!/bin/bash
# Start script for Railway deployment
PORT=${PORT:-8000}
echo "Starting server on port $PORT"
exec uvicorn main:app --host 0.0.0.0 --port $PORT 