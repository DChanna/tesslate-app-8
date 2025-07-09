# Railway Deployment Fix - PORT Environment Variable

## Issue
Railway deployments were failing with error:
```
Error: Invalid value for '--port': '$PORT' is not a valid integer.
```

## Root Cause
The uvicorn command was receiving the literal string "$PORT" instead of the actual port number set by Railway.

## Solution
1. **Created `start.sh` script** - Properly expands PORT environment variable
2. **Updated `railway.json`** - Uses start script instead of direct uvicorn command  
3. **Fixed `Dockerfile`** - Copies and executes start script

## Files Changed
- `railway.json` - Added `"startCommand": "bash start.sh"`
- `backend/start.sh` - New script with proper PORT handling
- `backend/Dockerfile` - Updated to use start script

## How It Works
1. Railway sets `PORT` environment variable (e.g. 3000, 8080, etc.)
2. `start.sh` script reads `PORT` and defaults to 8000 if not set
3. uvicorn starts with the correct numeric port value

## Testing Locally
```bash
# Test with custom port
PORT=3000 ./start.sh

# Test with default port (8000)
./start.sh
```

## Redeploy Instructions
1. Commit these changes to the GitHub repository
2. Railway will automatically redeploy with the fixed configuration
3. The deployment should now start successfully

---
Fixed on: July 9, 2025
Issue: Railway PORT environment variable not properly expanded 