const User = require('../schema/userSchema')

const followUser = async (req, res) => {
    await User.updateOne({ username: req.body.followto }, { $push: { followers: [req.body.username] } }).then((result) => {
        User.updateOne({ username: req.body.username }, { $push: { following: [req.body.followto] } }).then(() => {
            res.send(`Now ${req.body.username} following ${req.body.followto}`)
        })
    }).catch((err) => {
        res.send('Failed')
    })

}

module.exports = {
    followUser
}