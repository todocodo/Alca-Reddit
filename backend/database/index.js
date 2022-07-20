require("dotenv").config();

const {MongoClient} = require('mongodb');
const url = process.env.DB_URL
// const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

client.connect(err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log('Successfully connected to Mongo DB yeah')
})

module.exports = client;