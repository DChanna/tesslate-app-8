FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Make start script executable
COPY start.sh .
RUN chmod +x start.sh

# Create SQLite database directory
RUN mkdir -p /app/data

# Expose port (hosting platform will set PORT env var)
EXPOSE 8000

# Use start script as default command
CMD ["./start.sh"]
