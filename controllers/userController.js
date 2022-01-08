const User = require('../schema/userSchema');

const userLogin = async (req, res) => {
    try {
        const result = await User.find({}).where({ ...req.body })
        if (result.length) {
            res.send(result)
        } else {
            res.send("User not found")
        }
    }
    catch (err) {
        res.send("Failed")
    }
}

const userSignup = async (req, res) => {
    try {
        const newUser = new User({
            ...req.body
        })
        const result = await newUser.save()
        if (result)
            res.send(result)
        else
            res.send("Something went wrong")
    }
    catch (err) {
        res.send("Failed")
    }
}

module.exports = {
    userLogin,
    userSignup
}