// dependencies
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
const multer = require('multer');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

// mongodb
const uri = `mongodb+srv://drummondrohan:56WZlLVuLulJssTi@arbie-abroad.fwjfcl6.mongodb.net/?retryWrites=true&w=majority&appName=arbie-abroad`;
const client = new MongoClient(uri);
const database = client.db('arbie-abroad');

// multer
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

// gridfs
let gfs;
client.connect().then(() => {
  gfs = new GridFSBucket(database);
});

app.listen(port, (req, res) => {
    console.log('App listening on port ' + port)
})

// @route posts
// @description create, read and delete blog posts
app.route('/api/posts')
    .get(async (req, res) => {
        try {
            await client.connect();
            const postsCollection = database.collection('posts');
            const posts = await postsCollection.find({}).toArray();
            res.json(posts);
        } catch (e) {
            console.error(e);
            res.status(500).json({ status: 'error', message: 'Unable to fetch posts.' });
        }
    })
    .post(upload.array('files[]', 2), async (req, res) => {
        const content = JSON.parse(req.body.content);
        const files = req.files;
        const imageIds = [];
        if (!content || !files) {
            return res.status(400).json({ status: 'error', message: 'Missing content or images' });
        }
        try {
            await client.connect();
            const postsCollection = database.collection('posts');
            for (const file of files) {
                const readableStream = Buffer.from(file.buffer);
                const uploadStream = gfs.openUploadStream(file.originalname, { contentType: file.mimetype });
                const fileId = uploadStream.id;
                imageIds.push(fileId);
                uploadStream.write(readableStream);
                uploadStream.end();
            }
            await postsCollection.insertOne({
                city: content.city,
                country: content.country,
                firstParagraph: content.firstParagraph,
                secondParagraph: content.secondParagraph,
                images: imageIds
            });
            res.json({ status: 'success', message: 'Post content and images stored successfully.' });
        } catch (e) {
            console.error(e);
            res.status(500).json({ status: 'error', message: 'Error storing post data.' });
        }
    })
    .delete(async (req, res) => {
        const postId = req.body.id;
        if (!ObjectId.isValid(postId)) {
            return res.status(400).json({ status: 'error', message: 'Invalid post ID.' });
        }
        try {
            await client.connect();
            const postsCollection = database.collection('posts');
            await postsCollection.deleteOne({ _id: new ObjectId(postId) });
            res.json({ status: 'success', message: 'Post deleted successfully.' });
        } catch (e) {
            console.error(e);
            res.status(500).json({ status: 'error', message: 'Unable to delete post.' });
        }
    });

// @route images
// @description serve specific images
app.get('/api/images/:fileId', async (req, res) => {
    try {
        const fileId = new ObjectId(req.params.fileId);
        const filesCollection = database.collection('fs.files'); // GridFS metadata collection
        const file = await filesCollection.findOne({ _id: fileId });
        if (!file) {
            return res.status(404).json({ error: 'File not found' });
        }
        gfs.openDownloadStream(fileId)
            .on('error', (error) => {
                console.error("Download Stream Error: ", error);
                res.status(500).json({ error: 'Error streaming file' });
            })
            .pipe(res);
    } catch (e) {
        console.error("Error: ", e);
        res.status(500).json({ error: 'Server error' });
    }
});

// @route users
// @description create, read and delete users
app.route('/api/users')
    .get(async (req, res) => {
        const usersCollection = database.collection('users');
        try {
            await client.connect();
            const users = await usersCollection.find({}).toArray();
            res.json(users);
        } catch (e) {
            console.error(e);
            res.status(500).json({ status: 'error', message: 'Unable to fetch users' });
        }
    })
    .post(async (req, res) => {
        const usersCollection = database.collection('users');
        const { firstName, lastName, email, password } = req.body;
        try {
            await client.connect();
            const existingUser = await usersCollection.findOne({ email });
            if (existingUser) {
                return res.json({ status: 'error', code: '200', message: 'Email already exists' });
            }
            const hash = await bcrypt.hash(password, saltRounds);
            const user = { firstName, lastName, email, password: hash, type: 'user' }
            await usersCollection.insertOne(user);
            req.session.user = email;
            req.session.userType = 'user';
            res.json({ status: 'success', code: '100', message: 'Account created', userInfo: user });
        } catch (e) {
            console.error(e);
            res.status(500).json({ status: 'error', message: 'Server error' });
        }
    })
    .delete(async (req, res) => {
        const userEmail = req.body.email;
        const usersCollection = database.collection('users');
        try {
            await client.connect();
            await usersCollection.deleteOne({ email: userEmail });
            res.json({ status: 'success', message: 'User deleted successfully.' });
        } catch (e) {
            console.error(e);
            res.status(500).json({ status: 'error', message: 'Unable to delete user.' });
        }
    });

// @route login
// @description authenticate existing users
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
                            userInfo: user
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

// @route logout
// @description deauthenticate user and end session
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

// @route comments
// @description create and delete comments
app.route('/api/comments')
    .post(async (req, res) => {
        const commentsCollection = database.collection('comments');
        try {
            await client.connect();
            await commentsCollection.insertOne({ 
                postId: req.body.postId,
                userId: req.body.userId,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                comment: req.body.comment
            });
            res.status(200).json({ 
                message: 'Comment added successfully' 
            });
        } catch(e) {
            console.log(e);
            res.status(500).json({ 
                message: 'Failed to add comment. Check server logs.' 
            });
        }  
    })
    .delete(async (req, res) => {
        const commentId = req.body.commentId
        if (!ObjectId.isValid(commentId)) {
            return res.status(400).json({ status: 'error', message: 'Invalid comment ID.' });
        }
        try {
            await client.connect();
            const commentsCollection = database.collection('comments');
            await commentsCollection.deleteOne({ _id: new ObjectId(commentId) });
            res.json({ status: 'success', message: 'Comment deleted successfully.' });
        } catch (e) {
            console.error(e);
            res.status(500).json({ status: 'error', message: 'Unable to delete comment.' });
        }
    })

// @route comments with parameters
// @description fetch comments for specific post
app.get('/api/comments/:postId', async (req, res) => {
    const commentsCollection = database.collection('comments');
    try {
        await client.connect();
        const comments = await commentsCollection.find({ postId: req.params.postId }).toArray();
        res.status(200).json(comments);    
    } catch (e) {
        console.error(e);
    }
})