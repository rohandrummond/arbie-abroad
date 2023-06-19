const express = require('express');
const app = express();
const port = 3000;
const { MongoClient } = require('mongodb');
require('dotenv').config()

const mongosecret = process.env.MONGOSECRET
const mongouri = `mongodb+srv://drummondrohan:${mongosecret}@arbie-abroad.fwjfcl6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(mongouri);

app.listen(port, () => {
    console.log('App listening on port ' + port)
})

app.get('/', (req, res) => {
    res.send('hello, world')
})