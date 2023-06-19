const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config()
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const mongosecret = process.env.MONGOSECRET
const mongouri = `mongodb+srv://drummondrohan:${mongosecret}@arbie-abroad.fwjfcl6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(mongouri);

app.listen(port, () => {
    console.log('App listening on port ' + port)
})

app.get('/', (req, res) => {
    res.render("home")
})