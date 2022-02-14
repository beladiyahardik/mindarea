const User = require("../schema/userSchema");

const userLogin = async (req, res) => {
  try {
    const result = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (result) {
      res.send({
        userFound: true,
        username: result.username,
        userId: result._id,
        fullname: result.fullname,
        birthday: result.birthday,
        followers: result.followers,
        following: result.following,
        doj: result.doj,
      });
    } else {
      res.send({ userFound: false, message: "User not found" });
    }
  } catch (err) {
    res.send("Failed");
  }
};

const userSignup = async (req, res) => {
  try {
    const newUser = new User({
      ...req.body,
    });
    const result = await newUser.save();
    if (result) {
      res.send({
        userFound: true,
        username: result.username,
        userId: result._id,
        fullname: result.fullname,
        birthday: result.birthday,
        followers: result.followers,
        following: result.following,
        doj: result.doj,
      });
    } else {
      res.send({ userCreate: false, message: "User not created" });
    }
  } catch (err) {
    res.send("Failed" + err);
  }
};

module.exports = {
  userLogin,
  userSignup,
};
