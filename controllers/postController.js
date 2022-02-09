const Post = require('../schema/postSchema');

const newPost = async (req, res) => {
    const post = new Post({
        ...req.body
    })
    const result = await post.save()
    res.send(result)
}

const getPosts = async (req, res) => {
    const result = await Post.find({})
    res.send(result)
}

const fetchPost = async (req, res) => {
    const result = await Post.find()
}

const deletePost = async (req, res) => {
    const result = await Post.deleteOne({_id: req.body.id})
    res.send(`delete ${result}`)
}

module.exports = {
    newPost,
    getPosts,
    fetchPost,
    deletePost
}