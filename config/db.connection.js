//dependencies
require("dotenv").config() //do i need this here or in server.js??
const mongoose = require('mongoose');

const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/productsDB';

// set up connection with the DB
mongoose.connect(db);

// set up listeners to monitor your database connection
mongoose.connection.on('connected', ()=> console.log(`Connected to - ${db.host} : ${db.port}`));

mongoose.connection.on('error', (err)=> console.log(err.message));

mongoose.connection.on('disconnected', ()=> console.log('mongoose disconnected'));




