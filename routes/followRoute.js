const express = require('express');
const follow = require('../controllers/followController');

const followRoutes = express.Router()

followRoutes.put('/', follow.followUser)

module.exports = followRoutes