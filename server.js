require('dotenv').config();

/* == External Modules == */
const express = require('express');
// const methodOverride = require('method-override');


/* == Internal Modules == */
const routes = require('./routes');

/* == cors == */
const cors = require('cors');
//an array of development url and deployment url
const whitelist = ['http://localhost:3003', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

/* == sessions ==*/
const session = require('express-session');

/* == Express Instance == */
const app = express();

/* == Port == */
const PORT = process.env.PORT || 3003;

/* == DB connection == */
require('./config/db.connection');

/* == Middleware == */
app.use(cors(corsOptions)) 
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"))

/* == Routes == */
app.use('/products', routes.products);
//routes.users goes here?


/* == App listening == */
app.listen(PORT, () => {
  console.log(`🐶 Happy-Hound happening on port http://localhost:${PORT} 🐶`);
});
