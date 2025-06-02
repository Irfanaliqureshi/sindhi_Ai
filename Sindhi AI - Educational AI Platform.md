# Sindhi AI - Educational AI Platform

Sindhi AI is a full-stack web application designed for Sindhi users with an option to switch to English. The platform provides educational AI tools with a clean, modern, mobile-first, and culturally engaging interface.

## Features

- **Bilingual Support**: Full support for both Sindhi and English languages
- **RTL/LTR Support**: Right-to-left layout for Sindhi and left-to-right for English
- **Cultural Design**: Incorporates traditional Sindhi elements like Ajrak patterns and Topi icons
- **Secure Authentication**: User registration and login with password hashing and JWT
- **Responsive Design**: Mobile-first approach that works on all device sizes
- **Admin Panel**: Comprehensive admin interface for user, tutorial, and message management
- **User Dashboard**: Personalized dashboard for tracking progress and accessing tutorials
- **AI Tools**: Collection of AI-powered educational tools for Sindhi language learning

## Technology Stack

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT with bcrypt password hashing
- **Security**: Helmet, CORS, input validation, and CSRF protection

## Project Structure

```
sindhi-ai/
├── backend/               # Backend Node.js/Express application
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   └── server.js          # Main server file
├── frontend/              # React frontend application
│   ├── public/            # Static files
│   └── src/               # React source code
│       ├── components/    # Reusable components
│       ├── context/       # React context providers
│       ├── pages/         # Page components
│       └── utils/         # Utility functions
└── DEPLOYMENT.md          # Deployment instructions
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running Locally

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```
2. Start the frontend development server:
   ```
   cd frontend
   npm start
   ```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Security Features

- Password hashing with bcrypt
- JWT authentication
- Input validation with express-validator
- CSRF protection
- Secure HTTP headers with Helmet
- CORS configuration

## License

This project is licensed under the ISC License.

## Acknowledgements

- Sindhi cultural elements and language support
- React and Node.js communities
- Tailwind CSS for the responsive design framework
