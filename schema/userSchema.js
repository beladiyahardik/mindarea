const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true },
  },
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  doj: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
