const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    username: { type: String, required: true },
    content: { type: String, required: true },
    dop: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchema);