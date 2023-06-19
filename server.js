const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config()
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));

const mongosecret = process.env.MONGOSECRET
const mongouri = `mongodb+srv://drummondrohan:${mongosecret}@arbie-abroad.fwjfcl6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(mongouri);
const database = client.db('arbie-abroad');

app.listen(port, () => {
    console.log('App listening on port ' + port)
    async function getPosts() {
        const postscollection = database.collection('posts');
        try {
            await client.connect();
            posts = await postscollection.find({}).toArray();
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
    getPosts().catch(console.error);
})

app.get('/', (req, res) => {
    res.render("home", { posts: posts })
})