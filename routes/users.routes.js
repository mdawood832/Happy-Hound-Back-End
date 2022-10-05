const express = require('express');
const router = express.Router();

/* == CTRLS == */
const ctrls = require('../controllers');

router.post('/signup', ctrls.users.signup); // /signup route to signup a new user

router.post('/login', ctrls.users.login); // /login route to login a user 

 router.delete('/logout', ctrls.users.logout); 


module.exports = router;