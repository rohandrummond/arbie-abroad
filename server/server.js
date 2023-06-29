const express = require('express');
const app = express();
const port = 5000;
const { MongoClient } = require('mongodb');
require('dotenv').config()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

const mongosecret = process.env.MONGOSECRET
const mongouri = `mongodb+srv://drummondrohan:${mongosecret}@arbie-abroad.fwjfcl6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(mongouri);
const database = client.db('arbie-abroad');

app.listen(port, (req, res) => {
    console.log('App listening on port ' + port)
})

app.get('/api/posts', (req, res) => {
    async function getPosts() {
        const postsCollection = database.collection('posts');
        try {
            await client.connect();
            posts = await postsCollection.find({}).toArray();
            res.json(posts)
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
    getPosts().catch(console.error);
})

app.post('/api/register', (req, res) => (
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const usersCollection = database.collection('users');
        async function registerUser() {
            try {
                await client.connect();
                user = await usersCollection.findOne({ username: req.body.email })
                if (user) {
                    // ERROR PAGE
                    res.send("user already exists")
                } else {
                    await usersCollection.insertOne({ username: req.body.email, password: hash, type: "user" })
                    req.session.user = req.body.email;
                    res.redirect('/');
                }
            } catch (e) {
                console.error(e);
            } finally {
                await client.close();
            }
        }
        registerUser().catch(console.error);
    })
))

app.post('/api/login', (req, res) => {
    const usersCollection = database.collection('users');
    async function verifyUser() {
        try {
            await client.connect();
            user = await usersCollection.findOne({ username: req.body.email })
            if (user) {
                bcrypt.compare(req.body.password, user.password, function (err, result) {
                    if (result == true) {
                        req.session.user = req.body.email;
                        res.redirect('/');
                    } else {
                        res.send("incorrect passsword")
                    }
                })
            } else {
                res.send("user not found")
            }
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
    verifyUser().catch(console.error);
})

app.get('/api/session', (req, res) => {
    if (req.session.user) {
        res.json({ status: true, user: req.session.user })
    } else {
        res.json({ status: false })
    }
})

app.post('/api/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        } else {
            res.clearCookie('connect.sid');
        }
    });
});