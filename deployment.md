# Deployment

## Frontend

The frontend is deployed on Render.

Frontend URL:

https://coffee-brew-log.onrender.com

---

## Backend

The backend API is deployed on Render.

Backend URL:

https://coffee-brew-log-api.onrender.com/api/brews/

---

## Deployment Process

### Backend

- Created a Render PostgreSQL database
- Configured environment variables
- Added Gunicorn
- Added WhiteNoise
- Configured static files
- Ran migrations
- Deployed Django Web Service

### Frontend

- Built using Vite
- Deployed as a Render Static Site
- Connected to deployed backend API

---

## Challenges Encountered

- Configuring CORS between frontend and backend
- Configuring STATIC_ROOT for production
- Environment variable setup
- PostgreSQL configuration

These issues were resolved successfully.