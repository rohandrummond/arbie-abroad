// Express, MongoDB, Body Parser, Bcrypt, Express Session and Lodash
const express = require('express');
const app = express();
const port = 8080;
const { MongoClient } = require('mongodb');
require('dotenv').config()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session');
const _ = require('lodash');

// Body Parser, Express JSON (built-in) and Express Session middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

// MongoDB
const mongosecret = process.env.MONGOSECRET
const mongouri = `mongodb+srv://drummondrohan:${mongosecret}@arbie-abroad.fwjfcl6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(mongouri);
const database = client.db('arbie-abroad');

// Listen for incoming HTTP requests
app.listen(port, (req, res) => {
    console.log('App listening on port ' + port)
})

// Create new users
app.post('/api/signup', (req, res) => (
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const usersCollection = database.collection('users');
        async function registerUser() {
            try {
                await client.connect();
                user = await usersCollection.findOne({ username: req.body.name })
                if (user) {
                    res.json({
                        status: "error",
                        message: "user already exists"
                    })
                } else {
                    await usersCollection.insertOne({ username: req.body.name, password: hash, type: "user" })
                    req.session.user = req.body.name;
                    res.json({
                        status: "success",
                        message: "account created"
                    })
                }
            } catch (e) {
                console.error(e);
            }
        }
        registerUser().catch(console.error);
    })
))

// Authenticate users 
app.post('/api/login', (req, res) => {
    const usersCollection = database.collection('users');
    async function verifyUser() {
        try {
            await client.connect();
            user = await usersCollection.findOne({ username: req.body.name })
            if (user) {
                bcrypt.compare(req.body.password, user.password, function (err, result) {
                    if (result == true) {
                        req.session.user = req.body.name;
                        res.json({
                            status: "success",
                            message: "login successful"
                        })
                    } else {
                        res.json({
                            status: "error",
                            message: "incorrect password"
                        })
                    }
                })
            } else {
                res.json({
                    status: "error",
                    message: "username not found"
                })
            }
        } catch (e) {
            console.error(e);
        }
    }
    verifyUser().catch(console.error);
})

// Check for existing user session
app.get('/api/session', (req, res) => {
    if (req.session.user) {
        res.json({ status: true, user: req.session.user })
    } else {
        res.json({ status: false })
    }
})

// Logout user
app.post('/api/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        } else {
            res.clearCookie('connect.sid');
        }
    });
});

// Fetch posts for country
app.get('/api/posts/:countryName', (req, res) => {
    const countryName = req.params.countryName
    async function getPosts() {
        const postsCollection = database.collection('posts');
        try {
            await client.connect();
            posts = await postsCollection.find({ country: countryName }).toArray();
            res.json(posts)
        } catch (e) {
            console.error(e);
        }
    }
    getPosts().catch(console.error);
})

// Save user comment
app.post('/api/addComment', (req, res) => {
    const commentsCollection = database.collection('comments');
    async function addComment() {
        try {
            await client.connect();
            await commentsCollection.insertOne({ post: req.body.path.split('/').pop(), user: req.body.user, comment: req.body.comment });
        } catch (e) {
            console.log(e);
        }
    }
    addComment();
    res.status(200).json({ message: 'Comment added successfully' });
})

// Fetch comments for post
app.get('/api/fetchComments/:postName', (req, res) => {
    const postName = req.params.postName;
    const commentsCollection = database.collection('comments');
    async function fetchComments() {
        try {
            await client.connect();
            comments = await commentsCollection.find({ post: postName }).toArray();
            res.json(comments)
        } catch (e) {
            console.error(e);
        }
    }
    fetchComments().catch(console.error);
})