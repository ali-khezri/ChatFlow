# ChatFlow

A full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io.

The application supports user authentication, one-to-one conversations, real-time messaging, image sharing, online user status, profile image uploads, and theme customization.

## Live Demo

[View ChatFlow](https://chatflow-28cd.onrender.com/)

## Features

- User signup, login, and logout
- JWT-based authentication with HTTP-only cookies
- Protected routes and authentication checks
- One-to-one conversations
- Send text messages in real time
- Send images in real time
- Message history stored in MongoDB
- Online/offline user status
- Filter users by online status
- Profile image upload with Cloudinary
- 32 UI themes with DaisyUI
- Theme persistence with local storage
- Loading skeletons
- Toast notifications for success and error states
- Responsive design for desktop and mobile
- Real-time communication with Socket.io
- Production deployment with a single domain

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- Zustand
- Tailwind CSS
- DaisyUI
- Socket.io Client
- React Hot Toast
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js
- Cookie Parser
- dotenv
- Cloudinary
- Socket.io
- CORS
- Nodemon

## Architecture

The project is organized into separate frontend and backend applications:

```text
real-time-chat-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   └── store/
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── lib/
│   └── ...
│
└── package.json
```

The backend exposes the REST API and also runs the Socket.io server. In production, the Express server serves the built React application so the frontend and backend can run under the same domain.

## Authentication Flow

Authentication is handled with JWT.

When a user signs up or logs in:

1. The backend validates the credentials.
2. Passwords are hashed with bcrypt.js.
3. A JWT containing the user ID is generated.
4. The JWT is stored in an HTTP-only cookie.
5. Protected routes validate the cookie before allowing access.

The authentication cookie is configured with security-related options such as `httpOnly`, `sameSite`, and `secure` in production.

## Messaging

Messages are stored in MongoDB with the following main fields:

- `senderId`
- `receiverId`
- `text`
- `image`
- timestamps

A message can contain text, an image, or both.

The REST API is responsible for fetching and storing messages, while Socket.io provides real-time delivery to online recipients.

## Profile Images

Users can update their profile image from the profile page.

The image is uploaded to Cloudinary, and the returned secure URL is stored in the user's MongoDB document.

## Themes

The settings page provides 32 DaisyUI themes.

The selected theme is stored in local storage, so the user's choice remains after refreshing the application.

## API Overview

### Authentication

```text
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/check
PUT  /api/auth/update-profile
```

### Messages

```text
GET  /api/messages/users
GET  /api/messages/:id
POST /api/messages/send/:id
```

The message routes are protected and require an authenticated user.

## Getting Started

### Prerequisites

Make sure you have:

- Node.js installed
- A MongoDB database
- A Cloudinary account for image uploads

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### 2. Configure the backend

Create a `.env` file inside the `backend` folder:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=development
```

Do not commit your `.env` file or any secret credentials to GitHub.

### 3. Install backend dependencies

```bash
cd backend
npm install
```

### 4. Start the backend

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5001
```

### 5. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 6. Start the frontend

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Production

The project includes a production setup where the root `package.json`:

1. Installs backend dependencies.
2. Installs frontend dependencies.
3. Builds the React application.
4. Starts the Node.js/Express server.

The Express server serves the generated `frontend/dist` files, allowing the application to run from a single production URL.

The application can be deployed as a web service on platforms such as Render with the required environment variables configured in the deployment settings.

## Security

The project includes several security practices:

- Password hashing with bcrypt.js
- JWT authentication
- HTTP-only authentication cookies
- `SameSite` cookie configuration
- Secure cookies in production
- Protected API routes
- CORS configuration with credentials
- Password fields excluded from user responses

## Author

**Ali Khezri**

- GitHub: [ali-khezri](https://github.com/ali-khezri)
- LinkedIn: [Ali Khezri](https://www.linkedin.com/in/ali-khezri)