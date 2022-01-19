"use strict";

var mongoose = require("mongoose");

require("dotenv").config(); //Set up default mongoose connection


var mongoDB = "mongodb+srv://".concat(process.env.DBUSERNAME, ":").concat(process.env.DBPASSWORD, "@cluster0.jgv5v.mongodb.net/").concat(process.env.DBNAME);
mongoose.connect(mongoDB).then(function () {
  console.log("Connections started");
})["catch"](function () {
  console.log("Connection failed successfully");
});