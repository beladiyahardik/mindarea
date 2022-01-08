const User = require('../schema/userSchema');

const userLogin = async (req, res) => {
    try {
        const result = await User.find({}).where({ ...req.body })
        if (result.length) {
            res.send({userFound: true, result})
        } else {
            res.send({userFound: false, message: "User not found"})
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
            res.send({userCreate: true, result})
        else
            res.send({userCreate: false, message: "User not created"})
    }
    catch (err) {
        res.send("Failed")
    }
}

module.exports = {
    userLogin,
    userSignup
}