const express = require('express')
const post = require('../controllers/postController')

const postRoutes = express.Router()

postRoutes.post('/newpost', post.newPost)
postRoutes.get('/getpost', post.getPosts)
postRoutes.post('/deletepost', post.deletePost)

module.exports = postRoutes