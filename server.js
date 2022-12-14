require('dotenv').config();

/* == External Modules == */
const express = require('express');


/* == Internal Modules == */
const routes = require('./routes');

/* == cors == */
const cors = require('cors');

/* == sessions ==*/
const session = require('express-session');

/* == Port == */
const PORT = process.env.PORT || 3003;

/* == Express Instance == */
const app = express();


/* == DB connection == */
require('./config/db.connection');


const whitelist = ['http://localhost:3000', `${process.env.FRONTEND_URL}`]

const corsOptions = {
	origin: (origin, callback) => {
		console.log(origin, whitelist)
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	// This is needed for accept credentials from the front-end
	credentials: true,
};


/* == Middleware == */
app.use(cors(corsOptions)) 
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/* == Routes == */
app.get('/', function (req, res) {
	res.send('hello');
});

/* == Routes == */
app.use('/products', routes.products);
app.use('/users', routes.users)


/* == App listening == */
app.listen(PORT, () => {
  console.log(`🐶 Happy-Hound happening on port http://localhost:${PORT} 🐶`);
});
