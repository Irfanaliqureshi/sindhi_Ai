# Sindhi AI - Deployment Guide

This document provides instructions for deploying the Sindhi AI educational platform.

## Prerequisites

- Node.js (v16+)
- MongoDB
- npm or yarn

## Backend Deployment

1. Navigate to the backend directory:
   ```
   cd /path/to/sindhi-ai/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   NODE_ENV=production
   ```

4. Build the backend:
   ```
   npm run build
   ```

5. Start the server:
   ```
   npm start
   ```

## Frontend Deployment

1. Navigate to the frontend directory:
   ```
   cd /path/to/sindhi-ai/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the backend API URL:
   ```
   REACT_APP_API_URL=https://your-backend-url/api
   ```

4. Build the frontend:
   ```
   npm run build
   ```

5. The build folder can be deployed to any static hosting service.

## Combined Deployment

For a combined deployment where the backend serves the frontend:

1. Build the frontend as described above
2. Copy the contents of the `frontend/build` directory to `backend/public`
3. Configure the backend to serve static files from the public directory
4. Deploy the backend application

## Docker Deployment (Optional)

A Docker configuration is provided for containerized deployment:

1. Build the Docker image:
   ```
   docker build -t sindhi-ai .
   ```

2. Run the container:
   ```
   docker run -p 5000:5000 -d sindhi-ai
   ```

## Security Considerations

- Ensure HTTPS is enabled for production
- Set appropriate CORS headers
- Regularly update dependencies
- Monitor for security vulnerabilities

## Monitoring and Maintenance

- Set up logging for the application
- Configure monitoring for server health
- Implement regular database backups
- Create a maintenance schedule for updates

## Support

For any deployment issues, please contact the development team.
