# Arbie Abroad 🌍

**About the project**

Arbie Abroad is a full stack travel blog and micro CMS. It includes an interactive world map, blog posts with image uploads, a commenting system, and admin content management. Users can view travel destinations, leave comments, and admins can manage content through a protected dashboard.

The frontend is a React application that fetches and renders post data, manages routing with React Router, and handles state management with Redux (for tracking user-authentication). The backend is a lightweight Express API that manages authentication, session handling and interactions with MongoDB e.g. storing blog posts, user details, comments and images.

**Why I built it**

This was my first self directed project, which I built while my partner and I were travelling South East Asia. I really liked the idea of being able to visually represent the countries we had visited, which is what sparked the project.

This project allowed me to integrate React, Express, and MongoDB independently for the first time, without just following a tutorial. I also implemented local authentication from scratch to understand the fundamentals of how auth works. The project turned out to be a great learning experience because it exposed me to concepts I hadn't encountered before, like state management with Redux, and file uploads using GridFS and Multer.


## Key features 💡

**Interactive world map**

- SVG map highlighting visited countries built with react-simple-maps
- Click through navigation to destination blog posts

**Image uploads**

- Client side file size validation (5MB limit)
- Live image preview before upload using FileReader API
- Multer middleware for handling multipart form uploads
- GridFS streaming for storing and serving images from MongoDB

**Authentication & authorisation**

- Session based auth with Bcrypt password hashing
- Role based access control (admin vs user) with protected routes
- 401/404 error handling

**Full stack architecture**

- React SPA with client side routing via React Router
- Express REST API with modular route handlers
- Persistent state management with Redux and Redux Persist


**Responsive design**

- Mobile, tablet, and desktop breakpoints
- Admin features gated to desktop for optimal editing experience

## Tech stack ⚙️

**Frontend**

- React 
- React Router
- Redux

**Backend**

- Express
- MongoDB Atlas
- GridFS
- Multer
- Bcrypt
- Express-session

## Getting Started 🚀

**Prerequisites**

- Node.js
- npm
- MongoDB Atlas account

**Installation**

Clone the repository
```bash
git clone https://github.com/rohandrummond/arbie-abroad.git
cd arbie-abroad
```

Install dependencies
```bash
npm install
cd client && npm install
cd ../server && npm install
```

Create `/server/.env`:
```
MONGOSECRET=your_mongodb_password
```

Update MongoDB connection string in `/server/server.js` with your Atlas URI

Set up MongoDB collections

- Create `posts`, `users`, and `comments` collections in MongoDB Atlas
- GridFS collections (`fs.files`, `fs.chunks`) are auto-created on first upload

Create an admin user directly in MongoDB with `type: "admin"`

Start the servers
```bash
# Start backend (port 8080)
cd server && node server.js

# Start frontend (port 3000)
cd client && npm start
```

Open http://localhost:3000 in your browser