# SitePulse - Website Uptime Monitoring SaaS

A modern SaaS application for monitoring website uptime and performance.

## Features (MVP)

- User authentication (signup/login)
- Website monitoring
- Uptime checks
- Basic dashboard
- Email notifications

## Tech Stack

### Backend
- Node.js/Express.js
- MongoDB
- JWT Authentication
- Node-cron for scheduling
- Nodemailer for notifications

### Frontend
- React with Vite
- Chakra UI
- Recoil for state management
- React Router

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```
   MONGODB_URI=mongodb://localhost:27017/sitepulse
   JWT_SECRET=your_jwt_secret_here
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm run start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Development

- Backend runs on http://localhost:5000
- Frontend runs on http://localhost:5173

## Project Structure

```
sitepulse/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   └── utils/
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── store/
│   │   └── utils/
│   └── package.json
└── README.md
``` 
