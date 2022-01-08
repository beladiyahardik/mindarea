const express = require('express');
const User = require('../schema/userSchema');
const user = require('../controllers/userController')

const userRoute = express.Router();

userRoute.post('/login', user.userLogin)
userRoute.post('/signup', user.userSignup)


module.exports = userRoute;