const User = require('../schema/userSchema');

const userLogin = async (req, res) => {
    const result = await User.find().where({ ...req.body })
    res.send(`Getting ${result}`)
}

const userSignup = async (req, res) => {
    const newUser = new User({
        ...req.body
    })
    const result = await newUser.save()
    res.send(result._id)
}

module.exports = {
    userLogin,
    userSignup
}