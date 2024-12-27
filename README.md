# Arbie Abroad - Travel Blog

A full-stack travel blog application built to share adventures with friends and family. Current refactoring CSS before implementing responsive design in the near future.

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Redux for global state management 
- React Simple Maps for interactive SVG map
- Custom CSS (no frameworks or libraries)

### Backend
- Node.js
- Express.js
- Express Session for auth
- Bcrypt for password encryption
- MongoDB for database storage

## Key Features

### Frontend
- Interactive SVG world map on home page
- Dynamic Posts and Post pages using data fetched from Express.js back-end
- Account page for login/register functionality
- Manage Posts, Create Post and Manage Users pages for front-end Admin functionality (restricted access)
- Redux global state management for user authentication
- 401 & 404 error handling

### Backend 
- RESTful API with organised route handlers
- Dedicated MongoDB collections for Users, Posts and Comments 
- Secure user authentication with bcrypt password encryption
- Create, read and delete operations for blog posts
- User-linked MongoDB commenting system for blog posts
- File upload support using GridFS

## Getting Started

1. Clone the repository
2. Install dependencies for both client and server
3. Set up your MongoDB connection
4. Start the development servers

## Contributing

Feel free to submit issues and requests.

## License

This project is open source.