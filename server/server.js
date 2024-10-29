// Express, MongoDB, Body Parser, Bcrypt, Express Session and Lodash
const express = require('express');
const app = express();
const port = 8080;
require('dotenv').config()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session');
const _ = require('lodash');
const { MongoClient, ObjectId, GridFSBucket } = require("mongodb");
const path = require('path');

// Body Parser, Express JSON (built-in) and Express Session middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

// MongoDB
const uri = `mongodb+srv://drummondrohan:56WZlLVuLulJssTi@arbie-abroad.fwjfcl6.mongodb.net/?retryWrites=true&w=majority&appName=arbie-abroad`;
const client = new MongoClient(uri);
const database = client.db('arbie-abroad');

// Multer
const multer = require('multer');
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

// GridFS
let gfs;
client.connect().then(() => {
  gfs = new GridFSBucket(database);
});

// Listen for incoming HTTP requests
app.listen(port, (req, res) => {
    console.log('App listening on port ' + port)
})

// Fetch image
app.get('/api/images/:fileId', async (req, res) => {
    try {
        const fileId = new ObjectId(req.params.fileId)
        gfs.openDownloadStream(fileId)
            .pipe(res)
    } catch (e) {
        console.error("Error: ", e)
        res.status(500).json({ error: 'Server error' });
    }
})

// Create post
app.post('/api/createPost', upload.array('files[]', 2), async (req, res) => {
    const content = JSON.parse(req.body.content);
    const files = req.files;
    const imageIds = [];
    if (!content || !files) {
        res.json({
            status: 'error',
            message: 'missing content or images'
        })
    }
    try {
        await client.connect();
        const postsCollection = database.collection('posts');
        for (const file of files) {
            const readableStream = Buffer.from(file.buffer);
            const uploadStream = gfs.openUploadStream(file.originalname, {
                contentType: file.mimetype,
            });
            const fileId = uploadStream.id; 
            imageIds.push(fileId);
            uploadStream.write(readableStream);
            uploadStream.end();
        }
        const createResult = await postsCollection.insertOne({ 
            city: content.city,
            country: content.country,
            firstParagraph: content.firstParagraph,
            secondParagraph: content.secondParagraph,
            images: imageIds
        })
        res.json({
            status: 'success',
            message: 'post content and images stored successfully.'
        })
    } catch (e) {
        res.json({
            status: 'error',
            message: 'there was an error storing post data'
        })
    }
})

// Create new users
app.post('/api/register', (req, res) => (
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const usersCollection = database.collection('users');
        async function registerUser() {
            try {
                await client.connect();
                user = await usersCollection.findOne({ email: req.body.email })
                if (user) {
                    res.json({
                        status: 'error',
                        code: '200',
                        message: 'email already exists'
                    })
                } else {
                    await usersCollection.insertOne({ 
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email, 
                        password: hash, 
                        type: 'user' 
                    })
                    req.session.user = req.body.email;
                    req.session.userType = 'user'
                    res.json({
                        status: 'success',
                        code: '100',
                        message: 'account created'
                    })
                }
            } catch (e) {
                console.error(e);
            }
        }
        registerUser().catch(console.error);
    })
));

// Authenticate users 
app.post('/api/login', (req, res) => {
    const usersCollection = database.collection('users');
    async function verifyUser() {
        try {
            await client.connect();
            user = await usersCollection.findOne({ email: req.body.email })
            if (user) {
                bcrypt.compare(req.body.password, user.password, function (err, result) {
                    if (result == true) {
                        req.session.user = user.email;
                        req.session.userType = user.type;
                        res.json({
                            status: 'success',
                            code: '100',
                            message: 'login successful',
                            userType: user.type
                        })
                    } else {
                        res.json({
                            status: 'error',
                            code: '300',
                            message: 'incorrect password'
                        })
                    }
                })
            } else {
                res.json({
                    status: 'error',
                    code: '400',
                    message: 'username not found'
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
        res.json({ 
            status: true, 
            user: req.session.user,
            userType: req.session.userType
        })
    } else {
        res.json({ status: false })
    }
})

// Logout user
app.post('/api/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.json({
                status: 'error',
                code: '500',
                message: 'error destroying cookie'
                
            })
        } else {
            res.clearCookie('connect.sid');
            res.json({
                status: 'success',
                code: '100',
                message: 'cookie destroyed successfully'
            })
        }
    });
});

// Fetch all posts
app.get('/api/posts', async (req, res) => {
    async function getAllPosts() {
        const postsCollection = database.collection('posts')
        try {
            await client.connect();
            posts = await postsCollection.find({}).toArray();
            res.json(posts)
        } catch(e) {
            console.error(e)
        }
    }
    getAllPosts().catch(console.error)
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
            const comments = await commentsCollection.find({ post: postName }).toArray();
            res.json(comments)
        } catch (e) {
            console.error(e);
        }
    }
    fetchComments().catch(console.error);
})


// Fetch all users
app.get('/api/fetchUsers', (req, res) => {
    const usersCollection = database.collection('users');
    async function fetchUsers() {
        try {
            await client.connect();
            const users = await usersCollection.find({}).toArray();
            res.json(users)
        } catch (e) {
            console.error(e);
        }
    }
    fetchUsers().catch(console.error);
})

// Delete user
app.post('/api/deleteUser', async (req, res) => {
    const userEmail = req.body.email;
    const usersCollection = database.collection('users');
    try {
        await client.connect(); 
        const deleteResult = await usersCollection.deleteOne({
            email: userEmail
        });
        res.json({
            status: 'success',
            message: 'user deleted succesfully.'
        })
    } catch(e) {
        console.error(e);
        res.json({
            status: 'error',
            message: 'unable to delete user.'
        })
    }
})

// Delete post
app.post('/api/deletePost', async (req, res) => {
    const postId = req.body.id
    const postsCollection = database.collection('posts')
    try {
        await client.connect(); 
        const deleteResult = await postsCollection.deleteOne({
            _id: new ObjectId(postId) // Convert postId to ObjectId
        });
        res.json({
            status: 'success',
            message: 'post deleted succesfully.'
        })
    } catch(e) {
        console.error(e);
        res.json({
            status: 'error',
            message: 'unable to delete post.'
        })
    }
})