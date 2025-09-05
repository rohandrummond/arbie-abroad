# Arbie Abroad Travel Blog &nbsp; 🛩️

Full-stack travel blog app built with React, Express, and MongoDB. 

A platform for sharing travel with friends and family, featuring an interactive world map, blog posts, comment system, user authentication, and admin content management features.

## Tech Stack 👷

__Frontend__: React, React Router, Redux, React Simple Maps, Custom CSS\
__Backend__: Node.js, Express.js, Bcrypt, MongoDB

## Features 🚀

__Frontend__
- Interactive SVG world map (React Simple Maps)
- Dynamic Posts and Post pages powered by Express API
- Account pages for user login & registration
- Admin restricted pages for managing/creating post and managing users
- Global state management with Redux for authentication
- 401 & 404 error handling

__Backend__
- RESTful API with modular route handlers
- Dedicated MongoDB collections for Users, Posts, and Comments
- Secure authentication with bcrypt password encryption
- User-linked commenting system
- File upload support with GridFS

## UI 🚀

*Actual screenshots of web app, not from Figma

![alt text](https://github.com/rohandrummond/arbie-abroad/blob/main/client/public/mobile-collage.png?raw=true)

## Setup ⚙️

__Prerequisites__
- Node.js
- npm
- MongoDB Atlas

__Instructions__

1. Clone the project using `git clone https://github.com/rohandrummond/arbie-abroad.git`
2. Install dependancies in root, `/client` and `/server` directories using `npm i`
3. Create `.env` file in `/server` directory with MongoDB password using `MONGOSECRET=mongosecrethere`
4. Update `uri` in `/server/server.js` to match your MongoDB connection string
5. Create `posts`, `users` and `comments` collections in the MongoDB web app
6. Match Collection schemas to the `api/posts`, `api/users` and `api/comments` endpoints in `server.js`
7. In the MongoDB web app, create your user in the `users` Collection with a `type` value of `"admin"`
8. Run `node server.js` in the `/server` directory 
9. Run `npm start` in the `/client` directory
10. The site will start on `localhost:3000` unless the port is busy
11. Login as your admin user to start creating and managing posts and users

## License 👨‍⚖️

This project is open source under the MIT License.

## Contact 📫

Check out my other projects and contact info on my [GitHub](https://github.com/rohandrummond) profile.