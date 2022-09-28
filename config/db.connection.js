

const mongoose = require('mongoose');

/* == connection string == */

const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/productsDB'

/* == set up our connection == */

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => console.log('mongodb connected 🐶'));

mongoose.connection.on('error', (error) => console.log('mongodb error', error));

mongoose.connection.on('disconnected', () => console.log('mongodb disconnected 💩'));




