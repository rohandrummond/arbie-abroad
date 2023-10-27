# arbie abroad

### Video Demo:  https://youtu.be/7-yrM1BbC3w

## Description:

My partner and I have recently embarked on a 6 month trip across South East Asia and India. One question our family asked us was how we were going to keep everyone update with our travels - Instagram? Facebook? DMs? 

So for my final CS50 project I built a full-stack web application in the form of a travel blog. This is composed of a React.js front-end, Node.js back-end, and MongoDB database. 

### React Front-End

The `/client` folder contains the files that make up the React.js front-end of the website. I thought this framework would be good for developing my Javascript skills, while giving me a way to template pages and speed up the development process. 

The majority of this folder are files that come with a typical React installation. Most of my work is in the `/client/src` folder, which holds the component files that make up several different pages. Page routing is done in `index.js` using the React Router library. 

- Home 
- About
- Countries
- Log In/Sign Up
- Individual Blog Posts 

Within this folder are the main pages e.g. `Home.js`, `About.js`. However to keep things tidy I have created a sub-directory for the individual blog posts e.g. `Singapore.js`, `KualaLumpur.js`, and for the smaller components e.g. `Header.js`, `Footer.js`. These components are built to take arguments (props) and dynamically display data based on responses from my back-end e.g. fetched data, user authentication. 

The main features include:

- Interactive SVG world map on Home page
- Log In / Sign Up forms
- Comment section on blog posts 
- Responsive design for smartphones and tablets 

### Node.js Back-End

The `/server` folder is where my Node.js back-end lives. Again the majority of these files come with a typical installation, but most of my work is in `server.js`. There are a number of different NPM packages used:

- Express.js 
- Express Session (session middleware)
- MongoDB (storing user, post and comment data)
- Body Parser (incoming POST requests)
- Bcrypt (hashing user passwords)
- Lodash (utility library)

I constructed my server to function as an API listening to GET and POST HTTP requests from my front-end. It's primary function is to create, read and delete data from my MongoDB database. However it is also used to implement browser sessions for user authentication. 

The functions it includes are:

- Listening for incoming HTTP requests
- Creating user accounts 
- Logging in users
- Logging out users
- Checking for existing user sessions
- Fetching posts 
- Saving user comments
- Fetching user comments 

Depending on the endpoint used, functions will often return a JSON object to be used by the client. Additional rendering is also handled on the front-end.