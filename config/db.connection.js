

const mongoose = require('mongoose');

/* == connection string == */

const connectionStr = process.env.MONGODB_URI 

/* == set up our connection == */

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => console.log('mongodb connected 🐶'));

mongoose.connection.on('error', (error) => console.log('mongodb error', error));

mongoose.connection.on('disconnected', () => console.log('mongodb disconnected 💩'));

// import mongoose from 'mongoose'

// const connectionStr =
//   process.env.MONGODB_URI 
  
// mongoose.set('returnOriginal', false)

// mongoose
//   .connect(connectionStr)
//   .catch((error) => console.error('Error connecting to MongoDB:', error.message))
  
// mongoose.connection.on('disconnected', () => console.log(`Disconnected from ${connectionStr}`))

// mongoose.connection.on('error', (error) => console.error(`MongoDB connection error: ${error}`))

// export default mongoose.connection


